import Image from "next/image";

interface StepsCardProps {
  imageSrc: string; 
  heading: string;  
  text: string;     
}

export default function IdeaCard({ imageSrc, heading, text }: StepsCardProps) {
  return (
    <div className="border w-full md:w-[378px] h-auto md:h-[377px] pl-[25px] pr-[30px] py-[40px] rounded-[5px] relative mb-[39px] md:mb-0">
      <Image 
        src={imageSrc}
        width={81}
        height={88}
        alt="image"
      />

      <h3 className="text-h3 text-main bold mt-[41px] text-wrap-balance">
        {heading}
      </h3>

      <p className="text-h4 text-textsmain regular mt-[11px] leading-6">
        {text}
      </p>
    </div>
  );
}
