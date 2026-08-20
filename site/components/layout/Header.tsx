"use client";

import { useState } from "react";
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
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-[1000] bg-white/[.94] backdrop-blur-[10px] shadow-[0_1px_0_rgba(17,17,17,0.06)]">
      <div className="mx-auto flex h-24 w-[min(1280px,92%)] flex-wrap items-center justify-between gap-4 max-[992px]:h-auto max-[992px]:min-h-[72px] max-[992px]:flex-nowrap max-[992px]:py-2.5">
        <Link href="/" className="flex items-center gap-3.5">
          <Image
            src="/images/logo.svg"
            alt="THEOLOGIA Logo"
            width={70}
            height={70}
            className="h-auto w-[70px] translate-y-[5px] max-[992px]:w-11 max-[992px]:translate-y-0"
          />
          <div>
            <h1 className="mb-[3px] text-[1.9rem] font-bold tracking-[0.4px] max-[992px]:mb-0 max-[992px]:text-[1.3rem]">
              THEOLOGIA
            </h1>
            <p className="font-sans text-[0.68rem] font-semibold tracking-[2.6px] text-gold uppercase max-[992px]:text-[0.58rem] max-[992px]:tracking-[1.4px]">
              BIBELSK · TEOLOGISK · FORANKRET
            </p>
          </div>
        </Link>

        <nav
          id="main-nav-panel"
          className={`max-[992px]:absolute max-[992px]:inset-x-0 max-[992px]:top-full max-[992px]:border-t max-[992px]:border-border max-[992px]:bg-white max-[992px]:px-5 max-[992px]:py-2 max-[992px]:shadow-[0_10px_30px_rgba(17,17,17,0.08)] ${
            menuOpen ? "" : "max-[992px]:hidden"
          }`}
        >
          <ul className="flex items-center gap-10 max-[992px]:flex-col max-[992px]:items-stretch max-[992px]:gap-0">
            {NAV_ITEMS.map((item) => {
              const active = isActive(pathname, item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className={`relative py-2 text-[0.96rem] font-medium transition-colors duration-200 max-[992px]:block max-[992px]:border-b max-[992px]:border-border max-[992px]:px-1 max-[992px]:py-3.5 ${
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

        <div className="flex items-center gap-2">
          <button
            type="button"
            aria-label={menuOpen ? "Lukk meny" : "Åpne meny"}
            aria-expanded={menuOpen}
            aria-controls="main-nav-panel"
            onClick={() => setMenuOpen((open) => !open)}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-border text-ink transition-all duration-200 hover:border-gold hover:bg-parchment hover:text-gold min-[993px]:hidden"
          >
            <Icon name={menuOpen ? "x" : "menu"} className="h-[1.1rem] w-[1.1rem]" />
          </button>

          <button
            type="button"
            aria-label="Søk"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-border text-ink transition-all duration-200 hover:border-gold hover:bg-parchment hover:text-gold"
          >
            <Icon name="search" className="h-[1.1rem] w-[1.1rem]" />
          </button>
        </div>
      </div>
    </header>
  );
}
