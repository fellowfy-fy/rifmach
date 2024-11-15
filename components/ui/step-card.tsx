"use client"
import Image from "next/image";
import { useState } from "react";

interface StepsCardProps {
  imageSrc: string;
  hoverImageSrc?: string;
  heading: string;
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
      className="border w-full md:w-[281px] pl-[25px] pr-[30px] py-[40px] rounded-[5px] relative mb-[39px] md:mb-0 transition-colors duration-300 hover:border-main"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="absolute top-[-20px] w-[40px] h-[40px] flex items-center justify-center rounded-full text-main font-bold text-lg bg-white">
        {stepNumber < 10 ? `0${stepNumber}.` : stepNumber}
      </div>
      <div className="relative h-[60px] flex items-center">
        {isHovered && hoverImageSrc ? (
          <Image
            src={hoverImageSrc}
            width={hoverImageWidth || imageWidth}
            height={hoverImageHeight || imageHeight}
            alt={`Step ${stepNumber} hover`}
          />
        ) : (
          <div className={isThirdCard ? "relative w-full flex left-1" : ""}>
            <Image
              src={imageSrc}
              width={imageWidth}
              height={imageHeight}
              alt={`Step ${stepNumber}`}
            />
          </div>
        )}
      </div>
      <h3 className="text-h3 text-headers bold mt-[41px] text-wrap-balance">
        {heading}
      </h3>
      <p className="text-h4 text-textsmain regular mt-[11px] leading-6">
        {text}
      </p>
    </div>
  );
}