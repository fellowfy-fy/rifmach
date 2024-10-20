import { Button } from "../ui/button"

export default function OtherBlock() {
    return(
        <div className="flex flex-col text-left justify-start items-start gap-3">
            <h4 className="uppercase text-headers text-h3 mb-2">дополнительно</h4>
            <Button variant="footer" size="footer">Авторы</Button>
            <Button variant="footer" size="footer">Цены</Button>  
            <Button variant="footer" size="footer">Контакты</Button>   
            <Button variant="footer" size="footer">Отзывы</Button>   
        </div>
    )
}