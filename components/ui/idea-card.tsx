"use client"
import Image from 'next/image';
import { CustomButton } from './CustomButton/CustomButton';
import { useState } from 'react';
import { Ideas } from '../modals/Ideas/Ideas';

interface IdeaCardProps {
  imageSrc: string;
  heading: string;
  text: string;
  imageWidth: number;
  imageHeight: number;
  showButton?: boolean;
}

export default function IdeaCard({
  imageSrc,
  heading,
  text,
  imageWidth,
  imageHeight,
  showButton,
}: IdeaCardProps) {
  const [isIdeasModalOpen, setIsIdeasModalOpen] = useState(false);

  return (
    <>
      <div className="border-[2px] transition-colors duration-300 hover:border-main w-full md:w-[378px] h-auto md:h-[377px] pl-[25px] pr-[24px] py-[20px] rounded-[5px] relative mb-[39px] md:mb-0 flex flex-col">
        <div>
          <div className="h-[105px]">
            <Image
              src={imageSrc}
              width={imageWidth}
              height={imageHeight}
              alt="image"
            />
          </div>
          <h3 className="text-h3 text-main bold mt-[20px] text-wrap-balance">
            {heading}
          </h3>
          <p className="text-h4 text-textsmain regular mt-[11px] leading-6">
            {text}
          </p>
        </div>
        {showButton && (
          <center className="mt-auto pt-4">
            <CustomButton 
              type="secondary"
              onClick={() => setIsIdeasModalOpen(true)}
            >
              узнать подробности
            </CustomButton>
          </center>
        )}
      </div>

      <Ideas 
        isOpen={isIdeasModalOpen}
        onOpenChange={setIsIdeasModalOpen}
      />
    </>
  );
}