import { Modal } from '@/components/ui/Modal/Modal';
import styles from './LeaveReview.module.css';
import Image from 'next/image';
import { useState } from 'react';
import { ReviewFormContent } from './RefiewFormContent';

interface LeaveReviewProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

export const LeaveReview: React.FC<LeaveReviewProps> = ({ isOpen, onOpenChange }) => {
  const [rating, setRating] = useState(0);
  const [reviewAccepted, setReviewAccepted] = useState(false);

  const handleStarClick = (starIndex: number) => {
    const newRating = starIndex + 1;
    setRating((prevRating) => (prevRating === newRating ? 0 : newRating));
    setReviewAccepted(true);
  };

  const handleSubmit = () => {
    // Handle the form submission logic here
    console.log('Review submitted');
  };

  return (
    <Modal isOpen={isOpen} onClose={() => onOpenChange(false)}>
      <div className={styles.wrapper}>
        <p className='text-[1.125rem] font-harmonia font-bold text-headers my-10'>
          Оцените нашу работу
        </p>
        
        <div className="flex gap-2 justify-center mb-[3rem]">
          {[...Array(5)].map((_, index) => (
            <button
              key={index}
              onClick={() => handleStarClick(index)}
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

        {reviewAccepted && rating > 0 && (
          <>
            <div className="text-center -mt-12">
              <Image
                src="/icons/review-accepted.svg"
                alt="Review Accepted"
                width={150}
                height={67}
              />
            </div>

            <ReviewFormContent onSubmit={handleSubmit} />
          </>
        )}
      </div>
    </Modal>
  );
};
