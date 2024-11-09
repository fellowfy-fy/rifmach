import { countries } from '@/constants/phone-dropdown';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import Image from 'next/image';

interface PhoneDropdownProps {
  selectedCountry: (typeof countries)[0];
  setSelectedCountry: (country: (typeof countries)[0]) => void;
}

export const PhoneDropdown: React.FC<PhoneDropdownProps> = ({ selectedCountry, setSelectedCountry }) => {
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

  return (
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
  );
};