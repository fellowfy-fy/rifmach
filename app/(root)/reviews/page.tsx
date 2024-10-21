import CTASection from "@/components/shared/cta-section";
import ReviewIntro from "@/components/reviews-sections/review-intro";
import ReviewsSection from "@/components/reviews-sections/reviews-section";

export default function Reviews() {
    return(
        <div>
            <ReviewIntro />
            <ReviewsSection/>
            <CTASection
                title="эксклюзивные стихи по прозрачной цене"
                subtitle="Всего от 200 рублей за четверостишие. И вы получаете гарантии, что стихотворение вам понравится"
                owlImage="/owl-main-1.svg"
                cloudImageMobile="/cloud-cta2-mob.svg"
                cloudImageDesktop="/cloud-cta.svg"
            />
        </div>
    );
}