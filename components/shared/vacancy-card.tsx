import { Button } from "../ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function VacancyCard() {
  return (
    <div className="border bg-white w-full md:w-[578px] h-auto md:h-[560px] pl-[25px] pr-[30px] py-[40px] rounded-[10px] relative mb-[39px] md:mb-0 flex flex-col">
      <div className="mt-[10px] flex flex-row gap-2">
        <Avatar className="w-[100px] h-[100px]">
          <AvatarImage src="/placeholder.svg" />
          <AvatarFallback>?</AvatarFallback>
        </Avatar>
        <div className="flex flex-col">
          <p className="text-h3 text-[#25253F] font-semibold">Ваше Имя</p>

          <p className="text-h4 text-textsmain mt-2">Хотите стать частью команды “Рифмачей”?</p>
          <p className="text-h4 text-[#8F8F9C] leading-5 mt-1">
            Ознакомьтесь с требованиями к соискателю и заполните анкету.
          </p>
        </div>
      </div>

      <p className="text-h4 text-textsmain mt-[11px] leading-[23px]">
        Навыки, которыми вы должны обладать, чтобы работать с нами:
      </p>

      <ul className="list-disc pl-5 mt-4 text-h4 text-textsmain leading-[23px]">
        <li>Чувство поэтического размера и стиля.</li>
        <li>Стих должен быть написан по строгим ритмическим канонам.</li>
        <li>Грамотность в отношении знаков препинания.</li>
        <li>Отсутствие ошибок в тексте.</li>
        <li>
          Оригинальность рифм. Не банальные глагольные, которые присущи большинству авторов-любителей. 
          «Поздравлять-желать» и провозглашать «в юбилей-налей» могут многие (включая самих заказчиков).
        </li>
        <li>Образность, эрудиция.</li>
        <li>
          Можно оперировать достаточно простыми (НЕ БАНАЛЬНЫМИ!) рифмами, но содержание банальным быть не должно.
        </li>
      </ul>

      <div className="mt-12 flex justify-center">
        <Button variant="main" className="w-full md:w-[302px]">
          ОТКЛИКНУТЬСЯ НА ВАКАНСИЮ
        </Button>
      </div>
    </div>
  );
}
