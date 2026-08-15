import { Icon } from "@/components/icons/Icon";
import styles from "./article.module.css";

/** Portert fra css/utilities.css ".coming-soon" – delt boks for sider/temaer uten ferdig innhold ennå. */
export function ComingSoon({ title = "Kommer snart", children }: { title?: string; children: React.ReactNode }) {
  return (
    <div className={styles.comingSoon}>
      <Icon name="book-open" className={styles.comingSoonIcon} />
      <h3>{title}</h3>
      <p>{children}</p>
    </div>
  );
}
