import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Cormorant_Garamond } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { Icon } from "@/components/icons/Icon";
import { StudyToolsGrid } from "@/components/resources/StudyToolsGrid";
import { videoCategories } from "@/lib/videoCategories";

/**
 * Ressurser-huben (temaer/ressurser/index.html) er et bevisst spesialtilfelle,
 * på samme måte som app/temaer/fundament/artikler/dap-i-vann/page.tsx:
 * originalen har en minimal egen footer (kun copyright, ingen kolonner) i
 * stedet for standard site-wide Footer. Siden ligger derfor bevisst utenfor
 * `(site)`-gruppen med egen footer bygget inn i selve siden. Headeren er
 * derimot standardisert til den delte `Header`-komponenten (global
 * mobilheader-standardisering) – den tidligere side-egne headeren var en
 * eldre kopi av samme markup uten mobilmeny/søkeknapp.
 *
 * Originalen laster også sin egen Google Font (Cormorant Garamond) for
 * overskrifter, forskjellig fra sitewide EB Garamond – lastet skopet til
 * kun denne siden via next/font, ikke lagt til i root-layouten.
 */
const cormorant = Cormorant_Garamond({ subsets: ["latin"], weight: ["500", "600", "700"] });

export const metadata: Metadata = {
  title: "Ressurser | THEOLOGIA",
  description: "Studiegrupper, bøker, videoer, podkaster og digitale studieverktøy for bibelstudier og kristen fordypning.",
};

const STUDY_CHAPTERS = [
  { label: "Guds plan og Guds hvile" },
  { label: "Eva – et forbilde på menigheten" },
  { label: "Kristi kropp og Kristi brud" },
  { label: "«Og hun fødte … et guttebarn»", live: true },
  { label: "Den hellige stad – Det nye Jerusalem" },
];

const THEOLOGICAL_SITES = [
  { label: "Ligonier", href: "https://www.ligonier.org/" },
  { label: "Monergism", href: "https://www.monergism.com/" },
  { label: "GotQuestions", href: "https://www.gotquestions.org/" },
  { label: "BibleProject", href: "https://bibleproject.com/" },
  { label: "Bibelselskapet", href: "https://bibel.no/" },
];


function ResourceCoverImage({ src, alt }: { src: string; alt: string }) {
  return (
    <Image
      src={src}
      alt={alt}
      width={150}
      height={287}
      loading="lazy"
      className="row-span-2 block h-[97px] w-[51px] rounded-[3px] object-cover p-0 shadow-[0_10px_20px_rgba(12,23,38,.2)] max-[700px]:h-[87px] max-[700px]:w-[46px]"
    />
  );
}

