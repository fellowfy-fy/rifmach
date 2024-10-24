"use client";
import * as React from "react";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";

type DropdownVariant = "services" | "themes" | "examples";

interface DropdownProps {
  variant: DropdownVariant;
  className?: string;
}

export function Dropdown({ variant = "services" }: DropdownProps) {
  const dropdownData = {
    services: [
      "Стихи к юбилею",
      "Стихи на день рождения",
      "Стихи на свадьбу",
      "Стихи благодарность",
      "Признания в любви",
      "Корпоративные гимны",
    ],
    themes: [
      "Биографии в стихах",
      "Стихи для руководителей",
      "Стихи для коллег",
      "Стихи в стиле известных поэтов",
      "Стихи на профессиональные праздники",
      "Визитка на конкурс",
    ],
    examples: [
      "Извинения в стихах",
      "Рекламные стихи",
      "Объявления в стихах",
      "Частушки",
      "Стихи ко дню влюблённых",
      "РЭП текст",
    ],
  };

  const data = dropdownData[variant];

  return (
    <Select>
      <SelectTrigger className="w-auto shrink-0 px-0 py-0">
        <SelectValue
          placeholder={
            variant === "services"
              ? "Услуги"
              : variant === "themes"
              ? "Темы поздравлений"
              : "Примеры работ"
          }
        />
      </SelectTrigger>
      <SelectContent>
        {data.map((item, index) => (
          <SelectItem key={index} value={item}>
            {item}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
