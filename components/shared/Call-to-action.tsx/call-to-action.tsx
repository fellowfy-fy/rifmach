import { PhoneInput } from './phone-input';
import { ContactType } from './contact-type';
import { CallToActionProps } from '@/lib/types';
import { CustomButton } from '@/components/ui/CustomButton/CustomButton';

export default function CallToAction({
  shadow = true,
  showConsent = true,
  variant = 'primary',
  consentBreak = true,
  consentAlign = 'center',
  consentColor = 'white',
  consentMobileAlign = 'left',
  consentMobileColor = 'gray',
}: CallToActionProps) {
  const getConsentClasses = () => {
    const mobileColorClass = consentMobileColor === 'gray' ? 'text-[#a6a6a6]' : 'text-[#EEF5F7]';
    const desktopColorClass = consentColor === 'gray' ? 'md:text-[#a6a6a6]' : 'md:text-[#EEF5F7]';
    
    const mobileAlignClass = `text-${consentMobileAlign}`;
    const desktopAlignClass = `md:text-${consentAlign}`;

    return `${mobileColorClass} ${desktopColorClass} ${mobileAlignClass} ${desktopAlignClass}`;
  };

  return (
    <div className="w-full md:w-[478px]">
      <ContactType variant={variant} />
      <div className="flex flex-col md:relative">
        <PhoneInput shadow={shadow} />
        <CustomButton type="main">Узнать подробности</CustomButton>
        {showConsent && (
          <div className="relative h-12">
            <div
              className={`absolute inset-x-0 md:inset-x-auto ${
                consentBreak ? 'md:right-10' : 'md:right-0'
              }`}
            >
              {consentBreak ? (
                <p className={`mt-2 text-[10px] leading-tight ${getConsentClasses()}`}>
                  Даю согласие на обработку
                  <br />
                  персональных данных
                </p>
              ) : (
                <p className={`mt-2 text-[10px] leading-tight ${getConsentClasses()}`}>
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