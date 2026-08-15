import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { TopicGrid } from "@/components/home/TopicGrid";

export const metadata: Metadata = {
  title: "Utforsk temaer | THEOLOGIA",
  description: "Utforsk bibelske emner, apologetikk, kristenliv og ressurser i THEOLOGIAs bibliotek.",
};

export default function TemaerPage() {
  return (
    <main>
      <Breadcrumbs items={[{ label: "Hjem", href: "/" }, { label: "Temaer" }]} />
      <TopicGrid />
    </main>
  );
}
