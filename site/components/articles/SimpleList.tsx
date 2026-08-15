import styles from "./article.module.css";

/** Portert fra css/utilities.css ".simple-list" – enkel punktliste med gyllen firkant-bullet. */
export function SimpleList({ children }: { children: React.ReactNode }) {
  return <ul className={styles.simpleList}>{children}</ul>;
}
