import CTASection from "@/components/shared/cta-section";
import AuthorsCatalogIntro from "@/components/shared/authors-catalog-intro";

export default function Catalog() {
    return(
        <div>
            <AuthorsCatalogIntro 
                title="Стих на юбилей на заказ" 
                subtitle="Получите начало стиха в течении суток:" 
                isShadowEnabled={true}
            />
            <CTASection
                title="ХОТИТЕ, ЧТОБЫ ИМЕННО ВАШ ТОСТ ЗАПОМНИЛИ?"
                subtitle="Вы оплатите заказ, только если стих Вам понравится."
                owlImage="/characters/owl-main-1.svg"
                cloudImageMobile="/clouds/cloud-cta2-mob.svg"
                cloudImageDesktop="/clouds/cloud-cta.svg"
            />
        </div>
    );
}