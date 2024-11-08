import CTASection from "@/components/shared/CtaSection/cta-section";
import ReviewIntro from "@/components/reviews-sections/review-intro";
import ReviewsSection from "@/components/reviews-sections/reviews-section";

export default function Reviews() {
    return(
        <div>
            <ReviewIntro />
            <ReviewsSection/>
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
            />
        </div>
    );
}