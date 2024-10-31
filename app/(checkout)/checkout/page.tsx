"use client"
import Image from "next/image"
import PriceComponent from "@/components/shared/price-component"
import PayWith from "@/components/shared/pay-with"
import EmailComponent from "@/components/shared/email-component"
import { Button } from "@/components/ui/button"
import { useRouter } from 'next/navigation';

export default function Checkout() {
    const router = useRouter();
    return(
        <div className="bg-[#ECF8FF] flex flex-col items-center min-h-screen">
            <div className="flex flex-row justify-between py-4 md:py-5 w-[360px] md:w-[540px]">
                <Image 
                    src="/icons/logo.svg"
                    alt="Логотип"
                    width={114}
                    height={38}
                />
                <button className="text-h4 md:text-[24px] text-[#25253F] regular">+7 999 333-89-60</button>
            </div>
                <div className="bg-white w-auto rounded-[5px] p-10 flex flex-col gap-4 justify-center ">
                    <center>
                        <h2 className="uppercase regular text-headers text-[24px] md:text-h2">Оплата заказа №6060</h2>
                    </center>
                    <PriceComponent/>
                    <PayWith />
                    <EmailComponent />
                    <center>
                        <Button variant="main" onClick={() => router.push('/checkout/thank-you')}>ОПЛАТИТЬ ЗАКАЗ</Button>
                    </center>
                    <p className="text-[13px] text-center w-[300px] md:w-full">Нажимая кнопку, вы соглашаетесь с <a href="" className="text-main">договором-офертой</a></p>
                </div>
        </div>
    )
}