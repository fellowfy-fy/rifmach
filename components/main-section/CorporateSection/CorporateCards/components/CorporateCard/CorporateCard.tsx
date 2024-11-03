import Image from 'next/image';
import styles from './CorporateCard.module.css';
import { FC } from 'react';

interface CorporateProps {
  imageSrc: string;
  heading: string | JSX.Element;
  text: string | JSX.Element;
  imageStyle?: string;
}

export const CorporateCard: FC<CorporateProps> = ({
  imageSrc,
  heading,
  text,
  imageStyle,
}) => {
  return (
    <div className={styles.cardWrapper}>
      <div className={`${styles.defaultImageWrapper} ${imageStyle}`}>
        <Image src={imageSrc} fill={true} alt="image" />
      </div>
      <div
        className={`${styles.textPartWrapper} ${styles.cardMobileTextWrapper}`}
      >
        <h3 className={styles.cardTitleStyle}>{heading}</h3>
        <hr className={styles.cardHrStyle} />
        <p className={styles.cardTextStyle}>{text}</p>
      </div>
    </div>
  );
};
