import styles from "./article.module.css";

export function ConclusionBox({ children }: { children: React.ReactNode }) {
  return <div className={styles.conclusionBox}>{children}</div>;
}
