import Image from "next/image"
import CallToAction from "../shared/call-to-action"

export default function IntroSection() {
  return (
    <section className="bg-gradient-to-r from-[#70B3FF] to-[#70DBFC] px-[16px] md:px-[216px]">

      <div className="absolute inset-0 pointer-events-none">
        <div className="block md:hidden absolute bottom-0 transform ">
          <img
            src="/clouds-mob.svg"
            alt="Mobile Clouds"
          />
        </div>

        {/* <div className="hidden md:block absolute bottom-0">
          <img
            src="/clouds.svg"
            alt="Desktop Clouds"
          />
        </div> */}
      </div>

      <div className="relative z-10">
        <div className="flex flex-col md:flex-row">
          <div className="flex flex-col">
            <h1 className="text-[32px] md:text-h1 text-white pt-[33px] md:pt-[85px]">
              НА ЧТО СПОСОБНЫ<br />СТИХИ НА ЗАКАЗ?
            </h1>
            <hr className="w-[40px] md:w-[50px] h-[2px] bg-white rounded-sm mt-[10px] md:mt-[22px]"/>
            <h4 className="text-h3 md:text-[18px] text-white mt-4 regular">
              Вы получите идеальный стих, решающий вашу задачу
            </h4>
          </div>
          <div className="relative">
            <Image
              src="/boy.svg"
              width={217}
              height={340}
              alt="Boy"
              className="z-10"
            />
            <Image
              src="/cloud-blue.svg"
              width={334}
              height={136}
              alt="Blue Cloud"
              className="absolute bottom-[-10px] right-0"
            />
          </div>
        </div>
      <CallToAction />
      </div>
    </section>
  )
}
