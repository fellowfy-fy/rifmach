import { Author } from '@/constants/authors';

interface AuthorInfoExtendedProps {
  author: Author;
}

export default function AuthorInfoExtended({ author }: AuthorInfoExtendedProps) {
  return (
    <div className="space-y-4 font-harmonia">
      <h3 className="text-[1rem] text-textsmain">
        ТРИ СТОЛПА УСПЕХА {author.name.split(' ')[0]}:
      </h3>

      <div className="space-y-4">
        {author.extendedInfo.badgesInfo.map((badge, index) => (
          <div 
            key={index} 
            className="bg-[#F7FCF6] border border-[#D2E9CF] rounded-lg p-6 transition-all duration-300"
          >
            <h4 className="font-medium text-[0.75rem] text-[#25253F] mb-2">
              {badge.title}
            </h4>
            <p className="text-[0.875rem] text-textsmain leading-[1.5rem]">
              {badge.description}
            </p>
          </div>
        ))}
      </div>

      <div>
        <p className="text-[1rem] text-textsmain leading-[1.5rem]">
          {author.extendedInfo.achievements}
        </p>
      </div>
    </div>
  );
}