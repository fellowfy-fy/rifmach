import AuthorCard from "../ui/author-card";
import Carousel from "../ui/carousel";
import Image from "next/image";

const authors = [
  <AuthorCard key={1} />,
  <AuthorCard key={2} />,
  <AuthorCard key={3} />,
  <AuthorCard key={4} />,
  <AuthorCard key={5} />,
  <AuthorCard key={6} />,
];

export default function AuthorsSection() {
  return (
    <section className="bg-white mx-[17px] md:mx-[134px] pb-[45px] md:py-[25px]">
      <div className="absolute top-[-5] right-10 hidden md:block">
        <Image
          src="/alphabet.svg"
          alt="Alphabet Background"
          width={567}
          height={580}
        />
      </div>
      <h2 className="text-headers text-[24px] md:text-h2 uppercase">
        Кто будет писать
        <br />
        для вас стихи?
      </h2>
      <hr className="w-[40px] md:w-[50px] h-[5px] bg-main rounded-sm mt-[10px] md:mt-[22px]" />
      <p className="text-textsmain text-[12px] md:text-h3 mt-[10px] md:mt-[22px] max-w-[659px]">
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
