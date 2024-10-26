import * as React from "react";
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

export const TariffSide: React.FC<Props> = ({ occasion, setOccasion }) => {
  return (
    <div className='pt-[25px] pb-[28px] px-[28px]'>
      <h3 className='font-bold text-headers mb-2'>Выберите повод</h3>
      <Select value={occasion.toString()} onValueChange={(value) => setOccasion(Number(value))}>
        <SelectTrigger className="w-[417px] border border-accent rounded-[5px]">
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