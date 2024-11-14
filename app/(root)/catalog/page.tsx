import CTASection from '@/components/shared/CtaSection/cta-section';
import CatalogIntro from '@/components/catalog-sections/catalog-intro';

export default function Catalog() {
  return (
    <div>
      <CatalogIntro />
      <CTASection
        title={
          <>
            ХОТИТЕ, ЧТОБЫ ИМЕННО
            <br />
            <span className="font-bold">ВАШ ТОСТ ЗАПОМНИЛИ?</span>
          </>
        }
        subtitle="Вы оплатите заказ, только если стих Вам понравится."
        owlImage="/characters/owl-contacts.svg"
        owlImageMobile="/characters/owl-contacts-mob.svg"
        cloudImageMobile="/clouds/cloud-cta-mob.svg"
        owlMobileHeightProp={301}
        owlMobileWidthProp={234}
        owlDesktipHeightProp={452}
        owlDesktopWidthProp={603}
        owlMobileClasses="block md:hidden max-h-[301px] transition-opacity duration-800"
        owlDesktopClasses="hidden md:block md:absolute bottom-[-60px] right-[2%] max-h-[297px] md:min-h-[350px] xl:min-h-[452px] 2xl:min-h-[452px] transition-opacity duration-800"
      />
    </div>
  );
}
