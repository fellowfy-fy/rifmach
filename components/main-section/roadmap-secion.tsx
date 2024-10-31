import StepsCards from "../shared/steps-cards"
import { Button } from "../ui/button"
import Image from "next/image";

export default function RoadmapSection() {
  return (
    <section className="bg-white py-0 md:py-6">

      <div className="md:hidden mb-[72px]">
        <div className="flex flex-row justify-center items-center">
          <div className="flex flex-row items-center">
            <Image
              src="/icons/lvetka.svg"
              alt="Ветвь"
              width={45}
              height={45}
            />
            <p
              className="text-h4 text-accent bold"
            >
              16 лет
              <br />
              с&nbsp;вами
            </p>
            <Image
              src="/icons/rvetka.svg"
              alt="Ветвь"
              width={45}
              height={45}
            />
          </div>

          <div
            className="flex flex-col items-center"
          >
            <Image src="/icons/stars.svg" alt="Звезды" width={76} height={13} />
            <p className="text-[13px] text-[#B6B6B6] bold">544 отзыва</p>
          </div>

          <div className="flex flex-row items-center">
            <Image
              src="/icons/lvetka.svg"
              alt="Ветвь"
              width={45}
              height={45}
            />
            <p
              className="text-h4 text-accent bold"
            >
              20 000+
              <br />
              стихов
            </p>
            <Image
              src="/icons/rvetka.svg"
              alt="Ветвь"
              width={45}
              height={45}
            />
          </div>
        </div>
      </div>


      <div className="mx-auto px-4 md:px-10 lg:px-20 xl:px-[135px] 2xl:px-60 max-w-[1920px]">
        <h2 className="text-headers text-2xl md:text-h2 uppercase">
          Как создается стих,<br />
          <span className="font-bold">бьющий точно в цель?</span>
        </h2>
        <hr className="w-10 md:w-[50px] h-[5px] bg-main rounded-sm mt-2.5 md:mt-5"/>
        <StepsCards />
        <div className="text-center">
          <Button
            variant="secondary"
            className="md:mt-10 uppercase"
          >
            НА КАКИЕ ТЕМЫ МЫ ПИШЕМ?
          </Button>
        </div>
      </div>
    </section>
  );
}