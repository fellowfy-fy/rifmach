"use client"
import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Author } from '@/constants/authors';
import { Separator } from '@/components/ui/separator';
import { Button } from "@/components/ui/button";
import AuthorInfoExtended from './AuthorInfoExtended';

interface AuthorInfoProps {
  author: Author;
}

export default function AuthorInfo({ author }: AuthorInfoProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="w-full lg:w-[40rem] xl:w-[47.5rem]">
      {/* Основная информация */}
      <div className="mt-[10px] flex flex-row gap-4 font-harmonia items-center">
        <Avatar className="w-[8rem] h-[8rem] md:w-[8.5rem] md:h-[8.5rem]">
          <AvatarImage src={author.avatarUrl} />
          <AvatarFallback>{author.name[0]}</AvatarFallback>
        </Avatar>

        <div className="flex flex-col">
          <p className="text-[1rem] md:text-[1.6rem] text-[#25253F] font-semibold">{author.name}</p>
          <div className='flex flex-row text-[0.875rem] leading-0 text-[#8F8F9C] items-center gap-2 mb-0.5 md:mb-[1.5rem]'>
            <img src="/icons/location.svg" className='pb-1'/>
            <p>{author.city}</p>
            <Separator className='rotate-90 w-[1rem]'/>
            <p>{author.age} лет</p>
          </div>

          <div className="flex flex-row md:flex-col gap-1 mt-1 md:mt-0 md:gap-0">
            <p className="text-[0.875rem] text-[#25253F] md:font-semibold">
              {author.experience}
            </p>
            <p className="text-[0.875rem] text-[#25253F] md:text-[#8F8F9C] mt-0 md:mt-1"><span className="md:uppercase">п</span>оэтического стажа</p>
          </div>

          <div className="font-harmonia text-[0.875rem] text-[#8F8F9C] md:hidden mt-1 md:mt-0">
            <p>Рейтинг автора</p>
            <div className="flex items-center gap-1">
              <span className="text-[1.1rem] md:text-[1.5rem] font-bold text-[#25253F]">
                {author.rating}
              </span>
              <img src="/icons/star-checked.svg" className="h-[16px] mb-1.5" alt="Рейтинг" />
              <span className="text-h4 text-[#8F8F9C]">
                {author.reviewsCount} отзывов
              </span>
            </div>
          </div>

        </div>
      </div>

      {/* Описание */}
      <div className="">
        <p className="text-[1rem] text-textsmain mt-5 leading-[1.5rem] font-light">
          {author.description}
        </p>
      </div>

      {/* Бейджи в свёрнутом состоянии */}
      {!isExpanded ? (
        <>
          <Button
            variant="link"
            className="text-main hover:text-main/80 p-0"
            onClick={() => setIsExpanded(true)}
          >
            Развернуть
          </Button>
          <div className='w-[21rem] md:w-[30rem] mt-[2rem]'>
            {author.badges.map((badge, index) => (
              <Badge key={index} variant="outline" className='mb-2.5 mr-2.5'>
                {badge}
              </Badge>
            ))}
          </div>
        </>
      ) : (
        <>
          <div className="mt-8">
            <AuthorInfoExtended author={author} />
          </div>
          <Button
            variant="link"
            className="text-main hover:text-main/80 p-0"
            onClick={() => setIsExpanded(false)}
          >
            Свернуть
          </Button>
        </>
      )}
    </div>
  );
}