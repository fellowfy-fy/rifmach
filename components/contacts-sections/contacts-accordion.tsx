import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function ContactsAccordion() {
    return(
        <Accordion type="single" collapsible className="border rounded-[5px] w-full md:w-[478px] py-2">
            <AccordionItem value="item-1" className="px-4">
                <AccordionTrigger className="uppercase">Испольнитель:</AccordionTrigger>
                <AccordionContent>
                    ИП Ясюнинский Андрей Павлович
                </AccordionContent>
            </AccordionItem>
<hr />
            <AccordionItem value="item-2" className="px-4">
                <AccordionTrigger className="uppercase">ИНН:</AccordionTrigger>
                <AccordionContent>
                    772365016790
                </AccordionContent>
            </AccordionItem>
<hr />
            <AccordionItem value="item-3" className="px-4">
                <AccordionTrigger className="uppercase">Банк:</AccordionTrigger>
                <AccordionContent>
                    304770000261881
                </AccordionContent>
            </AccordionItem>
<hr />
            <AccordionItem value="item-4" className="px-4">
                <AccordionTrigger className="uppercase">ОГРНИП:</AccordionTrigger>
                <AccordionContent>
                    ПАО «СБЕРБАНК»
                </AccordionContent>
            </AccordionItem>
<hr />
            <AccordionItem value="item-5" className="px-4">
                <AccordionTrigger className="uppercase">Расчётный счёт:</AccordionTrigger>
                <AccordionContent>
                    40802810638000150782
                </AccordionContent>
            </AccordionItem>
<hr />
            <AccordionItem value="item-6" className="px-4">
                <AccordionTrigger className="uppercase">Корреспондентский счёт:</AccordionTrigger>
                <AccordionContent>
                    30101810400000000225
                </AccordionContent>
            </AccordionItem>
<hr />
            <AccordionItem value="item-7" className="px-4">
                <AccordionTrigger className="uppercase">БИК:</AccordionTrigger>
                <AccordionContent>
                    044525225
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    )
}