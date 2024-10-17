import { useState } from "react";
import ReviewCard from "../ui/review-card";
import Grid from "../ui/grid";

const reviews = [
  {
    avatarUrl: "/path/to/avatar1.jpg",
    stars: 5,
    date: "31 августа 2024 г.",
    reviewerName: "Елена Островская",
    reviewTitle: "Тронули до слёз...",
    reviewText: "Огромное спасибо Татьяне! Моё поздравление дочери на 20-ти летие было великолепно...",
    poemAuthor: "Татьяна Русина"
  },
  // Добавьте дополнительные объекты отзывов...
];

export default function ReviewsSection() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const totalPages = Math.ceil(reviews.length / itemsPerPage);

  const currentItems = reviews.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <section className="p-6">
      <Grid
        items={currentItems.map((review, index) => (
          <ReviewCard key={index} review={review} />
        ))}
      />
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      />
    </section>
  );
}
