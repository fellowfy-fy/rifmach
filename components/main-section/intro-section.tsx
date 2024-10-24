import CallToAction from "../shared/call-to-action";
import { IntroCarousel } from "../shared/intro-carousel";

export default function IntroSection() {
  return (
    <section className="relative bg-gradient-to-r from-[#70B3FF] to-[#70DBFC] px-4 md:px-10 lg:px-20 xl:px-36 2xl:px-60 h-auto md:h-[560px] 2xl:h-[620px] overflow-hidden items-center">
      {/* облака */}
      <div className="absolute inset-0 pointer-events-none">
        <img
          src="/clouds-mob.svg"
          alt="Mobile Clouds"
          className="w-full h-auto object-cover block md:hidden absolute bottom-[-3%]"
        />
        <img
          src="/clouds.svg"
          alt="Desktop Clouds"
          className="w-full h-auto object-cover hidden md:block absolute bottom-[-2px]"
        />
      </div>

      <div className="z-10 flex flex-col md:flex-row">
        <div className="flex flex-col mb-8 md:mb-6">
          <h1 className="text-[32px] md:text-h1 text-white pt-8 md:pt-[85px] uppercase md:max-w-[560px]">
            на что способны <span className="font-bold">стихи на заказ</span>?
          </h1>
          <hr className="w-10 md:w-[50px] h-[3px] bg-white rounded-sm mt-2.5 md:mt-5" />
          <h4 className="text-h3 md:text-[18px] text-white mt-8 mb-12 regular max-w-[584px]">
            Вы получите идеальный стих,{" "}
            <span className="font-bold">решающий вашу задачу!</span>
          </h4>
          <div className="md:hidden block">
            <IntroCarousel />
          </div>
          <CallToAction />
        </div>

        <div className="hidden md:block">
          <IntroCarousel />
        </div>
      </div>
    </section>
  );
}
