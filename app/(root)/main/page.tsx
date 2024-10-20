import IntroSection from "@/components/main-section/intro-section";
import RoadmapSection from "@/components/main-section/roadmap-secion";
import DemoSection from "@/components/main-section/demo-section";
import ReviewSection from "@/components/main-section/review-section";
import AuthorsSection from "@/components/main-section/authors-section";
import IdeaSection from "@/components/main-section/idea-section";
import CorporateSection from "@/components/main-section/corporate-section";
import CTASection from "@/components/shared/cta-section";
import VideoSection from "@/components/main-section/video-section";
import { Video } from "lucide-react";

export default function Main() {
    return(
        <body>
            <IntroSection />
            <RoadmapSection />
            <DemoSection />
            <ReviewSection />
            <AuthorsSection />
            <IdeaSection />
            <CTASection
                title="эксклюзивные стихи по прозаичной цене"
                subtitle="Всего от 200 рублей за четверостишие. И вы получаете гарантии, что стихотворение вам понравится"
                owlImage="/owl-main-1.svg"
                cloudImageMobile="/cloud-cta-mob.svg"
                cloudImageDesktop="/cloud-cta.svg"
            />
            <CorporateSection />
            <VideoSection/>
            <CTASection
                title="стильные стихи для решения любых задач"
                subtitle="Вы оплатите заказ, только если стих Вам понравится."
                owlImage="/owl-main-2.svg"
                cloudImageMobile="/cloud-cta2-mob.svg"
                cloudImageDesktop="/cloud-cta.svg"
            />

        </body>
    );
}