import CTASection from "@/components/shared/cta-section";
import CatalogIntro from "@/components/catalog-sections/catalog-intro";

export default function Catalog() {
    return(
        <div>
            <CatalogIntro/>
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