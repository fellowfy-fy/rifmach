import IdeaCards from "../../shared/idea-cards";
import styles from './IdeaSection.module.css';

export default function IdeaSection() {
  return (
    <section className={styles.sectionWrapper}>
      <div className={styles.customContainer}>
        <h2 className={styles.title}>
          Нужно больше<br />
          <span className="font-bold">креативных идей?</span>
        </h2>
        <hr className={styles.divider}/>
        <IdeaCards />
      </div>
    </section>
  );
}