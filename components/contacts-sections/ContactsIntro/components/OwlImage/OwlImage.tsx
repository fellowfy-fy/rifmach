import Image from 'next/image';
import { useEffect } from 'react';
import styles from '../../ContactsIntro.module.css';
import { useState } from 'react';

interface OwlImageProps {
  className?: string;
}

export const OwlImage = ({ className }: OwlImageProps) => {
  const [isWorkingHours, setIsWorkingHours] = useState(true);

  useEffect(() => {
    const checkWorkingHours = () => {
      // Получаем текущее время в Москве
      const moscowTime = new Date().toLocaleString('en-US', {
        timeZone: 'Europe/Moscow',
      });
      const moscowHours = new Date(moscowTime).getHours();

      // Рабочие часы с 10:00 до 22:00 по Москве
      setIsWorkingHours(moscowHours >= 10 && moscowHours < 22);
    };

    // Проверяем время при загрузке
    checkWorkingHours();

    // Проверяем каждую минуту
    const interval = setInterval(checkWorkingHours, 60000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.owlContainer}>
      <Image
        src={isWorkingHours ? '/icons/online.svg' : '/icons/offline.svg'}
        alt={isWorkingHours ? 'онлайн' : 'оффлайн'}
        width={306}
        height={60}
        className={`block md:hidden w-[306px] h-[33px] mt-[32px]`}
      />

      <Image
        src={isWorkingHours ? '/icons/online.svg' : '/icons/offline.svg'}
        alt={isWorkingHours ? 'онлайн' : 'оффлайн'}
        width={306}
        height={60}
        className="absolute left-[40px] top-0 hidden md:block w-[311px]"
      />

      <Image
        src={
          isWorkingHours
            ? '/characters/owl-globe.svg'
            : '/characters/owl-sleep.svg'
        }
        alt={isWorkingHours ? 'Сова с глобусом' : 'Спящая сова'}
        width={550}
        height={550}
        className="block md:absolute w-[323px] md:w-[526px] bottom-[30px] right-0"
      />
    </div>
  );
};
