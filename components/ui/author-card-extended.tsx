import { Button } from "./button";
import { Badge } from "./badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface AuthorCardExtendedProps {
  author: {
    name: string;
    rating: number;
    reviewsCount: number;
    experience: string;
    description: string;
    badges: string[];
    avatarUrl: string;
  };
}

export default function AuthorCardExtended({ author }: AuthorCardExtendedProps) {
  return (
    <div className="border bg-white w-full md:w-[578px] h-auto md:h-[403px] pl-[25px] pr-[30px] py-[40px] rounded-[10px] relative mb-[39px] md:mb-0 flex flex-col">
      {/* Аватар */}
        <div className="mt-[10px] flex flex-row gap-2">
            <Avatar className="w-[100px] h-[100px]">
                <AvatarImage src={author.avatarUrl} />
                <AvatarFallback>{author.name[0]}</AvatarFallback>
            </Avatar>
            <div className="flex flex-col">
                <p className="text-h3 text-[#25253F] font-semibold">{author.name}</p>

                <div className="flex items-center gap-1 mt-2">
                    <span className="text-[24px] font-bold text-[#25253F]">{author.rating}</span>
                    <span className="text-h4 text-[#8F8F9C]">({author.reviewsCount} отзывов)</span>
                </div>

                <p className="text-h4 text-[#8F8F9C] mt-2">Поэтический стаж</p>
                <p className="text-h4 text-[#25253F] font-semibold">{author.experience}</p>
            </div>
        </div>

      <p className="text-h4 text-textsmain mt-[11px] leading-[23px]">{author.description}</p>

      <div className="flex flex-wrap gap-2 mt-4">
        {author.badges.map((badge, index) => (
          <Badge key={index} variant="outline">
            {badge}
          </Badge>
        ))}
      </div>

      <div className="mt-6">
        <Button variant="secondary" className="w-full">
          ОТКРЫТЬ ПРОФИЛЬ
        </Button>
      </div>
    </div>
  );
}
