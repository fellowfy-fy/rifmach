import { Button } from "../ui/button"
import Image from "next/image"

export default function CTABlock() {
    return(
        <div className="flex flex-col text-left justify-start items-start">
            <h4 className="uppercase text-headers text-h3 mb-4">пообщаеся?</h4>
            <div className="flex flex-col gap-4 text-left justify-start items-start">
                <div className="flex flex-row items-center">
                    <Image
                    src="/phone.svg"
                    alt="Телефон"
                    width={26}
                    height={25}
                    />   
                    <button className="text-[20px] text-[#25253F] font-semibold">+7 999 333-89-60</button>
                </div> 
                <Button variant="callback" className="hidden md:block">ОБРАТНЫЙ ЗВОНОК</Button>
                <hr />
                <button className="text-[#ED5640] underline text-h3">mail@rifmach.ru</button>
                <hr />
                <div className="flex items-center gap-3">
                    <button>
                        <Image
                            src="/vk.svg"
                            alt="Telegram"
                            width={25}
                            height={25}
                        />
                    </button>
                    <button>
                        <Image
                            src="/tg.svg"
                            alt="Telegram"
                            width={25}
                            height={25}
                        />
                    </button>
                    <button>
                        <Image
                            src="/WhatsApp.svg"
                            alt="WhatsApp"
                            width={25}
                            height={25}
                        />
                    </button>
                </div>
            </div>
        </div>
    )
}