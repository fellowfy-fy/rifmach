"use client"
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import Image from "next/image";
import { useState } from "react";
import { Button } from "../ui/button";

interface ReviewCardProps {
  review: {
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

  const { avatarUrl, date, reviewerName, reviewTitle, reviewText, poemAuthor } = review;

  const truncatedTitle = reviewTitle.length > 30 ? `${reviewTitle.substring(0, 30)}...` : reviewTitle;
  const truncatedText = reviewText.length > 220 ? `${reviewText.substring(0, 220)}...` : reviewText;

  return (
    <div className="border transition-colors duration-300 hover:border-main w-full md:w-auto  lg:w-[380px] min-h-[445px] flex flex-col justify-between pl-[25px] pr-[30px] pb-[20px] pt-[40px] rounded-[5px] relative mb-[39px] md:mb-0">
      <div className="flex flex-row items-center">
        <Avatar className="w-[80px] h-[80px]">
          <AvatarImage src={avatarUrl} />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div className="ml-4">
          <div className="flex items-center">
            <Image src="/icons/stars.svg" width={78} height={13} alt="Rating" />
          </div>
          <p className="text-h5 text-[#8F8F9C] mt-1">{date}</p>
          <p className="text-h4 text-[#25253F] mt-3">{reviewerName}</p>
        </div>
      </div>

      <div className="mt-10 flex-grow">
        <p className="text-h3 text-main font-semibold">{truncatedTitle}</p>
        <p className="text-h4 text-textsmain mt-[11px] leading-6">
          {isExpanded ? reviewText : truncatedText}
        </p>
        {reviewText.length > 220 && (
          <Button
            variant="expand"
            onClick={() => setIsExpanded(!isExpanded)}
            className="mt-4"
          >
            {isExpanded ? "Свернуть" : "Развернуть"}
          </Button>
        )}
      </div>

      <div className="flex flex-col">
        <hr />
        <p className="text-h5 text-[#8F8F9C] mt-4">Автор стиха: {poemAuthor}</p>
      </div>
    </div>
  );
}
