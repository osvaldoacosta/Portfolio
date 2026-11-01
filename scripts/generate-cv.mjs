// Builds public/cv.pdf from src/data/cv.json. Runs before `dev` and `build`, or with `npm run cv`.
import { createWriteStream, readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import PDFDocument from "pdfkit";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const cv = JSON.parse(readFileSync(join(root, "src/data/cv.json"), "utf8"));
const fontDir = join(root, "node_modules/geist/dist/fonts/geist-sans");

const MARGIN = 44;
const PHOTO = 70;
const PERIOD = 88;
const TEXT = "#101c15";
const MUTED = "#55635a";
const ACCENT = "#137a39";

const doc = new PDFDocument({
  size: "A4",
  margin: MARGIN,
  bufferPages: true,
  info: { Title: `${cv.name} - CV`, Author: cv.name },
});
doc.registerFont("regular", join(fontDir, "Geist-Regular.ttf"));
doc.registerFont("bold", join(fontDir, "Geist-SemiBold.ttf"));
doc.pipe(createWriteStream(join(root, "public/cv.pdf")));

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
  doc.font("bold").fontSize(10).fillColor(TEXT).text(title, MARGIN, y, { width: width - PERIOD });
  const end = doc.y;
  doc.font("regular").fontSize(9).fillColor(MUTED).text(period, MARGIN + width - PERIOD, y + 0.5, { width: PERIOD, align: "right" });
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

section("Summary");
body(cv.summary);

section("Skills");
for (const group of cv.skills) {
  labelled(group.label, [...group.items, group.notes].filter(Boolean).join(", "));
}
labelled("Languages", cv.languages.join(", "));

section("Work Experience");
cv.experience.forEach((job, index) => {
  if (index > 0) doc.moveDown(0.5);
  dated(`${job.role} · ${job.company}`, job.period);
  job.highlights.forEach(bullet);
});

section("Education");
for (const degree of cv.education) dated(degree.description, degree.period);

const pages = doc.bufferedPageRange().count;
doc.end();
console.log(`Generated public/cv.pdf (${pages} page${pages === 1 ? "" : "s"})`);
