import AuthorCard from '../ui/author-card';
import Image from 'next/image';
import Carousel from '../ui/carousel';

const authors = Array(6)
  .fill(null)
  .map((_, index) => <AuthorCard key={index + 1} />);

export default function AuthorsSection() {
  const authors = Array(6)
    .fill(null)
    .map((_, index) => <AuthorCard key={index + 1} />);

  return (
    <section className="bg-white py-20 md:py-6">
      <div className="mx-auto px-4 md:px-10 lg:px-20 xl:px-[135px] 2xl:px-60 max-w-[1920px]">
        <div className="absolute top-[-5] right-10 hidden md:block">
          <Image
            src="/alphabet.svg"
            alt="Alphabet Background"
            width={567}
            height={580}
          />
        </div>
        <h2 className="text-headers text-2xl md:text-h2 uppercase">
          Кто будет писать
          <br />
          для вас стихи?
        </h2>
        <hr className="w-10 md:w-[50px] h-[5px] bg-main rounded-sm mt-2.5 md:mt-5" />
        <p className="text-textsmain text-xs md:text-h3 mt-2.5 md:mt-5 max-w-[659px]">
          Наши авторы — лауреаты региональных творческих конкурсов, обладатели
          премий федерального масштаба, за плечами у них публикации в солидных
          журналах и альманахах, изданные книги, членство в профессиональных
          союзах, мы постоянно в тренде, и продолжаем оттачивать свое мастерство.
        </p>
        <div className="mt-3">
<Carousel
  items={authors}
  itemsPerBreakpoint={{
    mobile: 1,
    md: 3,
    xl: 4,
  }}
  className="min-h-[420px] md:min-h-[460px]" // Добавляем минимальную высоту для слайдера
  containerClassName="h-full" // Добавляем высоту для внешнего контейнера
  itemClassName="pt-[100px] md:pt-[120px]"
/>
        </div>
      </div>
    </section>
  );
}
