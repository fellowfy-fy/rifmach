import { useState, useEffect } from 'react';
import { CustomButton } from '@/components/ui/CustomButton/CustomButton';
import styles from "./LeaveReview.module.css";

interface ThankYouMessageProps {
  onClose: () => void;
}

export const ThankYouMessage: React.FC<ThankYouMessageProps> = ({ onClose }) => {
  const [counter, setCounter] = useState(10);

  useEffect(() => {
    const timer = setInterval(() => {
      setCounter((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          onClose();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => {
      if (timer) {
        clearInterval(timer);
      }
    };
  }, [onClose]);

  return (
    <div className="text-center flex flex-col justify-center font-bold text-headers items-center font-harmonia w-[20rem] md:w-[36rem] h-[40rem]">
      <p className="text-[1.125rem] font-bold my-10 absolute top-2">
          Оцените нашу работу
      </p>
      <p className="text-center text-[1.125rem] font-bold">
        Спасибо, ваш отзыв принят
      </p>
      <p className="text-[1rem] py-[3.5rem] text-textsmain leading-5">
        Опубликуем на сайте в ближайшее время
      </p>
      <div className='absolute bottom-12 w-[15rem]'>
        <CustomButton
          type="main"
          customClass={styles.button}
          onClick={onClose}
        >
          закрыть окно ({counter})
        </CustomButton>
      </div>
    </div>
  );
};