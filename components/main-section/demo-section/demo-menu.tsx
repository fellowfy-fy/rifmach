"use client"
import { ToggleGroup, ToggleGroupItem } from "../../ui/toggle-group";
import { Button } from "@/components/ui/button";
import Image from "next/image";

interface DemoMenuProps {
  variant?: 'primary' | 'secondary' | 'tertiary';
}

export const DemoMenu = ({ variant = 'tertiary' }: DemoMenuProps) => {
  const handleNavigate = (path: string) => {
    window.location.href = path;
  };

  return (
    <div className="relative w-full overflow-x-auto [&::-webkit-scrollbar]:h-[3px] [&::-webkit-scrollbar-track]:bg-white/20 [&::-webkit-scrollbar-thumb]:bg-white [&::-webkit-scrollbar-thumb]:rounded-full">
      <div className="inline-flex flex-nowrap min-w-full pb-3">
        <div className="flex flex-nowrap items-center gap-3">
          <ToggleGroup type="single" ctaVariant={variant} className="gap-3 flex-nowrap whitespace-nowrap">
            <ToggleGroupItem value="1" className="h-[24px] whitespace-nowrap">
              Стих для коллег
            </ToggleGroupItem>
            <ToggleGroupItem value="2" className="h-[24px] whitespace-nowrap">
              Стих на юбилей артистки
            </ToggleGroupItem>
            <ToggleGroupItem value="3" className="h-[24px] whitespace-nowrap">
              60 лет Президенту РЖД
            </ToggleGroupItem>
            <ToggleGroupItem value="4" className="h-[24px] whitespace-nowrap">
              Внуку на свадьбу
            </ToggleGroupItem>
          </ToggleGroup>
          <Button
            variant="demo"
            onClick={() => handleNavigate("/catalog")}
            className="flex items-center gap-2 whitespace-nowrap ml-3"
          >
            Ещё стихи
            <img
              src="/icons/more.svg"
              alt="More"
              width={4}
              height={16}
            />
          </Button>
        </div>
      </div>
    </div>
  );
};