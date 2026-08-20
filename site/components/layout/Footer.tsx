import Link from "next/link";
import Image from "next/image";
import { Icon, type IconName } from "@/components/icons/Icon";

const EXPLORE_LINKS = [
  { href: "/temaer/bibelen", label: "Bibelen" },
  { href: "/temaer/evangeliet", label: "Evangeliet" },
  { href: "/temaer/kristenliv", label: "Kristenliv" },
  { href: "/temaer/teologi", label: "Teologi" },
];

const MORE_LINKS = [
  { href: "/temaer/apologetikk", label: "Apologetikk" },
  { href: "/temaer/endetid", label: "Endetid" },
  { href: "/temaer/bibelske-temaer", label: "Bibelske temaer" },
  { href: "/temaer/ressurser", label: "Ressurser" },
];

const ABOUT_LINKS = [
  { href: "/veien-til-jesus", label: "Veien til Jesus" },
  { href: "/om-meg", label: "Om meg" },
  { href: "/vaar-visjon", label: "Vår visjon" },
];

const SOCIAL_LINKS: { icon: IconName; label: string }[] = [
  { icon: "youtube", label: "YouTube" },
  { icon: "facebook", label: "Facebook" },
  { icon: "instagram", label: "Instagram" },
  { icon: "x", label: "X" },
];

export function Footer() {
  return (
    <footer className="bg-navy-deep text-white/65">
      {/* Desktop/tablet footer (≥993px) – uendret fra før mobiloptimaliseringen. */}
      <div className="hidden min-[993px]:block">
        <div className="mx-auto grid w-[min(1280px,92%)] grid-cols-[1.6fr_1fr_1fr_1fr_1fr] gap-8 pt-20 pb-14 max-[1100px]:grid-cols-2">
          <div>
            <Link href="/" className="flex items-center gap-3.5">
              <Image src="/images/logo.svg" alt="THEOLOGIA Logo" width={70} height={70} className="h-auto w-[70px] translate-y-[5px]" />
            </Link>
            <p className="mt-5 max-w-[240px] font-sans text-[0.88rem] text-white/45">
              Forankret i Skriften. Bygget på sannhet.
            </p>
          </div>

          <div>
            <h4 className="mb-[22px] font-sans text-[0.78rem] font-bold tracking-[1.6px] text-white uppercase">Utforsk</h4>
            <ul className="flex flex-col gap-[13px]">
              {EXPLORE_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="font-sans text-[0.9rem] text-white/60 transition-colors duration-200 hover:text-gold-light">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-[22px] font-sans text-[0.78rem] font-bold tracking-[1.6px] text-white uppercase">Mer</h4>
            <ul className="flex flex-col gap-[13px]">
              {MORE_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="font-sans text-[0.9rem] text-white/60 transition-colors duration-200 hover:text-gold-light">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-[22px] font-sans text-[0.78rem] font-bold tracking-[1.6px] text-white uppercase">Om Theologia</h4>
            <ul className="flex flex-col gap-[13px]">
              {ABOUT_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="font-sans text-[0.9rem] text-white/60 transition-colors duration-200 hover:text-gold-light">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-[22px] font-sans text-[0.78rem] font-bold tracking-[1.6px] text-white uppercase">Følg oss</h4>
            <div className="flex gap-3">
              {SOCIAL_LINKS.map((social) => (
                <Link
                  key={social.icon}
                  href="/folg-oss"
                  aria-label={social.label}
                  className="group flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[.06] transition-all duration-200 hover:border-gold hover:bg-gold"
                >
                  <Icon name={social.icon} className="h-4 w-4 text-white/85 group-hover:text-white" />
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/[.08] py-[26px]">
          <p className="text-center font-sans text-[0.82rem] text-white/40">© 2026 THEOLOGIA · Alle rettigheter forbeholdt.</p>
        </div>
      </div>

      {/* Mobilfooter (≤992px) – minimalistisk variant, navigasjon dekkes av den globale hamburgermenyen. */}
      <div className="px-6 py-11 text-center min-[993px]:hidden">
        <p className="font-sans text-[1rem] font-semibold text-white">Eirik Storesletten</p>
        <a
          href="mailto:eistore@icloud.com"
          className="mt-1.5 inline-block font-sans text-[0.86rem] text-gold-light transition-colors duration-200 hover:text-gold"
        >
          eistore@icloud.com
        </a>
        <div className="mx-auto my-6 h-px w-14 bg-white/[.14]" />
        <p className="font-sans text-[0.72rem] tracking-[0.05em] text-white/35">THEOLOGIA © 2026</p>
      </div>
    </footer>
  );
}
