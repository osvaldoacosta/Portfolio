// Builds public/cv.pdf and public/cv-pt.pdf from src/data. Runs before `dev` and `build`, or with `npm run cv`.
import { createWriteStream, readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import PDFDocument from "pdfkit";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const readJson = (path) => JSON.parse(readFileSync(join(root, path), "utf8"));
const fontDir = join(root, "node_modules/geist/dist/fonts/geist-sans");

const MARGIN = 44;
const PHOTO = 70;
const TEXT = "#101c15";
const MUTED = "#55635a";
const ACCENT = "#137a39";

const headings = {
  en: { summary: "Summary", skills: "Skills", languages: "Languages", experience: "Work Experience", education: "Education" },
  pt: { summary: "Resumo", skills: "Competências", languages: "Idiomas", experience: "Experiência Profissional", education: "Formação" },
};

// Skills, contacts and companies only live in cv.json, the translation just overrides the text around them
function translate(cv, pt) {
  cv.experience.forEach((job, index) => {
    if (pt.experience[index]?.highlights.length !== job.highlights.length) {
      console.warn(`cv.pt.json: "${job.role}" at ${job.company} doesn't match cv.json, its Portuguese CV entry is out of date`);
    }
  });
  if (pt.education.length !== cv.education.length) console.warn("cv.pt.json: education doesn't match cv.json");

  return {
    ...cv,
    ...pt,
    skills: cv.skills.map((group) => ({ ...group, ...pt.skills[group.label] })),
    experience: cv.experience.map((job, index) => ({ ...job, ...pt.experience[index] })),
  };
}

function render(cv, heading, file) {
  const doc = new PDFDocument({
    size: "A4",
    margin: MARGIN,
    bufferPages: true,
    info: { Title: `${cv.name} - CV`, Author: cv.name },
  });
  doc.registerFont("regular", join(fontDir, "Geist-Regular.ttf"));
  doc.registerFont("bold", join(fontDir, "Geist-SemiBold.ttf"));
  doc.pipe(createWriteStream(join(root, "public", file)));

  const width = doc.page.width - 2 * MARGIN;

  function section(title) {
    doc.moveDown(0.8);
    doc.font("bold").fontSize(9.5).fillColor(ACCENT).text(title.toUpperCase(), MARGIN, doc.y, { characterSpacing: 0.8 });
    const y = doc.y + 2;
    doc.moveTo(MARGIN, y).lineTo(MARGIN + width, y).lineWidth(0.5).strokeColor("#d5dad3").stroke();
    doc.y = y + 5;
  }

  function body(text, options = {}) {
    doc.font("regular").fontSize(9.5).fillColor(TEXT).text(text, MARGIN, doc.y, { width, lineGap: 1.5, ...options });
  }

  function labelled(label, text) {
    doc.font("bold").fontSize(9.5).fillColor(TEXT).text(`${label}: `, MARGIN, doc.y, { width, lineGap: 1.5, continued: true });
    doc.font("regular").text(text);
  }

  function dated(title, period) {
    const y = doc.y;
    const periodWidth = doc.font("regular").fontSize(9).widthOfString(period) + 1;
    doc.font("bold").fontSize(10).fillColor(TEXT).text(title, MARGIN, y, { width: width - periodWidth - 12 });
    const end = doc.y;
    doc.font("regular").fontSize(9).fillColor(MUTED).text(period, MARGIN + width - periodWidth, y + 0.5, { width: periodWidth, lineBreak: false });
    doc.y = end + 2;
  }

  function bullet(text) {
    const y = doc.y;
    doc.font("regular").fontSize(9.5).fillColor(TEXT).text("•", MARGIN + 2, y);
    doc.text(text, MARGIN + 12, y, { width: width - 12, lineGap: 1.5 });
    doc.y += 1.5;
  }

  doc.save();
  doc.circle(MARGIN + PHOTO / 2, MARGIN + PHOTO / 2, PHOTO / 2).clip();
  doc.image(join(root, "public/profile.jpg"), MARGIN, MARGIN, { width: PHOTO, height: PHOTO });
  doc.restore();

  const headerX = MARGIN + PHOTO + 14;
  const headerWidth = width - PHOTO - 14;
  doc.font("bold").fontSize(22).fillColor(TEXT).text(cv.name, headerX, MARGIN + 1, { width: headerWidth });
  doc.font("regular").fontSize(11).fillColor(ACCENT).text(cv.title, { width: headerWidth });
  doc.moveDown(0.3);
  doc.fontSize(8.5).fillColor(MUTED);
  cv.contacts.forEach((contact, index) => {
    const last = index === cv.contacts.length - 1;
    doc.text(contact.label, { width: headerWidth, link: contact.url, continued: !last });
    if (!last) doc.text("  ·  ", { link: null, continued: true });
  });
  doc.y = Math.max(doc.y, MARGIN + PHOTO);

  section(heading.summary);
  body(cv.summary);

  section(heading.skills);
  for (const group of cv.skills) {
    labelled(group.label, [...group.items, group.notes].filter(Boolean).join(", "));
  }
  labelled(heading.languages, cv.languages.join(", "));

  section(heading.experience);
  cv.experience.forEach((job, index) => {
    if (index > 0) doc.moveDown(0.5);
    dated(`${job.role} · ${job.company}`, job.period);
    job.highlights.forEach(bullet);
  });

  section(heading.education);
  for (const degree of cv.education) dated(degree.description, degree.period);

  const pages = doc.bufferedPageRange().count;
  doc.end();
  console.log(`Generated public/${file} (${pages} page${pages === 1 ? "" : "s"})`);
}

const cv = readJson("src/data/cv.json");
render(cv, headings.en, "cv.pdf");
render(translate(cv, readJson("src/data/cv.pt.json")), headings.pt, "cv-pt.pdf");
