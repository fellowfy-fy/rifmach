import CallToAction from "../shared/call-to-action";
import { ArchTop } from "../ui/arch-top";

interface CTASectionProps {
 title: string | JSX.Element;
 subtitle: string | JSX.Element;
 owlImage: string;
 cloudImageMobile: string;
 cloudImageDesktop: string;
 hasArch?: boolean;
}

export default function CTASection({
 title,
 subtitle,
 owlImage,
 cloudImageMobile,
 cloudImageDesktop,
 hasArch,
}: CTASectionProps) {
 return (
   <div className="bg-gradient-to-r from-[#70B3FF] to-[#70DBFC] ">
     {hasArch && <ArchTop />}
     
     <section className="relative px-4 md:h-[552px] overflow-hidden md:px-10 lg:px-20 xl:px-36 2xl:px-60">
       {/* облака */}
       <div className="absolute inset-0 pointer-events-none">
         <img
           src={cloudImageMobile}
           alt="Mobile Clouds"
           className="w-full h-auto object-cover block md:hidden absolute bottom-[-12px]"
         />
         <img
           src={cloudImageDesktop}
           alt="Desktop Clouds"
           className="w-full h-auto object-cover hidden md:block absolute bottom-[-2px]"
         />
       </div>

       <div className="relative z-10 flex flex-col md:flex-row">
         <div className="flex flex-col mb-8 md:mb-6">
           <h1 className="text-2xl md:text-h2 text-white pt-8 md:pt-20 uppercase md:max-w-[560px]">
             {title}
           </h1>
           
           <hr className="w-10 md:w-[50px] h-[2px] bg-white rounded-sm mt-2.5 md:mt-5" />
           
           <h4 className="text-h3 md:text-[18px] text-white mt-4 regular max-w-[584px] mb-6">
             {subtitle}
           </h4>
           
           <CallToAction />
         </div>

         <img
           src={owlImage}
           alt="Owl"
           className="md:absolute bottom-[-130px] right-[1%] max-h-[297px] md:max-h-[400px]"
         />
       </div>
     </section>
   </div>
 );
}