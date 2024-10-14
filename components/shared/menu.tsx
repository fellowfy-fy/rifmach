import { Dropdown } from "./dropdown";
import { Button } from "../ui/button";

export default function Menu() {
    return(
        <div className="flex flex-col md:flex-row items-center gap-[6.94%] mx-[9.31%] pt-[16px]">
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