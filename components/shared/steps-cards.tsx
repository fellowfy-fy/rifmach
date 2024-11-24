import StepsCard from "../ui/step-card";

export function StepsCards() {
  return (
    <div>
      <div className="flex flex-col gap-4 md:flex-row md:justify-between mt-[30px] md:mt-[38px]">
        <StepsCard
          imageSrc="/icons/note.svg"
          hoverImageSrc="/icons/note-hover.svg"
          heading="Выясняем задачу"
          headingClassName="[word-spacing:100vw]"
          text="Хотите вернуть любимую девушку? Блеснуть поздравлением на свадьбе? Обрадовать начальника? Запустить мощную рекламу бизнеса? Мы это сделаем."
          stepNumber={1}
          imageWidth={65.05}
          imageHeight={58.25}
          hoverImageWidth={65.35}
          hoverImageHeight={58.88}
        />
        <StepsCard
          imageSrc="/icons/pazl.svg"
          hoverImageSrc="/icons/pazl-hover.svg"
          heading="Узнаём у вас особенные детали"
          text="Вы сообщаете нам подробности о человеке, которые считаете нужными. Поэт виртуозно вплетает их в стих. Получается уникальное и живое произведение - второго такого не будет."
          stepNumber={2}
          imageWidth={83.89}
          imageHeight={78.58}
          hoverImageWidth={69.89}
          hoverImageHeight={65.58}
        />
        <StepsCard
          imageSrc="/icons/style.svg"
          hoverImageSrc="/icons/style-hover.svg"
          heading="Определяемся со стилистикой"
          text="Уточняем нужную манеру стихи - трогательно, солидно, весело, чувственно, изысканно. А может вы хотите получить произведение в стиле Пушкина, Блока или другого известного поэта?"
          stepNumber={3}
          imageWidth={64.88}
          imageHeight={63.58}
          hoverImageWidth={69}
          hoverImageHeight={68}
        />
        <StepsCard
          imageSrc="/icons/brilliant-hover.svg"
          hoverImageSrc="/icons/brilliant.svg"
          heading="Создаём уникальный стих"
          text="Команда Рифмачей берётся за работу. Пишем для вас шедевр, даём вам на оценку, если нужно – шлифуем, пока стих не станет безупречным."
          stepNumber={4}
          imageWidth={42.75}
          imageHeight={64.58}
          hoverImageWidth={42.75}
          hoverImageHeight={64.58}
        />
      </div>
    </div>
  );
}