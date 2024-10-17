import CorporateCards from "../shared/corporate-cards"
import { Button } from "../ui/button"

export default function CorporateSection() {
    return(
        <section className="bg-white mx-[17px] md:mx-[134px] py-[45px] md:py-[105px]">
            <h2 className="text-headers text-[24px] md:text-h2 uppercase">Корпоративным клиентам</h2>
            <hr className="w-[40px] md:w-[50px] h-[5px] bg-main rounded-sm mt-[10px] md:mt-[22px]"/>
            <CorporateCards />
        </section>
    )
}