"use client"
import Image from 'next/image';
import { ThemeCardType } from '@/constants/themeCards';

interface ThemeCardProps {
  theme: ThemeCardType;
}

export default function ThemeCard({ theme }: ThemeCardProps) {
  const { iconSrc, iconAlt, title, subtitle } = theme;

  return (
    <div className="w-[270px] h-[236px] border hover:border-main transition-colors duration-300 rounded-[5px] flex flex-col items-center px-5 py-[30px] text-center">
        <div className='h-24'>
            <Image
                src={iconSrc}
                alt={iconAlt}
                width={73}
                height={80}
                className="mb-[15px]"
            />
        </div>
      <h3 className="text-[16px] font-semibold text-headers mb-[10px] w-[150px]">
        {title}
      </h3>
      <p className="text-[14px] text-textsmain leading-[16px]">
        {subtitle}
      </p>
    </div>
  );
}