import Image from "next/image";
import { Button } from "../ui/button";

export default function HeaderContent() {
  return (
    <div className="flex flex-row mx-[9.31%] items-center justify-between pb-[18px]">
      <Image 
        src="/logo.svg"
        alt="Логотип"
        width={138}
        height={44}
      />

      {/* это не рендерится на мобилке */}
      <div className="hidden md:flex md:flex-row flex-col items-center">
        <Image 
          src="/lvetka.svg"
          alt="Ветвь"
          width={45}
          height={45}
        />
        <h4 className="text-h4 text-accent bold">16 лет<br />с вами</h4>
        <Image 
          src="/rvetka.svg"
          alt="Ветвь"
          width={45}
          height={45}
        />
      </div>

      <div className="hidden md:flex flex-col items-center">
        <Image 
          src="/stars.svg"
          alt="Звезды"
          width={76}
          height={13}
        />
        <h4 className="text-[13px] text-[#B6B6B6] bold">544 отзыва</h4>
      </div>

      <div className="hidden md:flex flex-row items-center">
        <Image 
          src="/lvetka.svg"
          alt="Ветвь"
          width={45}
          height={45}
        />
        <h4 className="text-h4 text-accent bold">20 000+<br />стихов</h4>
        <Image 
          src="/rvetka.svg"
          alt="Ветвь"
          width={45}
          height={45}
        />
      </div>

      <div className="flex items-center gap-3">
        <button>
          <Image
            src="/tg.svg"
            alt="Telegram"
            width={25}
            height={25}
          />
        </button>
        <button>
          <Image
            src="/WhatsApp.svg"
            alt="WhatsApp"
            width={25}
            height={25}
          />
        </button>
      </div>

      <Button variant="callback" className="hidden md:block">ОБРАТНЫЙ ЗВОНОК</Button>

      {/* Phone number - always visible */}
      <div className="flex flex-row items-center">
        <Image
          src="/phone.svg"
          alt="Телефон"
          width={26}
          height={25}
        />   
        <button className="text-[20px] text-[#25253F] font-semibold">+7 999 333-89-60</button>
      </div>
    </div>
  );
}
