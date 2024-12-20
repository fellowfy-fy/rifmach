import IdeaCard from "../ui/idea-card";

export default function IdeaCards() {
  return (
    <div>
      <div className="flex flex-col gap-4 md:flex-row md:justify-between mt-[30px] md:mt-[38px]">
        <IdeaCard
          imageSrc="/icons/styling.svg"
          heading="Стилизация"
          text="Хотите гарантировано удивить адресата? Мы напишем стих в стиле Маяковского, Пушкина или в подражание названному стихотворению. Даже если человек далек от поэзии - такой подарок его точно тронет."
          imageWidth={81}
          imageHeight={88}
        />
        <IdeaCard
          imageSrc="/icons/audio.svg"
          heading="Аудиозапись стихотворения"
          text="Не умеете выразительно читать стихи? Профессиональный диктор запишет для вас аудио - и стих с правильно расставленными акцентами тронет до глубины души."
          imageWidth={96}
          imageHeight={103}
        />
        <IdeaCard
          imageSrc="/icons/design.svg"
          heading="Дизайнерское оформление"
          text="Превратите стих в самостоятельный подарок. Оформим ваше поздравление в одну из 20 праздничных рамок-виньеток. Будьте уверены: такой презент преподнесете только вы!"
          imageWidth={81.79}
          imageHeight={75.55}
          showButton={true}
        />
      </div>
    </div>
  );
}