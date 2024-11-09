import { useState, useEffect } from 'react';
import { Modal } from '@/components/ui/Modal/Modal';
import { ContactForm } from './ContactForm';
import { ConfirmMessage } from './ConfirmMessage';
import Image from 'next/image';

interface ContactusProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

export const Contactus: React.FC<ContactusProps> = ({ isOpen, onOpenChange }) => {
  const [isWorkingHours, setIsWorkingHours] = useState(true);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [counter, setCounter] = useState(10);

  useEffect(() => {
    const checkWorkingHours = () => {
      const moscowTime = new Date().toLocaleString('en-US', {
        timeZone: 'Europe/Moscow',
      });
      const moscowHours = new Date(moscowTime).getHours();
      setIsWorkingHours(moscowHours >= 10 && moscowHours < 22);
    };
    
    checkWorkingHours();
    const interval = setInterval(checkWorkingHours, 60000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (isSubmitted) {
      const timer = setInterval(() => {
        setCounter((prev) => {
          if (prev <= 1) {
            clearInterval(timer);
            onOpenChange(false);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [isSubmitted, onOpenChange]);

  const handleSubmit = () => {
    setIsSubmitted(true);
    setCounter(10);
  };

  useEffect(() => {
    if (!isOpen) {
      setIsSubmitted(false);
      setCounter(10);
    }
  }, [isOpen]);

  return (
    <Modal isOpen={isOpen} onClose={() => onOpenChange(false)}>
      <div className="w-[355px] h-[490px] md:w-[578px] md:h-[446px] bg-white relative font-harmonia rounded-[5px]">
        <div className='h-[105px] md:h-[144px] bg-gradient-to-r from-[#70B3FF] to-[#70DBFC] rounded-t-[5px] z-50'>
                    <Image
            src={isWorkingHours ? '/icons/online-modal-mob.svg' : '/icons/offline-modal-mob.svg'}
            alt={isWorkingHours ? 'онлайн' : 'оффлайн'}
            width={306}
            height={60}
            className="block md:hidden w-[306px] h-[33px] absolute left-1/2 -translate-x-1/2 top-36 z-50"
          />
          <Image
            src={isWorkingHours ? '/icons/online-modal.svg' : '/icons/offline-modal.svg'}
            alt={isWorkingHours ? 'онлайн' : 'оффлайн'}
            width={306}
            height={60}
            className="absolute left-[130px] top-32 hidden md:block w-[311px] z-50"
          />
          <Image
            src={isWorkingHours ? '/characters/owl-online-modal.svg' : '/characters/owl-offline-modal.svg'}
            alt={isWorkingHours ? 'Сова онлайн' : 'Сова оффлайн'}
            width={550}
            height={550}
            className="absolute -top-6 md:-top-16 right-[133px] md:right-60 w-[98px] h-[158px] md:w-[112px] md:h-[180px] z-50"
          />
          <span className='absolute top-7 left-7 md:left-24 text-white text-[18px] font-semibold'>ОБРАТНЫЙ</span>
          <span className='absolute top-7 right-12 md:right-28 text-white text-[18px] font-semibold'>ЗВОНОК</span>
        </div>

        {!isSubmitted ? (
          <ContactForm onSubmit={handleSubmit} />
        ) : (
          <ConfirmMessage counter={counter} onClose={() => onOpenChange(false)} />
        )}
        
        <img
          src="/clouds/bgcloud.svg"
          alt="Background"
          className='absolute top-7 md:top-4 w-[578px] h-auto object-cover z-0'
        />
      </div>
    </Modal>
  );
};