import { Modal } from '@/components/ui/Modal/Modal';
import styles from './Themes.module.css';
import CallToAction from '@/components/shared/Call-to-action.tsx/call-to-action';
import Carousel from '@/components/ui/carousel';
import ThemeCard from './ThemeCards/ThemeCards';
import { themeCards } from '@/constants/themeCards';

interface ThemesProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

export const Themes: React.FC<ThemesProps> = ({ isOpen, onOpenChange }) => {
  const themeItems = themeCards.map((theme, index) => (
    <ThemeCard key={index} theme={theme} />
  ));

  return (
    <Modal isOpen={isOpen} onClose={() => onOpenChange(false)}>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <div className={styles.header}>
            <h2 className={styles.title}>
              ПОЛУЧИТЕ ЭКСКЛЮЗИВНЫЙ СТИХ НА ЛЮБУЮ ТЕМУ ЗА 24 ЧАСА
            </h2>
            <p className={styles.subtitle}>
              Мы найдем нужные слова для любого повода. Просто опишите нам задачу и получите результат в течение суток.
            </p>
          </div>
          <Carousel
            items={themeItems}
            itemsPerBreakpoint={{
              mobile: 1,
              md: 2,
              xl: 3,
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