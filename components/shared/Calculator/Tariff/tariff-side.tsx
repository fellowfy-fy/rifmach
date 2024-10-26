import * as React from "react";

import { TariffRadioGroup } from "./tariff-radio-group";
import { TariffDropdown } from "./tariff-dropdown";
import { TariffBenefits } from "./tariff-benefits";


interface Props {
  tariff: string;
  setTariff: (value: string) => void;
  occasion: number;
  setOccasion: (value: number) => void;
  className?: string;
}

export const TariffSide: React.FC<Props> = ({ occasion, setOccasion, tariff, setTariff }) => {
  return (
    <div className='pt-[25px] pb-[28px] px-[28px]'>
      <h3 className='font-bold text-headers mb-2'>Выберите повод</h3>
      <TariffDropdown className="mb-[30px]" occasion={occasion} setOccasion={setOccasion} />
      <TariffRadioGroup className="mb-6" tariff={tariff} setTariff={setTariff}/>
      <TariffBenefits tariff={tariff}/>
    </div>
  );
};