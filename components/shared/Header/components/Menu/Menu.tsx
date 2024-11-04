import { Button } from '../../../../ui/button';
import MobileAccordion from '../../../mobile-accordion';
import { useRouter } from 'next/navigation';
import styles from './Menu.module.css';
import { compact, getRoutesConfig } from '@/lib/utils';
import { useState } from 'react';
import Link from 'next/link';
import ChevronAnimated from './components/ChevronAnimated/ChevronAnimated';

export default function Menu({ children }: { children?: React.ReactNode }) {
  const router = useRouter();

  const [isOpen, setIsOpen] = useState(false);

  const handleMenuClick = () => {
    setIsOpen(!isOpen);
  };

  const [services, themes, examples] = getRoutesConfig();

  const childRoutes = [services.children, themes.children, examples.children];

  return (
    <div className={styles.menuWrapperStyle}>
      {getRoutesConfig().map(
        (item, i) =>
          item.isMenuItem && (
            <li
              key={i}
              className={`${styles.li} ${isOpen ? styles.opened : ''}`}
              onClick={handleMenuClick}
            >
              <p className={styles.linkStyle}>{item.title}</p>
              <ChevronAnimated />
            </li>
          )
      )}
      <nav className={styles.menuList}>
        {childRoutes.map((routeGroup, i) => (
          <ul
            className={`${styles.childrenUl} ${
              i === 0
                ? styles.servicesGroup
                : i === 1
                ? styles.themesGroup
                : styles.examplesGroup
            }`}
            key={i}
          >
            {compact(routeGroup).map(
              ({ title, href, isMenuItem }, i) =>
                isMenuItem && (
                  <li key={i}>
                    <Link
                      href={href}
                      passHref={true}
                      style={{ textWrap: 'wrap' }}
                      className={styles.childLinkSecondary}
                    >
                      {title}
                    </Link>
                  </li>
                )
            )}
          </ul>
        ))}
      </nav>

      <div className="block md:hidden w-full">
        <MobileAccordion />
      </div>

      <Button
        className="text-left md:text-center md:px-0 xs:px-4 text-[#29383D]"
        onClick={() => router.push('/pricing')}
      >
        <p className={styles.li_right}>Цены</p>
      </Button>
      <Button
        className="text-left md:text-center text-h4 md:px-0 xs:px-4 text-[#29383D]"
        onClick={() => router.push('/authors')}
      >
        <p className={styles.li_right}>Авторы</p>
      </Button>
      <Button
        className="text-left md:text-center md:px-0 xs:px-4 text-[#29383D]"
        onClick={() => router.push('/reviews')}
      >
        <p className={styles.li_right}>Отзывы</p>
      </Button>
      <Button
        className="text-left md:text-center md:px-0 xs:px-4 text-[#29383D]"
        onClick={() => router.push('/contacts')}
      >
        <p className={styles.li}>Контакты</p>
      </Button>

      {children}
    </div>
  );
}
