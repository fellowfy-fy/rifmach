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
                    Yes. It adheres to the WAI-ARIA design pattern.
                </AccordionContent>
            </AccordionItem>
<hr />
            <AccordionItem value="item-2" className="px-4">
                <AccordionTrigger className="uppercase">ИНН:</AccordionTrigger>
                <AccordionContent>
                    Yes. It adheres to the WAI-ARIA design pattern.
                </AccordionContent>
            </AccordionItem>
<hr />
            <AccordionItem value="item-3" className="px-4">
                <AccordionTrigger className="uppercase">Банк:</AccordionTrigger>
                <AccordionContent>
                    Yes. It adheres to the WAI-ARIA design pattern.
                </AccordionContent>
            </AccordionItem>
<hr />
            <AccordionItem value="item-4" className="px-4">
                <AccordionTrigger className="uppercase">ОГРНИП:</AccordionTrigger>
                <AccordionContent>
                    Yes. It adheres to the WAI-ARIA design pattern.
                </AccordionContent>
            </AccordionItem>
<hr />
            <AccordionItem value="item-5" className="px-4">
                <AccordionTrigger className="uppercase">Расчётный счёт:</AccordionTrigger>
                <AccordionContent>
                    Yes. It adheres to the WAI-ARIA design pattern.
                </AccordionContent>
            </AccordionItem>
<hr />
            <AccordionItem value="item-6" className="px-4">
                <AccordionTrigger className="uppercase">Корреспондентский счёт:</AccordionTrigger>
                <AccordionContent>
                    Yes. It adheres to the WAI-ARIA design pattern.
                </AccordionContent>
            </AccordionItem>
<hr />
            <AccordionItem value="item-7" className="px-4">
                <AccordionTrigger className="uppercase">БИК:</AccordionTrigger>
                <AccordionContent>
                    Yes. It adheres to the WAI-ARIA design pattern.
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    )
}