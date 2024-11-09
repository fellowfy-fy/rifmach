'use client';
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { GratitudeLetter } from '../GratitudeLetter/GratitudeLetter';
import styles from './GratitudeLettersCarousel.module.css';

interface CarouselProps {
  letters: string[]; // Array of image paths for gratitude letters
}

const breakpoints = [
  { width: 1439, items: 4 },
  { width: 1280, items: 5 },
  { width: 1024, items: 4 },
  { width: 768, items: 3 },
  { width: 640, items: 2 },
  { width: 0, items: 1 },
];

export default function GratitudeLettersCarousel({ letters }: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [totalDots, setTotalDots] = useState(6);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;

      if (width > 1439) {
        setTotalDots(6);
        setItemsPerPage(5);
      }

      if (width <= 1439) {
        setTotalDots(6);
        setItemsPerPage(4);
      }

      if (width <= 640) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };

    handleResize(); // Set initial value
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalPages = Math.ceil(totalDots);

  const nextSlide = () => {
    setCurrentIndex(prev => {
      const nextIndex = prev + 1;
      return nextIndex >= letters.length - 4 ? 0 : nextIndex;
    });
  };

  const prevSlide = () => {
    setCurrentIndex(prev => {
      const prevIndex = prev - 1;
      return prevIndex < 0 ? letters.length - 5 : prevIndex;
    });
  };

  const goToPage = (pageIndex: number) => {
    const newIndex = pageIndex * itemsPerPage;
    setCurrentIndex(newIndex >= letters.length ? 0 : newIndex);
  };

  return (
    <div className={styles.carouselWrapper}>
      <button
        onClick={prevSlide}
        className={`${styles.navButton} ${styles.prevButton}`}
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} className='text-accent hover:text-[#FF9900]'/>
      </button>

      <div className={styles.carouselViewport}>
        <div
          className={styles.carouselContainer}
          style={{ transform: `translateX(${-currentIndex * (197 + 45)}px)` }}
        >
          {letters.map((letter, index) => (
            <div key={index} className={styles.letterWrapper}>
              <GratitudeLetter path={letter} />
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={nextSlide}
        className={`${styles.navButton} ${styles.nextButton}`}
        aria-label="Next slide"
      >
        <ChevronRight size={24} className='text-accent hover:text-[#FF9900]'/>
      </button>

      {!isMobile && (
        <div className={styles.dotsContainer}>
          {Array.from({ length: totalDots }).map((_, index) => (
            <button
              key={index}
              onClick={() => goToPage(index)}
              className={`${styles.dot} ${
                Math.floor(currentIndex / 1) === index ? styles.activeDot : ''
              }`}
              aria-label={`Go to page ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
