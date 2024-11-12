"use client";
import { useState } from "react";
import ReviewCard from "@/components/ui/review-card";
import Grid from "@/components/ui/grid";
import { reviews } from "@/constants/reviews";
import PaginationComponent from "@/components/ui/pagination-component";
import styles from './ReviewsSection.module.css';

export default function ReviewsSection() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const totalPages = Math.ceil(reviews.length / itemsPerPage);
  const currentItems = reviews.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  return (
    <section className={styles.sectionWrapper}>
      <div className={styles.customContainer}>
        <Grid
          items={currentItems.map((review, index) => (
            <ReviewCard key={index} review={review} />
          ))}
          columns={{ base: "1", md: "2", xl: "3" }} 
          gap={{ base: "2", md: "2", lg: "2" }}
        />
        <PaginationComponent
          totalPages={totalPages}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      </div>
    </section>
  );
}