"use client"; // Обязательно для использования хуков на стороне клиента

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from "@/components/ui/button"; // Импортируем компонент Button

export default function NotFound() {
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
    window.addEventListener('resize', checkIsMobile); // Добавление слушателя

    return () => window.removeEventListener('resize', checkIsMobile); // Очистка слушателя при размонтировании компонента
  }, []);

  // Выбираем изображение в зависимости от размера экрана
  const selectedImage = isMobile ? '/404mob.svg' : '/404.svg';

  return (
    <div className="relative w-full h-screen flex justify-center items-center overflow-hidden">
      <img
        src={selectedImage}
        alt="404 - Not Found"
        className="w-full h-auto"
      />

      {/* Контейнер для абсолютного позиционирования кнопки */}
      <div className="absolute bottom-10 flex justify-center w-full">
        <Link href="/">
          <Button variant="main" className="w-[231px] h-[44px]">
            На главную
          </Button>
        </Link>
      </div>
    </div>
  );
}
