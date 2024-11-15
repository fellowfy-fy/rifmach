import { ChevronDown } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '../ui/button';
import { SetStateAction } from 'react';
import { Dispatch } from 'react';
import { useRouter } from 'next/navigation';

export default function MobileAccordion({
  setMobileMenu,
}: {
  setMobileMenu?: Dispatch<SetStateAction<boolean>>;
}) {
  const router = useRouter();

  return (
    <div className="w-full px-4">
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1" className="w-full">
          <AccordionTrigger
            className="text-h4 regular text-headers w-full"
            icon={
              <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200" />
            }
          >
            Услуги
          </AccordionTrigger>
          <AccordionContent className="flex flex-col items-start">
            <Button
              onClick={() => {
                router.push('/catalog');
                if (setMobileMenu) setMobileMenu(false);
              }}
            >
              Стихи к юбилею
            </Button>
            <Button
              onClick={() => {
                router.push('/catalog');
                if (setMobileMenu) setMobileMenu(false);
              }}
            >
              Стихи на день рождения
            </Button>
            <Button
              onClick={() => {
                router.push('/catalog');
                if (setMobileMenu) setMobileMenu(false);
              }}
            >
              Стихи на свадьбу
            </Button>
            <Button
              onClick={() => {
                router.push('/catalog');
                if (setMobileMenu) setMobileMenu(false);
              }}
            >
              Стихи благодарность
            </Button>
            <Button
              onClick={() => {
                router.push('/catalog');
                if (setMobileMenu) setMobileMenu(false);
              }}
            >
              Признания в любви
            </Button>
            <Button
              onClick={() => {
                router.push('/catalog');
                if (setMobileMenu) setMobileMenu(false);
              }}
            >
              Корпоративные гимны
            </Button>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger
            className="text-h4 regular text-headers"
            icon={
              <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200" />
            }
          >
            Темы поздравлений
          </AccordionTrigger>
          <AccordionContent className="flex flex-col items-start">
            <Button
              onClick={() => {
                router.push('/catalog');
                if (setMobileMenu) setMobileMenu(false);
              }}
            >
              Биографии в стихах
            </Button>
            <Button
              onClick={() => {
                router.push('/catalog');
                if (setMobileMenu) setMobileMenu(false);
              }}
            >
              Стихи для руководителей
            </Button>
            <Button
              onClick={() => {
                router.push('/catalog');
                if (setMobileMenu) setMobileMenu(false);
              }}
            >
              Стихи для коллег
            </Button>
            <Button
              onClick={() => {
                router.push('/catalog');
                if (setMobileMenu) setMobileMenu(false);
              }}
            >
              Стихи в стиле известных поэтов
            </Button>
            <Button
              onClick={() => {
                router.push('/catalog');
                if (setMobileMenu) setMobileMenu(false);
              }}
            >
              Стихи на профессиональные праздники
            </Button>
            <Button
              onClick={() => {
                router.push('/catalog');
                if (setMobileMenu) setMobileMenu(false);
              }}
            >
              Визитка на конкурс
            </Button>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger
            className="text-h4 regular text-headers w-full"
            icon={
              <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200" />
            }
          >
            Примеры работ
          </AccordionTrigger>
          <AccordionContent className="flex flex-col items-start">
            <Button
              onClick={() => {
                router.push('/catalog');
                if (setMobileMenu) setMobileMenu(false);
              }}
            >
              Извинения в стихах
            </Button>
            <Button
              onClick={() => {
                router.push('/catalog');
                if (setMobileMenu) setMobileMenu(false);
              }}
            >
              Рекламные стихи
            </Button>
            <Button
              onClick={() => {
                router.push('/catalog');
                if (setMobileMenu) setMobileMenu(false);
              }}
            >
              Объявления в стихах
            </Button>
            <Button
              onClick={() => {
                router.push('/catalog');
                if (setMobileMenu) setMobileMenu(false);
              }}
            >
              Частушки
            </Button>
            <Button
              onClick={() => {
                router.push('/catalog');
                if (setMobileMenu) setMobileMenu(false);
              }}
            >
              Стихи ко дню влюблённых
            </Button>
            <Button
              onClick={() => {
                router.push('/catalog');
                if (setMobileMenu) setMobileMenu(false);
              }}
            >
              РЭП текст
            </Button>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
