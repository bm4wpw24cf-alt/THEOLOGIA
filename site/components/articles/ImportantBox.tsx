import styles from "./article.module.css";

export function ImportantBox({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className={styles.importantBox}>
      <span className={styles.boxIcon} aria-hidden="true">
        !
      </span>
      <div>
        <span className={styles.boxTitle}>{title}</span>
        {" "}
        {children}
      </div>
    </div>
  );
}
