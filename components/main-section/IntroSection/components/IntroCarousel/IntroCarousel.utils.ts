import styles from './IntroCarousel.module.css';

export interface IIntroData {
  id: number; // Unique identifier for each intro item
  text: string; // Text description for the intro item
  imgUrl: string; // URL for the associated image
  alt: string;
  customClass: string;
}

export const getIntroData = (isMobile: boolean): IIntroData[] => [
  {
    id: 1,
    text: 'Помогут завоевать расположение начальника или\u00A0делового партнера',
    imgUrl: '/characters/boy.svg',
    alt: 'boy',
    customClass: styles.boyImage,
  },
  {
    id: 2,
    text: 'Выразят все ваши эмоции, тронут душу и\u00A0растопят сердце адресата',
    imgUrl: '/characters/valentine.png',
    alt: 'valentine',
    customClass: styles.valentineImage,
  },
  {
    id: 3,
    text: 'Вызовут бурю эмоций и\u00A0помогут красиво обыграть подарок',
    imgUrl: isMobile ? '/characters/goal-mobile.svg' : '/characters/gool.png',
    alt: 'goal',
    customClass: styles.goalImage,
  },
  {
    id: 4,
    text: 'Принесут победу в\u00A0конкурсе, рост продаж или\u00A0приток клиентов',
    imgUrl: isMobile
      ? '/characters/profit-mobile.svg'
      : '/characters/stonks.png',
    alt: 'profit',
    customClass: styles.profitImage,
  },
];
