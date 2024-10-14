import Image from "next/image";

interface StepsCardProps {
  imageSrc: string; 
  heading: string;  
  text: string;     
  stepNumber: number; 
}

export default function StepsCard({ imageSrc, heading, text, stepNumber }: StepsCardProps) {
  return (
    <div className="border w-full md:w-[281px] pl-[25px] pr-[30px] py-[40px] rounded-[5px] relative mb-[39px] md:mb-0">
      <div className="absolute top-[-20px] w-[40px] h-[40px] flex items-center justify-center rounded-full text-main font-bold text-lg bg-white">
        {stepNumber < 10 ? `0${stepNumber}.` : stepNumber}
      </div>
      
      <Image 
        src={imageSrc}
        width={66}
        height={60}
        alt={`Step ${stepNumber}`}
      />

      <h3 className="text-h3 text-headers bold mt-[41px] text-wrap-balance">
        {heading}
      </h3>

      <p className="text-h4 text-textsmain regular mt-[11px] leading-6">
        {text}
      </p>
    </div>
  );
}
