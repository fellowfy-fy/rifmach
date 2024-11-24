'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Input } from '@/components/ui/input';
import { countries } from '@/constants/phone-dropdown';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

interface PhoneInputProps {
  shadow?: boolean;
}

export const PhoneInput = ({ shadow = true }: PhoneInputProps) => {
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isValid, setIsValid] = useState<boolean | null>(null);
  const [isFocused, setIsFocused] = useState(false);

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
    
    let formatted = '';
    if (cleaned.length > 0) {
      formatted += `(${cleaned.substring(0, 3)}`;
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
    const inputValue = e.target.value.replace(/^\+\d\s/, '');
    const numberOnly = inputValue.replace(/\D/g, '');

    if (numberOnly.length <= 10) {
      const formatted = formatPhoneNumber(numberOnly);
      setPhoneNumber(formatted);
      setIsValid(validatePhoneNumber(numberOnly));
    }
  };

  const getBorderColor = () => {
    if (!phoneNumber) return 'border border-[#D4D4D4]';
    if (isValid === false) return 'border border-[#EB4403]';
    if (isValid === true) return 'border border-[#A4FA60]';
    return 'border border-[#D4D4D4]';
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
    setPhoneNumber('');
    setIsValid(null);
  }, [selectedCountry]);

  return (
    <div className="flex justify-center w-full font-harmonia">
      <div className="relative flex items-center w-full md:w-[478px]">
        <DropdownMenu>
          <DropdownMenuTrigger className="flex items-center gap-1 absolute left-3 z-10">
            {renderFlag(selectedCountry)}
            <Image
              src="/icons/dropdown-cta.svg"
              alt="выбор"
              width={13}
              height={8}
              className='pt-1'
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
        <div className="absolute left-[3.5rem] z-10 text-black font-normal text-[1rem] pt-1">
          {selectedCountry.phoneCode}
        </div>
        <Input
          noBorder
          className={`w-full h-[44px] pl-[5rem] transition-colors placeholder:text-[#A4AFB5] text-[1rem] placeholder:text-[1rem] pt-3 focus:placeholder:opacity-0  ${
            shadow ? 'shadow-[9px_10px_30px_0px_#65ADED]' : ''
          } ${getBorderColor()}`}
          placeholder="(999) 999-99-99"
          value={phoneNumber}
          onChange={handlePhoneChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
        {isValid === false && (
          <p className="absolute -bottom-6 left-0 text-[#EB4403] text-[12px]">
            Некорректный номер телефона
          </p>
        )}
      </div>
    </div>
  );
};