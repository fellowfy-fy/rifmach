"use client"
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import Image from "next/image";
import { useState } from "react";
import { Button } from "../ui/button";

interface ReviewCardProps {
  review?: {
    avatarUrl: string;
    stars: number;
    date: string;
    reviewerName: string;
    reviewTitle: string;
    reviewText: string;
    poemAuthor: string;
  };
}

export default function ReviewCard({ review }: ReviewCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  //затычки
  const placeholderReview = {
    avatarUrl: "/smile.svg",
    date: "31 августа 2024 г.",
    reviewerName: "Елена Островская",
    reviewTitle: "ТРОНУЛИ ДО СЛЁЗ...",
    reviewText:
      "ОГРОМНОЕ спасибо Татьяне! Мое поздравление дочери на 20-ти летие, которое я попросила облечь в стихотворную форму, было превращено в красивое, трогательное, очень личное стихотворение, до еще какое, онегинская строфа! Мое поздравление дочери на 20-ти летие, которое я попросила облечь в стихотворную форму, было превращено в красивое, трогательное, очень личное стихотворение, до еще какое, онегинская строфа!",
    poemAuthor: "Татьяна Русина",
  };

  const currentReview = review || placeholderReview;

  const { avatarUrl, date, reviewerName, reviewTitle, reviewText, poemAuthor } = currentReview;

  const truncatedTitle = reviewTitle.length > 30 ? `${reviewTitle.substring(0, 30)}...` : reviewTitle;
  const truncatedText = reviewText.length > 220 ? `${reviewText.substring(0, 220)}...` : reviewText;

  return (
    <div className="border w-[370px] md:w-[380px] min-h-[445px] pl-[25px] pr-[30px] py-[40px] rounded-[5px] relative mb-[39px] md:mb-0">
      <div className="">
        <Avatar>
            <AvatarImage src="/smile.svg" />
            <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div className="ml-4">
          <div className="flex items-center">
            <Image src="/stars.svg" width={78} height={13} alt="Rating" />
          </div>
          <p className="text-h5 text-[#8F8F9C] mt-1">{date}</p>
          <p className="text-h4 text-[#25253F] mt-3">{reviewerName}</p>
        </div>
      </div>

      <h3 className="text-h3 text-main font-semibold mt-10">{truncatedTitle}</h3>
      <p className="text-h4 text-textsmain mt-[11px] leading-6">
        {isExpanded ? reviewText : truncatedText}
      </p>

      <div>
        {reviewText.length > 220 && (
            <Button
                variant="expand"
                onClick={() => setIsExpanded(!isExpanded)}
                >
                {isExpanded ? "Свернуть" : "Развернуть"}
            </Button>
        )}
      </div>

      <hr />
      <p className="text-h5 text-[#8F8F9C] mt-4">Автор стиха: {poemAuthor}</p>
    </div>
  );
}
