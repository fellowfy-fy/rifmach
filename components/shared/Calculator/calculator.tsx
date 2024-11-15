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
    <div className="h-auto w-auto lg:w-[1172px] lg:h-[576px] bg-white rounded-[5px]">
        <div className='flex flex-col lg:flex-row'>
            <div className='col-span-1 w-auto h-auto lg:w-[541px] lg:h-[507px] bg-white lg:bg-calculator lg:my-[34px] mx-[10px] lg:ml-[34px] lg:mr-[11px] rounded-[5px]'>
                <TariffSide occasion={occasion} setOccasion={setOccasion} tariff={tariff} setTariff={setTariff}  />
            </div>
            <div className='col-span-1 w-auto h-auto lg:w-[541px] lg:h-[507px] bg-white lg:bg-calculator mx-[10px] lg:my-[34px] lg:ml-[11px] lg:mr-[34px] rounded-[5px]'>
                <CostSide genre={genre} setGenre={setGenre} occasion={occasion} isOn={isOn} setIsOn={setIsOn} tariff={tariff}/>
            </div> 
        </div>
    </div>
  );
};