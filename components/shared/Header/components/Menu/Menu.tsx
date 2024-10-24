import { Dropdown } from "../../../dropdown";
import { Button } from "../../../../ui/button";
import MobileAccordion from "../../../mobile-accordion";
import { useRouter } from "next/navigation";
import styles from "./menu.module.css";

export default function Menu() {
  const router = useRouter();

  return (
    <div className={styles.menuWrapperStyle}>
      <div className="hidden md:block">
        <Dropdown variant="services" />
      </div>

      <div className="hidden md:block">
        <Dropdown variant="themes" className="hidden md:block" />
      </div>

      <div className="hidden md:block">
        <Dropdown variant="examples" className="hidden md:block" />
      </div>

      <div className="block md:hidden w-full">
        <MobileAccordion />
      </div>

      <Button
        className="text-left md:text-center md:px-0 xs:px-4"
        onClick={() => router.push("/")}
      >
        Цены
      </Button>
      <Button
        className="text-left md:text-center md:px-0 xs:px-4"
        onClick={() => router.push("/authors")}
      >
        Авторы
      </Button>
      <Button
        className="text-left md:text-center md:px-0 xs:px-4"
        onClick={() => router.push("/reviews")}
      >
        Отзывы
      </Button>
      <Button
        className="text-left md:text-center md:px-0 xs:px-4"
        onClick={() => router.push("/contacts")}
      >
        Контакты
      </Button>
    </div>
  );
}
