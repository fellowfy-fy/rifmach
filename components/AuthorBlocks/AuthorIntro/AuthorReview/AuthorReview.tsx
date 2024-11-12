"use client";
import { Author } from "@/constants/authors";
import { reviews } from "@/constants/reviews";
import ReviewCard from "@/components/ui/review-card";
import { useState } from "react";

interface AuthorReviewsProps {
  author: Author;
}

export default function AuthorReviews({ author }: AuthorReviewsProps) {
  const ITEMS_PER_PAGE = 1;
  const [visibleItems, setVisibleItems] = useState(ITEMS_PER_PAGE);
  
  // отзыв под конкретного автора
  const authorReviews = reviews.filter(review => review.authorId === author.id);
  
  // Получаем только видимые отзывы
  const currentItems = authorReviews.slice(0, visibleItems);


  return (
    <div className="space-y-2">
      <div className="font-harmonia text-[0.875rem] text-[#8F8F9C]">
        <p>Рейтинг автора</p>
        <div className="flex items-center gap-1">
          <span className="text-[24px] font-bold text-[#25253F]">
            {author.rating}
          </span>
          <img src="/icons/star-checked.svg" className="h-[16px]" alt="Рейтинг" />
          <span className="text-h4 text-[#8F8F9C]">
            {author.reviewsCount} отзывов
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {currentItems.map((review, index) => (
          <ReviewCard key={index} review={review} variant="author" />
        ))}
      </div>

      {authorReviews.length === 0 && (
        <div className="text-center py-8 bg-white rounded-lg shadow">
          <p className="text-lg font-medium text-[#25253F]">
            У этого автора пока нет отзывов
          </p>
          <p className="text-sm mt-2 text-[#8F8F9C]">
            Станьте первым, кто оставит отзыв!
          </p>
        </div>
      )}
    </div>
  );
}