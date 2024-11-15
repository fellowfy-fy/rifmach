import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const compact = <T extends any[], E = T extends (infer P)[] ? P : never>(
  array: T
) => {
  if (!Array.isArray(array)) {
    return [];
  }

  const compactedArr = array.filter(Boolean) as Exclude<
    E,
    null | undefined | false | 0 | ''
  >[];

  return compactedArr;
};

export const getRoutesConfig = () => {
  return [
    {
      title: 'Услуги',
      href: '/services',
      isMenuItem: true,
      isSitemapItem: true,
      children: [
        {
          title: 'Стихи к юбилею',
          href: '/catalog',
          footerTheme: 'im',
          isMenuItem: true,
          isSitemapItem: true,
        },
        {
          title: 'Стихи на день рождения',
          href: '/catalog',
          footerTheme: 'im',
          isMenuItem: true,
          isSitemapItem: true,
        },
        {
          title: 'Стихи на свадьбу',
          href: '/catalog',
          footerTheme: 'im',
          isMenuItem: true,
          isSitemapItem: true,
        },
        {
          title: 'Стихи благодарность',
          href: '/catalog',
          footerTheme: 'im',
          isMenuItem: true,
          isSitemapItem: true,
        },
        {
          title: 'Признания в любви',
          href: '/catalog',
          footerTheme: 'im',
          isMenuItem: true,
          isSitemapItem: true,
        },
        {
          title: 'Корпоративные гимны',
          href: '/catalog',
          footerTheme: 'im',
          isMenuItem: true,
          isSitemapItem: true,
        },
      ],
    },
    {
      title: 'Темы поздравлений',
      href: '/themes',
      isMenuItem: true,
      isSitemapItem: true,
      children: [
        {
          title: 'Биографии в стихах',
          href: '/catalog',
          footerTheme: 'im',
          isMenuItem: true,
          isSitemapItem: true,
        },
        {
          title: 'Стихи для руководителей',
          href: '/catalog',
          footerTheme: 'im',
          isMenuItem: true,
          isSitemapItem: true,
        },
        {
          title: 'Стихи для коллег',
          href: '/catalog',
          footerTheme: 'im',
          isMenuItem: true,
          isSitemapItem: true,
        },
        {
          title: 'Стихи в стиле известных поэтов',
          href: '/catalog',
          footerTheme: 'im',
          isMenuItem: true,
          isSitemapItem: true,
        },
        {
          title: 'Стихи на профессиональные праздники',
          href: '/catalog',
          footerTheme: 'im',
          isMenuItem: true,
          isSitemapItem: true,
        },
        {
          title: 'Визитка на конкурс',
          href: '/catalog',
          footerTheme: 'im',
          isMenuItem: true,
          isSitemapItem: true,
        },
      ],
    },
    {
      title: 'Примеры работ',
      href: '/examples',
      isMenuItem: true,
      isSitemapItem: true,
      children: [
        {
          title: 'Извинения в стихах',
          href: '/catalog',
          footerTheme: 'im',
          isMenuItem: true,
          isSitemapItem: true,
        },
        {
          title: 'Рекламные стихи',
          href: '/catalog',
          footerTheme: 'im',
          isMenuItem: true,
          isSitemapItem: true,
        },
        {
          title: 'Объявления в стихах',
          href: '/catalog',
          footerTheme: 'im',
          isMenuItem: true,
          isSitemapItem: true,
        },
        {
          title: 'Частушки',
          href: '/catalog',
          footerTheme: 'im',
          isMenuItem: true,
          isSitemapItem: true,
        },
        {
          title: 'Стихи ко дню влюблённых',
          href: '/catalog',
          footerTheme: 'im',
          isMenuItem: true,
          isSitemapItem: true,
        },
        {
          title: 'РЭП текст',
          href: '/catalog',
          footerTheme: 'im',
          isMenuItem: true,
          isSitemapItem: true,
        },
      ],
    },
  ];
};
