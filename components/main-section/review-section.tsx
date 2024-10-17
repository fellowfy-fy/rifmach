import ReviewCard from "../ui/review-card";
import Carousel from "../ui/carousel";

export default function ReviewSection() {
  const reviews = [
    <ReviewCard key={1} />,
    <ReviewCard key={2} />,
    <ReviewCard key={3} />,
    <ReviewCard key={4} />,
    <ReviewCard key={5} />,
    <ReviewCard key={6} />,
  ];

  return (
    <section className="bg-white mx-[17px] md:mx-[134px] pt-[90px] pb-[45px] md:py-[25px]">
      <h2 className="text-headers text-[24px] md:text-h2 uppercase">
        Отзывы наших<br />любимых клиентов
      </h2>
      <hr className="w-[40px] md:w-[50px] h-[5px] bg-main rounded-sm mt-[10px] md:mt-[22px]" />
      <center className="mt-[39px] md:mt-[48px]">
        <Carousel items={reviews}/>
      </center>
    </section>
  );
}
