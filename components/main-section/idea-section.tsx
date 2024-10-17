import IdeaCards from "../shared/idea-cards"
import { Button } from "../ui/button"

export default function IdeaSection() {
    return(
        <section className="bg-white mx-[17px] md:mx-[134px] pb-[45px] md:py-[25px]">
            <h2 className="text-headers text-[24px] md:text-h2 uppercase">Нужно больше<br />круативных идей?</h2>
            <hr className="w-[40px] md:w-[50px] h-[5px] bg-main rounded-sm mt-[10px] md:mt-[22px]"/>
            <IdeaCards />
        </section>
    )
}