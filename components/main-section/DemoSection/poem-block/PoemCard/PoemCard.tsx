import React from 'react';
import styles from './Poem.module.css';

interface PoemCardProps {
  title: string;
  text: string;
  isBackground?: boolean;
}

export const PoemCard = ({ title, text, isBackground = false }: PoemCardProps) => {
  const cardClasses = `${styles.card} ${isBackground ? styles.backgroundCard : ''}`;

  return (
    <div className={cardClasses}>
      <h3 className={styles.title}>
        {title}
      </h3>
      <div className={styles.content}>
        <div className={styles.text}>
          {text}
        </div>
      </div>
    </div>
  );
};