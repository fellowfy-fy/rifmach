import Image from 'next/image';

interface AuthorRatingProps {
  authorName?: string;  // Changed back to optional
  authorImage?: string;
  rating: number;
  onRate: (rating: number) => void;
}

export const AuthorRating: React.FC<AuthorRatingProps> = ({
  authorName = '',  // Added default value
  authorImage,
  rating,
  onRate
}) => (
  <div className="text-center font-harmonia font-bold text-headers">
    <p className="text-[1.125rem]  mt-10">
      Оцените работу автора
    </p>
    <div className="w-[4.375rem] h-[4.375rem] mx-auto mt-7 mb-4">
      <Image
        src={authorImage || '/default-avatar.png'}
        alt={authorName || 'Author avatar'}
        width={70}
        height={70}
        className="rounded-full"
      />
    </div>
    {authorName && <p className="text-[1rem] mb-6">{authorName}</p>}
    <div className="flex gap-2 justify-center mb-10">
      {[...Array(5)].map((_, index) => (
        <button
          key={index}
          onClick={() => onRate(index + 1)}
          className="p-1 hover:scale-110 transition-transform"
        >
          <Image
            src={index < rating ? '/icons/star-checked.svg' : '/icons/star-unchecked.svg'}
            alt={`Star ${index + 1}`}
            width={49}
            height={46}
          />
        </button>
      ))}
    </div>
  </div>
);