import IntroSection from "@/components/main-section/intro-section";
import RoadmapSection from "@/components/main-section/roadmap-secion";
import DemoSection from "@/components/main-section/demo-section";
import ReviewSection from "@/components/main-section/review-section";
import AuthorsSection from "@/components/main-section/authors-section";
import IdeaSection from "@/components/main-section/idea-section";
import CTA01Section from "@/components/main-section/cta-01-section";
import CorporateSection from "@/components/main-section/corporate-section";
import CTA02Section from "@/components/main-section/cta-02-section";

export default function Main() {
    return(
        <body>
            <IntroSection />
            <RoadmapSection />
            <DemoSection />
            <ReviewSection />
            <AuthorsSection />
            <IdeaSection />
            <CTA01Section />
            <CorporateSection />
            <CTA02Section />
        </body>
    );
}