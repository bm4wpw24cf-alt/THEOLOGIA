import Link from "next/link";
import { Icon, type IconName } from "@/components/icons/Icon";

export interface ResourceLink {
  icon: IconName;
  label: string;
  href: string;
}

const RESOURCES: ResourceLink[] = [
  { icon: "users", label: "Studiegrupper", href: "/temaer/ressurser/studiegrupper" },
  { icon: "book", label: "Gratis kristne bøker", href: "/temaer/ressurser/boker" },
  { icon: "video", label: "Videoer", href: "/temaer/ressurser/videoer" },
  { icon: "podcast", label: "Podkaster", href: "/ressurser/podkaster/" },
  { icon: "globe", label: "Teologiske nettsteder", href: "/temaer/ressurser#theological-sites-title" },
  { icon: "tools", label: "Studieverktøy", href: "/temaer/ressurser/studieverktoy" },
];

/**
 * Portert fra index.html sin .featured/.featured-panel/.resource-list
 * (css/cards.css "13. FEATURED / MÅNEDENS TEMA"). "Podkaster" peker
 * fortsatt til en absolutt "/ressurser/..."-sti som ikke finnes noe
 * sted i det eksisterende prosjektet – dette er allerede slik i
 * originalen, ikke noe denne migreringen skal finne opp en destinasjon
 * for. De øvrige har alle en faktisk destinasjon: "Teologiske
 * nettsteder" (tidligere "Nettressurser") peker til
 * #theological-sites-title-seksjonen på /temaer/ressurser,
 * "Studieverktøy" til /temaer/ressurser/studieverktoy, og "Videoer" til
 * /temaer/ressurser/videoer.
 */
export function ResourceLibraryPanel() {
  return (
    <section className="pb-[120px]">
      <div className="mx-auto flex w-[min(1280px,92%)] justify-center">
        <div className="flex w-full max-w-[480px] flex-col rounded-radius border border-border bg-white p-[34px_30px] shadow-sm transition-shadow duration-[350ms] ease-[var(--ease)] hover:shadow-lg">
          <Link
            href="/temaer/ressurser"
            className="group mb-6 flex items-center gap-3 border-b border-border pb-5 font-sans text-[0.8rem] font-bold tracking-[2.2px] text-gold uppercase transition-colors duration-200 hover:text-gold-dark"
          >
            <Icon name="book-open" className="h-5 w-5 shrink-0" />
            Ressursbiblioteket
            <span
              aria-hidden="true"
              className="ml-auto text-[1.15rem] leading-none transition-transform duration-200 group-hover:translate-x-[3px]"
            >
              ›
            </span>
          </Link>

          <h4 className="mb-6 text-[1.2rem]">Utforsk ressurser</h4>

          <ul className="flex flex-col">
            {RESOURCES.map((resource) => (
              <li key={resource.href} className="border-b border-border last:border-b-0">
                <Link
                  href={resource.href}
                  className="group flex items-center gap-3.5 px-1 py-[15px] font-sans text-[0.95rem] text-text transition-colors duration-200 hover:bg-parchment hover:text-gold"
                >
                  <Icon name={resource.icon} className="h-[18px] w-[18px] shrink-0 text-gold" />
                  {resource.label}
                  <span
                    aria-hidden="true"
                    className="ml-auto text-[1.1rem] leading-none text-gold transition-transform duration-200 group-hover:translate-x-[3px]"
                  >
                    ›
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
