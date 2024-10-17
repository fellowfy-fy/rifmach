import StepsCard from "../ui/step-card";

export default function StepsCards() {
    return(
        <div>
            <div className="flex flex-col gap-4 md:flex-row md:justify-between mt-[30px] md:mt-[38px]">
                <StepsCard 
                    imageSrc="/step-icon-1.svg" 
                    heading="Выясняем задачу" 
                    text="Хотите вернуть любимую девушку? Блеснуть поздравлением на свадьбе? Обрадовать начальника? Запустить мощную рекламу бизнеса? Мы это сделаем."
                    stepNumber={1}
                />
                <StepsCard 
                    imageSrc="/step-icon-2.svg" 
                    heading="Узнаём у вас особенные детали" 
                    text="Вы сообщаете нам подробности о человеке, которые считаете нужными. Поэт виртуозно вплетает их в стих."
                    stepNumber={2}
                />
                <StepsCard 
                    imageSrc="/step-icon-3.svg" 
                    heading="Определяемся со стилистикой" 
                    text="Уточняем нужную манеру стиха – трогательно, солидно, весело, чувственно, изысканно."
                    stepNumber={3}
                />
                <StepsCard 
                    imageSrc="/step-icon-4.svg" 
                    heading="Создаём уникальный стих" 
                    text="Команда Рифмачей берётся за работу. Пишем для вас шедевр, даём вам на оценку, если нужно – шлифуем."
                    stepNumber={4}
                />
            </div>
        </div>
    )
}