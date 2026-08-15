import Link from "next/link";
import { articles as allArticles, type ArticleMeta } from "@/lib/articles";
import { formatArticleDate, sortArticlesByDate } from "@/lib/format-date";
import styles from "./LatestArticlesTimeline.module.css";

function TimelineBody({ article }: { article: ArticleMeta }) {
  return (
    <>
      {article.date ? (
        <time className={styles.date} dateTime={article.date}>
          {formatArticleDate(article.date)}
        </time>
      ) : (
        <span className={styles.date}>Artikkel</span>
      )}
      <h3 className={styles.title}>{article.title}</h3>
      <p className={styles.excerpt}>{article.description}</p>
    </>
  );
}

export function LatestArticlesTimeline({ limit }: { limit?: number }) {
  const sorted = sortArticlesByDate(allArticles);
  const toShow = limit ? sorted.slice(0, limit) : sorted;

  return (
    <ol className={styles.timeline}>
      {toShow.map((article) => (
        <li key={article.slug} className={styles.item}>
          <span className={styles.marker} aria-hidden="true" />
          {/* href peker alltid til artikkelens endelige/korrekte URL, uansett
              om ruten er bygget i Next.js ennå (migrated). Slik forblir
              lenken en ekte lenke – ikke en dødt div – og begynner å
              fungere av seg selv den dagen artikkelen migreres, uten at
              denne komponenten må endres. */}
          <Link href={article.href} className={styles.link}>
            <TimelineBody article={article} />
          </Link>
        </li>
      ))}
    </ol>
  );
}
