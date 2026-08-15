import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { ArticleLayout } from "@/components/articles/ArticleLayout";

export const metadata: Metadata = {
  title: "Studiegrupper | THEOLOGIA",
  description: "Syv gratis kristne bøker for personlig bibelstudium, lesing og samtale i studiegrupper.",
};

interface Book {
  title: string;
  description: string;
  image: string;
  width: number;
  height: number;
  href?: string;
}

const BOOK_SETS: { title: string; books: Book[] }[] = [
  {
    title: "Sett 1",
    books: [
      {
        title: "Det kristne livets grunnleggende prinsipper, Volum 1",
        description: "Om Guds plan for mennesket og fire grunnleggende kristne erfaringer.",
        image: "/images/studiegrupper/volum-1.png",
        width: 1122,
        height: 1402,
      },
      {
        title: "Det kristne livets grunnleggende prinsipper, Volum 2",
        description: "Om et personlig forhold til Gud og det å tilbringe tid med Herren.",
        image: "/images/studiegrupper/volum-2.png",
        width: 1023,
        height: 1537,
      },
      {
        title: "Det kristne livets grunnleggende prinsipper, Volum 3",
        description: "Om forskjellen mellom å leve etter rett og galt og å leve etter «livets prinsipp».",
        image: "/images/studiegrupper/volum-3.png",
        width: 1023,
        height: 1537,
      },
    ],
  },
  {
    title: "Sett 2",
    books: [
      {
        title: "Den Altomfattende Kristus",
        description: "En utleggelse av Femte Mosebok hvor Kanaans gode land brukes som bilde på Kristus og den troendes erfaring av ham.",
        image: "/images/studiegrupper/den-altomfattende-kristus.png",
        width: 1023,
        height: 1537,
      },
      {
        title: "Guds økonomi",
        description: "Om Guds evige hensikt og menneskets plass og deltakelse i denne hensikten.",
        image: "/images/studiegrupper/guds-okonomi.png",
        width: 1023,
        height: 1537,
      },
    ],
  },
  {
    title: "Sett 3",
    books: [
      {
        title: "Kunnskapen om liv",
        description: "Om hva åndelig liv er, hvor det kommer fra og hvordan den kristne vokser i livet.",
        image: "/images/studiegrupper/kunnskapen-om-liv.png",
        width: 1023,
        height: 1537,
      },
      {
        title: "Den herlige menigheten",
        description: "Om hvordan Bibelen fremstiller menigheten og fire bibelske bilder som beskriver den.",
        image: "/images/resources/den-herlige-menigheten-3d.png",
        width: 1024,
        height: 1536,
        href: "/temaer/ressurser/studiegrupper/den-herlige-menigheten",
      },
    ],
  },
];

export default function StudiegrupperPage() {
  return (
    <main>
      <Breadcrumbs
        items={[
          { label: "Hjem", href: "/" },
          { label: "Temaer", href: "/temaer" },
          { label: "Ressurser", href: "/temaer/ressurser" },
          { label: "Studiegrupper" },
        ]}
      />

      <ArticleLayout
        category="RESSURSER · STUDIEGRUPPER"
        title="Studiegrupper"
        subtitle="Studier og ressurser bygget rundt kristne bøker – til personlig fordypning eller samtale i grupper."
      >
        <h2>Gratis kristne bøker</h2>
        <p className="max-w-[70ch]">
          <strong>Syv gratis kristne bøker tilgjengelig for personlig studium og studiegrupper.</strong>
        </p>

        <div className="mt-10">
          {BOOK_SETS.map((set, setIndex) => (
            <div key={set.title} className="mb-11 last:mb-0">
              <p className="mb-1 font-sans text-[.76rem] font-bold tracking-[1.6px] text-gold-dark uppercase">{set.title}</p>
              <ol className="m-0 list-none p-0">
                {set.books.map((book, bookIndex) => {
                  const isVeryLast = setIndex === BOOK_SETS.length - 1 && bookIndex === set.books.length - 1;
                  const num = String(bookIndex + 1).padStart(2, "0");
                  const content = (
                    <>
                      <Image
                        src={book.image}
                        alt={`Bokomslag: ${book.title}`}
                        width={book.width}
                        height={book.height}
                        loading="lazy"
                        className="order-first h-[150px] w-[120px] flex-none rounded-radius-sm bg-white object-contain shadow-sm max-[600px]:h-[120px] max-[600px]:w-[96px]"
                      />
                      <span className="font-sans text-[.82rem] font-bold leading-[1.6] text-gold-dark">{num}</span>
                      <div>
                        <h4 className="mb-2 text-[1.1rem]">{book.title}</h4>
                        <p className="mb-3.5 text-[.95rem] leading-[1.7] text-text">{book.description}</p>
                        {book.href ? (
                          <Link href={book.href} className="inline-flex items-center gap-1.5 font-sans text-[.88rem] font-semibold text-gold-dark transition-colors duration-200 hover:text-gold">
                            Åpne studiet <span aria-hidden="true">→</span>
                          </Link>
                        ) : (
                          <span aria-disabled="true" className="inline-flex items-center gap-1.5 font-sans text-[.88rem] font-medium text-text-light italic">
                            Les boken
                          </span>
                        )}
                      </div>
                    </>
                  );
                  return (
                    <li
                      key={book.title}
                      className={`flex items-start gap-5 py-6.5 first:pt-[18px] max-[600px]:flex-col max-[600px]:items-start max-[600px]:gap-3.5 ${
                        isVeryLast ? "" : "border-b border-border"
                      }`}
                    >
                      {content}
                    </li>
                  );
                })}
              </ol>
            </div>
          ))}
        </div>
      </ArticleLayout>
    </main>
  );
}
