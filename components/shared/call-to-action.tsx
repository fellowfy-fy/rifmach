import { ToggleGroup, ToggleGroupItem } from "../ui/toggle-group";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

export default function CallToAction() {
  return (
    <div className="w-full md:w-[478px]">
      <div className="flex gap-4 justify-left items-center mb-3">
        <label className="text-[15px] text-white">Укажите</label>
        <ToggleGroup type="single">
          <ToggleGroupItem value="WhatsApp">WhatsApp</ToggleGroupItem>
          <ToggleGroupItem value="Email">Email</ToggleGroupItem>
          <ToggleGroupItem value="Telegram">Telegram</ToggleGroupItem>
        </ToggleGroup>
      </div>

      <div className="flex flex-col md:flex-row items-center">
        <Input
          className="w-full md:w-[245px] mb-1.5 md:mb-0 h-[45px] md:h-[41px]"
          placeholder="+7 (999) 999-99-99"
        />

        <Button variant="main" className=" md:shadow-none">Узнать подробности</Button>
      </div>

      <div className="w-full text-center md:text-right mt-2">
        <label className="text-[#EEF5F7] text-[10px] leading-tight">
          Даю согласие на обработку персональных данных
        </label>
      </div>
    </div>
  );
}
