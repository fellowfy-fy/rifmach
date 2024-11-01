import { PhoneInput } from './phone-input';
import { ContactType } from './contact-type';
import { Button } from '@/components/ui/button';
import { CallToActionProps } from '@/lib/types';
import { CustomButton } from '@/components/ui/CustomButton/CustomButton';

export default function CallToAction({
  shadow = true,
  showConsent = true,
  variant = 'primary',
  consentBreak = true,
}: CallToActionProps) {
  return (
    <div className="w-full md:w-[478px]">
      <ContactType variant={variant} />
      <div className="flex flex-col md:relative">
        <PhoneInput shadow={shadow} />
        <CustomButton type="main">Узнать подробности</CustomButton>
        {/* <Button
          variant="main"
          className="w-full mt-2 md:mt-0 md:w-[231px] md:absolute md:right-0 md:top-0 md:shadow-none hidden md:block"
        >
          Узнать подробности
        </Button> */}
        {/* <Button
          variant="main"
          className="w-full mt-2 md:mt-0 md:w-[231px] md:absolute md:right-0 md:top-0 md:h-full md:shadow-none md:hidden block"
        >
          Узнать подробности
        </Button> */}
        {showConsent && (
          <div className="relative h-12">
            <div
              className={`absolute inset-x-0 md:inset-x-auto ${
                consentBreak ? 'md:right-10' : 'md:right-0'
              } text-center`}
            >
              {consentBreak ? (
                <p className="mt-2 text-[10px] leading-tight md:text-[#EEF5F7]">
                  Даю согласие на обработку
                  <br />
                  персональных данных
                </p>
              ) : (
                <p className="mt-2 text-[10px] leading-tight md:text-[#EEF5F7]">
                  Даю согласие на обработку персональных данных
                </p>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
