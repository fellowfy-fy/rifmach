import { Badge } from '../badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { CustomButton } from '../CustomButton/CustomButton';
import styles from './AuthorCardExtended.module.css';

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

export default function AuthorCardExtended({
  author,
}: AuthorCardExtendedProps) {
  return (
    <div className="border bg-white w-full md:w-[578px] md:h-[403px] h-[462px] pl-5 pr-0 md:pr-9 pt-4 pb-[100px] rounded-[10px] relative mb-[39px] md:mb-0">
      {/* Информация об авторе */}
      <div className="mt-[10px] flex flex-row gap-4">
        <Avatar className="w-[100px] h-[100px] border border-accent">
          <AvatarImage src={author.avatarUrl} />
          <AvatarFallback>{author.name[0]}</AvatarFallback>
        </Avatar>
        <div className="flex flex-col">
          <p className="text-h3 text-[#25253F] font-semibold">{author.name}</p>
          <div className="flex items-center gap-1 mt-2">
            <span className="text-[24px] font-bold text-[#25253F]">
              {author.rating}
            </span>
            <img src="/icons/star-checked.svg" className='h-[16px]' />
            <span className="text-h4 text-[#8F8F9C]">
              ({author.reviewsCount} отзывов)
            </span>
          </div>
          <p className="text-h4 text-[#8F8F9C] mt-2">Поэтический стаж</p>
          <p className="text-h4 text-[#25253F] font-semibold">
            {author.experience}
          </p>
        </div>
      </div>
      {/* Описание */}
      <p className="text-h4 text-textsmain mt-[11px] leading-[23px]">
        {author.description}
      </p>
      {/* Бейджи */}
      <div className="flex flex-wrap gap-[10px] absolute bottom-[90px] left-[25px] right-[30px]">
        {author.badges.map((badge, index) => (
          <Badge key={index} variant="outline">
            {badge}
          </Badge>
        ))}
      </div>
      {/* Кнопка с абсолютным позиционированием */}
      <div className="absolute bottom-[26px] left-[25px] right-[30px]">
        <CustomButton
          type="secondary"
          customClass={styles.authorCardOpenProfileButtom}
        >
          ОТКРЫТЬ ПРОФИЛЬ
        </CustomButton>
      </div>
    </div>
  );
}