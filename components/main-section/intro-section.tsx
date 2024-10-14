import Image from "next/image"
import CallToAction from "../shared/call-to-action"

export default function IntroSection() {
  return (
    <section className="bg-gradient-to-r from-[#70B3FF] to-[#70DBFC]">
      <div className="flex flex-col md:flex-row">
        <div className="flex flex-col">
          <h1 className="text-[32px] md:text-h1 text-white pt-[33px] md:pt-[85px]">
            НА ЧТО СПОСОБНЫ СТИХИ НА ЗАКАЗ?
          </h1>
          <hr className="w-[40px] md:w-[50px] h-[5px] bg-white rounded-sm mt-[10px] md:mt-[22px]"/>
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
      
      <div className="block md:hidden">
        <Image
          src="/clouds-mob.svg"
          width={393}
          height={130}
          alt="Mobile Clouds"
        />
      </div>

      <div className="hidden md:block">
        <Image
          src="/clouds.svg"
          width={1440}  
          height={725}  
          alt="Desktop Clouds"
        />
      </div>
    </section>
  )
}
