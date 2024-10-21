import CallToAction from "../shared/call-to-action";
import { ArchTop } from "../ui/arch-top";

interface CTASectionProps {
  title: string;
  subtitle: string;
  owlImage: string;
  cloudImageMobile: string;
  cloudImageDesktop: string;
  hasArch?: boolean;
}

export default function CTASection({
  title,
  subtitle,
  owlImage,
  cloudImageMobile,
  cloudImageDesktop,
  hasArch,
}: CTASectionProps) {
  return (
    <div className="bg-gradient-to-r from-[#70B3FF] to-[#70DBFC]">
      {hasArch && <ArchTop />}
      <section className="relative  px-[16px] md:px-[40px] lg:px-[80px] xl:px-[140px] md:h-[552px] overflow-hidden items-center">
        <div className="absolute inset-0 pointer-events-none w-full">
          <div className="block md:hidden absolute bottom-[-12px] transform w-full">
            <img
              src={cloudImageMobile}
              alt="Mobile Clouds"
              className="w-full h-auto object-cover"
            />
          </div>

          <div className="hidden md:block absolute bottom-[-2px] w-full">
            <img
              src={cloudImageDesktop}
              alt="Desktop Clouds"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

        <div className="relative z-10 flex md:flex-row flex-col">
          <div className="flex flex-col">
            <div className="flex flex-col md:flex-row">
              <div className="flex flex-col mb-[31px] md:mb-[24px]">
                <h1 className="text-[24px] md:text-h2 text-white pt-[33px] md:pt-[85px] uppercase md:max-w-[520px]">
                  {title}
                </h1>
                <hr className="w-[40px] md:w-[50px] h-[2px] bg-white rounded-sm mt-[10px] md:mt-[22px]" />
                <h4 className="text-h3 md:text-[18px] text-white mt-4 regular max-w-[584px]">
                  {subtitle}
                </h4>
              </div>
            </div>
            <CallToAction />
          </div>

          <div>
            <img
              src={owlImage}
              className="md:absolute bottom-[-130px] right-[1%] max-h-[297px] md:max-h-[400px]"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
