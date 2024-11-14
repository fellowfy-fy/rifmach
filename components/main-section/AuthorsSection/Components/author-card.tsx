"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";
import { Author } from "@/constants/authors";

interface AuthorCardProps {
  author?: Author;  // Вернем опциональность
}

export default function AuthorCard({ author }: AuthorCardProps) {
  // Если автор не передан, не рендерим карточку
  if (!author) return null;

  const { avatarUrl, name, city, description } = author;

  return (
    <div className="font-harmonia border transition-colors duration-300 hover:border-main bg-white w-auto md:w-[280px] md:h-[350px] pl-[25px] pr-[30px] py-[40px] rounded-[5px] relative mb-[9px] md:mb-0 flex items-center flex-col ">
      <div className="absolute top-[-60px] w-[120px] h-[120px] flex items-center justify-center rounded-full bg-white border border-accent">
        <Avatar>
          <AvatarImage src={avatarUrl} />
          <AvatarFallback>{name.charAt(0)}</AvatarFallback>
        </Avatar>
      </div>
      <div className="flex items-center flex-col">
        <p className="text-h3 text-[#25253F] mt-[35px] bold">{name}</p>
        <p className="text-h4 text-[#8F8F9C] mt-1">{city}</p>
        <div className="mt-[25px] mb-[20px]">
          <Image src="/icons/stars.svg" width={96} height={15} alt="Rating" />
        </div>
      </div>
      <p className="text-h4 text-textsmain leading-5">{description}</p>
    </div>
  );
}