import IntroSection from "@/components/main-section/intro-section";
import RoadmapSection from "@/components/main-section/roadmap-secion";
import DemoSection from "@/components/main-section/demo-section";

export default function Main() {
    return(
        <div>
            <IntroSection />
            <RoadmapSection />
            <DemoSection />
        </div>
    );
}