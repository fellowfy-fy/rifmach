// import { ArchBottom } from "../ui/arch-bottom";

export default function DemoSection() {
  return (
      <section className="bg-gradient-to-r from-[#70B3FF] to-[#70DBFC] relative px-[16px] md:px-10 lg:px-20 xl:px-36 2xl:px-60 h-[1000px] md:h-[992px] overflow-hidden items-center">
        <div className="absolute inset-0 pointer-events-none w-full">
          <div className="block md:hidden absolute top-[-22px] sm:top-0 transform w-full">
            <img
              src="/clouds-flip-mob.svg"
              alt="Mobile Clouds"
              className="w-full max-h-[148px] object-cover"
            />
          </div>

          <div className="hidden md:block absolute top-[-1px] w-full">
            <img
              src="/clouds-flip.svg"
              alt="Desktop Clouds"
              className="w-full h-auto object-cover"
            />
          </div>

          <div className="hidden md:block absolute top-10 right-0">
            <img
              src="/alphabet2.svg"
              alt="Alphabet Background"
              className="w-full max-h-[845px]"
            />
          </div>
        </div>

        <div className="relative top-[101px] md:top-[97px]">
          <h2 className="uppercase text-[24px] md:text-h2 text-white">
            посмотрите несколько
            <br />
            <span className="font-bold">интересных примеров</span>
          </h2>
          <hr className="w-[40px] md:w-[50px] h-[4px] bg-white rounded-sm mt-[10px] md:mt-[22px]" />
          <h3 className="text-h3 md:text-[18px] text-white mt-4 regular ">
            Вы достойны стихов, написанных по всем законам стихосложения:<br/>
            <span className="font-bold">качественные интересные рифмы, необычные образы, точный ритм</span>
          </h3>
        </div>
        {/* <ArchBottom /> */}
      </section>
  );
}
