"use client"
import { useState } from "react";
import { Input } from "../ui/input";
import Tips from "../ui/tips";

export default function PriceComponent() {
  const [price, setPrice] = useState(0); 
  const [tip, setTip] = useState(0); 

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value) || 0;
    setPrice(value);
  };

  const handleTipChange = (tipAmount: number) => {
    setTip(tipAmount);
  };

  const total = price + tip;

  return (
    <div className="max-w-[500px] flex flex-col gap-3">
      <p className="text-h4 md:text-h3 regular text-headers">Стоимость</p>
      <Input value={price} onChange={handlePriceChange} placeholder="Введите сумму" />
      
      <p className="text-[13px] regular text-headers">
        По желанию вы можете дополнительно выразить благодарность чаевыми
      </p>

      <div className="flex justify-left">
        <Tips onTipChange={handleTipChange} />
      </div>

      <div className="flex justify-between items-center mt-4">
        <span className="text-h3">Итого к оплате:</span>
        <span className="text-h3 font-bold">
          {total.toLocaleString("ru-RU", { style: "currency", currency: "RUB" })}
        </span>
      </div>
    </div>
  );
}
