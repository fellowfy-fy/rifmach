import AuthorCard from "../ui/author-card";
import Carousel from "../ui/carousel";
import Image from "next/image";

const authors = Array(6)
 .fill(null)
 .map((_, index) => <AuthorCard key={index + 1} />);

export default function AuthorsSection() {
 return (
   <section className="bg-white mx-4 md:px-10 lg:px-20 xl:px-36 2xl:px-60 pb-10 md:py-6">
     <div className="absolute top-[-5] right-10 hidden md:block">
       <Image
         src="/alphabet.svg"
         alt="Alphabet Background"
         width={567}
         height={580}
       />
     </div>

     <h2 className="text-headers text-2xl md:text-h2 uppercase">
       Кто будет писать<br />для вас стихи?
     </h2>
     
     <hr className="w-10 md:w-[50px] h-[5px] bg-main rounded-sm mt-2.5 md:mt-5" />
     
     <p className="text-textsmain text-xs md:text-h3 mt-2.5 md:mt-5 max-w-[659px]">
       Наши авторы — лауреаты региональных творческих конкурсов, обладатели
       премий федерального масштаба, за плечами у них публикации в солидных
       журналах и альманахах, изданные книги, членство в профессиональных
       союзах, мы постоянно в тренде, и продолжаем оттачивать свое мастерство.
     </p>

     <div className="mt-3">
       <Carousel items={authors} />
     </div>
   </section>
 );
}