import IntroSection from "@/components/main-section/intro-section";
import RoadmapSection from "@/components/main-section/roadmap-secion";
import DemoSection from "@/components/main-section/demo-section";
import ReviewSection from "@/components/main-section/review-section";
import AuthorsSection from "@/components/main-section/authors-section";
import IdeaSection from "@/components/main-section/idea-section";
import CorporateSection from "@/components/main-section/corporate-section";
import CTASection from "@/components/shared/cta-section";
import VideoSection from "@/components/main-section/video-section";

export default function Main() {
  return (
    <div>
      <IntroSection />
      <RoadmapSection />
      <DemoSection />
      <ReviewSection />
      <AuthorsSection />
      <IdeaSection />
      <CTASection
        title={<>эксклюзивные стихи<br/><span className="font-bold">по прозаической цене</span></>}
        subtitle={<>Всего от <span className="font-bold">200 рублей</span> за четверостишие. И вы получаете гарантии, что стихотворение вам понравится</>}
        owlImage="/owl-main-1.svg"
        cloudImageMobile="/cloud-cta-mob.svg"
        cloudImageDesktop="/cloud-cta.svg"
        hasArch={true}
      />
      <CorporateSection />
      <VideoSection />
      <CTASection
        title={<>стильные стихи для решения <span className="font-bold">любых задач</span></>}
        subtitle="Вы оплатите заказ, только если стих Вам понравится."
        owlImage="/owl-main-2.svg"
        cloudImageMobile="/cloud-cta2-mob.svg"
        cloudImageDesktop="/cloud-cta.svg"
      />
    </div>
  );
}
