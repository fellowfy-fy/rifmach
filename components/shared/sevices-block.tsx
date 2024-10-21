import { Button } from "../ui/button"

export default function ServicesBlock() {
    return(
        <div className="flex flex-col text-left justify-start items-start gap-3">
            <h4 className="uppercase text-headers text-h3 mb-2">услуги</h4>
            <Button variant="footer" size="footer">Стихи на заказ</Button>
            <Button variant="footer" size="footer">Песни на заказ</Button>  
            <Button variant="footer" size="footer">Частушки на заказ</Button>   
        </div>
    )
}
