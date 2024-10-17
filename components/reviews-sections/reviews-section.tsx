"use client";
import { useState } from "react";
import ReviewCard from "../ui/review-card";
import Grid from "../ui/grid";
import { reviews } from "@/lib/reviews";
import PaginationComponent from "../ui/pagination-component";

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
    <section className="px-[16px] md:px-[134px] flex justify-center flex-col items-center">
      <Grid
        items={currentItems.map((review, index) => (
          <ReviewCard key={index} review={review} />
        ))}
      />
      <PaginationComponent 
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </section>
  );
}
