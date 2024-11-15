import styles from './ContactsIntro.module.css';

export const contactsConfig = [
  {
    id: 1,
    icon: '/icons/phone2.svg',
    title: 'телефон для связи',
    value: '+7 999 333-89-60',
    isButton: false,
    textClass: styles.phoneTextStyle,
  },
  {
    id: 2,
    icon: '/icons/email.svg',
    title: 'электронная почта',
    value: 'mail@rifmach.ru',
    isButton: false,
    textClass: styles.mailTextStyle,
  },
  {
    id: 3,
    icon: '/icons/case.svg',
    title: 'Для сотрудничества',
    value: 'director@rifmach.ru',
    isButton: true, // Indicates that this should be a button
    textClass: styles.mailTextStyle,
  },
  {
    id: 4,
    icon: '/icons/pen.svg',
    title: 'оставьте заявку',
    value: 'Написать нам',
    isButton: false,
    onClick: 'scrollToForm', // Function to call on click
    textClass: styles.requestTextStyle,
  },
];

export default contactsConfig;
