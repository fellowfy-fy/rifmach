import CorporateCard from "../ui/corporate-card"

export default function CorporateCards() {
    return(
        <div>
            <div className="flex flex-col gap-4 md:flex-row md:justify-between mt-[30px] md:mt-[38px]">
                <CorporateCard 
                    imageSrc="/corporate-1.svg" 
                    heading="Хотите сделать рекламные материалы особенными?" 
                    text="Создадим для вашей целевой аудитории меткий стих, который привлечёт внимание быстрее, чем скучный текст."
                />
                <CorporateCard
                    imageSrc="/corporate-2.svg" 
                    heading="Вы солидная компания, которой важно получить качественный текст? стихотворения" 
                    text="Наши лучшие авторы напишут стихи, соответствующие уровню и имиджу нашей фирмы."
                />
                <CorporateCard
                    imageSrc="/corporate-3.svg" 
                    heading="Нужны стихи для открыток и другой подарочной продукции? оформление" 
                    text="Мы знаем, как подобрать слова, которые вызовут желание купить ваш товар."
                />
                <CorporateCard
                    imageSrc="/corporate-4.svg" 
                    heading="Занимаетесь организацией мероприятий?" 
                    text="Избавим вас от головной боли - в кротчайшие сроки напишем искромётные поздравления, тосты и песни."
                />
            </div>
        </div>
    )
}