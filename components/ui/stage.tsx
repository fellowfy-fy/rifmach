"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const images = [
  "/stage1.svg",
  "/stage2.svg",
  "/stage3.svg",
  "/stage4.svg",
];

const imagesmob = [
  "/stage1mob.svg",
  "/stage2mob.svg",
  "/stage3mob.svg",
];

export const Stage = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Функция для проверки размеров экрана
  const checkIsMobile = () => {
    if (window.innerWidth <= 768) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  // Устанавливаем слушатель изменения размера окна
  useEffect(() => {
    checkIsMobile(); // Проверка при первой загрузке
    window.addEventListener("resize", checkIsMobile); // Добавление слушателя

    return () => window.removeEventListener("resize", checkIsMobile); // Очистка слушателя при размонтировании компонента
  }, []);

  // Меняем изображение каждые 5 секунд и отключаем цикличность
  useEffect(() => {
    const selectedImages = isMobile ? imagesmob : images;
    if (currentImageIndex < selectedImages.length - 1) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) => prevIndex + 1);
      }, 5000); // Интервал смены изображения 5 секунд

      return () => clearInterval(interval); // Очистка интервала
    }
  }, [currentImageIndex, isMobile]);

  const selectedImages = isMobile ? imagesmob : images;

  return (
    <div className="relative w-full h-screen flex justify-center items-center">
      <motion.img
        key={currentImageIndex}
        src={selectedImages[currentImageIndex]}
        alt="Animated Scene"
        className="w-full h-auto"
        initial={{ opacity: 0, scale: 0.8 }} // Начальное состояние (прозрачное и уменьшенное)
        animate={{ opacity: 1, scale: 1 }}   // Анимация (плавное появление и увеличение)
        transition={{ duration: 0.8 }}       // Длительность анимации
      />
    </div>
  );
};
