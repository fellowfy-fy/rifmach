'use client';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import Image from 'next/image';
import { FC, useState } from 'react';
import styles from './GratitudeLetter.module.css';

interface IGratitudeLetterProps {
  path: string;
  onClick: () => void;
}

export const GratitudeLetter: FC<IGratitudeLetterProps> = props => {
  const { path, onClick } = props;

  const [isHovered, setIsHovered] = useState(false);

  const onMouseEnter = () => {
    setIsHovered(true);
  };

  const onMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <PhotoProvider>
      <PhotoView src={path}>
        <div
          className={styles.letterWrapper}
          onClick={onClick}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
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
          <Image src={path} alt="Благодарственное письмо" fill={true} />
        </div>
      </PhotoView>
    </PhotoProvider>
  );
};
