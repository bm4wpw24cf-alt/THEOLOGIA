import Link from "next/link";
import { ArticleToc, type TocItem } from "./ArticleToc";
import styles from "./article.module.css";

export interface ArticleLayoutProps {
  category: React.ReactNode;
  title: string;
  subtitle?: string;
  meta?: string;
  toc?: TocItem[];
  /** Ingress som vises i full bredde, over TOC-sidefeltet (matcher original markup). */
  intro?: React.ReactNode;
  backHref?: string;
  backLabel?: string;
  children: React.ReactNode;
}

export function ArticleLayout({ category, title, subtitle, meta, toc, intro, backHref, backLabel, children }: ArticleLayoutProps) {
  const backLink = backHref ? (
    <p>
      <Link href={backHref}>← {backLabel ?? "Tilbake"}</Link>
    </p>
  ) : null;

  return (
    <div className={styles.articlePage}>
      <article className={`${styles.articleContainer} ${toc ? styles.hasToc : ""}`}>
        <header className={styles.articleHeader}>
          <p className={styles.articleCategory}>{category}</p>
          <h1>{title}</h1>
          {subtitle && <p className={styles.articleSubtitle}>{subtitle}</p>}
          {meta && <p className={styles.articleMeta}>{meta}</p>}
        </header>

        <section className={styles.articleContent}>
          {backLink}
          {intro}

          {toc ? (
            <div className={styles.articleBody}>
              <ArticleToc items={toc} />
              <div className={styles.articleMain}>{children}</div>
            </div>
          ) : (
            children
          )}

          {backHref && (
            <>
              <hr className={styles.sectionDivider} />
              {backLink}
            </>
          )}
        </section>
      </article>
    </div>
  );
}
