import { compact } from '@/lib/utils';
import Link from 'next/link';
import { FC, ReactNode } from 'react';
import styles from './MenuLink.module.css';
interface IRouteChildren extends Omit<IRouteConfig, 'children'> {
  type?: 'standard' | 'view all';
}

export interface IRouteConfig {
  title: ReactNode | string;
  href: string;
  children?: (IRouteChildren | undefined)[];
  skip?: boolean;
  isSitemapItem?: boolean;
  isMenuItem?: boolean;
  isRequestDemo?: boolean;
}

interface IMenuLinkProps extends IRouteConfig {
  isMobile?: boolean;
}

const MenuLink: FC<IMenuLinkProps> = props => {
  const { title, href, children, isMobile, isMenuItem } = props;

  return (
    <>
      <p className={styles.linkStyle}>{title}</p>
      {children && (
        <>
          <div className={styles.hoverEffectHolder} />
          <ul className={styles.childrenUl}>
            {compact(children).map(
              ({ title, href, type = 'standard', isMenuItem }, i) =>
                isMenuItem && (
                  <li key={i}>
                    <Link
                      href={href}
                      passHref={true}
                      className={
                        type === 'standard'
                          ? styles.childLinkSecondary
                          : styles.childLinkPrimary
                      }
                    >
                      {title}
                    </Link>
                  </li>
                )
            )}
          </ul>
        </>
      )}
    </>
  );
};

export default MenuLink;
