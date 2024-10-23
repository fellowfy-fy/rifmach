import StepsCards from "../shared/steps-cards"
import { Button } from "../ui/button"

export default function RoadmapSection() {
  return (
    <section className="bg-white mx-4 md:px-10 lg:px-20 xl:px-36 2xl:px-60 py-20 md:py-6">
      <h2 className="text-headers text-2xl md:text-h2 uppercase">
        Как создается стих,<br />
        <span className="font-bold">бьющий точно в цель?</span>
      </h2>
      
      <hr className="w-10 md:w-[50px] h-[5px] bg-main rounded-sm mt-2.5 md:mt-5"/>
      
      <StepsCards />
      
      <div className="text-center">
        <Button 
          variant="secondary" 
          className="md:mt-10 uppercase"
        >
          НА КАКИЕ ТЕМЫ МЫ ПИШЕМ?
        </Button>
      </div>
    </section>
  )
}