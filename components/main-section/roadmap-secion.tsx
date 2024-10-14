import StepsCards from "../shared/steps-cards"
import { Button } from "../ui/button"

export default function RoadmapSection() {
    return(
        <section className="bg-white mx-[17px] md:mx-[134px] pt-[90px] pb-[45px] md:py-[25px]">
            <h2 className="text-headers text-[24px] md:text-h2">Как создается стих,<br />бьющий точно в цель</h2>
            <hr className="w-[40px] md:w-[50px] h-[5px] bg-main rounded-sm mt-[10px] md:mt-[22px]"/>
            <StepsCards />
            <center>
                <Button variant="secondary" className="mt-0 md:mt-[40px]"> НА КАКИЕ ТЕМЫ МЫ ПИШЕМ?</Button>
            </center>
        </section>
    )
}