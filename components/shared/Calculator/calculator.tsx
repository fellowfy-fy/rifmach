'use client';
import React from 'react';
import { TariffSide } from './Tariff/tariff-side';
import { CostSide } from './Cost/cost-side';

interface Props {
    className?: string;
}

export const Calculator: React.FC<Props> = () => {
    const [occasion, setOccasion] = React.useState(0)
    const [tariff, setTariff] = React.useState("base");
    const [genre, setGenre] = React.useState(0);
    const [isOn, setIsOn] = React.useState(false)



  return (
    <div className="w-[1172px] h-[576px] bg-white rounded-[5px]">
        <div className='grid grid-cols-2'>
            <div className='col-span-1 w-[541px] h-[507px] bg-calculator my-[34px] ml-[34px] mr-[11px] rounded-[5px]'>
                <TariffSide occasion={occasion} setOccasion={setOccasion} tariff={tariff} setTariff={setTariff}  />
            </div>
            <div className='col-span-1 w-[541px] h-[507px] bg-calculator my-[34px] ml-[11px] mr-[34px] rounded-[5px]'>
                <CostSide genre={genre} setGenre={setGenre} occasion={occasion} isOn={isOn} setIsOn={setIsOn} />
            </div> 
        </div>
    </div>
  );
};