/**
 * Én kilde til sannhet for studieserien «Den herlige menigheten»: kapittelliste,
 * ruter og den stabile kommentar-nøkkelen per kapittel.
 *
 * Brukes av studieoversikten, den delte kapittel-footeren (kommentarfelt +
 * kapittelnavigasjon) og av framtidige kapittelsider – slik at nye kapitler
 * automatisk får riktig oppførsel uten egen spesialkode.
 */

export const STUDY_BASE = "/temaer/ressurser/studiegrupper/den-herlige-menigheten";

export type ChapterStatus = "done" | "active" | "coming-soon" | "upcoming";

export interface StudyChapter {
  /** URL-slug og stabil identifikator, f.eks. "kapittel-4". */
  slug: string;
  title: string;
  description: string;
  /**
   * done / active = publisert studieside. coming-soon = kapitlet finnes i boken,
   * men studiesiden er ikke publisert ennå (egen «kommer senere»-side).
   * upcoming = ikke klikkbar (reservert for evt. kapitler utover boken).
   */
  status: ChapterStatus;
}

export const studyChapters: StudyChapter[] = [
  { slug: "kapittel-1", title: "Kapittel 1", description: "Guds plan og Guds hvile", status: "coming-soon" },
  { slug: "kapittel-2", title: "Kapittel 2", description: "Eva – et forbilde på menigheten", status: "coming-soon" },
  { slug: "kapittel-3", title: "Kapittel 3", description: "Kristi kropp og Kristi brud", status: "coming-soon" },
  { slug: "kapittel-4", title: "Kapittel 4", description: "«Og hun fødte … et guttebarn»", status: "done" },
  { slug: "kapittel-5", title: "Kapittel 5", description: "Den hellige stad – Det nye Jerusalem", status: "active" },
];

/** Kapitler som har publisert studieside (skal ha kommentarfelt + kapittelnavigasjon). */
export function isPublishedChapter(chapter: StudyChapter): boolean {
  return chapter.status === "done" || chapter.status === "active";
}

/** Kanonisk rute for et kapittel, avledet av slug. */
export function chapterHref(slug: string): string {
  return `${STUDY_BASE}/${slug}`;
}

/**
 * Stabil, unik kommentar-nøkkel for et kapittel, avledet av slug/ruten.
 * Lagres i samme `article`-kolonne som artiklene, så kommentarer fra ett
 * kapittel kan aldri dukke opp på et annet.
 */
export function chapterCommentKey(slug: string): string {
  return chapterHref(slug);
}

/** Finn kapitlet en gitt sti tilhører (undefined for f.eks. studieoversikten). */
export function findChapterByPath(pathname: string): StudyChapter | undefined {
  return studyChapters.find((chapter) => pathname === chapterHref(chapter.slug));
}
