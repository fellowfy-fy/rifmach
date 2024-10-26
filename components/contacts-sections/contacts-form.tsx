import { Input } from "../ui/input"
import { Textarea } from "../ui/textarea"
import { Button } from "../ui/button"
import ContactsAccordion from "./contacts-accordion"

export default function ContactsForm() {
    return(
        <div className="px-4 md:px-10 lg:px-20 xl:px-32 2xl:px-[15%] items-center">
            <div className="flex flex-col lg:flex-row gap-[2%] mb-8">
                <div className="w-full flex flex-col gap-4">
                    <div className="mb-8">
                        <h1 className="text-[24px] md:text-h2 text-headers uppercase">
                            напишите нам
                        </h1>
                        <hr className="w-[40px] md:w-[50px] h-[5px] bg-main rounded-sm mt-[10px] md:mt-[22px]"/>
                    </div>

                    <div className="flex flex-col md:flex-row gap-4 text-h4 text-textsmain">
                        <div>
                            <p className="mb-2">Как вас зовут?</p>
                            <Input placeholder="Иван"/>
                        </div>

                        <div>
                            <p className="mb-2">E-mail</p>
                            <Input placeholder="mail@example.com"/>
                        </div>
                    </div>

                    <div>
                        <p className="text-h4 text-textsmain mb-2">Тема</p>
                        <Textarea placeholder="Привет, Рифмачи!"/>
                    </div>

                    <div className="flex flex-col md:flex-row items-center gap-4">
                        <Button variant="main">отправить сообщение</Button>
                        <p className="text-textsmain text-[10px] text-center md:text-left">Даю согласие на обработку<br/>Персональных данных</p>
                    </div>
                </div>

                <div className="mt-4 lg:mt-0 text-textsmain">
                    <p>Наши реквизиты</p>
                    <ContactsAccordion/>
                </div>
            </div>

            <hr className="hidden md:block"/>
        </div>
    )
}