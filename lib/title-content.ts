//НЕ ИСПОЛЬЗУЕСТЯ

const titleContentData = {
  main: {
    text: "На что способны стихи на заказ?",
    subtitle: "Вы получите идеальный стих, решающий вашу задачу!",
  },
  secondary: {
    text: "Посмотрите несколько интересных примеров",
    subtitle: "Вы достойны стихов, написанных по всем законам стихосложения: качественные интересные рифмы, необычные образы, точный ритм",
  },
  dark: {
    text: "Корпоративным клиентам",
    subtitle: "Специальные предложения для корпоративных клиентов.",
  },
  darkSecondary: {
    text: "Корпоративным клиентам",
    subtitle: "Получите лучшие стихи для корпоративных мероприятий.",
  },
};

interface TitleContentProps {
  variant: "main" | "secondary" | "dark" | "darkSecondary";
}

export default function TitleContent({ variant }: TitleContentProps) {
  const { text, subtitle } = titleContentData[variant];
  return { text, subtitle };
}
