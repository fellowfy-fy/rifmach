import { Button } from '@/components/ui/button';

export default function Agreement() {
  return (
    <div className="flex flex-col items-start text-left justify-start pt-3 md:pt-0">
      <p className="text-[10px] md:text-[12px] mb-2 text-[#29383D]">
        © 2007—2024, Арт-студия «Рифмач»! Все права защищены.
      </p>
      <Button
        variant="footer"
        size="footer"
        className="text-[10px] md:text-[12px] underline"
      >
        Согласие на обработку персональных данных
      </Button>
      <Button
        variant="footer"
        size="footer"
        className="text-[10px] md:text-[12px] underline"
      >
        Договор оферты
      </Button>
    </div>
  );
}
