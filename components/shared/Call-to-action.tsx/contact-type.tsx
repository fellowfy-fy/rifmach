import { ToggleGroup, ToggleGroupItem } from "../../ui/toggle-group";

export const ContactType = () => {
  return (
    <div className="flex gap-4 justify-left items-center mb-3">
      <label className="text-[15px] text-white">Укажите</label>
      <ToggleGroup type="single">
        <ToggleGroupItem value="WhatsApp" className="h-[24px]">WhatsApp</ToggleGroupItem>
        <ToggleGroupItem value="Email" className="h-[24px]">Email</ToggleGroupItem>
        <ToggleGroupItem value="Telegram" className="h-[24px]">Telegram</ToggleGroupItem>
      </ToggleGroup>
    </div>
  );
};