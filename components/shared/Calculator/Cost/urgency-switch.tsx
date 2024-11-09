import { Switch } from '@/components/ui/switch';
import React from 'react';
import { cn } from '@/lib/utils';

interface Props {
  isOn: boolean;
  setIsOn: (value: boolean) => void;
  className?: string;
}

export const UrgencySwitch: React.FC<Props> = ({ className, isOn, setIsOn }) => {
  return (
    <div className='mb-8'>
      <h3 className='font-bold text-headers mb-2'>Срочность</h3>
      <div className='flex flex-row items-center gap-4 font-harmonia'>
        <div className={cn("relative w-[67px]", className)}>
          <Switch
            checked={isOn}
            onCheckedChange={setIsOn}
            className="h-[30px] w-full bg-switchbg data-[state=checked]:bg-main data-[state=unchecked]:bg-switchbg [&>span]:h-[24px] [&>span]:w-[24px] [&>span]:translate-x-0.5 [&>span]:data-[state=checked]:translate-x-[39px]"
          />
          <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
            <span
              className={`text-[10px] ml-4 transition-opacity duration-200 text-textsmain ${
                isOn ? 'opacity-100' : 'opacity-0'
              }`}
            >
              ON
            </span>
            <span
              className={`text-[10px] mr-4 transition-opacity duration-200 text-textsmain ${
                isOn ? 'opacity-0' : 'opacity-100'
              }`}
            >
              OFF
            </span>
          </div>
        </div>
        <span className='text-[12px] md:text-[14px] text-textsmain'>Покажем работу через 24 часа</span>
      </div>
    </div>
  )
};