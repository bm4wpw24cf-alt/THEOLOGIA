const MONTHS = [
  "januar",
  "februar",
  "mars",
  "april",
  "mai",
  "juni",
  "juli",
  "august",
  "september",
  "oktober",
  "november",
  "desember",
];

/**
 * dateString er et rent datostempel (YYYY-MM-DD) uten klokkeslett, som
 * Date() tolker som midnatt UTC. getDate()/getMonth() bruker derimot
 * nettleserens lokale tidssone – i tidssoner bak UTC ville det gitt
 * datoen én dag for tidlig. UTC-variantene unngår dette.
 */
export function formatArticleDate(dateString: string): string {
  const d = new Date(dateString);
  return `${d.getUTCDate()}. ${MONTHS[d.getUTCMonth()]} ${d.getUTCFullYear()}`;
}

export function sortArticlesByDate<T extends { date: string }>(items: T[]): T[] {
  return [...items].sort((a, b) => {
    if (!a.date && !b.date) return 0;
    if (!a.date) return 1;
    if (!b.date) return -1;
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });
}
