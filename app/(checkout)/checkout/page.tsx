import Image from "next/image"
import PriceComponent from "@/components/shared/price-component"
import PayWith from "@/components/shared/pay-with"
import EmailComponent from "@/components/shared/email-component"
import { CheckoutButton } from "./CheckoutButton"
import { CustomButton } from "@/components/ui/CustomButton/CustomButton"
import { PhoneButton } from "./phone-button"

export default function Checkout() {
  return (
    <div className="bg-[#ECF8FF] flex flex-col items-center min-h-screen">
      <div className="flex flex-row justify-between py-4 md:py-5 w-[360px] md:w-[896px]">
        <Image
          src="/icons/logo.svg"
          alt="Логотип"
          width={114}
          height={38}
        />
        <PhoneButton />
      </div>
      <div className="bg-white w-full md:w-[896px] px-[20px] py-[30px] md:px-[198px] md:p-10 rounded-[5px] flex flex-col gap-4 justify-center">
        <center>
          <h2 className="uppercase text-headers text-[24px] md:text-h2">
            Оплата заказа №6060
          </h2>
        </center>
        <PriceComponent isInputDisabled={true}/>
        <PayWith />
        <EmailComponent />
        <center>
          <CheckoutButton></CheckoutButton>
        </center>
        <p className="text-[13px] text-center w-full">
          Нажимая кнопку, вы соглашаетесь с{" "}
          <a href="" className="text-main">
            договором-офертой
          </a>
        </p>
      </div>
    </div>
  )
}