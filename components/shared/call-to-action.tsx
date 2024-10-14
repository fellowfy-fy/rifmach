import { ToggleGroup, ToggleGroupItem } from "../ui/toggle-group"
import { Input } from "../ui/input"
import { Button } from "../ui/button"

export default function CallToAction() {
    return(
        <div>
            <div>
                <label className="text-[15px] text-white">Укажите</label>
                <ToggleGroup type="single">
                    <ToggleGroupItem value="WhatsApp">WhatsApp</ToggleGroupItem>
                    <ToggleGroupItem value="Email">Email</ToggleGroupItem>
                    <ToggleGroupItem value="Telegram">Telegram</ToggleGroupItem>
                </ToggleGroup>
            </div>
            <div className="flex flex-col md:flex-row">
                <Input />
                <Button variant="main">Узнать подробности</Button>
            </div>
            <label className="text-[#A6A6A6] text-[10px]">Даю согласие на обработку<br />персональных данных</label>
        </div>
    )
}