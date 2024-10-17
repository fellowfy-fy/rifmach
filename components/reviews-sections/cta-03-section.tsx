"use client"
import CallToAction from "../shared/call-to-action";

export default function CTA03Section() {
  return (
    <section className="relative bg-gradient-to-r from-[#70B3FF] to-[#70DBFC] px-[16px] md:px-[216px] md:h-[552px] overflow-hidden">

      <div className="absolute inset-0 pointer-events-none">
        <div className="block md:hidden absolute bottom-[-12px] transform">
          <img
            src="/cloud-cta-mob.svg"
            alt="Mobile Clouds"
            className="w-[393px] h-auto"
          />
        </div>

        <div className="hidden md:block absolute bottom-[-2px]">
          <img
            src="/cloud-cta.svg"
            alt="Desktop Clouds"
            className="w-[1440px] h-auto"
          />
        </div>
      </div>

      <div className="relative z-10 flex md:flex-row flex-col">
        <div className="flex flex-col">
          <div className="flex flex-col md:flex-row">
            <div className="flex flex-col mb-[31px] md:mb-[24px]">
              <h1 className="text-[24px] md:text-h2 text-white pt-[33px] md:pt-[85px] uppercase">
                эксклюзивные стихи<br />по прозрачной цене
              </h1>
              <hr className="w-[40px] md:w-[50px] h-[2px] bg-white rounded-sm mt-[10px] md:mt-[22px]" />
              <h4 className="text-h3 md:text-[18px] text-white mt-4 regular max-w-[584px]">
                Всего от 200 рублей за четверостишие. И вы получаете гарантии, что стихотворение вам понравится
              </h4>
            </div>
          </div>
          <CallToAction />
        </div>

        <div>
          <img src="/cloud-cta-owl.svg" className="hidden md:block" />
          <img src="/owl-main-1.svg" className="pl-[60px] shrink-0" />
        </div>
      </div>
    </section>
  );
}
