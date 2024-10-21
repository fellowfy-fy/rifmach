import Image from "next/image";
import CallToAction from "../shared/call-to-action";
import { IntroCarousel } from "../shared/intro-carousel";

export default function IntroSection() {
  return (
    <section className="relative bg-gradient-to-r from-[#70B3FF] to-[#70DBFC] px-[16px] md:px-[40px] lg:px-[80px] xl:px-[140px] md:h-[552px] overflow-hidden items-center">
      <div className="absolute inset-0 pointer-events-none w-full">
        <div className="block md:hidden absolute bottom-[-3%] transform w-full">
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

      <div className="z-10 flex md:flex-row flex-col">
        <div className="flex flex-col">
          <div className="flex flex-col md:flex-row">
            <div className="flex flex-col mb-[31px] md:mb-[24px]">
              <h1 className="text-[32px] md:text-h1 text-white pt-[33px] md:pt-[85px] uppercase md:max-w-[560px]">
                на что способны стихи на заказ?
              </h1>
              <hr className="w-[40px] md:w-[50px] h-[2px] bg-white rounded-sm mt-[10px] md:mt-[22px]" />
              <h4 className="text-h3 md:text-[18px] text-white mt-4 regular max-w-[584px]">
                Вы получите идеальный стих, решающий вашу задачу!
              </h4>
            </div>
          </div>
          <CallToAction />
        </div>
      </div>
      <IntroCarousel />
    </section>
  );
}
