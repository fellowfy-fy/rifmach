import Agreement from "./agreement"
import Payment from "./payment"

export default function AgreementPayment() {
    return(
        <div className="flex flex-col md:flex-row justify-between mt-[20px] items-center">
            <Agreement />
            <Payment />
        </div>
    );
}

