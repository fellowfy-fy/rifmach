import { Calculator } from "@/components/shared/Calculator/calculator";
import Image from "next/image";

export default function pricing() {
  return (
    <div className="mx-auto pb-[82px] md:pb-[93px] px-4 md:px-10 lg:px-20 xl:px-32 2xl:px-60 max-w-[1920px] bg-[#E2F2FF]">
      <div className="py-[19px] md:py-[29px]">
        <h1 className="uppercase text-headers text-[32px] md:text-h1">цены</h1>
        <hr className="w-10 md:w-[50px] h-[5px] bg-main rounded-sm mt-[7px] mb-[15px] hidden md:block" />
        <p className="text-headers text-h3 md:text-[18px] mt-[19px] md:mt-0">
          Чтобы ознакомиться с ценами на наши услуги, вы можете{" "}
          <button className="text-main inline-flex items-center gap-2 whitespace-nowrap hover:underline">
            скачать прайс-лист
            <Image src="/icons/pdf.svg" alt="PDF" width={13} height={15} />
          </button><br />
          {" "}Или рассчитайте примерную стоимость вашего заказа при помощи калькулятора ниже.
        </p>
      </div>
      <Calculator/>
    </div>
  );
}