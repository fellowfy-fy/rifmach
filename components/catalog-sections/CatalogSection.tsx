import styles from "./CatalogSection.module.css";
import CatalogFilter from "./CatalogFilter";

export default function CatalogSection() {
  return (
    <section className={styles.sectionWrapper}>
        <div className={styles.customContainer}>
            <CatalogFilter/>
        </div>
    </section>
  );
}