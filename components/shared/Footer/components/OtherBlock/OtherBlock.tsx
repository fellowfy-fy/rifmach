'use client';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import styles from './OtherBlock.module.css';

export default function OtherBlock() {
  const router = useRouter();
  return (
    <div className={styles.otherBlock}>
      <h4 className="uppercase text-headers text-h3 mb-2">дополнительно</h4>
      <Button
        variant="footer"
        size="footer"
        onClick={() => router.push('/authors')}
      >
        Авторы
      </Button>
      <Button variant="footer" size="footer" onClick={() => router.push('/')}>
        Цены
      </Button>
      <Button
        variant="footer"
        size="footer"
        onClick={() => router.push('/contacts')}
      >
        Контакты
      </Button>
      <Button
        variant="footer"
        size="footer"
        onClick={() => router.push('/reviews')}
      >
        Отзывы
      </Button>
    </div>
  );
}
