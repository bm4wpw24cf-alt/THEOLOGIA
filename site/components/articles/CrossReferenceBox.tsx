import styles from "./article.module.css";

export function CrossReferenceBox({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className={styles.crossReferenceBox}>
      <span className={styles.boxIcon} aria-hidden="true">
        →
      </span>
      <div>
        <span className={styles.boxTitle}>{title}</span>
        {children}
      </div>
    </div>
  );
}
