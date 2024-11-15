import React from 'react';
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useState } from "react";


interface Props {
    tariff: string;
    setTariff: (value: string) => void;
    className?: string;
}

export const TariffRadioGroup: React.FC<Props> = ({ className, tariff, setTariff }) => {

  return (
    <div className={className}>
      <h3 className="font-bold mb-4 text-headers">Выберите тариф</h3>
      <RadioGroup
        value={tariff}
        onValueChange={(value) => setTariff(String(value))}
        className="flex gap-4"
      >
        <div className="flex items-center space-x-2">
          <RadioGroupItem
            value="econom"
            id="econom"
           className="w-5 h-5 border-2 border-radio data-[state=checked]:text-accent [&>span>svg]:w-3.5 [&>span>svg]:h-3.5"
          />
          <Label
            htmlFor="econom"
            className="text-base font-normal cursor-pointer text-textsmain"
          >
            Эконом
          </Label>
        </div>

        <div className="flex items-center space-x-2">
          <RadioGroupItem
            value="base"
            id="base"
           className="w-5 h-5 border-2 border-radio data-[state=checked]:text-accent [&>span>svg]:w-3.5 [&>span>svg]:h-3.5"
          />
          <Label
            htmlFor="base"
            className="text-base font-normal cursor-pointer text-textsmain"
          >
            Базовый
          </Label>
        </div>

        <div className="flex items-center space-x-2">
          <RadioGroupItem
            value="vip"
            id="vip"
           className="w-5 h-5 border-2 border-radio data-[state=checked]:text-accent [&>span>svg]:w-3.5 [&>span>svg]:h-3.5"
          />
          <Label
            htmlFor="vip"
            className="text-base font-normal cursor-pointer text-textsmain"
          >
            VIP+
          </Label>
        </div>
      </RadioGroup>
    </div>
  );
};