"use client"
import { useState, useEffect } from 'react';
import { BreadcrumbWithCustomSeparator } from '../shared/breadcrumbs';
import Image from 'next/image';

interface OwlImageProps {
  className?: string;
}

const OwlImage = ({ className }: OwlImageProps) => {
  const [isWorkingHours, setIsWorkingHours] = useState(true);

  useEffect(() => {
    const checkWorkingHours = () => {
      // Получаем текущее время в Москве
      const moscowTime = new Date().toLocaleString("en-US", {
        timeZone: "Europe/Moscow",
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
    <>
      <Image 
        src={isWorkingHours ? "/icons/online.svg" : "/icons/offline.svg"} 
        alt={isWorkingHours ? "онлайн" : "оффлайн"}
        width={306}
        height={60} 
        className={`block md:hidden w-[306px] mt-[50px] mb-[-40px] ${className || 'block md:hidden w-[362px] mt-[40px] mb-[-25px]'}`}
      />

      <Image 
        src={isWorkingHours ? "/icons/online.svg" : "/icons/offline.svg"} 
        alt={isWorkingHours ? "онлайн" : "оффлайн"}
        width={306}
        height={60} 
        className={`absolute md:right-8 lg:right-36 xl:right-36 2xl:right-36 top-14 hidden md:block ${className || 'absolute md:right-8 lg:right-36 xl:right-36 2xl:right-36 top-14 w-[370px] hidden md:block'}`}
      />

      <Image 
        src={isWorkingHours ? "/characters/owl-globe.svg" : "/characters/owl-sleep.svg"} 
        alt={isWorkingHours ? "Сова с глобусом" : "Спящая сова"}
        width={550}
        height={550}
        className={`absolute bottom-[-300px] md:bottom-[-70px] md:right-[10px] 2xl:right-[-50px] ${className || 'max-h-[292px] md:max-h-[320px] lg:max-h-[370px] xl:max-h-[426px] 2xl:h-[550px]'}`}
      />
    </>
  );
};

export default function ContactsIntro() {
    const scrollToForm = () => {
    const formElement = document.getElementById('contact-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative bg-gradient-to-r from-[#70B3FF] to-[#70DBFC] px-4 md:px-10 lg:px-20 xl:px-[135px] 2xl:px-auto h-[650px] md:h-[600px] overflow-hidden items-center">
      
      <div className='pt-5'>
        <BreadcrumbWithCustomSeparator variant="default" currentPage="Контакты"/>
      </div>

      <div className="absolute inset-0 pointer-events-none w-full">
        <div className="block md:hidden absolute bottom-[20px] w-full">
          <img
            src="/clouds/clouds-mob.svg"
            alt="Mobile Clouds"
            className="w-full h-auto object-cover"
          />
        </div>
        {/* белое пространство под облаком */}
        <div className="block md:hidden absolute bottom-[-20px] w-full h-[90px] bg-white"></div>

        <div className="hidden md:block absolute bottom-[-2px] w-full">
          <img
            src="/clouds/clouds.svg"
            alt="Desktop Clouds"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>

      <div className="relative z-10 flex md:flex-row flex-col">
        <div className="flex flex-col">
          <div className="flex flex-col md:flex-row">
            <div className="flex flex-col mb-0 md:mb-[24px]">
              <h1 className="text-[32px] md:text-h1 text-white pt-[21px] md:pt-[50px] uppercase mb-[26px]">
                Контакты<br /><span className='font-bold'>студии «Рифмач»</span>
              </h1>
              <hr className="w-[40px] md:w-[50px] h-[4px] bg-white rounded-sm md:mb-[40px] hidden md:block" />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div className="flex flex-row gap-2 items-center">
                    <img src="/icons/phone2.svg" className="h-[15px] md:h-[35px]"/>
                    <div className="flex flex-col text-white">
                        <p className="uppercase text-[13px] hidden md:block">телефон для связи</p>
                        <p className="text-h3  md:text-[18px] md:font-bold">+7 999 333-89-60</p>
                    </div>
                </div>

                <div className="flex flex-row gap-2 items-center">
                    <img src="/icons/email.svg" className="h-[12px] md:h-[30px]"/>
                    <div className="flex flex-col text-white">
                        <p className="uppercase text-[13px] hidden md:block">электронная почта</p>
                        <p className="text-h3  md:text-[18px] md:font-bold underline uppercase">mail@rifmach.ru</p>
                    </div>
                </div>

                <div className="flex flex-row gap-2 items-center">
                    <img src="/icons/case.svg" className="h-[14px] md:h-[36px]"/>
                    <div className="flex flex-col text-white">
                        <p className="uppercase text-[13px] hidden md:block">Для сотрудничества</p>
                        <button className="text-h3 md:text-[18px] md:font-bold underline uppercase">director@rifmach.ru</button>
                    </div>
                </div>

                <div className="flex flex-row gap-2 items-center cursor-pointer">
                    <img src="/icons/pen.svg" className="h-[15px] md:h-[37px]"/>
                    <div 
                      className="flex flex-col text-white"
                      onClick={scrollToForm}
                    >
                        <p className="uppercase text-[13px] hidden md:block">оставьте заявку</p>
                        <p className="text-h3 md:text-[18px] md:font-bold uppercase">
                          написать нам
                          <img src="/icons/line.svg" className="md:w-[140px] w-[120px] mt-[-2px] md:mt-[-5px]" />
                        </p>
                     </div>
                </div>
              </div>

              <h4 className="text-h4 text-[#EEF5F7] mt-4 regular max-w-[544px] hidden md:block">
                Заявки принимаются круглосуточно. <br />Поддержка работает с 10:00 до 22:00 по московскому времени.
              </h4>
            </div>
          </div>
        </div>

        <OwlImage />
      </div>
    </section>
  );
}