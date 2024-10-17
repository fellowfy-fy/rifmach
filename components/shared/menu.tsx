import { Dropdown } from "./dropdown";
import { Button } from "../ui/button";

export default function Menu() {
    return(
        <div className="flex flex-col md:flex-row items-center justify-center md:gap-[50px] lg:gap-[60px] xl:gap-[80px] mx-[9.31%] pt-[16px] ">
            <Dropdown variant="services" />
            <Dropdown variant="themes" />
            <Dropdown variant="examples" />
            <Button>Цены</Button>
            <Button>Авторы</Button>
            <Button>Отзывы</Button>
            <Button>Контакты</Button>
        </div>
    );
}