"use client";
import { useState } from "react";
import { Input } from "../ui/input";
import Tips from "../ui/Tips/Tips";

interface PriceComponentProps {
  isInputDisabled?: boolean;
}

export default function PriceComponent({ isInputDisabled = false }: PriceComponentProps) {
  const [price, setPrice] = useState(0);
  const [selectedTip, setSelectedTip] = useState(0);

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (isInputDisabled) return;
    const value = parseFloat(e.target.value) || 0;
    setPrice(value);
  };

  const handleTipChange = (tipPercentage: number) => {
    setSelectedTip(tipPercentage);
  };

  const tipAmount = (price * selectedTip) / 100;
  const total = price + tipAmount;

  return (
    <div className="w-full flex flex-col">
      <p className="text-h4 md:text-h3 regular text-headers font-light pb-[16px]">
        Стоимость
      </p>
      <Input
        value={price || ''}
        onChange={handlePriceChange}
        type="number"
        className={`w-full h-[52px] ${isInputDisabled ? 'bg-gray-100 cursor-not-allowed' : ''}`}
        disabled={isInputDisabled}
        readOnly={isInputDisabled}
      />
      <p className="text-[13px] regular text-headers pb-[12px] pt-[24px]">
        По желанию вы можете дополнительно выразить благодарность чаевыми
      </p>
      <div className="flex justify-left pb-[32px]">
        <Tips onTipChange={handleTipChange} />
      </div>
      <div className="flex justify-between items-center">
        <span className="text-h3">Итого к оплате:</span>
        <span className="text-h3 font-bold">
          {total.toLocaleString("ru-RU", {
            style: "currency",
            currency: "RUB",
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
          })}
        </span>
      </div>
    </div>
  );
}