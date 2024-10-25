import ReviewCard from "../ui/review-card";
import Carousel from "../ui/carousel";
import { reviews } from "@/constants/reviews";

export default function ReviewSection() {
  const reviewItems = reviews
    .slice(0, 12)
    .map((review, index) => (
      <ReviewCard key={index} review={review} />
    ));

  return (
    <section className="bg-white mx-4 md:px-10 lg:px-20 xl:px-36 2xl:px-60 py-20 md:py-6">
      <h2 className="text-headers text-2xl md:text-h2 uppercase">
        Отзывы наших<br /><span className="font-bold">любимых клиентов</span>
      </h2>
      <hr className="w-10 md:w-[50px] h-[5px] bg-main rounded-sm mt-2.5 md:mt-5" />
      <div className="mt-10 md:mt-12 px-10">
        <Carousel items={reviewItems} />
      </div>
    </section>
  );
}