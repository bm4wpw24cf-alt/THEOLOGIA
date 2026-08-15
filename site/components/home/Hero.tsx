import Link from "next/link";
import { Icon } from "@/components/icons/Icon";

export function Hero() {
  return (
    <section className="relative isolate flex min-h-[620px] items-center overflow-hidden bg-[url('/images/hero/hero-bible.jpg')] bg-cover bg-center bg-no-repeat">
      <div className="absolute inset-0 z-[1] bg-[linear-gradient(100deg,rgba(6,13,23,.92)_0%,rgba(6,13,23,.66)_32%,rgba(6,13,23,.15)_62%,rgba(6,13,23,0)_78%)]" />

      <div className="relative z-[2] mx-auto w-[min(1280px,92%)] py-16">
        <div className="grid grid-cols-[1fr_340px] items-center gap-12 max-[1100px]:grid-cols-1 max-[1100px]:gap-8 max-[992px]:text-center">
          <div className="max-w-[640px] max-[1100px]:max-w-full">
            <p className="text-[0.8rem] font-bold tracking-[0.12em] text-gold uppercase">ET BIBELSK-TEOLOGISK BIBLIOTEK</p>

            <h1 className="mt-4 mb-[26px] text-[3.6rem] leading-[1.12] font-semibold text-white [text-shadow:0_4px_24px_rgba(0,0,0,.35)] max-[640px]:text-[2rem]">
              Forankret i Skriften.
              <br />
              Bygget på sannhet.
            </h1>

            <div className="mb-7 h-[3px] w-[68px] rounded-full bg-gold max-[992px]:mx-auto" />

            <p className="mb-11 max-w-[540px] font-sans text-[1.1rem] text-white/[.86] max-[992px]:mx-auto">
              Et bibelsk-teologisk bibliotek som hjelper deg å forstå, leve og forsvare den kristne tro gjennom
              bibelstudier, apologetikk og teologiske ressurser.
            </p>

            <div className="mt-2 flex flex-wrap items-center gap-3.5 max-[992px]:justify-center max-[640px]:flex-col max-[640px]:items-stretch">
              <Link
                href="/temaer"
                className="inline-flex items-center justify-center gap-2.5 rounded-full bg-gold px-[1.4rem] py-[0.9rem] font-semibold text-white transition-colors duration-200 hover:bg-gold-dark"
              >
                <Icon name="book" className="h-4 w-4" />
                Utforsk temaer
              </Link>

              <Link
                href="/temaer/ressurser"
                className="inline-flex items-center justify-center gap-2.5 rounded-full border-[1.5px] border-white/40 bg-white/[.04] px-[1.4rem] py-[0.9rem] font-semibold text-white transition-colors duration-200 hover:border-gold-light hover:bg-white/[.08] hover:text-gold-light"
              >
                <Icon name="books" className="h-4 w-4" />
                Utforsk ressurser
              </Link>
            </div>
          </div>

          <Link
            href="/veien-til-jesus/kom-til-kristus"
            className="flex w-full max-w-[340px] items-center gap-6 self-center justify-self-start rounded-[20px] bg-white p-8 text-ink shadow-[0_20px_50px_rgba(0,0,0,.25)] max-[1100px]:mx-auto max-[1100px]:w-full max-[1100px]:justify-self-center"
          >
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-gold/[.12] text-gold">
              <Icon name="heart" className="h-6 w-6" />
            </div>

            <div className="flex-1">
              <h2 className="mb-2.5 text-[2rem]">Veien til Jesus</h2>
              <p className="leading-[1.6] text-text-light">
                Evangeliet forklart på en enkel og bibelsk måte for deg som søker Kristus.
              </p>
            </div>

            <span aria-hidden="true" className="text-2xl text-gold">
              →
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
