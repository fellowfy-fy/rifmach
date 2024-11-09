import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/input';
import { countries } from '@/constants/phone-dropdown';
import { PhoneDropdown } from './PhoneDropdown';
import { CustomButton } from '@/components/ui/CustomButton/CustomButton';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import styles from './Contactus.module.css';

interface ContactFormProps {
  onSubmit: () => void;
}

export const ContactForm: React.FC<ContactFormProps> = ({ onSubmit }) => {
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [name, setName] = useState('');
  const [isValid, setIsValid] = useState<boolean | null>(null);

  const isFormValid = () => {
    return name.trim() !== '' && phoneNumber !== '' && isValid === true;
  };

  const getErrorMessage = () => {
    if (name.trim() === '') return 'Введите ваше имя';
    if (phoneNumber === '') return 'Введите номер телефона';
    if (isValid === false) return 'Введите корректный номер телефона';
    return '';
  };

  const validatePhoneNumber = (number: string) => {
    if (!number) return null;
    const cleanNumber = number.replace(/\D/g, '');

    switch (selectedCountry.code) {
      case 'RU':
        return cleanNumber.length === 10 && /^9/.test(cleanNumber);
      case 'US':
        return cleanNumber.length === 10 && /^[2-9]/.test(cleanNumber);
      default:
        return cleanNumber.length === 10;
    }
  };

  const formatPhoneNumber = (value: string) => {
    const cleaned = value.replace(/\D/g, '').substring(0, 10);
    if (cleaned.length === 0) return '';

    let formatted = '';
    
    if (cleaned.length > 0) {
      formatted += `${selectedCountry.phoneCode} (${cleaned.substring(0, 3)}`;
      if (cleaned.length > 3) {
        formatted += `) ${cleaned.substring(3, 6)}`;
      }
      if (cleaned.length > 6) {
        formatted += `-${cleaned.substring(6, 8)}`;
      }
      if (cleaned.length > 8) {
        formatted += `-${cleaned.substring(8)}`;
      }
    }
    return formatted;
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    const numberOnly = inputValue
      .replace(selectedCountry.phoneCode, '')
      .replace(/\D/g, '');

    if (numberOnly.length <= 10) {
      const formatted = formatPhoneNumber(numberOnly);
      setPhoneNumber(formatted);
      setIsValid(validatePhoneNumber(numberOnly));
    }
  };

  const getBorderColor = () => {
    if (!phoneNumber) return 'border border-[#14669D/10]';
    if (isValid === false) return 'border border-[#EB4403]';
    if (isValid === true) return 'border border-[#A4FA60]';
    return 'border border-[#14669D/10]';
  };

  useEffect(() => {
    setPhoneNumber('');
    setIsValid(null);
  }, [selectedCountry]);

  return (
    <div className="flex flex-col justify-center text-left items-center gap-5 md:gap-4 text-[13px] text-headers pt-[99px] md:pt-[39px] px-[19px] md:px-[147px]">
      <div>
        <p className="mb-1">Ваше имя</p>
        <Input
          placeholder="Иван"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="relative w-[317px] border-[#14669D/10] lg:w-[280px] md:h-[42px] h-[40px] shadow-md placeholder:text-[#A4AFB5] focus:placeholder:opacity-0 transition-all"
        />
      </div>
      <div>
        <p className="mb-1">Телефон</p>
        <div className="relative flex items-center">
          <PhoneDropdown
            selectedCountry={selectedCountry}
            setSelectedCountry={setSelectedCountry}
          />
          <Input
            noBorder
            className={`relative w-[317px] lg:w-[280px] md:h-[42px] h-[40px] pl-14 transition-colors placeholder:text-[#A4AFB5] focus:placeholder:opacity-0 shadow-md ${getBorderColor()}`}
            placeholder={`${selectedCountry.phoneCode} (999) 999-99-99`}
            value={phoneNumber}
            onChange={handlePhoneChange}
          />
          {isValid === false && (
            <p className="absolute -bottom-6 left-0 text-[#EB4403] text-[12px]">
              Некорректный номер телефона
            </p>
          )}
        </div>
      </div>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <div className="w-full">
                <CustomButton 
                  type='main' 
                  customClass={`${styles.contactusButton} ${!isFormValid() ? 'opacity-50 cursor-not-allowed' : ''}`}
                  onClick={onSubmit}
                  disabled={!isFormValid()}
                >
                  ПОЗВОНИТЕ МНЕ
                </CustomButton>
              </div>
            </TooltipTrigger>
            {!isFormValid() && (
              <TooltipContent>
                <p>{getErrorMessage()}</p>
              </TooltipContent>
            )}
          </Tooltip>
        </TooltipProvider>
      <span className='text-[10px] text-center text-textsmain leading-[12px] pt-[10px] md:-mt-[10px]'>
        Даю согласие на обработку<br /> Персональных данных
      </span>
    </div>
  );
};