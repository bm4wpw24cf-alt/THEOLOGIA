import styles from "./article.module.css";

export function BibleBox({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.bibleBox}>
      <p>{children}</p>
    </div>
  );
}
