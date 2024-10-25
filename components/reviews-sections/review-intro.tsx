import { Button } from "../ui/button";
import Image from "next/image";
import { Separator } from "../ui/separator";

export default function ReviewIntro() {
  return (
    <section className="relative bg-gradient-to-r from-[#70B3FF] to-[#70DBFC] px-4 md:px-10 lg:px-20 xl:px-32 2xl:px-[15%] h-[600px] md:h-[552px] overflow-hidden items-center">
      <div className="absolute inset-0 pointer-events-none w-full">
        <div className="block md:hidden absolute bottom-[-12px] w-full">
          <img
            src="/clouds-mob.svg"
            alt="Mobile Clouds"
            className="w-full h-auto object-cover"
          />
        </div>

        <div className="hidden md:block absolute bottom-[-2px] w-full">
          <img
            src="/clouds.svg"
            alt="Desktop Clouds"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>

      <div className="relative z-10 flex md:flex-row flex-col">
        <div className="flex flex-col">
          <div className="flex flex-col md:flex-row">
            <div className="flex flex-col mb-[31px] md:mb-[24px]">
              <h1 className="text-[24px] md:text-h2 text-white pt-[33px] md:pt-[85px] uppercase">
                эксклюзивные стихи
                <br />
                по прозрачной цене
              </h1>
              <hr className="w-[40px] md:w-[50px] h-[2px] bg-white rounded-sm mt-[10px] md:mt-[22px]" />
              <h4 className="text-h3 md:text-[18px] text-white mt-4 regular max-w-[544px]">
                Мнение клиентов с нашей работе — лучший мотиватор держать планку
                и продолжать развитие
              </h4>
            </div>
          </div>

          <div className="flex flex-row items-center gap-3">
            <Button variant="main" className="uppercase hidden md:block">
              оставить отзыв
            </Button>
            <Separator
              orientation="vertical"
              className="h-[55px] mx-4 bg-white hidden md:block"
            />
            <div className="gap-2 flex flex-row">
              <Image src="/stars.svg" height={15} width={92} alt="stars" />
              <label className="text-h4 text-white">544 отзыва</label>
            </div>
          </div>
        </div>

        <img
          src="/owl-post.svg"
          className="md:absolute bottom-[-130px] right-[1%] max-h-[297px] md:max-h-[400px]"
        />

        <Button variant="main" className="uppercase block md:hidden">
          оставить отзыв
        </Button>
      </div>
    </section>
  );
}
