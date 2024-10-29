import { ChevronDown } from 'lucide-react';
import { FC } from 'react';

const ChevronAnimated: FC = () => {
  return (
    <ChevronDown
      className={`
        h-4 
        w-4 
        shrink-0 
        transition-all 
        duration-200 
        relative
        left-[100%]
        top-[-8%]
        ml-[0px]
      `}
    />
  );
};

export default ChevronAnimated;
