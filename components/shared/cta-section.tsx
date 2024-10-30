"use client"
import React, { useState, useEffect } from 'react';
import CallToAction from './Call-to-action.tsx/call-to-action';

interface CTASectionProps {
  title: string | JSX.Element;
  subtitle: string | JSX.Element;
  owlImage: string;
  cloudImageMobile: string;
  cloudImageDesktop: string;
  hasArch?: boolean;
  alternateOwlImage?: string;
}

const CTASection = ({
  title,
  subtitle,
  owlImage,
  cloudImageMobile,
  cloudImageDesktop,
  alternateOwlImage,
}: CTASectionProps) => {
  const [currentOwlImage, setCurrentOwlImage] = useState(owlImage);

  useEffect(() => {
    if (!alternateOwlImage) return;

    const interval = setInterval(() => {
      setCurrentOwlImage(prev => 
        prev === owlImage ? alternateOwlImage : owlImage
      );
    }, 7000);

    return () => clearInterval(interval);
  }, [owlImage, alternateOwlImage]);

  return (
    <section className="relative px-4 md:h-[552px] overflow-hidden md:px-10 lg:px-20 xl:px-32 2xl:px-[15%] bg-gradient-to-r from-[#70B3FF] to-[#70DBFC]">
      {/* clouds */}
      <div className="absolute inset-0 pointer-events-none">
        <img
          src={cloudImageMobile}
          alt="Mobile Clouds"
          className="w-full h-auto object-cover block md:hidden absolute bottom-[-12px]"
        />
        <img
          src={cloudImageDesktop}
          alt="Desktop Clouds"
          className="w-full h-auto object-cover hidden md:block absolute bottom-[-2px]"
        />
        <div className="hidden md:block absolute top-0 w-full">
          <img
            src="/arch-top.svg"
            alt="Desktop arch"
            className="w-full h-auto object-cover"
          />
        </div>
        <div className="block md:hidden absolute top-0 w-full">
          <img
            src="/arch-top-mob.svg"
            alt="Mobile arch"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
      <div className="relative z-10 flex flex-col md:flex-row">
        <div className="flex flex-col mb-8 md:mb-6">
          <h1 className="text-2xl md:text-h2 text-white pt-16 md:pt-32 uppercase md:max-w-[560px]">
            {title}
          </h1>
          <hr className="w-10 md:w-[50px] h-[2px] bg-white rounded-sm mt-2.5 md:mt-5" />
          <h4 className="text-h3 md:text-[18px] text-white mt-4 regular max-w-[584px] mb-6">
            {subtitle}
          </h4>
          <CallToAction />
        </div>
        <img
          src={currentOwlImage}
          alt="Owl"
          className="md:absolute bottom-[-80px] right-[1%] max-h-[297px] md:min-h-[300px] xl:min-h-[380px] 2xl:min-h-[420px] transition-opacity duration-800"
        />
      </div>
    </section>
  );
};

export default CTASection;