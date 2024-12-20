"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import Image from "next/image";
import { ExpandableContent } from "@/components/ui/expandable-button";

interface ReviewCardProps {
  review: {
    avatarUrl: string;
    stars: number;
    date: string;
    reviewerName: string;
    reviewTitle: string;
    reviewText: string;
    poemAuthor: string;
    icon: string;
  };
  variant?: 'default' | 'author' | 'authorShort';
}

export default function ReviewCard({ review, variant = 'default' }: ReviewCardProps) {
  const {
    avatarUrl,
    date,
    reviewerName,
    reviewTitle,
    reviewText,
    poemAuthor,
    icon,
  } = review;

  const truncatedTitle =
    reviewTitle.length > 30
      ? `"${reviewTitle.substring(0, 30)}..."`
      : `"${reviewTitle}"`;

  // Определяем классы высоты в зависимости от варианта
  const heightClasses = {
    default: 'min-h-[445px]',
    author: 'min-h-[342px]',
    authorShort: 'min-h-[390px]'
  }[variant];

  // Определяем верхний padding в зависимости от варианта
  const topPaddingClasses = {
    default: 'pt-[40px]',
    author: 'pt-[20px]',
    authorShort: 'pt-[20px]'
  }[variant];

  return (
    <div className={`border-[2px] transition-colors duration-300 hover:border-main w-full md:w-auto lg:w-[380px] ${heightClasses} flex flex-col justify-between pl-[25px] pr-[30px] pb-[20px] ${topPaddingClasses} rounded-[5px] relative mb-[9px] md:mb-0`}>
      <div className="flex flex-row items-center justify-between">
        <div className="flex items-center">
          <Avatar className="w-[80px] h-[80px]">
            <AvatarImage src={avatarUrl} />
            <AvatarFallback><Image src="/placeholder.svg" alt="?" width={80} height={80}/></AvatarFallback>
          </Avatar>
          <div className="ml-4">
            <div className="flex items-center">
              <Image src="/icons/stars.svg" width={78} height={13} alt="Rating" />
            </div>
            <p className="text-h5 text-[#8F8F9C] mt-1">{date}</p>
            <p className="text-h4 text-[#25253F] mt-3">{reviewerName}</p>
          </div>
        </div>
        <button>
          <Image src={icon} width={24} height={24} alt="Icon" />
        </button>
      </div>

      <div className="mt-10 flex-grow">
        <p className="text-h3 text-main font-semibold">{truncatedTitle}</p>
        <ExpandableContent
          content={reviewText}
          renderContent={(text, isExpanded) => (
            <p className="text-h4 text-textsmain mt-[11px] leading-6">
              {isExpanded ? text : text.length > 220 ? `${text.substring(0, 220)}...` : text}
            </p>
          )}
        />
      </div>

      {variant === 'default' && (
        <div className="flex flex-col">
          <hr />
          <p className="text-h5 text-[#8F8F9C] mt-4">Автор стиха: <span className="text-[#171B1C]">{poemAuthor}</span></p>
        </div>
      )}
    </div>
  );
}