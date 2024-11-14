import CTASection from '@/components/shared/CtaSection/cta-section';
import ReviewIntro from '@/components/reviews-sections/review-intro';
import ReviewsSection from '@/components/reviews-sections/reviews-section';

export default function Reviews() {
  return (
    <div>
      <ReviewIntro />
      <ReviewsSection />
      <CTASection
        title="А хотите также?"
        subtitle={
          <>
            Всего от <span className="font-bold">200 рублей</span> за
            четверостишие. И вы получаете гарантии, что стихотворение вам
            понравится
          </>
        }
        owlImage="/characters/owl-flowers.svg"
        owlImageMobile="/characters/owl-flowers-mob.svg"
        cloudImageMobile="/clouds/cloud-cta-mob.svg"
        owlMobileHeightProp={312}
        owlMobileWidthProp={374}
        owlDesktipHeightProp={460}
        owlDesktopWidthProp={623}
        owlMobileClasses="block md:hidden max-h-[312px] transition-opacity duration-800"
        owlDesktopClasses="hidden md:block md:absolute bottom-[-120px] right-[-6%] max-h-[297px] md:min-h-[400px] xl:min-h-[460px] 2xl:min-h-[460px] transition-opacity duration-800"
      />
    </div>
  );
}
