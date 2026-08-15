import { Hero } from "@/components/home/Hero";
import { TopicGrid } from "@/components/home/TopicGrid";
import { ResourceLibraryPanel } from "@/components/home/ResourceLibraryPanel";
import { LatestArticlesTimeline } from "@/components/articles/LatestArticlesTimeline";

export default function Home() {
  return (
    <main>
      <Hero />
      <TopicGrid />
      <ResourceLibraryPanel />

      <section className="bg-parchment-dark py-[120px]">
        <div className="mx-auto w-[min(1280px,92%)]">
          <div className="mb-16 text-left">
            <h2 className="text-[2.6rem]">Nyeste artikler</h2>
          </div>

          <LatestArticlesTimeline limit={6} />
        </div>
      </section>
    </main>
  );
}
