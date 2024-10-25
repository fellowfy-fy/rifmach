"use client";
import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface CarouselProps {
  items: JSX.Element[];
}

export default function Carousel({ items }: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Определяем количество видимых элементов в зависимости от размера экрана
  const itemsPerPage = isMobile ? 1 : 3;
  const totalPages = Math.ceil(items.length / itemsPerPage);

  // Отслеживаем изменение размера экрана
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768); // 768px - breakpoint для md
    };

    // Проверяем при монтировании
    checkIfMobile();

    // Добавляем слушатель изменения размера окна
    window.addEventListener('resize', checkIfMobile);

    // Очищаем слушатель при размонтировании
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

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

  return (
    <div className="relative">
      {/* Основной контейнер с отзывами */}
      <div className="relative overflow-hidden">
        <div
          className="flex transition-transform duration-300 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)`,
          }}
        >
          {items.map((item, index) => (
            <div
              key={index}
              className={`${
                isMobile ? 'min-w-full' : 'min-w-[calc(100%/3)]'
              } px-2`}
            >
              {item}
            </div>
          ))}
        </div>
      </div>

      {/* Кнопки навигации */}
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

      {/* Пагинация точками */}
      <div className="flex justify-center gap-2 mt-6">
        {Array.from({ length: totalPages }).map((_, index) => (
          <button
            key={index}
            onClick={() => goToPage(index)}
            className={`w-2 h-2 rounded-full transition-colors ${
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