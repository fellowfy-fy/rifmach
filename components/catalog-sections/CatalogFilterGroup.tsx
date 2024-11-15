"use client"
import { ToggleGroup, ToggleGroupItem } from "../ui/toggle-group"
import { FilterItem } from "@/constants/filterItem";

interface CatalogFilterGroupProps {
  items: FilterItem[];
  variant?: 'primary' | 'secondary' | 'tertiary' | 'filter';
}

export default function CatalogFilterGroup({ 
  items, 
  variant = 'filter' 
}: CatalogFilterGroupProps) {
  return (
    <ToggleGroup type="single" ctaVariant={variant} className="gap-3 flex-nowrap whitespace-nowrap">
      {items.map((item) => (
        <ToggleGroupItem 
          key={item.value} 
          value={item.value} 
          className="h-[30px] whitespace-nowrap"
        >
          {item.text}
        </ToggleGroupItem>
      ))}
    </ToggleGroup>
  )
}