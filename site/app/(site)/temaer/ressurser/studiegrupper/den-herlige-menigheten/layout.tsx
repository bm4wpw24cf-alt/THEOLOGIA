import { StudyChapterFooter } from "@/components/resources/StudyChapterFooter";

/**
 * Layout for studieserien «Den herlige menigheten».
 *
 * Legger den delte kapittel-footeren (kommentarfelt + kapittelnavigasjon)
 * etter innholdet på hver publisert kapittelside. Footeren er
 * selv-avgrensende, så studieoversikten og «kommer senere»-sidene påvirkes
 * ikke.
 */
export default function DenHerligeMenighetenLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <StudyChapterFooter />
    </>
  );
}
