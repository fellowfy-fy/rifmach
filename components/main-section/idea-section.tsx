import IdeaCards from "../shared/idea-cards"

export default function IdeaSection() {
 return (
   <section className="bg-white mx-4 md:px-10 lg:px-20 xl:px-36 2xl:px-60 pb-10 md:py-6">
     <h2 className="text-headers text-2xl md:text-h2 uppercase">
       Нужно больше<br /><span className="font-bold">креативных идей?</span>
     </h2>
     
     <hr className="w-10 md:w-[50px] h-[5px] bg-main rounded-sm mt-2.5 md:mt-5"/>
     
     <IdeaCards />
   </section>
 )
}