import { Button } from '@/components/ui/button';
import styles from './ServicesBlock.module.css';

export default function ServicesBlock() {
  return (
    <div className={styles.servicesBlock}>
      <h4 className="uppercase text-headers text-h3 mb-2 regular">услуги</h4>
      <Button variant="footer" size="footer">
        Стихи на заказ
      </Button>
      <Button variant="footer" size="footer">
        Песни на заказ
      </Button>
      <Button variant="footer" size="footer">
        Частушки на заказ
      </Button>
    </div>
  );
}
