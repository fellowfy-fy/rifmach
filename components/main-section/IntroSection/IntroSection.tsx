'use client';
import CallToAction from '../../shared/Call-to-action.tsx/call-to-action';
import { IntroCarousel } from './components/IntroCarousel/IntroCarousel';
import { useRouter } from 'next/navigation';
import styles from './IntroSection.module.css';
import Image from 'next/image';

export default function IntroSection() {
  const router = useRouter();
  return (
    <section className={styles.sectionWrapper}>
      <div className="absolute mx-auto inset-0 pointer-events-none flex justify-center">
        <img
          src="/clouds/clouds-mob.svg"
          alt="Mobile Clouds"
          className="w-full h-auto object-cover block md:hidden absolute bottom-[-5%]"
        />
        <img
          src="/clouds/clouds.svg"
          alt="Desktop Clouds"
          className="max-w-[1440px] w-full h-auto object-cover hidden md:block absolute bottom-[-2px]"
        />
      </div>

      <div className={styles.customContainer}>
        <div className="flex flex-col mb-3 md:mb-[138px]">
          <h1 className={styles.introTitleStyle}>
            на что способны{' '}
            <span className="font-bold">стихи на&nbsp;заказ</span>?
          </h1>
          <hr className={styles.introHrStyle} />
          <p className={styles.introSubtitleStyle}>
            Вы получите идеальный стих,{' '}
            <span className="font-bold">решающий вашу задачу!</span>
          </p>
          <div className="md:hidden block">
            <IntroCarousel />
          </div>
          <CallToAction />
        </div>

        <div className={styles.desktopCarousel}>
          <IntroCarousel />
        </div>
      </div>
    </section>
  );
}