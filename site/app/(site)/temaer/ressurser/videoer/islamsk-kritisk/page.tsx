import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { ArticleLayout } from "@/components/articles/ArticleLayout";
import { ImportantBox } from "@/components/articles/ImportantBox";
import { YoutubeChannelGrid } from "@/components/resources/YoutubeChannelGrid";
import { youtubeChannels } from "@/lib/youtubeChannels";

export const metadata: Metadata = {
  title: "Islamsk-kritiske YouTube-kanaler | THEOLOGIA",
  description: "Kristen apologetikk, debatt og undervisning om islam, Koranen, Muhammad, Jesus og kristen-muslimsk dialog.",
};

const channels = youtubeChannels.filter((channel) => channel.category === "islamsk-kritisk");

export default function IslamskKritiskPage() {
  return (
    <main>
      <Breadcrumbs
        items={[
          { label: "Hjem", href: "/" },
          { label: "Temaer", href: "/temaer" },
          { label: "Ressurser", href: "/temaer/ressurser" },
          { label: "Videoer" },
          { label: "Islamsk-kritisk" },
        ]}
      />

      <ArticleLayout
        category="RESSURSER · VIDEOER"
        title="Islamsk-kritisk"
        subtitle="Kristen apologetikk, debatt og undervisning om islam."
      >
        <ImportantBox title="Om disse ressursene">
          Denne samlingen inneholder kristen apologetikk, kristen-muslimsk polemikk og kritiske perspektiver på
          islam. Ressursene representerer ulike apologetiske og teologiske ståsteder og skal derfor vurderes
          kildekritisk. Der konkrete historiske eller tekstkritiske påstander brukes i THEOLOGIA-artikler, bør de
          så langt som mulig kontrolleres mot primærkilder og akademisk forskning.
        </ImportantBox>

        <h2>Anbefalte kanaler</h2>
        <p className="max-w-[70ch]">
          Kanaler med kristen apologetikk og undervisning om islam, Koranen, hadith, Muhammad, islamsk historie,
          Jesus i islam og kristen-muslimsk dialog.
        </p>

        <div className="mt-8">
          <YoutubeChannelGrid channels={channels} />
        </div>
      </ArticleLayout>
    </main>
  );
}
