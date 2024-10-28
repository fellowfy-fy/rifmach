import { Slider } from '@/components/ui/slider';
import React from 'react';


interface Props {
    className?: string;
}

export const QuatrainSlider: React.FC<Props> = ({ className }) => {
  const marks = [2, 4, 6, 8, 10, 12, 14, 16, "Больше"]
  const [value, setValue] = React.useState([10])

  return (
    <div className="w-full space-y-4">

    <div className="flex justify-between px-1">
      {marks.map((mark, index) => (
        <span 
          key={index}
          className={`text-sm ${
            index + 1 === value[0] ? 'text-blue-400' : 'text-gray-400'
          }`}
        >
          {mark}
        </span>
      ))}
    </div>
      <div className="relative pt-6 pb-2">
        <Slider
          value={value}
          onValueChange={setValue}
          max={9}
          min={1}
          step={1}
        />
        <div 
          style={{ 
            left: `calc(${((value[0] - 1) / 8) * 100}% - ${(value[0] - 1) / 8 * 40}px)`,
            top: "50%"
          }}
        />
      </div>
    </div>
  )
};