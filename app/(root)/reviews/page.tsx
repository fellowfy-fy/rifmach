import CTA03Section from "@/components/reviews-sections/cta-03-section"
import ReviewIntro from "@/components/reviews-sections/review-intro";
import ReviewsSection from "@/components/reviews-sections/reviews-section";

export default function Reviews() {
    return(
        <body>
            <ReviewIntro />
            <ReviewsSection/>
            <CTA03Section/>
        </body>
    );
}