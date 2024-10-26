"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";

interface AuthorCardProps {
  author?: {
    avatarUrl: string;
    stars: number;
    city: string;
    authorName: string;
    authorText: string;
  };
}

export default function AuthorCard({ author }: AuthorCardProps) {
  // затычки
  const placeholderAuthor = {
    avatarUrl: "/avatar.svg",
    stars: 5,
    city: "Москва",
    authorName: "Дмитрий Тютлин",
    authorText:
      "Мультижанровый поэт, поэт-песенник, автор ярких, оригинальных, адресных и не шаблонных стихотворений. Мастер трогательно-весёлой подачи стихотворных поздравлений.",
  };

  const currentAuthor = author || placeholderAuthor;

  const { avatarUrl, city, authorName, authorText } = currentAuthor;

  return (
    <div className="border hover:border-main bg-white w-[280px] pl-[25px] pr-[30px] py-[40px] rounded-[5px] relative mb-[39px] md:mb-0 flex items-center flex-col ">
      <div className="absolute top-[-60px] w-[120px] h-[120px] flex items-center justify-center rounded-full bg-white border border-accent">
        <Avatar>
          <AvatarImage src={avatarUrl} />
          <AvatarFallback>{authorName.charAt(0)}</AvatarFallback>
        </Avatar>
      </div>

      <div className="flex items-center flex-col">
        <p className="text-h3 text-[#25253F] mt-[45px] bold">{authorName}</p>
        <p className="text-h4 text-[#8F8F9C]">{city}</p>
        <div className="mt-[30px]">
          <Image src="/icons/stars.svg" width={96} height={15} alt="Rating" />
        </div>
      </div>

      <p className="text-h4 text-textsmain mt-[11px] leading-5">{authorText}</p>
    </div>
  );
}
