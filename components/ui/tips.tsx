"use client"
import { ToggleGroup, ToggleGroupItem } from "./toggle-group";

interface TipItemProps {
  value: string;
  background: string;
  border: string;
  hoverBorder?: string;
  activeGradient?: {
    from: string;
    to: string;
  };
}

const tipItems: TipItemProps[] = [
  {
    value: "0",
    background: "#FFF0F0",
    border: "#EDD5D5",
    hoverBorder: "#DEB6B6",
    activeGradient: {
      from: "#FFFBF0",
      to: "#FFD3D3"
    }
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
    <div className="flex items-center gap-6">
      <ToggleGroup
        type="single"
        className="flex gap-4"
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
              group
              w-20 h-12
              rounded-[5px]
              flex
              items-center
              justify-center
              border
              transition-all
              ${item.value === "0" ?
                'hover:border-[#DEB6B6] hover:shadow-md data-[state=on]:bg-gradient-to-b data-[state=on]:from-[#FFFBF0] data-[state=on]:to-[#FFD3D3]'
                : ''
              }
            `}
            style={{
              backgroundColor: item.background,
              borderColor: item.border,
            }}
          >
            <span className="text-[15px] font-bold text-textsmain">
              {item.value === "0" ? "0%" : `+${item.value}%`}
            </span>
          </ToggleGroupItem>
        ))}
      </ToggleGroup>
      <span className="text-2xl">😊</span>
    </div>
  );
}