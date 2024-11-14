import { Modal } from '@/components/ui/Modal/Modal';
import styles from './LeaveReview.module.css';
import Image from 'next/image';
import { useState } from 'react';
import { ReviewFormContent } from './RefiewFormContent';
import { AuthorRating } from './AuthorRating';
import { ThankYouMessage } from './ThankYou';
import { Author } from "@/constants/authors"

interface LeaveReviewProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  author: Author;
}

export const LeaveReview: React.FC<LeaveReviewProps> = ({
  isOpen,
  onOpenChange,
  author
}) => {
  const [step, setStep] = useState<'workRating' | 'reviewForm' | 'authorRating' | 'thankyou'>('workRating');
  const [workRating, setWorkRating] = useState(0);
  const [authorRating, setAuthorRating] = useState(0);

  const handleWorkRating = (rating: number) => {
    setWorkRating(rating);
    setStep('reviewForm');
  };

  const handleReviewSubmit = () => {
    setStep('authorRating');
  };

  const handleAuthorRating = (rating: number) => {
    setAuthorRating(rating);
    setStep('thankyou');
  };

  const handleClose = () => {
    onOpenChange(false);
    setTimeout(() => {
      setStep('workRating');
      setWorkRating(0);
      setAuthorRating(0);
    }, 300);
  };

  const renderContent = () => {
    switch (step) {
      case 'workRating':
        return (
          <>
            <p className="text-[1.125rem] font-harmonia font-bold text-headers my-10">
              Оцените нашу работу
            </p>
            <div className="flex gap-2 justify-center mb-10">
              {[...Array(5)].map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleWorkRating(index + 1)}
                  className="p-1 hover:scale-110 transition-transform"
                >
                  <Image
                    src={index < workRating ? '/icons/star-checked.svg' : '/icons/star-unchecked.svg'}
                    alt={`Star ${index + 1}`}
                    width={49}
                    height={46}
                  />
                </button>
              ))}
            </div>
          </>
        );

      case 'reviewForm':
        return (
          <>
            <p className="text-[1.125rem] font-harmonia font-bold text-headers my-10">
              Оцените нашу работу
            </p>
            <div className="flex gap-2 justify-center mb-6">
              {[...Array(5)].map((_, index) => (
                <button
                  key={index}
                  className="p-1"
                >
                  <Image
                    src={index < workRating ? '/icons/star-checked.svg' : '/icons/star-unchecked.svg'}
                    alt={`Star ${index + 1}`}
                    width={49}
                    height={46}
                  />
                </button>
              ))}
            </div>
            <Image
              src="/icons/review-accepted.svg"
              alt="Review Accepted"
              width={150}
              height={67}
              className='-mt-6'
            />
            <ReviewFormContent onSubmit={handleReviewSubmit} />
          </>
        );

      case 'authorRating':
        return (
          <AuthorRating
            authorName={author.name}
            authorImage={author.avatarUrl}
            rating={authorRating}
            onRate={handleAuthorRating}
          />
        );

      case 'thankyou':
        return (
          <ThankYouMessage onClose={handleClose} />
        );
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={handleClose}>
      <div className={styles.wrapper}>
        {renderContent()}
      </div>
    </Modal>
  );
};