"use client"
import Image from "next/image";
import { useState } from "react";

interface StepsCardProps {
  imageSrc: string;
  hoverImageSrc?: string;
  heading: string;
  headingClassName?: string;
  text: string;
  stepNumber: number;
  imageWidth?: number;
  imageHeight?: number;
  hoverImageWidth?: number;
  hoverImageHeight?: number;
}

export default function StepsCard({
  imageSrc,
  hoverImageSrc,
  heading,
  headingClassName,
  text,
  stepNumber,
  imageWidth,
  imageHeight,
  hoverImageWidth,
  hoverImageHeight
}: StepsCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const isThirdCard = stepNumber === 3;

  return (
    <div
      className="border-[2px] w-full md:w-[281px] px-[20px] pt-[30px] pb-[1.5rem] rounded-[5px] relative mb-[39px] md:mb-0 transition-colors duration-300 hover:border-main font-harmonia"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="absolute top-[-20px] w-[40px] h-[40px] flex items-center justify-center rounded-full text-main font-bold text-lg bg-white">
        {stepNumber < 10 ? `0${stepNumber}.` : stepNumber}
      </div>
      <div className="relative h-[60px] flex items-center">
        <div className="absolute w-full h-full flex items-center">
          <div
            className={`absolute w-full h-full flex items-center transition-opacity duration-300 ${
              isHovered ? 'opacity-0' : 'opacity-100'
            }`}
          >
            <div className={isThirdCard ? "relative w-full flex left-1" : ""}>
              <Image
                src={imageSrc}
                width={imageWidth}
                height={imageHeight}
                alt={`Step ${stepNumber}`}
              />
            </div>
          </div>
          {hoverImageSrc && (
            <div
              className={`absolute w-full h-full flex items-center transition-opacity duration-300 ${
                isHovered ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <Image
                src={hoverImageSrc}
                width={hoverImageWidth || imageWidth}
                height={hoverImageHeight || imageHeight}
                alt={`Step ${stepNumber} hover`}
              />
            </div>
          )}
        </div>
      </div>
      <div className="h-10 w-[12rem]">
        <h3 className={`text-[1rem] text-[#29383D] mt-[41px] uppercase font-bold leading-6 ${headingClassName}`}>
          {heading}
        </h3>
      </div>
      <p className="text-[0.875rem] text-textsmain regular mt-[13px] leading-[1.375rem] font-regular">
        {text}
      </p>
    </div>
  );
}