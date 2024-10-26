import { Button } from "@/components/ui/button"

export default function Payment() {
    return(
        <div className="flex flex-row items-center justify-center">
            <Button variant="image">
                <img
                src="/sbp.svg"
                alt="СБП"
                className="h-[25px]"
                />
            </Button>
            <Button variant="image">
                <img
                src="/umoney.svg"
                alt="ЮМани"
                className="h-[22px]"
                />
            </Button>
            <Button variant="image">
                <img
                src="/mastercard.svg"
                alt="MasterCard"
                className="h-[22px]"
                />
            </Button>
            <Button variant="image">
                <img
                src="/visa.svg"
                alt="Visa"
                className="h-[22px]"
                />
            </Button>
            <Button variant="image">
                <img
                src="/mir.svg"
                alt="Мир"
                className="h-[20px]"
                />
            </Button>
            <Button variant="image">
                <img
                src="/sber.svg"
                alt="СберПэй"
                className="h-[25px]"
                />
            </Button>
        </div>
    )
}