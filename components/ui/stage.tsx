"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const images = [
  "/stage1.svg",
  "/stage2.svg",
  "/stage3.svg",
  "/stage4.svg",
];

export const Stage = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Меняем изображение каждые 5 секунд и отключаем цикличность
  useEffect(() => {
    if (currentImageIndex < images.length - 1) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) => prevIndex + 1);
      }, 5000); // Интервал смены изображения 5 секунд

      return () => clearInterval(interval); // Очистка интервала
    }
  }, [currentImageIndex]);

  return (
    <div className="relative w-full h-screen flex justify-center items-center">
      <motion.img
        key={currentImageIndex}
        src={images[currentImageIndex]}
        alt="Animated Scene"
        className="w-full h-auto"
        initial={{ opacity: 0, scale: 0.8 }} // Начальное состояние (прозрачное и уменьшенное)
        animate={{ opacity: 1, scale: 1 }}   // Анимация (плавное появление и увеличение)
        transition={{ duration: 0.8 }}       // Длительность анимации
      />
    </div>
  );
};
