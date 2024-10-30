import CTASection from "@/components/shared/cta-section";
import AuthorsCatalogIntro from "@/components/shared/authors-catalog-intro";

export default function Catalog() {
    return(
        <div>
            <AuthorsCatalogIntro 
                               title={
                <>стихи на юбилей<br /><span className="font-bold">на заказ</span>
                </>
                }
                subtitle="Получите начало стиха в течении суток:" 
                isShadowEnabled={true}
            />
            <CTASection
                title={
                <>ХОТИТЕ, ЧТОБЫ ИМЕННО<br /><span className="font-bold">ВАШ ТОСТ ЗАПОМНИЛИ?</span>
                </>
                }
                subtitle="Вы оплатите заказ, только если стих Вам понравится."
                owlImage="/characters/owl-contacts.svg"
                cloudImageMobile="/clouds/cloud-cta-mob.svg"
                cloudImageDesktop="/clouds/cloud-cta.svg"
            />
        </div>
    );
}