import styles from "./article.module.css";

export function ContentList({ children }: { children: React.ReactNode }) {
  return <ul className={styles.contentList}>{children}</ul>;
}
