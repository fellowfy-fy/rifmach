import { ModalContainer } from '@/app/(checkout)/checkout/modal';
import { CustomButton } from '@/components/ui/CustomButton/CustomButton';
import Image from 'next/image';
import { DialogClose } from '@/components/ui/dialog';
import styles from "./Success.module.css";
import { useState, useEffect } from 'react';

export const SuccessModal = ({
  isOpen,
  onOpenChange
}: {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}) => {
  const [counter, setCounter] = useState(10);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    
    if (isOpen) {
      setCounter(10); // Сброс таймера при открытии
      
      timer = setInterval(() => {
        setCounter((prev) => {
          if (prev <= 1) {
            clearInterval(timer);
            onOpenChange(false);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }

    return () => {
      if (timer) {
        clearInterval(timer);
      }
    };
  }, [isOpen, onOpenChange]);

  return (
    <ModalContainer
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      className="!p-0 md:!h-[274px] md:!w-[579px] !w-[370px] !h-[343px] bg-white flex items-center justify-center"
    >
      <DialogClose className="absolute right-[17px] top-[17px] hover:opacity-80 transition-opacity">
        <Image
          src="/icons/close.svg"
          alt="Закрыть"
          width={12}
          height={12}
        />
        <span className="sr-only">Закрыть</span>
      </DialogClose>
      <div className="flex flex-col items-center text-center justify-center h-full px-[35px] md:px-[42px]">
        <h2 className="text-center text-[18px] text-headers font-bold">
          Ваше сообщение отправлено
        </h2>
          <p className="text-[16px] py-[54px] text-textsmain leading-5 w-[165px] md:w-full">
            Спасибо, мы ответим в ближайшее время
          </p>
        <CustomButton
          type="main"
          customClass={styles.successButton}
          onClick={() => onOpenChange(false)}
        >
          закрыть окно ({counter})
        </CustomButton>
      </div>
    </ModalContainer>
  );
};