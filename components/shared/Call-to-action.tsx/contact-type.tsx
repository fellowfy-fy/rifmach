import { ToggleGroup, ToggleGroupItem } from "../../ui/toggle-group";

interface ContactTypeProps {
  variant?: 'primary' | 'secondary';
}

export const ContactType = ({ variant = 'primary' }: ContactTypeProps) => {
  return (
    <div className="flex gap-4 justify-left items-center mb-3">
      <label className="text-[15px] text-white">Укажите</label>
      <ToggleGroup type="single" ctaVariant={variant}>
        <ToggleGroupItem value="WhatsApp" className="h-[24px]">
          WhatsApp
        </ToggleGroupItem>
        <ToggleGroupItem value="Email" className="h-[24px]">
          Email
        </ToggleGroupItem>
        <ToggleGroupItem value="Telegram" className="h-[24px]">
          Telegram
        </ToggleGroupItem>
      </ToggleGroup>
    </div>
  );
};