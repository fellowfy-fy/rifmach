import Image from 'next/image';
import { Separator } from '@/components/ui/separator';
import { BreadcrumbWithCustomSeparator } from '../main-section/breadcrumbs';
import { CustomButton } from '@/components/ui/CustomButton/CustomButton';
import styles from './review-intro.module.css';

export default function ReviewIntro() {
  return (
    <section className="relative bg-gradient-to-r from-[#70B3FF] to-[#70DBFC] px-4 md:px-10 lg:px-20 xl:px-[135px] 2xl:px-[15%] h-[600px] md:h-[552px] overflow-hidden items-center">
      <div className="pt-[19px] md:pt-[21px]">
        <BreadcrumbWithCustomSeparator currentPage="Отзывы" />
      </div>
      <div className="absolute inset-0 pointer-events-none w-full">
        <div className="block md:hidden absolute bottom-[-12px] w-full">
          <img
            src="/clouds/clouds-mob.svg"
            alt="Mobile Clouds"
            className="w-full h-auto object-cover"
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

      <div className="relative z-10 flex md:flex-row flex-col">
        <div className="flex flex-col">
          <div className="flex flex-col md:flex-row">
            <div className="flex flex-col mb-[31px] md:mb-[24px]">
              <h1 className="text-[24px] md:text-h2 text-white pt-[19px] md:pt-[49px] uppercase">
                отзывы о заказах
                <br />
                <span className="bold">в «Рифмаче»</span>
              </h1>
              <hr className="hidden md:block w-[50px] h-[2px] bg-white rounded-sm mt-[10px] md:mt-[22px]" />
              <p className="text-h3 md:text-[18px] text-white mt-4 regular max-w-[544px]">
                Мнение клиентов о нашей работе — лучший мотиватор <br />
                <span className="bold">
                  держать планку и продолжать развитие
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
          src="/characters/owl-post.svg"
          className="md:absolute bottom-[-130px] right-[1%] max-h-[297px] md:max-h-[400px]"
        />
        <CustomButton type="main" customClass={styles.reviewIntroButtonMobile}>
          оставить отзыв
        </CustomButton>
      </div>
    </section>
  );
}
