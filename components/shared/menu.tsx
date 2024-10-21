import { Dropdown } from "./dropdown";
import { Button } from "../ui/button";
import MobileAccordion from "./mobile-accordion";
import { useRouter } from "next/navigation";

export default function Menu() {
    const router = useRouter()

    return (
        <div className="flex flex-col md:flex-row items-start md:items-center md:justify-center md:gap-[50px] lg:gap-[60px] xl:gap-[80px] mx-[9.31%] pt-[16px]">
            <div className="hidden md:block">
                <div className="flex flex-row md:gap-[50px] lg:gap-[60px] xl:gap-[80px] mr-4">
                    <Dropdown variant="services" />
                    <Dropdown variant="themes" />
                    <Dropdown variant="examples" />
                </div>
            </div>

            <div className="block md:hidden w-full">
                <MobileAccordion/>
            </div>

            <Button className="text-left md:text-center" onClick={()=> router.push("/")}>Цены</Button>
            <Button className="text-left md:text-center" onClick={()=> router.push("/authors")}>Авторы</Button>
            <Button className="text-left md:text-center" onClick={()=> router.push("/reviews")}>Отзывы</Button>
            <Button className="text-left md:text-center" onClick={()=> router.push("/contacts")}>Контакты</Button>
        </div>
    );
}
