'use client';
import { FC, useState } from 'react';
import { GratitudeLetter } from './components/GratitudeLetter/GratitudeLetter';
import { gratitudeLettersPathsConfig } from './GratitudeLetters.utils';
import GratitudeLettersCarousel from './components/GratitudeLettersCarousel/GratitudeLettersCarousel';
import styles from './GratitudeLetters.module.css';

export const GratitudeLetters: FC = () => {
  const [isSpinning, setIsSpinning] = useState(true);
  
  const handleLetterClick = () => {
    setIsSpinning(prev => !prev);
  };

  return (
    <section className={styles.sectionWrapper}>
      <h2 className="text-headers text-2xl md:text-h2 uppercase">
        Благодарственные
        <br />
        письма
      </h2>
      <hr className="w-10 md:w-[50px] h-[5px] bg-main rounded-sm mt-2.5 md:mt-5" />
      <div className="mt-10 md:mt-12">
        <GratitudeLettersCarousel letters={gratitudeLettersPathsConfig} />
      </div>
    </section>
  );
};