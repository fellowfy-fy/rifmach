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
        <>
      <h3 className='font-bold text-headers mb-2'>Срочность</h3>
        <div className={cn("relative w-[67px]", className)}>
          <Switch
            checked={isOn}
            onCheckedChange={setIsOn}
            className="h-[30px] w-full bg-switchbg data-[state=checked]:bg-switchbg data-[state=unchecked]:bg-switchbg [&>span]:h-[24px] [&>span]:w-[24px] [&>span]:translate-x-0.5 [&>span]:data-[state=checked]:translate-x-[39px]"
          />
          <div className="absolute inset-0 pointer-events-none flex items-center">
            <span
              className={`text-[10px] ml-[1rem] transition-opacity duration-200 text-textsmain ${
                isOn ? 'opacity-100' : 'opacity-0'
              }`}
            >
              ON
            </span>
            <span
              className={`text-[10px] ml-auto mr-[1rem] transition-opacity duration-200 text-textsmain ${
                isOn ? 'opacity-0' : 'opacity-100'
              }`}
            >
              OFF
            </span>
          </div>
        </div>
        </>
    )
};