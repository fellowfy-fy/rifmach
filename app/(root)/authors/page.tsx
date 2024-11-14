import CTASection from '@/components/shared/CtaSection/cta-section';
import AllAuthorsSection from '@/components/AuthorsSections/all-authors-section';
import AuthorsIntro from '@/components/AuthorsSections/AuthorsIntro/AuthorsIntro';

export default function Authors() {
  return (
    <div>
      <AuthorsIntro />
      <AllAuthorsSection />
      <CTASection
        title={
          <>
            эксклюзивные стихи
            <br />
            <span className="font-bold">по прозаической цене</span>
          </>
        }
        subtitle={
          <>
            Всего от <span className="font-bold">200 рублей</span> за
            четверостишие. <br />
            Яркий запоминающийся стих по цене букета цветов. Представьте!
          </>
        }
        owlImage="/characters/pushkin-1.svg"
        owlImageMobile="/characters/pushkin-1-mob.svg"
        cloudImageMobile="/clouds/cloud-cta-mob.svg"
        owlMobileHeightProp={324}
        owlMobileWidthProp={254}
        owlDesktipHeightProp={438}
        owlDesktopWidthProp={631}
        owlMobileClasses="block md:hidden max-h-[324px] transition-opacity duration-800"
        owlDesktopClasses="hidden md:block md:absolute bottom-[-60px] right-[-6%] max-h-[297px] md:min-h-[350px] xl:min-h-[438px] 2xl:min-h-[438px] transition-opacity duration-800"
      />
    </div>
  );
}