export default function RessurserPage() {
  return (
    <div>
      <Header />

      <Breadcrumbs items={[{ label: "Hjem", href: "/" }, { label: "Temaer", href: "/temaer" }, { label: "Ressurser" }]} />

      <main>
        {/* HERO */}
        <section className="overflow-hidden bg-[linear-gradient(135deg,#f8f6f2_0%,#f1ede5_100%)] pt-4 pb-10 max-[1000px]:pt-14 max-[1000px]:pb-[42px] max-[700px]:pt-[46px] max-[700px]:pb-10">
          <div className="mx-auto grid w-[min(1280px,92%)] grid-cols-2 items-start gap-[70px] max-[1000px]:grid-cols-1 max-[1000px]:gap-15">
            <div className="max-w-[650px] -translate-y-5 max-[1000px]:max-w-full max-[1000px]:translate-y-0 max-[1000px]:text-center">
              <span className="mb-[18px] inline-block text-[.82rem] font-bold tracking-[.22em] text-gold uppercase">RESSURSBIBLIOTEK</span>
              <h2 className={`${cormorant.className} mb-[26px] text-[4.6rem] leading-[.95] font-bold text-navy max-[700px]:text-[3.2rem]`}>
                Ressurser
              </h2>
              <p className="mb-[42px] text-[1.18rem] leading-[1.9] text-text max-[700px]:text-[1.05rem]">
                Et voksende bibliotek med bibelstudier, studiegrupper, bøker, videoer og undervisningsressurser som
                hjelper deg til å forstå Guds ord dypere.
              </p>
            </div>

            <div className="group relative flex justify-end max-[1000px]:justify-center">
              <div className="absolute top-6 -right-6 -bottom-6 left-6 -z-10 rounded-[24px] border-2 border-[rgba(184,138,43,.22)]" />
              <Image
                src="/images/ressurser/hero-bible.png"
                alt="Åpen bibel med notater"
                width={1824}
                height={862}
                priority
                className="block w-[110%] max-w-none rounded-[22px] shadow-[0_24px_60px_rgba(0,0,0,.18)] transition-[transform,box-shadow] duration-[450ms] ease-out group-hover:-translate-y-1.5 group-hover:shadow-[0_32px_70px_rgba(0,0,0,.22)] max-[1000px]:w-full"
              />
            </div>
          </div>
        </section>

        {/* RESSURSBIBLIOTEK */}
        <section className="bg-parchment pt-10 pb-18" aria-label="Ressursbibliotek">
          <div className="mx-auto w-[min(1280px,92%)]">
            {/* Featured: Den herlige menigheten */}
            <article
              id="featured-study"
              className="grid grid-cols-[220px_minmax(0,1fr)_290px] items-start gap-[38px] rounded-radius border border-border bg-white p-7 shadow-sm max-[1000px]:grid-cols-[180px_minmax(0,1fr)] max-[700px]:grid-cols-1 max-[700px]:gap-6 max-[700px]:p-5"
            >
              <Image
                src="/images/resources/den-herlige-menigheten.png"
                alt="Bokomslag: Den herlige menigheten av Watchman Nee"
                width={150}
                height={287}
                loading="lazy"
                className="block h-[300px] w-full rounded-[3px] object-cover shadow-[0_10px_20px_rgba(12,23,38,.2)] max-[700px]:mx-auto max-[700px]:h-[240px] max-[700px]:w-[170px]"
              />

              <div>
                <p className="mb-2.5 text-[.68rem] font-bold tracking-[1px] text-gold-dark uppercase">★ Aktuelt studie</p>
                <h2 className="mb-3 text-[2.3rem] text-navy max-[700px]:text-[2rem]">Den herlige menigheten</h2>
                <p className="mb-3 text-[.91rem] leading-[1.65] text-text">
                  En kapittel-for-kapittel studie av <strong>Den herlige menigheten</strong> av Watchman Nee.
                </p>
                <p className="mb-3 text-[.91rem] leading-[1.65] text-text">
                  Boken utforsker Guds syn på menigheten gjennom Bibelens bilder og viser menighetens plass i Guds
                  evige hensikt.
                </p>

                <ul aria-label="Dette følger med i studiet" className="my-6 flex flex-wrap gap-[13px] max-[700px]:justify-center">
                  {[
                    { icon: "books" as const, label: "Zoom-gruppe" },
                    { icon: "book" as const, label: "Presentasjoner" },
                    { icon: "comment" as const, label: "Kommentarer" },
                    { icon: "document" as const, label: "Bibelhenvisninger" },
                  ].map((m) => (
                    <li key={m.label} className="flex items-center gap-1.5 text-[.7rem] text-text">
                      <Icon name={m.icon} className="h-[15px] w-[15px] text-gold" />
                      {m.label}
                    </li>
                  ))}
                </ul>

                <Link
                  href="/temaer/ressurser/studiegrupper"
                  className="inline-flex items-center gap-2.5 rounded-full bg-gold px-6 py-3 text-[.78rem] font-semibold tracking-[1px] text-white uppercase transition-all duration-200 hover:-translate-y-0.5 hover:bg-gold-dark"
                >
                  Åpne studiet <span aria-hidden="true">→</span>
                </Link>
              </div>

              <aside aria-labelledby="study-outline-title" className="self-stretch rounded-radius-sm border border-border bg-white p-5 max-[1000px]:col-span-2 max-[700px]:col-span-1">
                <h3 id="study-outline-title" className="mb-3 font-sans text-[.72rem] font-bold tracking-[1px] text-navy uppercase">
                  Dette studiet inneholder
                </h3>
                <ol className="m-0 list-none p-0">
                  {STUDY_CHAPTERS.map((chapter, i) => {
                    const num = String(i + 1).padStart(2, "0");
                    if (chapter.live) {
                      return (
                        <li key={chapter.label} className="border-b border-border py-[11px] transition-colors duration-200 last:border-b-0 hover:bg-[#fcfaf6]">
                          <Link
                            href="/temaer/ressurser/studiegrupper/den-herlige-menigheten"
                            aria-label={`Åpne kapittel 4 – ${chapter.label}`}
                            className="group/ch flex items-center justify-between gap-2.5 py-0.5 text-[.78rem] leading-[1.45] text-text focus-visible:rounded outline-2 outline-offset-4 outline-gold focus-visible:outline"
                          >
                            <span className="flex items-baseline gap-2.5 group-hover/ch:text-gold">
                              <span className="text-[.65rem] font-bold tracking-[.5px] text-gold">{num}</span>
                              <span>{chapter.label}</span>
                            </span>
                            <span className="text-[1rem] font-bold text-gold transition-transform duration-200 group-hover/ch:translate-x-1.5" aria-hidden="true">
                              →
                            </span>
                          </Link>
                        </li>
                      );
                    }
                    return (
                      <li key={chapter.label} className="flex items-baseline gap-2.5 border-b border-border py-[11px] text-[.78rem] leading-[1.45] text-text last:border-b-0">
                        <span className="text-[.65rem] font-bold tracking-[.5px] text-gold-dark">{num}</span>
                        <span>{chapter.label}</span>
                      </li>
                    );
                  })}
                </ol>

                <p className="mt-[14px] text-[.7rem] leading-[1.45] text-text-light italic">
                  Tillegg: Overvinnerne og Guds tidshusholdningshandlinger
                </p>
                <p className="mt-[14px] text-[.7rem] leading-[1.45] text-text-light italic">Flere kapitler blir tilgjengelige fortløpende.</p>
              </aside>
            </article>

            <div className="mt-4 grid gap-3">
              {/* STUDIEGRUPPER */}
              <section
                id="study-groups"
                aria-labelledby="study-groups-title"
                className="grid grid-cols-[285px_minmax(0,1fr)_74px] items-stretch gap-[18px] rounded-radius-sm border border-border bg-white p-[16px_18px] max-[1000px]:grid-cols-[245px_minmax(0,1fr)] max-[700px]:block max-[700px]:p-5"
              >
                <div className="flex items-center gap-[17px] border-r border-border pr-[17px] max-[700px]:border-0 max-[700px]:pr-0 max-[700px]:pb-[18px]">
                  <span className="grid h-[58px] w-[58px] flex-none place-items-center rounded-full bg-[#faf8f3] p-[17px] text-navy">
                    <Icon name="books" className="h-full w-full" />
                  </span>
                  <div>
                    <h2 id="study-groups-title" className="mb-[5px] text-[1.28rem] text-navy">
                      Studiegrupper
                    </h2>
                    <p className="text-[.7rem] leading-[1.55] text-text-light">
                      Studier bygget rundt kristne bøker. Hvert studie inneholder presentasjoner, kommentarer og
                      materiale brukt i Zoom-grupper.
                    </p>
                  </div>
                </div>

                <div className="grid min-w-0 grid-cols-3 items-center gap-5 max-[700px]:mt-1 max-[700px]:grid-cols-2 max-[700px]:gap-[14px]">
                  <Link href="/temaer/ressurser/studiegrupper/den-herlige-menigheten" className="grid min-w-0 grid-cols-[51px_minmax(0,1fr)] content-center gap-x-[9px]">
                    <ResourceCoverImage src="/images/resources/den-herlige-menigheten.png" alt="Bokomslag: Den herlige menigheten av Watchman Nee" />
                    <strong className="col-start-2 mt-1.5 line-clamp-2 text-[.64rem] text-ink whitespace-normal">Den herlige menigheten</strong>
                    <small className="col-start-2 line-clamp-2 text-[.61rem] text-text-light whitespace-normal">Watchman Nee</small>
                    <span className="col-start-2 mt-[3px] line-clamp-2 text-[.57rem] leading-[1.35] text-text-light">
                      Utforsker Guds syn på menigheten og dens plass i hans evige hensikt.
                    </span>
                  </Link>

                  <span
                    aria-disabled="true"
                    className="grid min-w-0 grid-cols-[51px_minmax(0,1fr)] content-center gap-x-[9px] cursor-default opacity-55"
                  >
                    <ResourceCoverImage
                      src="/images/resources/det-kristne-livets-grunnleggende-prinsipper-volum-1.png"
                      alt="Bokomslag: Det kristne livets grunnleggende prinsipper – Volum 1 av Watchman Nee og Witness Lee"
                    />
                    <strong className="col-start-2 mt-1.5 line-clamp-2 text-[.64rem] text-ink whitespace-normal">
                      Det kristne livets grunnleggende prinsipper – Volum 1
                    </strong>
                    <small className="col-start-2 line-clamp-2 text-[.61rem] text-text-light whitespace-normal">Watchman Nee og Witness Lee</small>
                    <span className="col-start-2 mt-[3px] line-clamp-2 text-[.57rem] leading-[1.35] text-text-light">
                      Legger et bibelsk fundament for det kristne livet og sentrale erfaringer i troen.
                    </span>
                  </span>

                  <span
                    aria-disabled="true"
                    className="grid min-w-0 grid-cols-[51px_minmax(0,1fr)] content-center gap-x-[9px] cursor-default opacity-55"
                  >
                    <ResourceCoverImage
                      src="/images/resources/det-kristne-livets-grunnleggende-prinsipper-volum-2.png"
                      alt="Bokomslag: Det kristne livets grunnleggende prinsipper – Volum 2 av Watchman Nee og Witness Lee"
                    />
                    <strong className="col-start-2 mt-1.5 line-clamp-2 text-[.64rem] text-ink whitespace-normal">
                      Det kristne livets grunnleggende prinsipper – Volum 2
                    </strong>
                    <small className="col-start-2 line-clamp-2 text-[.61rem] text-text-light whitespace-normal">Watchman Nee og Witness Lee</small>
                    <span className="col-start-2 mt-[3px] line-clamp-2 text-[.57rem] leading-[1.35] text-text-light">
                      Handler om å vokse dypere i relasjonen til Gud og erfare Kristus i hverdagen.
                    </span>
                  </span>
                </div>

                <Link
                  href="/temaer/ressurser/studiegrupper"
                  className="flex flex-col items-center justify-center gap-[7px] rounded-[6px] bg-[#faf8f3] p-[10px_4px] text-center text-[.62rem] text-gold-dark max-[1000px]:hidden"
                >
                  <Icon name="book" className="h-5 w-5" />
                  <span>
                    Flere
                    <br />
                    studier
                  </span>
                </Link>
                <Link href="/temaer/ressurser/studiegrupper" className="hidden self-center text-[.7rem] font-semibold whitespace-nowrap text-gold-dark max-[1000px]:block max-[1000px]:col-span-2 max-[1000px]:justify-self-end max-[700px]:mt-[18px]">
                  Se alle studiegrupper <span aria-hidden="true">→</span>
                </Link>
              </section>

              {/* BØKER */}
              <section
                aria-labelledby="books-title"
                className="grid grid-cols-[285px_minmax(0,1fr)_74px] items-stretch gap-[18px] rounded-radius-sm border border-border bg-white p-[16px_18px] max-[1000px]:grid-cols-[245px_minmax(0,1fr)] max-[700px]:block max-[700px]:p-5"
              >
                <div className="flex items-center gap-[17px] border-r border-border pr-[17px] max-[700px]:border-0 max-[700px]:pr-0 max-[700px]:pb-[18px]">
                  <span className="grid h-[58px] w-[58px] flex-none place-items-center rounded-full bg-[#faf8f3] p-[17px] text-navy">
                    <Icon name="document" className="h-full w-full" />
                  </span>
                  <div>
                    <h2 id="books-title" className="mb-[5px] text-[1.28rem] text-navy">
                      Bøker
                    </h2>
                    <p className="text-[.7rem] leading-[1.55] text-text-light">
                      Anbefalte bøker innen bibelteologi, apologetikk, kirkehistorie og kristenliv.
                    </p>
                  </div>
                </div>

                <div className="grid min-w-0 grid-cols-3 items-center gap-5 max-[700px]:mt-1 max-[700px]:grid-cols-2 max-[700px]:gap-[14px]">
                  {[
                    {
                      title: "Bibelens hele råd",
                      author: "A. W. Tozer",
                      cover: (
                        <>
                          Bibelens
                          <br />
                          hele råd
                        </>
                      ),
                      cls: "text-[#5c4524] bg-[linear-gradient(145deg,#ded2b2,#a78850)]",
                    },
                    { title: "Institusjonen", author: "John Calvin", cover: "Institusjonen", cls: "text-[#ead7a7] bg-[linear-gradient(145deg,#701e1e,#240b11)]" },
                    {
                      title: "Bibelens troverdighet",
                      author: "Josh McDowell",
                      cover: (
                        <>
                          Bibelens
                          <br />
                          troverdighet
                        </>
                      ),
                      cls: "text-[#ead7a7] bg-[linear-gradient(145deg,#19314f,#061323)]",
                    },
                  ].map((book) => (
                    <a key={book.title} href="#books-title" className="grid min-w-0 grid-cols-[51px_minmax(0,1fr)] content-center gap-x-[9px]">
                      <span
                        aria-hidden="true"
                        className={`row-span-2 flex aspect-[.67] w-[51px] flex-col justify-center overflow-hidden rounded-[3px] p-[5px] text-center font-serif text-[.64rem] leading-[1.12] shadow-[0_10px_20px_rgba(12,23,38,.2)] ${book.cls}`}
                      >
                        {book.cover}
                      </span>
                      <strong className="col-start-2 mt-1.5 line-clamp-2 text-[.64rem] text-ink whitespace-normal">{book.title}</strong>
                      <small className="col-start-2 line-clamp-2 text-[.61rem] text-text-light whitespace-normal">{book.author}</small>
                    </a>
                  ))}
                </div>

                <a
                  href="#books-title"
                  className="flex flex-col items-center justify-center gap-[7px] rounded-[6px] bg-[#faf8f3] p-[10px_4px] text-center text-[.62rem] text-gold-dark max-[1000px]:hidden"
                >
                  <Icon name="book" className="h-5 w-5" />
                  <span>
                    Flere
                    <br />
                    bøker
                  </span>
                </a>
                <a href="#books-title" className="hidden self-center text-[.7rem] font-semibold whitespace-nowrap text-gold-dark max-[1000px]:block max-[1000px]:col-span-2 max-[1000px]:justify-self-end max-[700px]:mt-[18px]">
                  Se alle bøker <span aria-hidden="true">→</span>
                </a>
              </section>

              {/* VIDEOER */}
              <section
                aria-labelledby="videos-title"
                className="grid grid-cols-[285px_minmax(0,1fr)_74px] items-stretch gap-[18px] rounded-radius-sm border border-border bg-white p-[16px_18px] max-[1000px]:grid-cols-[245px_minmax(0,1fr)] max-[700px]:block max-[700px]:p-5"
              >
                <Link
                  href="/temaer/ressurser/videoer"
                  className="group flex items-center gap-[17px] border-r border-border pr-[17px] transition-colors duration-200 max-[700px]:border-0 max-[700px]:pr-0 max-[700px]:pb-[18px] focus-visible:rounded focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
                >
                  <span className="grid h-[58px] w-[58px] flex-none place-items-center rounded-full bg-[#faf8f3] p-[17px] text-navy">
                    <Icon name="video" className="h-full w-full" />
                  </span>
                  <div>
                    <h2 id="videos-title" className="mb-[5px] text-[1.28rem] text-navy transition-colors duration-200 group-hover:text-gold">
                      Videoer
                    </h2>
                    <p className="text-[.7rem] leading-[1.55] text-text-light">Bibelundervisning, konferanser, debatter og dokumentarer.</p>
                  </div>
                </Link>

                <div className="grid min-w-0 grid-cols-4 items-center gap-4 max-[700px]:mt-1 max-[700px]:grid-cols-2 max-[700px]:gap-[14px]">
                  {videoCategories.map((v) => {
                    const thumbnail = (
                      <>
                        <span
                          className="relative grid h-[61px] place-items-center overflow-hidden rounded-[4px] bg-navy bg-[linear-gradient(130deg,rgba(255,255,255,.08),transparent_55%),url('/images/hero/hero-bible.jpg')] bg-cover max-[700px]:h-[82px]"
                          style={{ backgroundPosition: v.backgroundPosition }}
                        >
                          <span className="absolute inset-0 bg-[rgba(5,13,23,.3)]" aria-hidden="true" />
                          <Icon name="video" className="relative z-10 h-[17px] w-[17px] text-white drop-shadow-[0_1px_4px_rgba(0,0,0,.7)]" />
                        </span>
                        <strong className="mt-1.5 block truncate text-[.64rem] text-ink">{v.label}</strong>
                        <small className="block truncate text-[.61rem] text-text-light">{v.sub}</small>
                      </>
                    );
                    return v.href.startsWith("#") ? (
                      <a key={v.label} href={v.href} className="min-w-0 text-[.66rem] leading-[1.25] text-text">
                        {thumbnail}
                      </a>
                    ) : (
                      <Link key={v.label} href={v.href} className="min-w-0 text-[.66rem] leading-[1.25] text-text">
                        {thumbnail}
                      </Link>
                    );
                  })}
                </div>

                <a href="#videos-title" className="hidden self-center text-[.7rem] font-semibold whitespace-nowrap text-gold-dark max-[1000px]:block max-[1000px]:col-span-2 max-[1000px]:justify-self-end max-[700px]:mt-[18px]">
                  Se alle videoer <span aria-hidden="true">→</span>
                </a>
              </section>

              {/* PODKASTER */}
              <section
                aria-labelledby="podcasts-title"
                className="grid grid-cols-[285px_minmax(0,1fr)_74px] items-stretch gap-[18px] rounded-radius-sm border border-border bg-white p-[16px_18px] max-[1000px]:grid-cols-[245px_minmax(0,1fr)] max-[700px]:block max-[700px]:p-5"
              >
                <div className="flex items-center gap-[17px] border-r border-border pr-[17px] max-[700px]:border-0 max-[700px]:pr-0 max-[700px]:pb-[18px]">
                  <span className="grid h-[58px] w-[58px] flex-none place-items-center rounded-full bg-[#faf8f3] p-[17px] text-navy">
                    <Icon name="podcast" className="h-full w-full" />
                  </span>
                  <div>
                    <h2 id="podcasts-title" className="mb-[5px] text-[1.28rem] text-navy">
                      Podkaster
                    </h2>
                    <p className="text-[.7rem] leading-[1.55] text-text-light">Lytt til bibelundervisning fra pålitelige kristne forkynnere.</p>
                  </div>
                </div>

                <div className="grid min-w-0 grid-cols-4 items-center gap-4 max-[700px]:mt-1 max-[700px]:grid-cols-2 max-[700px]:gap-[14px]">
                  <a href="#podcasts-title" className="min-w-0">
                    <span className="grid aspect-square place-items-center rounded-[4px] bg-[#232323] p-1.5 text-center font-serif text-[.92rem] leading-[1.05] font-semibold text-white">
                      Biblical
                      <br />
                      Thinking
                    </span>
                  </a>
                  <a href="#podcasts-title" className="min-w-0">
                    <span className="grid aspect-square place-items-center rounded-[4px] bg-[#0f456f] p-1.5 text-center font-serif text-[.92rem] leading-[1.05] font-semibold text-white">
                      Ligonier
                      <br />
                      Ministries
                    </span>
                  </a>
                  <a href="#podcasts-title" className="min-w-0">
                    <span className="grid aspect-square place-items-center rounded-[4px] border border-border bg-white p-1.5 text-center font-serif text-[.72rem] leading-[1.05] font-semibold text-[#111]">
                      GRACE
                      <br />
                      <em className="font-[cursive]">to you</em>
                    </span>
                  </a>
                  <a href="#podcasts-title" className="min-w-0">
                    <span className="grid aspect-square place-items-center rounded-[4px] bg-[#1a3659] p-1.5 text-center font-serif text-[.92rem] leading-[1.05] font-semibold text-white">
                      FOCUS
                      <br />
                      on the
                      <br />
                      FAMILY
                    </span>
                  </a>
                </div>

                <a
                  href="#podcasts-title"
                  className="flex flex-col items-center justify-center gap-[7px] rounded-[6px] bg-[#faf8f3] p-[10px_4px] text-center text-[.62rem] text-gold-dark max-[1000px]:hidden"
                >
                  <Icon name="podcast" className="h-5 w-5" />
                  <span>
                    Flere
                    <br />
                    podkaster
                  </span>
                </a>
                <a href="#podcasts-title" className="hidden self-center text-[.7rem] font-semibold whitespace-nowrap text-gold-dark max-[1000px]:block max-[1000px]:col-span-2 max-[1000px]:justify-self-end max-[700px]:mt-[18px]">
                  Se alle podkaster <span aria-hidden="true">→</span>
                </a>
              </section>

              {/* TEOLOGISKE NETTSTEDER */}
              <section
                aria-labelledby="theological-sites-title"
                className="grid grid-cols-[285px_minmax(0,1fr)] items-stretch gap-[18px] rounded-radius-sm border border-border bg-white p-[16px_18px] max-[700px]:block max-[700px]:p-5"
              >
                <div className="flex items-center gap-[17px] border-r border-border pr-[17px] max-[700px]:border-0 max-[700px]:pr-0 max-[700px]:pb-[18px]">
                  <span className="grid h-[58px] w-[58px] flex-none place-items-center rounded-full bg-[#faf8f3] p-[17px] text-navy">
                    <Icon name="globe" className="h-full w-full" />
                  </span>
                  <div>
                    <h2 id="theological-sites-title" className="mb-[5px] text-[1.28rem] text-navy">
                      Teologiske nettsteder
                    </h2>
                    <p className="text-[.7rem] leading-[1.55] text-text-light">
                      Nettsteder og plattformer med teologisk, bibelsk og apologetisk undervisning.
                    </p>
                  </div>
                </div>

                <ul
                  aria-label="Teologiske nettsteder"
                  className="grid min-w-0 grid-cols-5 gap-2.5 max-[1000px]:grid-cols-3 max-[700px]:mt-1 max-[700px]:grid-cols-2 max-[700px]:gap-[14px]"
                >
                  {THEOLOGICAL_SITES.map((site) => (
                    <li key={site.href}>
                      <a
                        href={site.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex h-full items-center gap-2 rounded-[6px] border border-border p-[10px_12px] text-[.72rem] font-semibold text-ink transition-all duration-200 hover:-translate-y-0.5 hover:border-gold/35 hover:bg-parchment hover:text-gold hover:shadow-sm"
                      >
                        <Icon name="globe" className="h-[15px] w-[15px] shrink-0 text-gold" />
                        <span className="min-w-0 truncate">{site.label}</span>
                        <span
                          aria-hidden="true"
                          className="ml-auto text-[.9rem] leading-none text-gold transition-transform duration-200 group-hover:translate-x-1"
                        >
                          ›
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </section>

              {/* STUDIEVERKTØY */}
              <section aria-labelledby="tools-title" className="rounded-radius-sm border border-border bg-white p-[16px_18px] max-[700px]:p-5">
                <div className="mb-5 flex items-center gap-[17px]">
                  <span className="grid h-[58px] w-[58px] flex-none place-items-center rounded-full bg-[#faf8f3] p-[17px] text-navy">
                    <Icon name="books" className="h-full w-full" />
                  </span>
                  <div>
                    <h2 id="tools-title" className="mb-[5px] text-[1.28rem] text-navy">
                      Studieverktøy
                    </h2>
                    <p className="text-[.7rem] leading-[1.55] text-text-light">
                      Nyttige digitale verktøy for bibelstudium, originalspråk og teologisk forskning.
                    </p>
                  </div>
                </div>

                <StudyToolsGrid />
              </section>
            </div>

            <blockquote className="mt-[18px] flex items-center gap-[22px] border-l-[3px] border-gold bg-[#f6f2ea] p-[20px_24px] text-text">
              <Icon name="book" className="h-[35px] w-[35px] flex-none text-gold" />
              <div className="text-[.8rem]">
                Alt til Guds ære og til oppbyggelse av Kristi kropp.
                <cite className="mt-1 block not-italic">1. Korinter 10,31</cite>
              </div>
            </blockquote>
          </div>
        </section>
      </main>

      <footer className="bg-navy-deep pt-20 pb-10 text-white/65">
        <div className="mx-auto w-[min(1280px,92%)]">
          <p>© 2026 THEOLOGIA – Bibelsk • Teologisk • Forankret</p>
        </div>
      </footer>
    </div>
  );
}
