import { CustomButton } from '@/components/ui/CustomButton/CustomButton';
import { cn } from '@/lib/utils';
import styles from '../calculator.module.css'
import React from 'react';

interface Props {
    className?: string;
    tariff: string;
    quatrain: number;
    urgency: boolean;
}

export const TotalPrice: React.FC<Props> = ({ className, tariff, quatrain, urgency }) => {

    
const DisplayPrice = (): number => {
    let tariffPrice = 0;
    switch (tariff) {
        case 'econom':
            tariffPrice = 100;
            break;
        case 'base':
            tariffPrice = 150;
            break;
        case 'vip':
            tariffPrice = 200;
            break;
        default:
            tariffPrice = 0;
    }
    const quatrainPrice = quatrain * 50;
    const urgencyPrice = urgency ? 100 : 0;
    return tariffPrice + quatrainPrice + urgencyPrice;
}

  return (
    <div className={cn('mt-5', className)}>
        <div className='flex items-baseline'>
        <h3 className='font-bold text-headers mb-2 mr-1'>Цена:</h3>
        <div className="w-[100px] h-[40px] md:w-[100px] md:h-[40px] border border-accent bg-white rounded-[5px] flex items-center justify-center text-[22px]">
        {DisplayPrice()}
          </div>
          <p className='text-main text-[1.5rem] ml-2'>₽</p>
          </div>
          <div className='flex items-center justify-center'>
            <img src="/icons/attention_please.svg" alt="WARNING!" className='mt-3'/>
            <p className='text-[0.75rem] text-textsmain mt-2'>Точную стоимость работы можно рассчитать после консультации с менеджером</p>
            
          </div>
          <center>
            
        <CustomButton
          type="main"
          customClass={styles.calcButton}
        >
          оставить заявку
        </CustomButton>
          </center>
    </div>
  );
};