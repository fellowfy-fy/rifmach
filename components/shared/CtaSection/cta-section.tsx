'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import CallToAction from '../Call-to-action.tsx/call-to-action';
import styles from './CTASection.module.css';

interface CTASectionProps {
  title: string | JSX.Element;
  subtitle: string | JSX.Element;
  owlImage: string;
  owlImageMobile?: string;
  alternateOwlImage?: string;
  alternateOwlImageMobile?: string;
  cloudImageMobile: string;
  hasArch?: boolean;
  owlDesktopClasses?: string;
  owlMobileClasses?: string;
  owlDesktopWidthProp?: number;
  owlDesktipHeightProp?: number;
  owlMobileWidthProp?: number;
  owlMobileHeightProp?: number;
}

const CTASection = ({
  title,
  subtitle,
  owlImage,
  owlImageMobile,
  alternateOwlImage,
  alternateOwlImageMobile,
  cloudImageMobile,
  owlDesktopClasses,
  owlMobileClasses,
  owlDesktopWidthProp,
  owlDesktipHeightProp,
  owlMobileWidthProp,
  owlMobileHeightProp,
}: CTASectionProps) => {
  const [currentOwlImage, setCurrentOwlImage] = useState(owlImage);
  const [currentOwlImageMobile, setCurrentOwlImageMobile] = useState(
    owlImageMobile || owlImage
  );
  const [isDesktop, setIsDesktop] = useState(false);

  const owlImageClassNameDesktop =
    owlDesktopClasses ||
    'hidden md:block md:absolute bottom-[-80px] right-[1%] max-h-[297px] md:min-h-[300px] xl:min-h-[380px] 2xl:min-h-[420px] transition-opacity duration-800';

  const owlImageClassNameMobile =
    owlMobileClasses ||
    'block md:hidden max-h-[297px] transition-opacity duration-800';

  const owlMobileHeight = owlMobileHeightProp || 297;
  const owlMobileWidth = owlMobileWidthProp || 297;
  const owlDesktopHeight = owlDesktipHeightProp || 420;
  const owlDesktopWidth = owlDesktopWidthProp || 420;

  useEffect(() => {
    const checkIsDesktop = () => {
      setIsDesktop(window.innerWidth >= 768);
    };
    checkIsDesktop();
    window.addEventListener('resize', checkIsDesktop);
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
    <section className="relative md:h-[552px] overflow-hidden bg-gradient-to-r from-[#70B3FF] to-[#70DBFC]">
      <div className="absolute inset-0 pointer-events-none flex justify-center">
        <Image
          src={cloudImageMobile}
          alt="Mobile Clouds"
          width={375}
          height={200}
          className="w-full h-auto object-cover block md:hidden absolute bottom-[-2rem]"
        />
        <img
          src="/clouds/cloud-cta.svg"
          alt="Desktop Clouds"
          className="max-w-[1920px] w-full h-auto object-cover hidden md:block 3xl:hidden absolute bottom-[-2px]"
        />
        <img
          src="/clouds/clouds-wide.svg"
          alt="Desktop Clouds"
          className="max-w-[2100px] w-full h-auto object-cover hidden 3xl:block absolute bottom-0"
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
      <div className={styles.customContainer}>
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
              consentAlign="center"
              consentColor="white"
              consentMobileAlign="center"
              consentMobileColor="white"
            />
          </div>
          <Image
            src={currentOwlImageMobile}
            alt="Owl"
            width={owlMobileWidth}
            height={owlMobileHeight}
            className={owlImageClassNameMobile}
          />
          <Image
            src={currentOwlImage}
            alt="Owl"
            width={owlDesktopWidth}
            height={owlDesktopHeight}
            className={owlImageClassNameDesktop}
          />
        </div>
      </div>
    </section>
  );
};

export default CTASection;
