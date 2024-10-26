'use client';
import { FC, useState } from 'react';
import { GratitudeLetter } from './components/GratitudeLetter/GratitudeLetter';
import { gratitudeLettersPathsConfig } from './GratitudeLetters.utils';

export const GratitudeLetters: FC = () => {
  const [isSpinning, setIsSpinning] = useState(true);

  const handleLetterClick = () => {
    setIsSpinning(prev => !prev);
  };
  const letters = gratitudeLettersPathsConfig.map(letter => (
    <GratitudeLetter key={letter} path={letter} onClick={handleLetterClick} />
  ));

  return (
    <section className="bg-white px-4 md:px-10 lg:px-20 xl:px-32 2xl:px-[15%] py-20 md:py-15">
      <h2 className="text-headers text-2xl md:text-h2 uppercase">
        Благодарственные
        <br />
        письма
      </h2>
      <hr className="w-10 md:w-[50px] h-[5px] bg-main rounded-sm mt-2.5 md:mt-5" />
      <div className="mt-10 md:mt-12">{letters}</div>
    </section>
  );
};
