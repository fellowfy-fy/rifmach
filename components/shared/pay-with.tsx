"use client"
import { useState } from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import Image from "next/image";
import { cn } from "@/lib/utils";

export default function PayWith() {
  const [selectedValue, setSelectedValue] = useState("option-one");

  const handleSelect = (value: string) => {
    setSelectedValue(value);
  };

  return (
    <div className="flex flex-col gap-4">
      <p className="text-h4 md:text-h3 text-headers">Выберите способ оплаты</p>
      <RadioGroup value={selectedValue} onValueChange={handleSelect}>
        <div
          onClick={() => handleSelect("option-one")}
          className={cn(
            "flex items-left md:items-center space-x-2 justify-center md:justify-between flex-col md:flex-row border rounded-[5px] h-[104px] md:h-[64px] px-[10px] max-w-[500px] cursor-pointer transition-colors duration-200 text-[#34D399]",
            selectedValue === "option-one"
              ? "bg-[#F1FEF8] border-[#34D399]"
              : "border-gray-300"
          )}
        >
          <div className="flex flex-row justify-center items-center gap-2 mb-2 md:mb-0">
            <RadioGroupItem
              value="option-one"
              id="option-one"
              className="cursor-pointer"
              checked={selectedValue === "option-one"}
            />
            <label className="text-[15px] text-headers bold">Российской картой</label>
            <label className="text-[13px] text-[#4B5563]">(комиссия 0%)</label>
          </div>
          <Image src="/icons/cards-ru.svg" width={150} height={30} alt="Российские карты" />
        </div>

        <div
          onClick={() => handleSelect("option-two")}
          className={cn(
            "flex items-left md:items-center space-x-2 justify-center md:justify-between flex-col md:flex-row border rounded-[5px] h-[104px] md:h-[64px] px-[10px] max-w-[500px] w-full cursor-pointer transition-colors duration-200 text-[#34D399]",
            selectedValue === "option-two"
              ? "bg-[#F1FEF8] border-[#34D399]"
              : "border-gray-300"
          )}
        >
          <div className="flex flex-row justify-center items-center gap-2 mb-2 md:mb-0">
            <RadioGroupItem
              value="option-two"
              id="option-two"
              className="cursor-pointer"
              checked={selectedValue === "option-two"}
            />
            <label className="text-[15px] text-headers bold">Иностранной картой</label>
            <label className="text-[13px] text-[#4B5563]">(комиссия 3%)</label>
          </div>
          <Image src="/icons/cards-world.svg" width={150} height={30} alt="Иностранные карты" />
        </div>
      </RadioGroup>
    </div>
  );
}
