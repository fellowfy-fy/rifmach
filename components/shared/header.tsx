"use client"
import { useState } from "react";
import HeaderContent from "./header-content";
import Menu from "./menu";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet"; 
import { MenuIcon } from "lucide-react"; 
import Image from "next/image";
import { Button } from "../ui/button";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="py-[15px]">
      <div className="block md:hidden">
        <div className="flex items-center justify-between mx-[9.31%]">
          <button onClick={() => setIsOpen(true)}>
            <MenuIcon className="w-6 h-6 text-orange-600" />
          </button>
          
          <Image 
            src="/logo.svg"
            alt="Логотип"
            width={138}
            height={44}
          />

          <button>
            <Image
              src="/WhatsApp.svg"
              alt="WhatsApp"
              width={25}
              height={25}
            />
          </button>
        </div>

        {/* меню для мобилки */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetContent side="top" className="p-4 h-full">
            <Menu />
            <div className="mt-8 text-center">
              <hr />
              <h4 className="text-[16px] regular">Пообщаемся?</h4>
              <div className="flex flex-row items-center mt-2">
                <Image src="/phone.svg" alt="Телефон" width={26} height={25} />
                <span className="text-[20px] text-[#25253F] font-semibold ml-2">+7 999 333-89-60</span>
              </div>
              <hr />
              <Button variant="callback" className="mt-4 w-full">ОБРАТНЫЙ ЗВОНОК</Button>
              <div className="flex items-center gap-3 mt-4">
                <Image src="/vk.svg" alt="VK" width={25} height={25} />
                <Image src="/tg.svg" alt="Telegram" width={25} height={25} />
                <Image src="/WhatsApp.svg" alt="WhatsApp" width={25} height={25} />
              </div>
              <p className="text-center text-orange-600 mt-4">mail@rifmach.ru</p>
            </div>
          </SheetContent>
        </Sheet>
      </div>

      <div className="hidden md:block">
        <HeaderContent />
        <hr />
        <Menu />
      </div>
    </div>
  );
}
