import Image from "next/image";
import { Button } from "../../../../ui/button";
import { useRouter } from "next/navigation";
import styles from "./HeaderContent.module.css";

export default function HeaderContent() {
  const router = useRouter();
  return (
    <div className={styles.headerContentWrapperStyle}>
      <Image
        src="/icons/logo.svg"
        alt="Логотип"
        width={138}
        height={44}
        onClick={() => router.push("/")}
        className={styles.logoStyle}
      />
      {/* это не рендерится на мобилке */}
      <div className="hidden md:flex md:flex-row flex-col items-center">
        <Image
          src="/icons/lvetka.svg"
          alt="Ветвь"
          width={45}
          height={45}
          className={styles.branchStyle}
        />
        <h4
          // className="text-h4 text-accent bold"
          className={styles.advantageTextStyle}
        >
          16 лет
          <br />
          с&nbsp;вами
        </h4>
        <Image
          src="/icons/rvetka.svg"
          alt="Ветвь"
          width={45}
          height={45}
          className={styles.branchStyle}
        />
      </div>
      <div
        className="hidden md:flex flex-col items-center cursor-pointer"
        onClick={() => router.push("/reviews")}
      >
        <Image src="/icons/stars.svg" alt="Звезды" width={76} height={13} />
        <h4 className="text-[13px] text-[#B6B6B6] bold">544 отзыва</h4>
      </div>
      <div className="hidden md:flex flex-row items-center cursor-pointer" onClick={() => router.push("/catalog")}>
        <Image
          src="/icons/lvetka.svg"
          alt="Ветвь"
          width={45}
          height={45}
          className={styles.branchStyle}
        />
        <h4 className={styles.advantageTextStyle}>
          20&nbsp;000+
          <br />
          стихов
        </h4>
        <Image
          src="/icons/rvetka.svg"
          alt="Ветвь"
          width={45}
          height={45}
          className={styles.branchStyle}
        />
      </div>
      <div className={styles.iconsContainer}>
        <button>
          <Image
            src="/icons/tg.svg"
            alt="Telegram"
            width={25}
            height={25}
            className={styles.icon}
          />
        </button>
        <button>
          <Image
            src="/icons/WhatsApp.svg"
            alt="WhatsApp"
            width={25}
            height={25}
            className={styles.icon}
          />
        </button>
      </div>
      <Button variant="callback" className={styles.callbackButton}>
        ОБРАТНЫЙ ЗВОНОК
      </Button>
      <div className="flex flex-row items-center">
        <Image
          src="/icons/phone.svg"
          alt="Телефон"
          width={26}
          height={25}
          className={styles.icon}
        />
        <a
          href="tel:+79993338960"
          className="~text-xs/xl text-[#25253F] font-semibold"
        >
          +7 999 333-89-60
        </a>
      </div>
    </div>
  );
}
