import React from 'react';
import Image from 'next/image';

interface NavigationModuleProps {
  currentStep: number;
  totalPoems: number;
  onNext?: () => void;
}

export const NavigationModule = ({ 
  currentStep = 1, 
  totalPoems = 1,
  onNext 
}: NavigationModuleProps) => {
  return (
    <div className="flex flex-col gap-10 font-harmonia">
      {/* Номер шага */}
      <div className="flex items-baseline gap-2">
        <span className="text-[2.25rem] leading-none font-bold text-white">
          {String(currentStep).padStart(2, '0')}
        </span>
        <hr className='w-10 h-0.5 border border-white bg-white -rotate-[45deg] absolute left-[1rem] top-6'/>
        <span className="absolute left-10 top-6 text-[1rem] text-white/80">
          из 20 000
        </span>
      </div>
      
      {/* Кнопка "Дальше" и точки */}
      <div className="flex items-center">
        <button
          onClick={onNext}
          className="flex items-center gap-4 text-white mr-8"
        >
          <span className="text-[1rem] underline hover:no-underline">Дальше</span>
          <Image
            src="/icons/arrow-right-video.svg"
            alt="Arrow-right"
            width={55}
            height={5}
          />
        </button>
        
        {/* Контейнер для точек с фиксированной шириной */}
        <div className="w-[120px]">
          <div className="flex gap-[0.3rem] justify-start">
            {[...Array(totalPoems)].map((_, index) => (
              <div
                key={index}
                className={`w-[0.6rem] h-[0.6rem] rounded-full ${
                  index === currentStep - 1 ? 'bg-white' : 'bg-white/40'
                } ${index >= 7 ? 'hidden' : ''}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};