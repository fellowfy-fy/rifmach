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
} from '../../ui/dropdown-menu';

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

    if (cleaned.length === 0) return selectedCountry.phoneCode;

    let formatted = selectedCountry.phoneCode;

    if (cleaned.length > 0) {
      formatted += ` (${cleaned.substring(0, 3)}`;
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
    if (!isFocused && !phoneNumber) return 'border-[#D4D4D4]';
    if (isValid === false) return 'border-[#EB4403]';
    if (isValid === true) return 'border-[#A4FA60]';
    return 'border-[#D4D4D4]';
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
    setPhoneNumber(selectedCountry.phoneCode);
    setIsValid(null);
  }, [selectedCountry]);

  return (
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
        className={`w-full md:w-[478px] border-none h-[44px] pl-14 transition-colors ${
          shadow ? 'shadow-[9px_10px_30px_0px_#65ADED]' : ''
        } ${getBorderColor()}`}
        placeholder={`${selectedCountry.phoneCode} (999) 999-99-99`}
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
  );
};
