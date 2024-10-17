import IntroSection from "@/components/main-section/intro-section";
import RoadmapSection from "@/components/main-section/roadmap-secion";
import DemoSection from "@/components/main-section/demo-section";
import ReviewSection from "@/components/main-section/review-section";
import AuthorsSection from "@/components/main-section/authors-section";
import IdeaSection from "@/components/main-section/idea-section";

export default function Main() {
    return(
        <div>
            <IntroSection />
            <RoadmapSection />
            <DemoSection />
            <ReviewSection />
            <AuthorsSection />
            <IdeaSection />
        </div>
    );
}