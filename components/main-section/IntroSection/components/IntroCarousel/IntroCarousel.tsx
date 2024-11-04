'use client';
import React, { useEffect } from 'react';
import { getIntroData } from './IntroCarousel.utils';
import { IntroCloudDesktop } from './components/IntroCloudDesktop/IntroCloudDesktop';
import styles from './IntroCarousel.module.css';
import Image from 'next/image';
import { IntroCloudMobile } from './components/IntroCloudMobile/IntroCloudMobile';

export const IntroCarousel: React.FC = () => {
  const [count, setCount] = React.useState(0);
  const [progress, setProgress] = React.useState(0);
  const [isMobile, setIsMobile] = React.useState(false);

  const strokeLength = isMobile ? 61 : 74;
  const delay = 7000;
  const stepDuration = 10;
  const progressStep = strokeLength / (delay / stepDuration);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 767px)');
    const handleMediaQueryChange = (event: MediaQueryListEvent) => {
      setIsMobile(event.matches); // Update state based on the media query
    };
    setIsMobile(mediaQuery.matches);
    mediaQuery.addEventListener('change', handleMediaQueryChange);
    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    };
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount(prevCount => {
        const nextCount =
          prevCount < getIntroData(false).length - 1 ? prevCount + 1 : 0;
        setProgress(0); // Reset progress when switching slides
        return nextCount;
      });
    }, delay);

    return () => clearInterval(intervalId); // Cleanup on unmount
  }, [delay, count]);

  useEffect(() => {
    const progressIntervalId = setInterval(() => {
      setProgress(prevProgress => {
        const nextProgress = prevProgress + progressStep;
        return nextProgress >= strokeLength ? strokeLength : nextProgress;
      });
    }, stepDuration);

    return () => clearInterval(progressIntervalId); // Cleanup on unmount
  }, [stepDuration, progressStep, strokeLength]);

  const handleSwitchSlide = (index: number) => {
    setCount(index);
    setProgress(0); // Reset progress when switching slides
  };

  const handleClickNextButton = () => {
    setCount(prevCount => {
      const nextCount =
        prevCount < getIntroData(false).length - 1 ? prevCount + 1 : 0;
      setProgress(0); // Reset progress when switching slides
      return nextCount;
    });
  };

  return (
    <div className={styles.introCarouselWrapper}>
      <div className="relative w-fit mb-[-20px] md:mb-[0]">
        <IntroCloudDesktop
          className={styles.introCarouselCloud}
          progress={progress}
        />
        <IntroCloudMobile
          className={styles.introCarouselCloudMobile}
          progress={progress}
        />
        <div className={styles.introCarouselCurrentPointStyle}>{count + 1}</div>
        <p className={styles.introCarouselPointStyle}>
          {getIntroData(false)[count].text}
        </p>
        <div
          className={styles.nextButton}
          onClick={() => handleClickNextButton()}
        ></div>
        <div className={styles.buttonsWrapper}>
          {getIntroData(false).map((data, index) => {
            return (
              <div
                key={data.id}
                onClick={() => handleSwitchSlide(index)}
                className={`${styles.switchButtonStyle} ${
                  index === count && styles.activeSwitch
                }`}
              />
            );
          })}
        </div>
      </div>
      {getIntroData(isMobile).map((picture, index) => {
        return (
          <div
            key={picture.id}
            className={`${styles.commonImageHolder} ${picture.customClass} ${
              picture.id === count + 1 ? styles.show : styles.hide
            }`}
          >
            <Image alt={picture.alt} src={picture.imgUrl} fill={true} />
          </div>
        );
      })}
    </div>
  );
};
