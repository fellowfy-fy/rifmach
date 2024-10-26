import React from 'react';
import { benefits } from '@/constants/benefits';
import { CheckIcon } from './check-icon';
import Link from 'next/link';

interface Props {
    tariff: string;
    className?: string;
}

export const TariffBenefits: React.FC<Props> = ({ className, tariff }) => {
  return (
    <>
    {benefits.map((item, index) => {
        const isAvailable = item.tariff.includes(tariff);

        return (
            <div className='flex mb-3' key={index}>
                <div className='mt-[6px] mr-3'>
                    <CheckIcon isAvailable={isAvailable}/>
                </div>
                <div className='relative'>
                <div className='flex flex-col'>
                    <p className='text-[17px] leading-[20.4px] text-main font-[600]'>{item.title}</p>
                    <p className='text-[13px] leading-[15.6px]'>{item.description}</p>
                </div>
                {item.hasRef && (
            <a className='absolute -right-[6.5rem] top-1/2 -translate-y-1/2' href='#'>
              <img 
                src='/misc/example_ref.svg'
                alt="Reference"
                className='w-auto h-auto'
              />
            </a>
          )}</div>
            </div>
    )})}
    </>
  );
};