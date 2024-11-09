"use client"
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Separator } from '@/components/ui/separator';
import { BreadcrumbWithCustomSeparator } from '../main-section/breadcrumbs';
import { CustomButton } from '@/components/ui/CustomButton/CustomButton';
import styles from './review-intro.module.css';

export default function ReviewIntro() {
    const [imageIndex, setImageIndex] = useState(0);
  const images = ['/characters/owl-post.svg', '/characters/owl-post-alt.svg'];

  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 7000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <section className={styles.sectionWrapper}>
      <div className={styles.breadcrumbsWrapper}>
        <BreadcrumbWithCustomSeparator currentPage="Отзывы" />
      </div>
      
      <div className="absolute inset-0 pointer-events-none flex justify-center">
        <div className="block md:hidden absolute bottom-0 bg-white h-[120px] w-full">
          <img
            src="/clouds/clouds-mob.svg"
            alt="Mobile Clouds"
            className="w-full h-auto object-cover absolute bottom-20"
          />
        </div>
        <img
          src="/clouds/clouds.svg"
          alt="Desktop Clouds"
          className="max-w-[1920px] w-full h-auto object-cover hidden md:block 3xl:hidden absolute bottom-[-2px]"
        />
        <img
          src="/clouds/clouds-wide.svg"
          alt="Desktop Clouds"
          className="max-w-[2100px] w-full h-auto object-cover hidden 3xl:block absolute bottom-0"
        />
      </div>
      
      <div className={styles.customContainer}>
        <div className="relative z-10 flex md:flex-row flex-col">
          <div className="flex flex-col">
            <div className="flex flex-col md:flex-row">
              <div className="flex flex-col mb-[31px] md:mb-[24px]">
                <h1 className="text-[24px] md:text-h2 text-white pt-[19px] uppercase">
                  отзывы о заказах
                  <br />
                  <span className="font-bold">в «Рифмаче»</span>
                </h1>
                <hr className="hidden md:block w-[50px] h-[2px] bg-white rounded-sm mt-[10px] md:mt-[22px]" />
                <p className="text-h3 md:text-[18px] text-white mt-4 regular max-w-[544px]">
                  Мнение клиентов о нашей работе — лучший мотиватор <br />
                  <span className="bold">
                    держать планку и продолжать развитие
                  </span>
                </p>
              </div>
            </div>
            <div className="flex flex-row items-center gap-3">
              <CustomButton customClass={styles.reviewIntroButton} type="main">
                оставить отзыв
              </CustomButton>
              <Separator
                orientation="vertical"
                className="h-[55px] mx-4 bg-white hidden md:block"
              />
              <div className="gap-2 flex flex-row">
                <Image
                  src="/icons/stars.svg"
                  height={15}
                  width={92}
                  alt="stars"
                />
                <label className="text-h4 text-white">544 отзыва</label>
              </div>
            </div>
          </div>
          <img
            src={images[imageIndex]}
            className="md:absolute bottom-[-130px] md:right-[1%] w-[290px] h-[304px] md:h-[396px] md:w-[415px] mx-auto md:mx-0 mt-[-20px] md:mt-0"
            alt="Owl Post"
          />
          <CustomButton type="main" customClass={styles.reviewIntroButtonMobile}>
            оставить отзыв
          </CustomButton>
        </div>
      </div>
    </section>
  );
}