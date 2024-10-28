'use client';
import { useState, useEffect } from 'react';
import { Sheet, SheetContent } from '@/components/ui/sheet';
import { MenuIcon } from 'lucide-react';
import Image from 'next/image';
import Menu from './components/Menu/Menu';
import { Button } from '../../ui/button';

export function MobileHeader() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 767) {
        setIsOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="pt-[15px] pb-[12px] block md:hidden">
      <div className="flex items-center justify-between mx-[9.31%]">
        <button onClick={() => setIsOpen(true)}>
          <MenuIcon className="w-6 h-6 text-orange-600" />
        </button>

        <Image src="/icons/logo.svg" alt="Логотип" width={138} height={44} />

        <button>
          <Image
            src="/icons/WhatsApp.svg"
            alt="WhatsApp"
            width={25}
            height={25}
          />
        </button>
      </div>

      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetContent side="top" className="p-4 h-full items-start text-left">
          <Menu>
            <div className="mt-8">
              <hr />
              <h4 className="text-h3 regular mt-3 text-headers uppercase">
                Пообщаемся?
              </h4>
              <div className="flex flex-row items-center my-2">
                <Image
                  src="/icons/phone.svg"
                  alt="Телефон"
                  width={26}
                  height={25}
                />
                <a
                  href="tel:+79993338960"
                  className="text-[20px] text-[#25253F] font-semibold ml-2 hover:text-[#50636A]"
                >
                  +7 999 333-89-60
                </a>
              </div>
              <hr />
              <Button variant="callback" className="mt-4 w-full">
                ОБРАТНЫЙ ЗВОНОК
              </Button>
              <div className="flex items-center gap-3 mt-4">
                <Image src="/icons/vk.svg" alt="VK" width={25} height={25} />
                <Image
                  src="/icons/tg.svg"
                  alt="Telegram"
                  width={25}
                  height={25}
                />
                <Image
                  src="/icons/WhatsApp.svg"
                  alt="WhatsApp"
                  width={25}
                  height={25}
                />
              </div>
              <p className="text-orange-600 mt-4">mail@rifmach.ru</p>
            </div>
          </Menu>
        </SheetContent>
      </Sheet>
    </div>
  );
}
