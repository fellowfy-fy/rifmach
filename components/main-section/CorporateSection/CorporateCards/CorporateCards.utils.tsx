import styles from './CorporateCards.module.css';

export const corporateCardsConfig = [
  {
    imageSrc: '/icons/corporate-1.svg',
    imageStyle: styles.dartStyle,
    heading: (
      <p className={styles.cardTitleStyle}>
        Хотите сделать{' '}
        <span className="font-bold">рекламные&nbsp;материалы</span> особенными?
      </p>
    ),
    text: (
      <p>
        Создадим для вашей целевой аудитории меткий стих, который привлечёт
        внимание быстрее, чем&nbsp;скучный текст.
      </p>
    ),
  },
  {
    imageSrc: '/icons/corporate-2.svg',
    imageStyle: styles.smokingStyle,
    heading: (
      <p className={styles.cardTitleStyle}>
        Вы <span className="font-bold">солидная компания</span>, которой важно
        получить качественный текст?
      </p>
    ),
    text: (
      <p>
        Наши лучшие авторы напишут стихи, соответствующие уровню и&nbsp;имиджу
        нашей фирмы.
      </p>
    ),
  },
  {
    imageSrc: '/icons/corporate-3.svg',
    imageStyle: styles.letterStyle,
    heading: (
      <p className={styles.cardTitleStyle}>
        Нужны <span className="font-bold">стихи для&nbsp;открыток</span> и
        другой подарочной продукции?
      </p>
    ),
    text: (
      <p>
        Мы знаем, как подобрать слова, которые вызовут желание купить
        ваш&nbsp;товар.
      </p>
    ),
  },
  {
    imageSrc: '/icons/corporate-4.svg',
    imageStyle: styles.maskStyle,
    heading: (
      <p className={styles.cardTitleStyle}>
        Занимаетесь
        <br />
        <span className="font-bold">
          организацией
          <br />
          мероприятий?
        </span>
      </p>
    ),
    text: (
      <p>
        Избавим вас от головной боли - в&nbsp;кротчайшие сроки напишем
        искромётные поздравления, тосты&nbsp;и&nbsp;песни.
      </p>
    ),
  },
];
