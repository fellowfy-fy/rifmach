"use client"
import { useState } from 'react';
import { ToggleGroup, ToggleGroupItem } from "../toggle-group";
import styles from "./Tips.module.css"

interface TipItemProps {
  value: string;
  background: string;
  border: string;
  hoverBorder?: string;
  activeBorder?: string;
}

const tipItems: TipItemProps[] = [
  {
    value: "0",
    background: "#FFF0F0",
    border: "#EDD5D5",
    hoverBorder: "#DEB6B6",
    activeBorder: "#FFBABA",
  },
  {
    value: "5",
    background: "#F0FAFF",
    border: "#CEDFE8",
    hoverBorder: "#CEDFE8",
    activeBorder: "#0E9EFF"
  },
  {
    value: "10",
    background: "#F1FEF8",
    border: "#D9EBE3",
    hoverBorder: "#D9EBE3",
    activeBorder: "#34D399"
  }
];

const getEmoji = (value: string) => {
  switch (value) {
    case "0":
      return "😔";
    case "5":
      return "😊";
    case "10":
      return "😁";
    default:
      return "😊";
  }
};

export default function Tips({ onTipChange }: { onTipChange?: (tip: number) => void }) {
  const [selectedTip, setSelectedTip] = useState<string>("");

  return (
    <div className="flex items-center gap-6">
      <ToggleGroup
        type="single"
        className="flex gap-4"
        onValueChange={(value) => {
          setSelectedTip(value);
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
              hover:shadow-md
              data-[state=on]:border-[2px]
              [&:not([data-state=on])]:border-opacity-50
              hover:border-opacity-100
            `}
            style={{
              backgroundColor: item.background,
              borderColor: item.value === selectedTip ? item.activeBorder : item.border,
            }}
          >
            <span className={styles.tipButtonStyle}>
              {item.value === "0" ? "0%" : `+${item.value}%`}
            </span>
          </ToggleGroupItem>
        ))}
      </ToggleGroup>
      <span className="text-2xl">{getEmoji(selectedTip)}</span>
    </div>
  );
}