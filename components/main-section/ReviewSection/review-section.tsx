import Carousel from '@/components/ui/carousel';
import ReviewCard from '@/components/ui/review-card';
import { reviews } from '@/constants/reviews';
import styles from './ReviewSection.module.css';

export default function ReviewSection() {
  const reviewItems = reviews
    .slice(0, 12)
    .map((review, index) => <ReviewCard key={index} review={review} />);

  return (
    <section className={styles.sectionWrapper}>
      <div className={styles.customContainer}>
        <h2 className={styles.title}>
          Отзывы наших
          <br />
          <span className="font-bold">любимых клиентов</span>
        </h2>
        <hr className={styles.divider} />
        <div className={styles.carouselWrapper}>
          <Carousel
            items={reviewItems}
            itemsPerBreakpoint={{
              mobile: 1,
              md: 2,
              xl: 3,
            }}
          />
        </div>
      </div>
    </section>
  );
}