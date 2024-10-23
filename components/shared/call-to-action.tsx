import { ToggleGroup, ToggleGroupItem } from "../ui/toggle-group";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

export default function CallToAction({ shadow = true }) {
 return (
   <div className="w-full md:w-[478px]">
     <div className="flex gap-4 justify-left items-center mb-3">
       <label className="text-[15px] text-white">Укажите</label>
       <ToggleGroup type="single">
         <ToggleGroupItem value="WhatsApp" className="h-[24px]">WhatsApp</ToggleGroupItem>
         <ToggleGroupItem value="Email" className="h-[24px]">Email</ToggleGroupItem>
         <ToggleGroupItem value="Telegram" className="h-[24px]">Telegram</ToggleGroupItem>
       </ToggleGroup>
     </div>

     <div className="flex flex-col md:relative">
       <Input
         className={`w-full md:w-[478px] h-[41px] ${shadow ? 'shadow-md' : ''}`}
         placeholder="+7 (999) 999-99-99"
       />
       
       <Button
         variant="main"
         className="w-full mt-2 md:mt-0 md:w-[231px] md:absolute md:right-0 md:top-0 md:h-full md:shadow-none"
       >
         Узнать подробности
       </Button>
     </div>

     <div className="w-[160px] text-center mt-2 mx-auto md:ml-auto md:mr-0">
       <p className="text-[#EEF5F7] text-[10px] leading-tight">
         Даю согласие на обработку<br/>персональных данных
       </p>
     </div>
   </div>
 );
}