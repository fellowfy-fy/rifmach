import React from 'react';
import { GenreDropdown } from './genre-dropdown';
import { UrgencySwitch } from './urgency-switch';
import { QuatrainSlider } from './quatrain-slider';
import { TotalPrice } from './total-price';

interface Props {
    isOn: boolean;
    setIsOn: (value: boolean) => void;
    genre: number;
    occasion: number;
    setGenre: (value: number) => void;
    tariff: string;
    className?: string;
}



export const CostSide: React.FC<Props> = ({ className, genre, setGenre, occasion, isOn, setIsOn, tariff }) => {
  
const marks = [2, 4, 6, 8, 10, 12, 14, 16, "Больше"]
const [value, setValue] = React.useState([10])

React.useEffect(() => {console.log(value[0])}, [value])

  return (
    <div className='pt-[25px] pb-[28px] px-[28px]'>
      <GenreDropdown genre={genre} setGenre={setGenre} occasion={occasion} className='mb-[30px]'/>
      <UrgencySwitch isOn={isOn} setIsOn={setIsOn} />
      <QuatrainSlider marks={marks} value={value} setValue={setValue} />
      <TotalPrice tariff={tariff} quatrain={value[0] * 2} urgency={isOn}  />
    </div>
  );
};