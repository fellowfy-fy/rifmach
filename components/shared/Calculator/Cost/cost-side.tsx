import React from 'react';
import { GenreDropdown } from './genre-dropdown';
import { UrgencySwitch } from './urgency-switch';
import { QuatrainSlider } from './quatrain-slider';

interface Props {
    isOn: boolean;
    setIsOn: (value: boolean) => void;
    genre: number;
    occasion: number;
    setGenre: (value: number) => void;
    className?: string;
}

export const CostSide: React.FC<Props> = ({ className, genre, setGenre, occasion, isOn, setIsOn }) => {
  return (
    <div className='pt-[25px] pb-[28px] px-[28px]'>
      <GenreDropdown genre={genre} setGenre={setGenre} occasion={occasion} className='mb-[30px]'/>
      <UrgencySwitch isOn={isOn} setIsOn={setIsOn} />
      <QuatrainSlider />
    </div>
  );
};