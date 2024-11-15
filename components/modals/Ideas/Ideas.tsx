import { Modal } from '@/components/ui/Modal/Modal';
import styles from './Ideas.module.css';
import CallToAction from '@/components/shared/Call-to-action.tsx/call-to-action';
import Carousel from '@/components/ui/carousel';
import IdeaCard from './IdeacardModal/IdeaCardModal';
import { ideaCards } from '@/constants/ideas';

interface IdeasProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

export const Ideas: React.FC<IdeasProps> = ({ isOpen, onOpenChange }) => {
  const ideaItems = ideaCards.map((idea, index) => (
    <IdeaCard key={index} idea={idea} />
  ));

  return (
    <Modal isOpen={isOpen} onClose={() => onOpenChange(false)}>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <div className={styles.header}>
            <h2 className={styles.title}>
              ХОТИТЕ, ЧТОБЫ ИМЕННО ВАШ СТИХ ЗАПОМНИЛИ?
            </h2>
            <p className={styles.subtitle}>
              Бесплатно оформим ваше поздравление в праздничную рамку-виньетку
            </p>
          </div>
          <Carousel
            items={ideaItems}
            itemsPerBreakpoint={{
              mobile: 1,
              md: 2,
              xl: 4,
            }}
          />
        </div>
        <div className={styles.bottomSection}>
          <h3 className={styles.callToAction}>
            СИЛЬНЫЕ СТИХИ ДЛЯ РЕШЕНИЯ <span>ЛЮБЫХ ЗАДАЧ!</span>
          </h3>
          <CallToAction />
        </div>
      </div>
    </Modal>
  );
};