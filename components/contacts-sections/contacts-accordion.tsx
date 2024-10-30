import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function ContactsAccordion() {
    return(
        <Accordion type="single" collapsible className="border rounded-[5px] w-full md:min-w-[478px] py-2">
            <AccordionItem value="item-1" className="px-4">
                <AccordionTrigger>Испольнитель:</AccordionTrigger>
                <AccordionContent>
                    Yes. It adheres to the WAI-ARIA design pattern.
                </AccordionContent>
            </AccordionItem>
<hr />
            <AccordionItem value="item-2" className="px-4">
                <AccordionTrigger>ИНН:</AccordionTrigger>
                <AccordionContent>
                    Yes. It adheres to the WAI-ARIA design pattern.
                </AccordionContent>
            </AccordionItem>
<hr />
            <AccordionItem value="item-3" className="px-4">
                <AccordionTrigger>Банк:</AccordionTrigger>
                <AccordionContent>
                    Yes. It adheres to the WAI-ARIA design pattern.
                </AccordionContent>
            </AccordionItem>
<hr />
            <AccordionItem value="item-4" className="px-4">
                <AccordionTrigger>ОГРНИП:</AccordionTrigger>
                <AccordionContent>
                    Yes. It adheres to the WAI-ARIA design pattern.
                </AccordionContent>
            </AccordionItem>
<hr />
            <AccordionItem value="item-5" className="px-4">
                <AccordionTrigger>Расчётный счёт:</AccordionTrigger>
                <AccordionContent>
                    Yes. It adheres to the WAI-ARIA design pattern.
                </AccordionContent>
            </AccordionItem>
<hr />
            <AccordionItem value="item-6" className="px-4">
                <AccordionTrigger>Корреспондентский счёт:</AccordionTrigger>
                <AccordionContent>
                    Yes. It adheres to the WAI-ARIA design pattern.
                </AccordionContent>
            </AccordionItem>
<hr />
            <AccordionItem value="item-7" className="px-4">
                <AccordionTrigger>БИК:</AccordionTrigger>
                <AccordionContent>
                    Yes. It adheres to the WAI-ARIA design pattern.
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    )
}