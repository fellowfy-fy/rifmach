"use client";
import { useState } from "react";
import ReviewCard from "@/components/ui/review-card";
import { reviews } from "@/constants/reviews";
import PaginationComponent from "@/components/ui/pagination-component";
import Grid from "@/components/ui/grid";
import styles from "../Author.module.css"

interface AuthorReviewsProps {
  authorId: number;
}

export default function AuthorReviews({ authorId }: AuthorReviewsProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  // фильтр отзывов для автора
  const authorReviews = reviews.filter(review => review.authorId === authorId);
  
  // средняя оценка
  const averageRating = authorReviews.reduce((acc, review) => acc + review.stars, 0) / authorReviews.length;
  
  const totalPages = Math.ceil(authorReviews.length / itemsPerPage);
  const currentItems = authorReviews.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  return (
    <section className={styles.customContainer}>
      <div className="mb-8 flex items-center gap-4 font-harmonia">
        <div className="font-bold text-headers text-[1.25rem] md:text-[1.5rem]">
          {authorReviews.length} отзывов
        </div>
        <div className="flex items-center gap-2">
          <span className="text-h4 text-[#8F8F9C]">Средняя оценка</span>
          <div className="flex items-center gap-2">
            <span className="text-[1rem] text-[#8F8F9C]">{averageRating.toFixed(1)}</span>
            <img src="/icons/star-checked.svg" className="h-[16px] mb-1" alt="Рейтинг" />
          </div>
        </div>
      </div>

      <Grid
        items={currentItems.map((review, index) => (
          <ReviewCard key={index} review={review} variant="authorShort" />
        ))}
        columns={{ base: "1", md: "2", xl: "3" }}
        gap={{ base: "2", md: "2", lg: "2" }}
      />

      <PaginationComponent
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </section>
  );
}