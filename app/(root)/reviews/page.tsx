import CTASection from "@/components/shared/cta-section";
import ReviewIntro from "@/components/shared/reviews-sections/review-intro";
import ReviewsSection from "@/components/shared/reviews-sections/reviews-section";

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
                cloudImageMobile="/clouds/cloud-cta-mob.svg"
                cloudImageDesktop="/clouds/cloud-cta.svg"
            />
        </div>
    );
}