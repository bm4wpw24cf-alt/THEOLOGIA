export interface VideoCategory {
  label: string;
  sub: string;
  backgroundPosition: string;
  /** "#videos-title" for kategorier uten egen side ennå; en ekte rute får en faktisk destinasjon. */
  href: string;
}

/**
 * Én kilde til sannhet for kategori-flisene i Videoer-seksjonen på
 * Ressursbibliotekets hub-side (`/temaer/ressurser`).
 */
export const videoCategories: VideoCategory[] = [
  { label: "Bibelundervisning", sub: "(undervisningsserier)", backgroundPosition: "center", href: "#videos-title" },
  { label: "Konferanser", sub: "og taler", backgroundPosition: "75% center", href: "#videos-title" },
  { label: "Apologetikk", sub: "og debatter", backgroundPosition: "40% 40%", href: "#videos-title" },
  { label: "Dokumentarer", sub: "og intervjuer", backgroundPosition: "90% bottom", href: "#videos-title" },
  {
    label: "Islamsk-kritisk",
    sub: "Kristen apologetikk, debatt og undervisning om islam",
    backgroundPosition: "15% 25%",
    href: "/temaer/ressurser/videoer/islamsk-kritisk",
  },
];
