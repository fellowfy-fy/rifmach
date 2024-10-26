import Image from 'next/image';

interface CorporateProps {
  imageSrc: string;
  heading: string | JSX.Element;
  text: string | JSX.Element;
}

export default function CorporateCard({
  imageSrc,
  heading,
  text,
}: CorporateProps) {
  return (
    <div className="flex flex-row md:flex-col w-full md:w-[378px] h-auto md:h-[377px] pl-[25px] pr-[30px] py-[40px] rounded-[5px] relative mb-[39px] md:mb-0">
      <div style={{ position: 'relative', width: '130px', height: '70px' }}>
        <Image src={imageSrc} fill={true} alt="image" />
      </div>
      <div>
        <h3 className="text-h4 md:text-h3 text-main bold mt-[41px] text-wrap-balance">
          {heading}
        </h3>

        <hr className="w-[59px] md:w-[84px] h-[2px] bg-textsmain rounded-sm my-[15px] md:my-[25px]" />

        <p className="text-h5 md:h4 text-textsmain regular leading-6">{text}</p>
      </div>
    </div>
  );
}
