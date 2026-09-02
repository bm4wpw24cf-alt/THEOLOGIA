import type { Metadata } from "next";
import { ComingSoonChapter } from "@/components/resources/ComingSoonChapter";

export const metadata: Metadata = {
  title: "Kapittel 2 – kommer senere | THEOLOGIA",
  description: "Studiesiden for kapittel 2 i «Den herlige menigheten» er ikke publisert ennå.",
  robots: { index: false, follow: false },
};

export default function Kapittel2Page() {
  return <ComingSoonChapter number={2} />;
}
