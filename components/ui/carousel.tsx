"use client"
import React, { useState, useEffect, TouchEvent } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface CarouselProps {
  items: JSX.Element[];
  itemsPerBreakpoint: {
    mobile: number;
    md: number;
    xl: number;
  };
  className?: string;
  containerClassName?: string;
  itemClassName?: string;
}

export default function Carousel({ 
  items, 
  itemsPerBreakpoint,
  className = "", 
  containerClassName = "",
  itemClassName = ""
}: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [screenWidth, setScreenWidth] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const minSwipeDistance = 50;

  const getItemsPerPage = () => {
    if (screenWidth < 768) return itemsPerBreakpoint.mobile;
    if (screenWidth < 1280) return itemsPerBreakpoint.md;
    return itemsPerBreakpoint.xl;
  };

  const itemsPerPage = getItemsPerPage();
  const totalPages = Math.ceil(items.length / itemsPerPage);

  useEffect(() => {
    const updateScreenWidth = () => {
      setScreenWidth(window.innerWidth);
    };
    
    updateScreenWidth();
    window.addEventListener('resize', updateScreenWidth);
    return () => window.removeEventListener('resize', updateScreenWidth);
  }, []);

  useEffect(() => {
    const maxIndex = items.length - itemsPerPage;
    if (currentIndex > maxIndex) {
      setCurrentIndex(Math.max(0, maxIndex));
    }
  }, [itemsPerPage, items.length, currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev + itemsPerPage >= items.length ? 0 : prev + itemsPerPage
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev - itemsPerPage < 0 ? items.length - itemsPerPage : prev - itemsPerPage
    );
  };

  const goToPage = (pageIndex: number) => {
    setCurrentIndex(pageIndex * itemsPerPage);
  };

  const onTouchStart = (e: TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isSwipe = Math.abs(distance) > minSwipeDistance;
    if (isSwipe) {
      if (distance > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    }
  };

  return (
    <div className={`relative ${containerClassName}`}>
      <div className={`relative overflow-hidden ${className}`}>
        <div
          className="flex transition-transform duration-300 ease-in-out touch-pan-y"
          style={{
            transform: `translateX(-${(currentIndex * 100) / itemsPerPage}%)`,
          }}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          {items.map((item, index) => (
            <div
              key={index}
              className={`px-2 ${itemClassName}`}
              style={{
                minWidth: `${100 / itemsPerPage}%`
              }}
            >
              {item}
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={prevSlide}
        className="absolute left-[-40px] top-1/2 transform -translate-y-1/2 p-2 transition-colors text-accent hover:text-[#FF9900] hidden md:block"
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-[-40px] top-1/2 transform -translate-y-1/2 p-2 transition-colors text-accent hover:text-[#FF9900] hidden md:block"
        aria-label="Next slide"
      >
        <ChevronRight size={24} />
      </button>

      <div className="flex justify-center gap-3 md:gap-2 mt-6">
        {Array.from({ length: totalPages }).map((_, index) => (
          <button
            key={index}
            onClick={() => goToPage(index)}
            className={`w-3 h-3 md:w-2 md:h-2 rounded-full transition-colors ${
              Math.floor(currentIndex / itemsPerPage) === index
                ? 'bg-main'
                : 'bg-gray-300'
            }`}
            aria-label={`Go to page ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}