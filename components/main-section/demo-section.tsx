import Image from "next/image"

export default function DemoSection() {
    return(
        <section className="bg-gradient-to-r from-[#70B3FF] to-[#70DBFC] px-[17px] md:px-[134px] pt-[90px] pb-[45px] md:py-[25px]">
            {/* <div className="block md:hidden">
                <Image
                src="/clouds-flip-mob.svg"
                width={393}
                height={130}
                alt="Mobile Clouds"
                />
            </div>

            <div className="hidden md:block">
                <Image
                src="/clouds-flip.svg"
                width={1440}  
                height={725}  
                alt="Desktop Clouds"
                />
            </div> */}

            <div>
                <h2 className="uppercase text-[24px] md:text-h2 text-white">посмотрите несколько<br />интересных примеров</h2>
                <hr className="w-[40px] md:w-[50px] h-[5px] bg-white rounded-sm mt-[10px] md:mt-[22px]"/>
                <h3 className="text-h3 md:text-[18px] text-white mt-4 regular">Вы достойны стихов, написанных по всем законам стихосложения: качественные интересные рифмы, необычные образы, точный ритм</h3>
            </div>
        </section>
    )
}