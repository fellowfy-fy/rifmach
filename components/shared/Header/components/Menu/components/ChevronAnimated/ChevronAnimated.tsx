import { ChevronDown } from 'lucide-react';
import { FC } from 'react';

const ChevronAnimated: FC = () => {
  return (
    <ChevronDown
      className={`
        h-[12px] 
        w-[14px] 
        shrink-0 
        transition-all 
        duration-200 
        relative
        left-[102%]
        top-[-4%]
        ml-[0px]
      `}
    />
  );
};

export default ChevronAnimated;
