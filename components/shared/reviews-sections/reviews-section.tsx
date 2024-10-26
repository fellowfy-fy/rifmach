"use client";
import { useState } from "react";
import ReviewCard from "@/components/ui/review-card";
import Grid from "@/components/ui/grid";
import { reviews } from "@/constants/reviews";
import PaginationComponent from "@/components/ui/pagination-component";

export default function ReviewsSection() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;
  const totalPages = Math.ceil(reviews.length / itemsPerPage);

  const currentItems = reviews.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  return (
    <section className="px-4 md:px-10 lg:px-20 xl:px-32 2xl:px-[15%] flex justify-center flex-col items-center pt-[20px]">
      <Grid
        items={currentItems.map((review, index) => (
          <ReviewCard key={index} review={review} />
        ))}
        columns={{ base: "1", md: "2", lg: "3" }} // Настройка количества колонок
        gap={{ base: "2", md: "2", lg: "2" }} // Настройка gap
      />
      <PaginationComponent
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </section>
  );
}
