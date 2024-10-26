'use client';
import React from 'react';
import { TariffSide } from './tariff-side';

interface Props {
    className?: string;
}

export const Calculator: React.FC<Props> = () => {
    const [occasion, setOccasion] = React.useState(0)

  return (
    <div className="w-[1172px] h-[576px] bg-white rounded-[5px]">
        <div className='grid grid-cols-2'>
            <div className='col-span-1 w-[541px] h-[507px] bg-calculator my-[34px] ml-[34px] mr-[11px] rounded-[5px]'>
                <TariffSide occasion={occasion} setOccasion={setOccasion} />
            </div>
            <div className='col-span-1 w-[541px] h-[507px] bg-calculator my-[34px] ml-[11px] mr-[34px] rounded-[5px]'></div>
        </div>
    </div>
  );
};