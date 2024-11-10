import styles from './QuoteBlock.module.css';

export default function QuoteBlock() {
  return (
    <div className={styles.quoteBlockWrapperStyle}>
      <div className={styles.quoteBlockInnerContent}>
        <div
          className={[styles.cornerCircle, styles.cornerCircleTopLeft].join(
            ' '
          )}
        />
        <div
          className={[styles.cornerCircle, styles.cornerCircleTopRight].join(
            ' '
          )}
        />
        <div className={styles.textContainerStyle}>
          <p>
            Юбилей. Такая значимая дата в жизни каждого человека празднуется
            всегда, причем громко и весело. Сегодня просто нельзя представить
            юбилейное торжество без стихов — хвалебных од, философских и
            шуточных тостов, поздравлений в песнях на известные мелодии.
          </p>
          <p>
            Хотите, чтобы Ваше поздравление было эффектным и больше всех
            запомнилось юбиляру? Тогда закажите стихотворение на нашем сайте.
          </p>
        </div>
        <div
          className={[styles.cornerCircle, styles.cornerCircleBottomLeft].join(
            ' '
          )}
        />
        <div
          className={[styles.cornerCircle, styles.cornerCircleBottomRight].join(
            ' '
          )}
        />
      </div>
    </div>
  );
}
