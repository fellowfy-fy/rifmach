import { PhoneInput } from "./phone-input";
import { ContactType } from "./contact-type";
import { Button } from "@/components/ui/button";
import { CallToActionProps } from "@/lib/types";

export default function CallToAction({ 
  shadow = true, 
  showConsent = true,
  variant = 'primary'
}: CallToActionProps) {
  return (
    <div className="w-full md:w-[478px]">
      <ContactType variant={variant} />
      <div className="flex flex-col md:relative">
        <PhoneInput shadow={shadow} />
        <Button
          variant="main"
          className="w-full mt-2 md:mt-0 md:w-[231px] md:absolute md:right-0 md:top-0 md:shadow-none hidden md:block"
        >
          Узнать подробности
        </Button>
        <Button
          variant="main"
          className="w-full mt-2 md:mt-0 md:w-[231px] md:absolute md:right-0 md:top-0 md:h-full md:shadow-none md:hidden block"
        >
          Узнать подробности
        </Button>
        {showConsent && (
          <div className="relative h-12">
            <div className="absolute right-0 w-[160px] text-center">
              <p className="text-[#A6A6A6] md:text-[#EEF5F7] mt-2 text-[10px] leading-tight">
                Даю согласие на обработку<br/>персональных данных
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}