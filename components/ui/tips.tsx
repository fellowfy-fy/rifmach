"use client"
import { ToggleGroup, ToggleGroupItem } from "./toggle-group";

interface TipItemProps {
  value: string;
  background: string;
  border: string;
}

const tipItems: TipItemProps[] = [
  { 
    value: "0", 
    background: "#FFF0F0", 
    border: "#EDD5D5"
  },
  { 
    value: "5", 
    background: "#F0FAFF", 
    border: "#CEDFE8"
  },
  { 
    value: "10", 
    background: "#F1FEF8", 
    border: "#D9EBE3"
  }
];

export default function Tips({ onTipChange }: { onTipChange?: (tip: number) => void }) {
  return (
    <div className="flex items-center gap-2">
      <ToggleGroup 
        type="single" 
        className="flex gap-2" 
        onValueChange={(value) => {
          if (onTipChange) {
            onTipChange(Number(value));
          }
        }}
      >
        {tipItems.map((item) => (
          <ToggleGroupItem
            key={item.value}
            value={item.value}
            className={`
              w-20 h-12 
              rounded-[5px] 
              flex 
              items-center 
              justify-center
              border
              transition-all
              hover:opacity-90
              text-[15px]
              font-bold
              text-textsmain
            `}
            style={{
              backgroundColor: item.background,
              borderColor: item.border,
            }}
          >
            {item.value === "0" ? "0%" : `+${item.value}%`}
          </ToggleGroupItem>
        ))}
      </ToggleGroup>
      <span className="text-2xl">😊</span>
    </div>
  );
}