import CorporateCards from "../shared/corporate-cards"

export default function CorporateSection() {
 return (
   <section className="bg-white mx-4 md:px-10 lg:px-20 xl:px-36 2xl:px-60  py-10 md:py-24">
     <h2 className="text-headers text-2xl md:text-h2 uppercase">
       Корпоративным клиентам
     </h2>
     
     <hr className="w-10 md:w-[50px] h-[5px] bg-main rounded-sm mt-2.5 md:mt-5"/>
     
     <CorporateCards />
   </section>
 )
}