import { CustomButton } from '@/components/ui/CustomButton/CustomButton';
import styles from './Contactus.module.css';

interface ConfirmationMessageProps {
  counter: number;
  onClose: () => void;
}

export const ConfirmMessage: React.FC<ConfirmationMessageProps> = ({ counter, onClose }) => {
  return (
    <div className="flex flex-col items-center justify-center px-[35px] md:px-[42px] pt-[130px] md:pt-[83px] gap-4">
      <h2 className="text-[16px] md:text-[18px] text-headers font-bold text-center">
        Спасибо, заявка на звонок принята
      </h2>
      <p className="text-[14px] md:text-[16px] text-textsmain text-center mb-[50px]">
        Ожидайте, мы позвоним в ближайшее время
      </p>
      <CustomButton 
        type='main' 
        customClass={styles.contactusButton}
        onClick={onClose}
      >
        ЗАКРЫТЬ ОКНО ({counter})
      </CustomButton>
    </div>
  );
};