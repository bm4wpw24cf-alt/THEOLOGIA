/**
 * Datamodell for studieserien «Det kristne livets grunnleggende prinsipper – Volum 1».
 *
 * Dette følger samme mønster som «Den herlige menigheten», men kun med de fem
 * hovedkapitlene i denne boken. Forord og tillegg er egne sider utenfor
 * kapittelprogressjonen.
 */

export const STUDY_BASE = "/temaer/ressurser/studiegrupper/det-kristne-livets-grunnleggende-prinsipper-volum-1";

export type ChapterStatus = "done" | "active" | "coming-soon" | "upcoming";

export interface StudyChapter {
  slug: string;
  title: string;
  description: string;
  status: ChapterStatus;
}

export const studyChapters: StudyChapter[] = [
  { slug: "kapittel-1", title: "Kapittel 1", description: "Menneskelivets mysterium", status: "active" },
  { slug: "kapittel-2", title: "Kapittel 2", description: "Forvissningen, sikkerheten og gleden i frelsen", status: "done" },
  { slug: "kapittel-3", title: "Kapittel 3", description: "Kristi dyrebare blod", status: "done" },
  { slug: "kapittel-4", title: "Kapittel 4", description: "Å påkalle Herrens navn", status: "done" },
  { slug: "kapittel-5", title: "Kapittel 5", description: "Nøkkelen til å oppleve Kristus – den menneskelige ånd", status: "done" },
];

export function isPublishedChapter(chapter: StudyChapter): boolean {
  return chapter.status === "done" || chapter.status === "active";
}

export function chapterHref(slug: string): string {
  return `${STUDY_BASE}/${slug}`;
}

export function chapterCommentKey(slug: string): string {
  return chapterHref(slug);
}

export function findChapterByPath(pathname: string): StudyChapter | undefined {
  return studyChapters.find((chapter) => pathname === chapterHref(chapter.slug));
}
