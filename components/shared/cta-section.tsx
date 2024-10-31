"use client"
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import CallToAction from './Call-to-action.tsx/call-to-action';

interface CTASectionProps {
  title: string | JSX.Element;
  subtitle: string | JSX.Element;
  owlImage: string;
  owlImageMobile?: string;
  alternateOwlImage?: string;
  alternateOwlImageMobile?: string;
  cloudImageMobile: string;
  cloudImageDesktop: string;
  hasArch?: boolean;
}

const CTASection = ({
  title,
  subtitle,
  owlImage,
  owlImageMobile,
  alternateOwlImage,
  alternateOwlImageMobile,
  cloudImageMobile,
  cloudImageDesktop,
}: CTASectionProps) => {
  const [currentOwlImage, setCurrentOwlImage] = useState(owlImage);
  const [currentOwlImageMobile, setCurrentOwlImageMobile] = useState(owlImageMobile || owlImage);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    // Проверяем размер экрана при монтировании
    const checkIsDesktop = () => {
      setIsDesktop(window.innerWidth >= 768); // 768px - breakpoint для md
    };

    // Вызываем сразу при монтировании
    checkIsDesktop();

    // Добавляем слушатель изменения размера окна
    window.addEventListener('resize', checkIsDesktop);

    // Очищаем слушатель при размонтировании
    return () => window.removeEventListener('resize', checkIsDesktop);
  }, []);

  useEffect(() => {
    if (!alternateOwlImage) return;
    const interval = setInterval(() => {
      setCurrentOwlImage(prev =>
        prev === owlImage ? alternateOwlImage : owlImage
      );
      if (owlImageMobile && alternateOwlImageMobile) {
        setCurrentOwlImageMobile(prev =>
          prev === owlImageMobile ? alternateOwlImageMobile : owlImageMobile
        );
      }
    }, 7000);
    return () => clearInterval(interval);
  }, [owlImage, alternateOwlImage, owlImageMobile, alternateOwlImageMobile]);

  return (
    <section className="relative px-4 md:h-[552px] overflow-hidden md:px-10 lg:px-20 xl:px-[135px] 2xl:px-[15%] bg-gradient-to-r from-[#70B3FF] to-[#70DBFC]">
      {/* clouds */}
      <div className="absolute inset-0 pointer-events-none">
        <Image
          src={cloudImageMobile}
          alt="Mobile Clouds"
          width={375}
          height={200}
          className="w-full h-auto object-cover block md:hidden absolute bottom-[-12px]"
        />
        <Image
          src={cloudImageDesktop}
          alt="Desktop Clouds"
          width={1920}
          height={200}
          className="w-full h-auto object-cover hidden md:block absolute bottom-[-2px]"
        />
        <div className="hidden md:block absolute top-0 w-full">
          <Image
            src="/arch-top.svg"
            alt="Desktop arch"
            width={1920}
            height={100}
            className="w-full h-auto object-cover"
          />
        </div>
        <div className="block md:hidden absolute top-0 w-full">
          <Image
            src="/arch-top-mob.svg"
            alt="Mobile arch"
            width={375}
            height={100}
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
      <div className="relative z-10 flex flex-col md:flex-row">
        <div className="flex flex-col mb-8 md:mb-6">
          <h1 className="text-2xl md:text-h2 text-white pt-16 md:pt-32 uppercase md:max-w-[560px]">
            {title}
          </h1>
          <hr className="w-10 md:w-[50px] h-[4px] bg-white rounded-sm mt-2.5 md:mt-5" />
          <p className="text-h3 md:text-[18px] text-white mt-4 regular max-w-[584px] mb-6">
            {subtitle}
          </p>
          <CallToAction
            consentBreak={!isDesktop}
          />
        </div>
        {/* Мобильная версия совы */}
        <Image
          src={currentOwlImageMobile}
          alt="Owl"
          width={297}
          height={297}
          className="block md:hidden max-h-[297px] transition-opacity duration-800"
        />
        {/* Десктопная версия совы */}
        <Image
          src={currentOwlImage}
          alt="Owl"
          width={420}
          height={420}
          className="hidden md:block md:absolute bottom-[-80px] right-[1%] max-h-[297px] md:min-h-[300px] xl:min-h-[380px] 2xl:min-h-[420px] transition-opacity duration-800"
        />
      </div>
    </section>
  );
};

export default CTASection;