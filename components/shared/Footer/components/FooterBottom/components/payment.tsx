import { Button } from '@/components/ui/button';
import styles from './payment.module.css';

export default function Payment() {
  return (
    <div className="flex flex-row w-100% gap-2 md:gap-0 justify-between md:items-center md:justify-center pb-3 md:pb-0">
      <Button variant="image" className={styles.paymentButton}>
        <img src="/icons/sbp.svg" alt="СБП" className={styles.paymentIcon} />
      </Button>
      <Button variant="image" className={styles.paymentButton}>
        <img
          src="/icons/umoney.svg"
          alt="ЮМани"
          className={styles.paymentIcon}
        />
      </Button>
      <Button variant="image" className={styles.paymentButton}>
        <img
          src="/icons/mastercard.svg"
          alt="MasterCard"
          className={styles.paymentIcon}
        />
      </Button>
      <Button variant="image" className={styles.paymentButton}>
        <img src="/icons/visa.svg" alt="Visa" className={styles.paymentIcon} />
      </Button>
      <Button variant="image" className={styles.paymentButton}>
        <img src="/icons/mir.svg" alt="Мир" className={styles.paymentIcon} />
      </Button>
      <Button variant="image" className={styles.paymentButton}>
        <img
          src="/icons/sber.svg"
          alt="СберПэй"
          className={styles.paymentIcon}
        />
      </Button>
    </div>
  );
}
