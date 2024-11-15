import styles from './CorporateCards.module.css';

export const corporateCardsConfig = [
  {
    imageSrc: '/icons/corporate-1.svg',
    imageStyle: styles.dartStyle,
    heading: (
      <span className={styles.cardTitleStyle}>
        Хотите сделать{' '}
        <span className="font-bold">рекламные&nbsp;материалы</span> особенными?
      </span>
    ),
    text: (
      <span>
        Создадим для вашей целевой аудитории меткий стих, который привлечёт
        внимание быстрее, чем&nbsp;скучный текст.
      </span>
    ),
  },
  {
    imageSrc: '/icons/corporate-2.svg',
    imageStyle: styles.smokingStyle,
    heading: (
      <span className={styles.cardTitleStyle}>
        Вы <span className="font-bold">солидная компания</span>, которой важно
        получить качественный текст?
      </span>
    ),
    text: (
      <span>
        Наши лучшие авторы напишут стихи, соответствующие уровню и&nbsp;имиджу
        нашей фирмы.
      </span>
    ),
  },
  {
    imageSrc: '/icons/corporate-3.svg',
    imageStyle: styles.letterStyle,
    heading: (
      <span className={styles.cardTitleStyle}>
        Нужны <span className="font-bold">стихи для&nbsp;открыток</span> и
        другой подарочной продукции?
      </span>
    ),
    text: (
      <span>
        Мы знаем, как подобрать слова, которые вызовут желание купить
        ваш&nbsp;товар.
      </span>
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
      <span>
        Избавим вас от головной боли - в&nbsp;кротчайшие сроки напишем
        искромётные поздравления, тосты&nbsp;и&nbsp;песни.
      </span>
    ),
  },
];
