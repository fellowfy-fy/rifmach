import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from "../ui/button"

export default function MobileAccordion() {
    return(
        <div className="w-full px-4">
            <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1" className="w-full">
                    <AccordionTrigger className="text-h4 regular text-headers w-full">Услуги</AccordionTrigger>
                    <AccordionContent className="flex flex-col items-start">
                        <Button>Стихи к юбилею</Button>
                        <Button>Стихи на день рождения</Button>
                        <Button>Стихи на свадьбу</Button>
                        <Button>Стихи благодарность</Button>
                        <Button>Признания в любви</Button>
                        <Button>Корпоративные гимны</Button>
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                    <AccordionTrigger className="text-h4 regular text-headers">Темы поздравлений</AccordionTrigger>
                    <AccordionContent className="flex flex-col items-start">
                        <Button>Биографии в стихах</Button>
                        <Button>Стихи для руководителей</Button>
                        <Button>Стихи для коллег</Button>
                        <Button>Стихи в стиле известных поэтов</Button>
                        <Button>Стихи на профессиональные праздники</Button>
                        <Button>Визитка на конкурс</Button>
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                    <AccordionTrigger className="text-h4 regular text-headers w-full">Примеры работ</AccordionTrigger>
                    <AccordionContent className="flex flex-col items-start">
                        <Button>Извинения в стихах</Button>
                        <Button>Рекламные стихи</Button>
                        <Button>Объявления в стихах</Button>
                        <Button>Частушки</Button>
                        <Button>Стихи ко дню влюблённых</Button>
                        <Button>РЭП текст</Button>
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>

    )
}