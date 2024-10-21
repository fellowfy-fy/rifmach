import CTASection from "@/components/shared/cta-section";
import AllAuthorsSection from "@/components/authors-sections/all-authors-section";
import AuthorsCatalogIntro from "@/components/shared/authors-catalog-intro";

export default function Authors() {
    return(
        <body>
            <AuthorsCatalogIntro 
                title="авторы" 
                subtitle="Подберём оптимального автора под вашу задачу" 
                isShadowEnabled={true}
            />
            <AllAuthorsSection />
            <CTASection
                title="Эксклюзивные стихи по прозаической цене"
                subtitle="Всего от 200 рублей за четверостишие. Яркий запоминающийся стих по цене букета цветов. Представьте!"
                owlImage="/Pushkin.svg"
                cloudImageMobile="/cloud-cta2-mob.svg"
                cloudImageDesktop="/cloud-cta.svg"
            />
        </body>
    );
}