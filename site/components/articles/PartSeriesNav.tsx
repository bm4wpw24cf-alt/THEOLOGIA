import Link from "next/link";
import styles from "./article.module.css";

export interface PartNavLink {
  label: string;
  href: string;
}

/**
 * Bunn-navigasjon for en flerdelt artikkelserie (f.eks. "Omvendelse fra
 * døde gjerninger"). Tre faste posisjoner – forrige / oversikt / neste –
 * slik at layoutet forblir stabilt selv når en del mangler en av dem
 * (f.eks. "neste del" på siste del).
 */
export function PartSeriesNav({ prev, overview, next }: { prev?: PartNavLink; overview?: PartNavLink; next?: PartNavLink }) {
  return (
    <nav
      aria-label="Serienavigasjon"
      className="mt-14 flex items-center justify-between gap-4 border-t border-border pt-8 max-[600px]:flex-col max-[600px]:items-stretch max-[600px]:gap-3 max-[600px]:text-center"
    >
      <div>
        {prev && (
          <Link href={prev.href} className={styles.partNavLink}>
            {prev.label}
          </Link>
        )}
      </div>
      <div>
        {overview && (
          <Link href={overview.href} className={styles.partNavLinkMuted}>
            {overview.label}
          </Link>
        )}
      </div>
      <div>
        {next && (
          <Link href={next.href} className={styles.partNavLink}>
            {next.label}
          </Link>
        )}
      </div>
    </nav>
  );
}
