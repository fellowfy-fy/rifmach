import { Modal } from '@/components/ui/Modal/Modal';
import { Input } from '@/components/ui/input';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { countries } from '@/constants/phone-dropdown';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { CustomButton } from '@/components/ui/CustomButton/CustomButton';
import styles from './Contactus.module.css'


interface ContactusProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

export const Contactus: React.FC<ContactusProps> = ({ isOpen, onOpenChange }) => {
  const [isWorkingHours, setIsWorkingHours] = useState(true);
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isValid, setIsValid] = useState<boolean | null>(null);

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

  const renderFlag = (country: (typeof countries)[0]) => {
    if (country.code === 'RU') {
      return (
        <Image
          src={country.flagIcon}
          alt={`${country.name} flag`}
          width={24}
          height={16}
        />
      );
    }
    return <span>{country.flagIcon}</span>;
  };

  useEffect(() => {
    const checkWorkingHours = () => {
      const moscowTime = new Date().toLocaleString('en-US', {
        timeZone: 'Europe/Moscow',
      });
      const moscowHours = new Date(moscowTime).getHours();
      setIsWorkingHours(moscowHours >= 10 && moscowHours < 22);
    };
    
    checkWorkingHours();
    const interval = setInterval(checkWorkingHours, 60000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setPhoneNumber('');
    setIsValid(null);
  }, [selectedCountry]);

  return (
    <Modal isOpen={isOpen} onClose={() => onOpenChange(false)}>
      <div className="w-[355px] h-[490px] md:w-[578px] md:h-[446px] bg-white relative font-harmonia rounded-[5px]">
        <div className='h-[135px] md:h-[144px] bg-gradient-to-r from-[#70B3FF] to-[#70DBFC] rounded-t-[5px]'>
          <Image
            src={isWorkingHours ? '/icons/online-modal-mob.svg' : '/icons/offline-modal-mob.svg'}
            alt={isWorkingHours ? 'онлайн' : 'оффлайн'}
            width={306}
            height={60}
            className="block md:hidden w-[306px] h-[33px] absolute left-1/2 -translate-x-1/2 top-40 z-50"
          />
          <Image
            src={isWorkingHours ? '/icons/online-modal.svg' : '/icons/offline-modal.svg'}
            alt={isWorkingHours ? 'онлайн' : 'оффлайн'}
            width={306}
            height={60}
            className="absolute left-[130px] top-32 hidden md:block w-[311px] z-50"
          />
          <Image
            src={isWorkingHours ? '/characters/owl-online-modal.svg' : '/characters/owl-offline-modal.svg'}
            alt={isWorkingHours ? 'Сова онлайн' : 'Сова оффлайн'}
            width={550}
            height={550}
            className="absolute -top-6 md:-top-16 right-[133px] md:right-60 w-[98px] h-[158px] md:w-[112px] md:h-[180px] z-50"
          />
        </div>
        <div className="flex flex-col justify-center text-left items-center gap-4 text-[13px] text-headers pt-[79px] md:pt-[39px]">
          <div>
            <p className="mb-1">Ваше имя</p>
            <Input
              placeholder="Иван"
              className="relative w-[317px] border-[#14669D/10] lg:w-[280px] md:h-[42px] h-[40px] shadow-md placeholder:text-[#A4AFB5] focus:placeholder:opacity-0 transition-all"
            />
          </div>
          <div>
            <p className="mb-1">Телефон</p>
            <div className="relative flex items-center">
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center gap-1 absolute left-3 z-10">
                  {renderFlag(selectedCountry)}
                  <Image
                    src="/icons/dropdown-cta.svg"
                    alt="выбор"
                    width={13}
                    height={8}
                  />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  {countries.map(country => (
                    <DropdownMenuItem
                      key={country.code}
                      onClick={() => setSelectedCountry(country)}
                    >
                      <span className="mr-2">{renderFlag(country)}</span>
                      {country.name} ({country.phoneCode})
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
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
          <CustomButton type='main' customClass={styles.contactusButton}>ПОЗВОНИТЕ МНЕ</CustomButton>
          <span className='text-[10px] text-center text-textsmain leading-[12px] pt-[-10px]'>Даю согласие на обработку<br /> Персональных данных</span>
        </div>
        <img
          src="/clouds/cloudsmodal.svg"
          alt="Background"
          className='absolute top-7 md:-top-10 w-[578px] h-auto object-cover'
        />
      </div>
    </Modal>
  );
};