import React from 'react';
import { Calculator } from '../shared/Calculator/calculator';

interface Props {
    className?: string;
}

export const CalculatorSection: React.FC<Props> = () => {
  return (
         <section className="bg-gradient-to-r from-[#70B3FF] to-[#70DBFC] relative px-[16px] md:px-10 lg:px-20 xl:px-32 2xl:px-[15%] h-[1390px] md:h-[992px] overflow-hidden items-center">
        <div className="absolute inset-0 pointer-events-none w-full">
          <div className="block md:hidden absolute top-[-22px] sm:top-0 transform w-full">
            <img
              src="/clouds/clouds-flip-mob.svg"
              alt="Mobile Clouds"
              className="w-full max-h-[148px] object-cover"
            />
          </div>

          <div className="hidden md:block absolute top-[-1px] w-full">
            <img
              src="/clouds/clouds-flip.svg"
              alt="Desktop Clouds"
              className="w-full h-auto object-cover"
            />
          </div>

          <div className="hidden md:block absolute bottom-0 w-full">
            <img
              src="/arc.svg"
              alt="Desktop arch"
              className="w-full h-auto object-cover"
            />
          </div>

          <div className="block md:hidden absolute bottom-0 w-full">
            <img
              src="/arc-mob.svg"
              alt="Mobile arch"
              className="w-full h-auto object-cover"
            />
          </div>

          <div className="hidden md:block absolute bottom-10 -left-40">
            <img
              src="/alphabet.svg"
              alt="Alphabet Background"
              className="w-full max-h-[845px]"
            />
          </div>
        </div>

        <div className="relative top-[101px] md:top-[97px] ">
          <h2 className="uppercase text-[24px] md:text-h2 text-white">
            Сколько это стоит?
          </h2>
          <hr className="w-[40px] md:w-[50px] h-[4px] bg-white rounded-sm mt-[10px] md:mt-[22px]" />
          <p className="text-h3 md:text-[18px] text-white mt-4 regular mb-[28px]">
          Укажите повод и рассчитайте примерную стоимость вашего заказа
          </p>
          <Calculator />
        </div>
      </section>
  );
};