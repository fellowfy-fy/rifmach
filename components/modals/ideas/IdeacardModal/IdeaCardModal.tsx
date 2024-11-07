"use client";
import { PhotoProvider, PhotoView } from 'react-photo-view';
import Image from 'next/image';
import { useState } from 'react';
import styles from './IdeaCard.module.css';
import { IdeaCardType } from '@/constants/ideas';

interface IdeaCardProps {
  idea: IdeaCardType;
}

export default function IdeaCard({ idea }: IdeaCardProps) {
  const { imageSrc, imageAlt } = idea;
  const [isHovered, setIsHovered] = useState(false);

  return (
    <PhotoProvider>
      <PhotoView src={imageSrc}>
        <div
          className={styles.ideaWrapper}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <Image
            src="/icons/glass.svg"
            width={57}
            height={57}
            alt="Лупа"
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              zIndex: 10,
              transform: 'translate(-50%, -50%)',
              transition: 'opacity 0.3s ease',
              opacity: isHovered ? 1 : 0,
            }}
          />
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={167}
            height={236}
            className="w-full h-full object-cover"
          />
        </div>
      </PhotoView>
    </PhotoProvider>
  );
}