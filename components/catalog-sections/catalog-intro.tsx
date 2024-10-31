import CallToAction from "../shared/Call-to-action.tsx/call-to-action";
import QuoteBlock from "../shared/quote-block";
import { BreadcrumbWithCustomSeparator } from "../shared/breadcrumbs";

export default function CatalogIntro() {
  return (
    <section className="relative bg-[#E2F2FF] px-4 md:px-10 lg:px-20 xl:px-[135px] 2xl:px-[15%] h-[587px] md:h-[469px] overflow-hidden items-center text-left">
      <div className="pt-[19px] md:pt-[21px]">
        <BreadcrumbWithCustomSeparator variant="muted" currentPage="Авторы"/>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-left md:items-center text-left">
        <div className="flex flex-col md:max-w-[50%]">
          <div className="flex flex-col mb-[31px] md:mb-[24px]">
            <h1 className="text-[32px] md:text-[45px] text-headers pt-[19px] md:pt-[29px] uppercase">
              стихи на юбилей<br /><span className="font-bold">на заказ</span>
            </h1>
            <hr className="w-[40px] md:w-[50px] h-[4px] bg-main rounded-sm mt-[10px] md:mt-[22px] hidden md:block" />
            <p className="text-headers text-[18px] hidden md:block mt-[42px]">
              Получите начало стиха в течении суток:
            </p>
          </div>
          <div className="hidden md:block">
            <CallToAction 
              variant="secondary"
              showConsent={false}
            />
          </div>
        </div>
        <QuoteBlock />
        <div className="block md:hidden mt-4">
            <p className="text-headers text-[18px] hidden md:block mt-[42px]">
                Получите начало стиха в течении суток:
            </p>
            <CallToAction 
                shadow={false}
                variant="secondary"
                showConsent={true}
                consentBreak={false}
            />
        </div>
      </div>
    </section>
  );
}


