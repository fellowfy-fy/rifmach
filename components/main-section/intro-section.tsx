"use client"
import CallToAction from "../shared/Call-to-action.tsx/call-to-action";
import { IntroCarousel } from "../shared/intro-carousel";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function IntroSection() {
  const router = useRouter();
  return (
    <section className="relative bg-gradient-to-r from-[#70B3FF] to-[#70DBFC] px-4 md:px-10 lg:px-20 xl:px-32 2xl:px-[15%] h-auto md:h-[560px] 2xl:h-[620px] overflow-hidden items-center ">
      {/* облака */}
      <div className="absolute inset-0 pointer-events-none">
        <img
          src="/clouds/clouds-mob.svg"
          alt="Mobile Clouds"
          className="w-full h-auto object-cover block md:hidden absolute bottom-[-3%]"
        />
        <img
          src="/clouds/clouds.svg"
          alt="Desktop Clouds"
          className="w-full h-auto object-cover hidden md:block absolute bottom-[-2px]"
        />
      </div>

      <div className="z-10 flex flex-col md:flex-row max-w-[1440px]">
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

           <div className="block md:hidden absolute">
            <div className="flex flex-row">
              <div className="hidden md:flex md:flex-row flex-col items-center">
                <Image
                  src="/icons/lvetka.svg"
                  alt="Ветвь"
                  width={45}
                  height={45}
                />
                <h4
                  className="text-h4 text-accent bold"
                >
                  16 лет
                  <br />
                  с&nbsp;вами
                </h4>
                <Image
                  src="/icons/rvetka.svg"
                  alt="Ветвь"
                  width={45}
                  height={45}
                />
              </div>

              <div
                className="hidden md:flex flex-col items-center cursor-pointer"
                onClick={() => router.push("/reviews")}
              >
                <Image src="/icons/stars.svg" alt="Звезды" width={76} height={13} />
                <h4 className="text-[13px] text-[#B6B6B6] bold">544 отзыва</h4>
              </div>

              <div className="hidden md:flex flex-row items-center">
                <Image
                  src="/icons/lvetka.svg"
                  alt="Ветвь"
                  width={45}
                  height={45}
                />
                <h4>
                  20&nbsp;000+
                  <br />
                  стихов
                </h4>
                <Image
                  src="/icons/rvetka.svg"
                  alt="Ветвь"
                  width={45}
                  height={45}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="hidden md:block">
          <IntroCarousel />
        </div>
      </div>
    </section>
  );
}
