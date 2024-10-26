import CorporateCard from '../../ui/corporate-card';
import styles from './CorporateCards.module.css';

export default function CorporateCards() {
  return (
    <div>
      <div className={styles.cardsWrapper}>
        <CorporateCard
          imageSrc="/corporate-1.svg"
          heading={
            <>
              Хотите сделать{' '}
              <span className="font-bold">рекламные материалы</span> особенными?
            </>
          }
          text={
            <>
              Создадим для вашей целевой аудитории меткий стих, который
              привлечёт внимание быстрее, чем скучный текст.
            </>
          }
        />
        <CorporateCard
          imageSrc="/corporate-2.svg"
          heading={
            <>
              Вы <span className="font-bold">солидная компания</span>, которой
              важно получить качественный текст? стихотворения
            </>
          }
          text={
            <>
              Наши лучшие авторы напишут стихи, соответствующие уровню и имиджу
              нашей фирмы.
            </>
          }
        />
        <CorporateCard
          imageSrc="/corporate-3.svg"
          heading={
            <>
              Нужны <span className="font-bold">стихи для открыток</span> и
              другой подарочной продукции? оформление
            </>
          }
          text={
            <>
              Мы знаем, как подобрать слова, которые вызовут желание купить ваш
              товар.
            </>
          }
        />
        <CorporateCard
          imageSrc="/corporate-4.svg"
          heading={
            <>
              Занимаетесь{' '}
              <span className="font-bold">организацией мероприятий?</span>
            </>
          }
          text={
            <>
              Избавим вас от головной боли - в кротчайшие сроки напишем
              искромётные поздравления, тосты и песни.
            </>
          }
        />
      </div>
    </div>
  );
}
