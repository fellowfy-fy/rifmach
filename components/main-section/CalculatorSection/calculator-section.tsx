import React from 'react';
import { Calculator } from '@/components/shared/Calculator/calculator';
import styles from './CalculatorSection.module.css';

interface Props {
  className?: string;
}

export const CalculatorSection: React.FC<Props> = () => {
  return (
    <section className={styles.sectionWrapper}>
      <div className="absolute inset-0 pointer-events-none flex justify-center">
        {/* Мобильные облака */}
        <img
          src="/clouds/clouds-flip-mob.svg"
          alt="Mobile Clouds"
          className="w-full h-auto object-cover block md:hidden absolute top-[-22px] sm:top-0"
        />
        {/* Десктопные облака */}
        <img
          src="/clouds/clouds-flip.svg"
          alt="Desktop Clouds"
          className="max-w-[1920px] w-full h-auto object-cover hidden md:block 3xl:hidden absolute top-[-1px]"
        />
        {/* Широкие облака */}
        <img
          src="/clouds/clouds-wide-alt.svg"
          alt="Desktop Clouds"
          className="max-w-[1600px] w-full h-auto object-cover hidden 3xl:block absolute top-[-1px]"
        />
      </div>

      <div className={styles.customContainer}>
        <div className="relative top-[101px] md:top-[97px]">
          <h2 className={styles.title}>
            Сколько это стоит?
          </h2>
          <hr className={styles.divider} />
          <p className={styles.subtitle}>
            Укажите повод и рассчитайте примерную стоимость вашего заказа
          </p>
          <Calculator />
        </div>
      </div>

      {/* Декоративные элементы */}
      <div className="absolute inset-0 pointer-events-none w-full">
        {/* Десктопная арка */}
        <div className="hidden md:block absolute bottom-0 w-full">
          <img
            src="/arc.svg"
            alt="Desktop arch"
            className="w-full h-auto object-cover"
          />
        </div>
        {/* Мобильная арка */}
        <div className="block md:hidden absolute bottom-0 w-full">
          <img
            src="/arc-mob.svg"
            alt="Mobile arch"
            className="w-full h-auto object-cover"
          />
        </div>
        {/* Алфавит */}
        <div className="hidden md:block absolute bottom-10 -left-40 3xl:left-40">
          <img
            src="/alphabet.svg"
            alt="Alphabet Background"
            className="w-full max-h-[845px]"
          />
        </div>
      </div>
    </section>
  );
};