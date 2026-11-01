import cv from "~/data/cv.json";
import catalog from "~/data/skillCatalog.json";

export type SkillCategory = keyof typeof catalog;
export type DetectedSkills = Record<SkillCategory, string[]>;

// Whole keyword only, so "Java" doesn't match "JavaScript" and "Git" doesn't match "GitHub"
function keywordRegex(skill: string, flags?: string) {
  const escaped = skill.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  return new RegExp(`(?<![\\w.+#-])${escaped}(?![\\w+#-])`, flags);
}

export function detectSkills(): DetectedSkills {
  const prose = [cv.summary, ...cv.experience.flatMap((job) => job.highlights)].join("\n");
  const listed = cv.skills.flatMap((group) => group.items);
  const known = Object.values(catalog).flat();

  const found = (skill: string) =>
    keywordRegex(skill).test(prose) || listed.some((item) => keywordRegex(skill, "i").test(item));
  const inCatalog = (item: string) => known.some((skill) => keywordRegex(skill, "i").test(item));

  return {
    programmingLanguages: catalog.programmingLanguages.filter(found),
    frameworksAndLibraries: catalog.frameworksAndLibraries.filter(found),
    // Anything listed in the CV that the catalog doesn't know yet still shows up
    extra: [...catalog.extra.filter(found), ...listed.filter((item) => !inCatalog(item))],
  };
}
