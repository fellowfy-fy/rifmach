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
    genre: number;
    occasion: number;
    setGenre: (value: number) => void;
    className?: string;
}

export const GenreDropdown: React.FC<Props> = ({ className, setGenre, genre, occasion}) => {
    const genres = occasionsArr[occasion].genre
  return (
    <>
    <h3 className='font-bold text-headers mb-2'>Жанр поздравления</h3>
  <div className={className}>
    <Select value={genre.toString()} onValueChange={(value) => setGenre(Number(value))}>
        <SelectTrigger className="w-full lg:w-[417px] border border-accent rounded-[5px]" customIcon="/icons/dropdown-calc.svg">
          <SelectValue placeholder="Выберите жанр" />
        </SelectTrigger>
        <SelectContent>
            {genres.map((item, index) => (
                <SelectItem key={index} value={index.toString()}>{item}</SelectItem>
            ))}
        </SelectContent>
        </Select>
        </div></>
  );
};