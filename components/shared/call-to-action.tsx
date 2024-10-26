"use client"
import { useState, useEffect } from "react";
import { ToggleGroup, ToggleGroupItem } from "../ui/toggle-group";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { ChevronDown } from "lucide-react";
import { countries } from "@/constants/phone-dropdown";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

export default function CallToAction({ shadow = true }) {
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isValid, setIsValid] = useState<boolean | null>(null);
  const [isFocused, setIsFocused] = useState(false);

  const validatePhoneNumber = (number: string) => {
    if (!number) return null;

    const cleanNumber = number.replace(/\D/g, "");

    switch (selectedCountry.code) {
      case "RU":
        return cleanNumber.length === 10 && /^9/.test(cleanNumber);
      case "US":
        return cleanNumber.length === 10 && /^[2-9]/.test(cleanNumber);
      default:
        return cleanNumber.length === 10;
    }
  };

  const formatPhoneNumber = (value: string) => {
    const cleaned = value.replace(/\D/g, "").substring(0, 10);
    
    if (cleaned.length === 0) return selectedCountry.phoneCode;
    
    let formatted = selectedCountry.phoneCode;
    
    if (cleaned.length > 0) {
      // Форматируем только если есть хотя бы одна цифра
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
    const numberOnly = inputValue.replace(selectedCountry.phoneCode, '').replace(/\D/g, "");
    
    if (numberOnly.length <= 10) {
      const formatted = formatPhoneNumber(numberOnly);
      setPhoneNumber(formatted);
      setIsValid(validatePhoneNumber(numberOnly));
    }
  };

  const getBorderColor = () => {
    if (!isFocused && !phoneNumber) return "border-[#D4D4D4]";
    if (isValid === false) return "border-[#EB4403]";
    if (isValid === true) return "border-[#A4FA60]";
    return "border-[#D4D4D4]";
  };

  useEffect(() => {
    setPhoneNumber(selectedCountry.phoneCode);
    setIsValid(null);
  }, [selectedCountry]);

  return (
    <div className="w-full md:w-[478px]">
      <div className="flex gap-4 justify-left items-center mb-3">
        <label className="text-[15px] text-white">Укажите</label>
        <ToggleGroup type="single">
          <ToggleGroupItem value="WhatsApp" className="h-[24px]">WhatsApp</ToggleGroupItem>
          <ToggleGroupItem value="Email" className="h-[24px]">Email</ToggleGroupItem>
          <ToggleGroupItem value="Telegram" className="h-[24px]">Telegram</ToggleGroupItem>
        </ToggleGroup>
      </div>
      <div className="flex flex-col md:relative">
        <div className="relative flex items-center">
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 absolute left-3 z-10">
              <span>{selectedCountry.flag}</span>
              <ChevronDown className="h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              {countries.map((country) => (
                <DropdownMenuItem
                  key={country.code}
                  onClick={() => setSelectedCountry(country)}
                >
                  <span className="mr-2">{country.flag}</span>
                  {country.name} ({country.phoneCode})
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
          <Input
            className={`w-full md:w-[478px] h-[41px] pl-20 transition-colors ${shadow ? 'shadow-md' : ''} ${getBorderColor()}`}
            placeholder={`${selectedCountry.phoneCode} (999) 999-99-99`}
            value={phoneNumber}
            onChange={handlePhoneChange}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
          />
          <Button
            variant="main"
            className="w-full mt-2 md:mt-0 md:w-[231px] md:absolute md:right-0 md:top-0 md:h-full md:shadow-none hidden md:block"
          >
            Узнать подробности
          </Button>
        </div>
        <Button
            variant="main"
            className="w-full mt-2 md:mt-0 md:w-[231px] md:absolute md:right-0 md:top-0 md:h-full md:shadow-none md:hidden block"
          >
            Узнать подробности
          </Button>
        <div className="relative h-12"> 
          {isValid === false && (
            <p className="absolute top-1 left-0 text-[#EB4403] text-[12px]">
              Некорректный номер телефона
            </p>
          )}
          <div className="absolute right-0 w-[160px] text-center">
            <p className="text-[#A6A6A6] md:text-[#EEF5F7]  mt-2 text-[10px] leading-tight">
              Даю согласие на обработку<br/>персональных данных
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}