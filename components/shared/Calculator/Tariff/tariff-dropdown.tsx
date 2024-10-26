import React from 'react';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select";
import { occasionsArr } from '@/constants/occasions';


interface Props {
    occasion: number;
    setOccasion: (value: number) => void;
    className?: string;
}

export const TariffDropdown: React.FC<Props> = ({ className, setOccasion, occasion}) => {
  return (
  <div className={className}>
    <Select value={occasion.toString()} onValueChange={(value) => setOccasion(Number(value))}>
        <SelectTrigger className="w-[417px] border border-accent rounded-[5px]" customIcon="/icons/dropdown-calc.svg">
          <SelectValue placeholder="Выберите повод" />
        </SelectTrigger>
        <SelectContent>
            {occasionsArr.map((item, index) => (
                <SelectItem key={index} value={index.toString()}>{item.occasion}</SelectItem>
            ))}
        </SelectContent>
        </Select>
        </div>
  );
};