import { Dropdown } from '../../../dropdown';
import { Button } from '../../../../ui/button';
import MobileAccordion from '../../../mobile-accordion';
import { useRouter } from 'next/navigation';
import styles from './Menu.module.css';
import { getRoutesConfig } from '@/lib/utils';
import MenuLink from './components/MenuLink/MenuLink';

export default function Menu() {
  const router = useRouter();

  return (
    <div className={styles.menuWrapperStyle}>
      {getRoutesConfig().map(
        (item, i) =>
          item.isMenuItem && (
            <li key={i} className={styles.li}>
              <MenuLink {...item} isMobile={false} />
            </li>
          )
      )}

      <div className="block md:hidden w-full">
        <MobileAccordion />
      </div>

      <Button
        className="text-left md:text-center md:px-0 xs:px-4"
        onClick={() => router.push('/')}
      >
        Цены
      </Button>
      <Button
        className="text-left md:text-center md:px-0 xs:px-4"
        onClick={() => router.push('/authors')}
      >
        Авторы
      </Button>
      <Button
        className="text-left md:text-center md:px-0 xs:px-4"
        onClick={() => router.push('/reviews')}
      >
        Отзывы
      </Button>
      <Button
        className="text-left md:text-center md:px-0 xs:px-4"
        onClick={() => router.push('/contacts')}
      >
        Контакты
      </Button>
    </div>
  );
}
