import { Slider } from '@/components/ui/slider';
import React from 'react';

interface Props {
  className?: string;
  marks: (string | number)[];
  value: number[];
  setValue: (val: number[]) => void;
}

export const QuatrainSlider: React.FC<Props> = ({ className, marks, value, setValue }) => {
  const getDisplayValue = () => {
    if (value[0] >= 9) return '16+';
    return marks[value[0] - 1];
  }

  const getMarkPosition = (index: number) => {
    if (index === marks.length - 1) return '100%';
    return `${(index * 33 / 393) * 100}%`;
  };

  return (
    <div className="w-full">
      
    <h3 className='font-bold text-headers mb-2'>Кол-во четверостиший</h3>
      {/* Счетчик и слайдер */}
      <div className="flex w-full flex-row">
        {/* Счетчик */}
        <div className="relative mr-[15px] ">
          <div className="w-[52px] h-[40px] md:w-[52px] md:h-[40px] border border-accent bg-white rounded-[5px] flex items-center justify-center text-[22px]">
            {getDisplayValue()}
          </div>
        </div>
        {/* Контейнер для слайдера и меток */}
        <div className="relative w-full flex mt-8">
          {/* Метки */}
          <div className="absolute w-full -top-6 left-[0.40rem] flex gap-[0.8rem]">
            {marks.map((mark, index) => {
              const isLast = index === marks.length - 1; // Проверяем, является ли элемент последним
              return isLast ? (
                <div
                  key={index}
                  className="text-sm text-slidercalc font-bold w-5 text-center absolute right-[4.1rem]"
                  style={{
                    color: value[0] >= marks.length ? '#60A5FA' : '#ABCCE2'
                  }}
                >
                  {mark}
                </div>
              ) : (
                <div
                  key={index}
                  className="text-sm text-slidercalc font-bold w-5 text-center"
                  style={{
                    left: getMarkPosition(index),
                    color: index + 1 === value[0] ? '#60A5FA' : '#ABCCE2'
                  }}
                >
                  {mark}
                </div>
              );
            })}
          </div>
          {/* Слайдер */}
          <div className="relative w-full h-4 pb-2 mt-1">
            <Slider
              value={value}
              onValueChange={setValue}
              max={12}
              min={1}
              step={1}
            />
          </div>
        </div>
      </div>
        <p className='text-textsmain text-[1rem]'>
          Время чтения ≈ <span className='border-b-2 border-dashed  border-main text-main'>1 минута
        </span>
      </p>
    </div>
  );
};