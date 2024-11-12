import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Author } from '@/constants/authors';
import { Separator } from '@/components/ui/separator';

interface AuthorInfoProps {
  author: Author;
}

interface AuthorInfoProps {
  author: {
    id: number;
    name: string;
    rating: number;
    reviewsCount: number;
    experience: string;
    description: string;
    badges: string[];
    avatarUrl: string;
    city: string;
    age: number;
  };
}

export default function AuthorInfo({ author }: AuthorInfoProps) {
  return (
    <div>
      <div className="mt-[10px] flex flex-row gap-4 font-harmonia items-center">
        <Avatar className="w-[137px] h-[137px]">
          <AvatarImage src={author.avatarUrl} />
          <AvatarFallback>{author.name[0]}</AvatarFallback>
        </Avatar>
        <div className="flex flex-col">
          <p className="text-[1.6rem] text-[#25253F] font-semibold">{author.name}</p>

          <div className='flex flex-row text-[0.875rem] leading-0 text-[#8F8F9C] items-center gap-2 mb-[1.5rem]'>
            <img src="/icons/location.svg" className='pb-1'/>
            <p>{author.city}</p>
            <Separator className='rotate-90 w-[1rem]'/>
            <p>{author.age} лет</p>
          </div>

          <p className="text-h4 text-[#25253F] font-semibold">
            {author.experience}
          </p>
          <p className="text-h4 text-[#8F8F9C] mt-1">Поэтического стажа</p>
        </div>
      </div>

      <p className="text-[1rem] text-textsmain mt-5 leading-[1.5rem] max-w-[40rem] font-light">
        {author.description}
      </p>
      
      <div className='w-[30rem] mt-[2rem]'>
        {author.badges.map((badge, index) => (
          <Badge key={index} variant="outline" className='mb-2.5 mr-2.5'>
            {badge}
          </Badge>
        ))}
      </div>
    </div>
  );
}