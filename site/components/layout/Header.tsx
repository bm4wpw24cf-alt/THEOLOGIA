"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Icon } from "@/components/icons/Icon";

const NAV_ITEMS = [
  { href: "/", label: "Hjem" },
  { href: "/temaer", label: "Utforsk temaer" },
  { href: "/temaer/ressurser", label: "Ressurser" },
  { href: "/artikler", label: "Artikler" },
  { href: "/veien-til-jesus/kom-til-kristus", label: "Veien til Jesus" },
  { href: "/om-meg", label: "Om meg" },
];

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-[1000] bg-white/[.94] backdrop-blur-[10px] shadow-[0_1px_0_rgba(17,17,17,0.06)]">
      <div className="mx-auto flex h-24 w-[min(1280px,92%)] flex-wrap items-center justify-between gap-4 max-[992px]:h-auto max-[992px]:min-h-24 max-[992px]:py-3.5">
        <Link href="/" className="flex items-center gap-3.5">
          <Image src="/images/logo.svg" alt="THEOLOGIA Logo" width={70} height={70} className="h-auto w-[70px] translate-y-[5px]" />
          <div>
            <h1 className="mb-[3px] text-[1.9rem] font-bold tracking-[0.4px]">THEOLOGIA</h1>
            <p className="font-sans text-[0.68rem] font-semibold tracking-[2.6px] text-gold uppercase">
              BIBELSK · TEOLOGISK · FORANKRET
            </p>
          </div>
        </Link>

        <nav>
          <ul className="flex items-center gap-10 max-[992px]:flex-wrap max-[992px]:justify-center max-[992px]:gap-3">
            {NAV_ITEMS.map((item) => {
              const active = isActive(pathname, item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`relative py-2 text-[0.96rem] font-medium transition-colors duration-200 ${
                      active
                        ? "text-gold-dark after:absolute after:-bottom-1.5 after:left-0 after:h-0.5 after:w-full after:rounded-full after:bg-gold after:content-['']"
                        : "text-ink hover:text-gold"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <button
          type="button"
          aria-label="Søk"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-border text-ink transition-all duration-200 hover:border-gold hover:bg-parchment hover:text-gold"
        >
          <Icon name="search" className="h-[1.1rem] w-[1.1rem]" />
        </button>
      </div>
    </header>
  );
}
