import { Slider } from '@/components/ui/slider';
import React from 'react';

interface Props {
  className?: string;
}

export const QuatrainSlider: React.FC<Props> = ({ className }) => {
  const marks = [2, 4, 6, 8, 10, 12, 14, 16, "Больше"]
  const [value, setValue] = React.useState([10])

  const getDisplayValue = () => {
    if (value[0] === 10) return '?';
    return marks[value[0] - 1];
  }

  const getMarkPosition = (index: number) => {
    if (index === marks.length - 1) return '100%';
    return `${(index * 33 / 393) * 100}%`;
  };

  return (
    <div className="w-full space-y-4">
      {/* Счетчик и слайдер */}
      <div className="flex flex-row">
        {/* Счетчик */}
        <div className="relative mr-[15px] shadow-lg">
          <div className="w-[52px] h-[40px] md:w-[52px] md:h-[40px] border border-accent bg-white rounded-[5px] flex items-center justify-center text-[22px]">
            {getDisplayValue()}
          </div>
        </div>
        {/* Контейнер для слайдера и меток */}
        <div className="relative flex-1">
          {/* Метки */}
          <div className="absolute w-full -top-6">
            {marks.map((mark, index) => (
              <div
                key={index}
                className="absolute transform -translate-x-1/2 text-sm text-gray-400"
                style={{ 
                  left: getMarkPosition(index),
                  color: index + 1 === value[0] ? '#60A5FA' : '#9CA3AF'
                }}
              >
                {mark}
              </div>
            ))}
          </div>
          {/* Слайдер */}
          <div className="relative pb-2">
            <Slider
              value={value}
              onValueChange={setValue}
              max={10}
              min={1}
              step={1}
            />
          </div>
        </div>
      </div>
    </div>
  );
};