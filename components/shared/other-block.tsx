"use client"
import { Button } from "../ui/button"
import { useRouter } from "next/navigation"

export default function OtherBlock() {
    const router = useRouter()
    return(
        <div className="flex flex-col text-left justify-start items-start gap-3">
            <h4 className="uppercase text-headers text-h3 mb-2">дополнительно</h4>
            <Button variant="footer" size="footer" onClick={()=> router.push("/authors")}>Авторы</Button>
            <Button variant="footer" size="footer" onClick={()=> router.push("/")}>Цены</Button>  
            <Button variant="footer" size="footer" onClick={()=> router.push("/contacts")}>Контакты</Button>   
            <Button variant="footer" size="footer" onClick={()=> router.push("/reviews")}>Отзывы</Button>   
        </div>
    )
}