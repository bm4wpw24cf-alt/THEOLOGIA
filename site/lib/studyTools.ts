import type { IconName } from "@/components/icons/Icon";

export interface StudyTool {
  name: string;
  description: string;
  url: string;
  category: string;
  icon: IconName;
}

/**
 * Én kilde til sannhet for Studieverktøy, delt av Ressursbibliotekets
 * hub-side (`/temaer/ressurser`) og den dedikerte undersiden
 * (`/temaer/ressurser/studieverktoy`). Nye verktøy legges til her.
 */
export const studyTools: StudyTool[] = [
  {
    name: "Bible Hub",
    description: "Parallellbibler, Strong's, gresk og hebraisk, interlinear, kommentarer og kryssreferanser.",
    url: "https://biblehub.com/",
    category: "Bibelstudium",
    icon: "search",
  },
  {
    name: "Blue Letter Bible",
    description: "Bibeltekster, Strong's, gresk og hebraisk, leksikon, kommentarer og kryssreferanser.",
    url: "https://www.blueletterbible.org/",
    category: "Bibelstudium",
    icon: "book-open",
  },
  {
    name: "Bible Study Tools",
    description: "Bibeltekster, interlinear, leksikon, kommentarer, konkordanser og andre studieverktøy.",
    url: "https://www.biblestudytools.com/",
    category: "Bibelstudium",
    icon: "document",
  },
  {
    name: "BibleTools.io",
    description: "Moderne studieplattform med bibeltekster, originalspråk, Strong's, kommentarer og studieverktøy.",
    url: "https://bibletools.io/",
    category: "Bibelstudium",
    icon: "book",
  },
  {
    name: "Skopeo Bible",
    description: "Bibelstudium vers for vers med originalspråk, kommentarer, kryssreferanser, ordbok og notater.",
    url: "https://www.skopeobible.com/",
    category: "Bibelstudium",
    icon: "books",
  },
];
