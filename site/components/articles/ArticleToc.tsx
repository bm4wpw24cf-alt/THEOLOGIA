import { Icon } from "@/components/icons/Icon";
import styles from "./article.module.css";

export interface TocItem {
  id: string;
  label: string;
}

export function ArticleToc({ items }: { items: TocItem[] }) {
  return (
    <aside className={styles.articleToc} aria-label="Innholdsfortegnelse">
      <span className="panel-tag">På denne siden</span>
      <h4>Innhold</h4>
      <ul className={styles.tocList}>
        {items.map((item) => (
          <li key={item.id}>
            <a href={`#${item.id}`}>
              <Icon name="document" />
              {" "}
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
}
