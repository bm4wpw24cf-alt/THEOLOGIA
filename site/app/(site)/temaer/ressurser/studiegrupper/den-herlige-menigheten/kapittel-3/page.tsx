import type { Metadata } from "next";
import { ComingSoonChapter } from "@/components/resources/ComingSoonChapter";

export const metadata: Metadata = {
  title: "Kapittel 3 – kommer senere | THEOLOGIA",
  description: "Studiesiden for kapittel 3 i «Den herlige menigheten» er ikke publisert ennå.",
  robots: { index: false, follow: false },
};

export default function Kapittel3Page() {
  return <ComingSoonChapter number={3} />;
}
