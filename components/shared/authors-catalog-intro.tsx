import CallToAction from "../call-to-action.tsx/call-to-action";
import QuoteBlock from "./quote-block";

interface IntroSectionProps {
  title: string;
  subtitle: string;
  isShadowEnabled?: boolean;
}

export default function AuthorsCatalogIntro({ title, subtitle, isShadowEnabled }: IntroSectionProps) {
  return (
    <section className="relative bg-[#E2F2FF] px-4 md:px-10 lg:px-20 xl:px-32 2xl:px-[15%] h-[587px] md:h-[419px] overflow-hidden items-center text-left ">
      <div className="flex flex-col md:flex-row justify-between items-center text-left">
        <div className="flex flex-col md:max-w-[50%]">
          <div className="flex flex-col mb-[31px] md:mb-[24px]">
            <h1 className="text-[24px] md:text-[45px] text-headers pt-[33px] md:pt-[85px] uppercase">
              {title}
            </h1>
            <hr className="w-[40px] md:w-[50px] h-[4px] bg-main rounded-sm mt-[10px] md:mt-[22px]" />
            <h4 className="text-h3 md:text-[18px] text-headers mt-4 regular max-w-[544px] hidden md:block">
              {subtitle}
            </h4>
          </div>
          <div className="hidden md:block">
            <CallToAction />
          </div>
        </div>

        <QuoteBlock />

        <div className="block md:hidden mt-4">
            <h4 className="text-h3 md:text-[18px] text-headers mt-4 regular max-w-[544px]">
              {subtitle}
            </h4>
          <CallToAction shadow={isShadowEnabled} />
        </div>
      </div>
    </section>
  );
}
