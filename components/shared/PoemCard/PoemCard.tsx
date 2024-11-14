import React from 'react';
import styles from './Poem.module.css';

interface PoemCardProps {
  title: string;
  text: string;
  isBackground?: boolean;
}

export const PoemCard = ({ title, text, isBackground = false }: PoemCardProps) => {
  const poemWrapperStyle = `${styles.poemWrapperStyle} ${isBackground ? styles.backgroundCard : ''}`;

  return (
    <div className={poemWrapperStyle}>
          <h3 className={styles.title}>{title}</h3>
      <div className={styles.poemInnerContent}>
        <div className={[styles.cornerCircle, styles.cornerCircleTopLeft].join(' ')} />
        <div className={[styles.cornerCircle, styles.cornerCircleTopRight].join(' ')} />
        <div className={styles.content}>
          <div className={styles.text}>{text}</div>
        </div>
        <div className={[styles.cornerCircle, styles.cornerCircleBottomLeft].join(' ')} />
        <div className={[styles.cornerCircle, styles.cornerCircleBottomRight].join(' ')} />
      </div>
    </div>
  );
};