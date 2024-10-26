import { Button } from "@/components/ui/button"

export default function Payment() {
    return(
        <div className="flex flex-row items-center justify-center">
            <Button variant="image">
                <img
                src="/icons/sbp.svg"
                alt="СБП"
                className="h-[25px]"
                />
            </Button>
            <Button variant="image">
                <img
                src="/icons/umoney.svg"
                alt="ЮМани"
                className="h-[22px]"
                />
            </Button>
            <Button variant="image">
                <img
                src="/icons/mastercard.svg"
                alt="MasterCard"
                className="h-[22px]"
                />
            </Button>
            <Button variant="image">
                <img
                src="/icons/visa.svg"
                alt="Visa"
                className="h-[22px]"
                />
            </Button>
            <Button variant="image">
                <img
                src="/icons/mir.svg"
                alt="Мир"
                className="h-[20px]"
                />
            </Button>
            <Button variant="image">
                <img
                src="/icons/sber.svg"
                alt="СберПэй"
                className="h-[25px]"
                />
            </Button>
        </div>
    )
}