import AuthorCard from '../../ui/author-card';
import Carousel from '../../ui/carousel';
import styles from './AuthorsSection.module.css';

export default function AuthorsSection() {
  const authors = Array(6)
    .fill(null)
    .map((_, index) => <AuthorCard key={index + 1} />);

  return (
    <section className={styles.sectionWrapper}>
      <div className={styles.customContainer}>
        <div className={styles.alphabetBackground}>
          <img
            src="/alphabet.svg"
            alt="Alphabet Background"
            width={567}
            height={580}
            className='h-[580px]'
          />
        </div>

        <h2 className={styles.title}>
          Кто будет писать
          <br />
          для вас стихи?
        </h2>
        <hr className={styles.divider} />
        <p className={styles.description}>
          Наши авторы — лауреаты региональных творческих конкурсов, обладатели
          премий федерального масштаба, за плечами у них публикации в солидных
          журналах и альманахах, изданные книги, членство в профессиональных
          союзах, мы постоянно в тренде, и продолжаем оттачивать свое мастерство.
        </p>

        <div className={styles.carouselWrapper}>
          <Carousel
            items={authors}
            itemsPerBreakpoint={{
              mobile: 1,
              md: 3,
              xl: 4,
            }}
            className="min-h-[420px] md:min-h-[460px]"
            containerClassName="h-full"
            itemClassName="pt-[100px] md:pt-[120px]"
          />
        </div>
      </div>
    </section>
  );
}