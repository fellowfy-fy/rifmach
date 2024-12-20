import IntroSection from '@/components/main-section/IntroSection/IntroSection';
import RoadmapSection from '@/components/main-section/RoadmapSection/RoadmapSecion';
import DemoSection from '@/components/main-section/DemoSection/demo-section';
import ReviewSection from '@/components/main-section/ReviewSection/review-section';
import AuthorsSection from '@/components/main-section/AuthorsSection/authors-section';
import IdeaSection from '@/components/main-section/IdeaSection/idea-section';
import CorporateSection from '@/components/main-section/CorporateSection/CorporateSection';
import CTASection from '@/components/shared/CtaSection/cta-section';
import VideoSection from '@/components/main-section/VideoSection/video-section';
import { GratitudeLetters } from '@/components/main-section/GratitudeLetters/GratitudeLetters';
import { CalculatorSection } from '@/components/main-section/CalculatorSection/calculator-section';

export default function Main() {
  return (
    <div className="mx-auto">
      <IntroSection />
      <RoadmapSection />
      <DemoSection />
      <ReviewSection />
      <CalculatorSection />
      <AuthorsSection />
      <IdeaSection />
      <CTASection
        title={
          <>
            эксклюзивные стихи
            <br />
            <span className="font-bold">по прозаической цене</span>
          </>
        }
        subtitle={
          <>
            Всего от <span className="font-bold">200 рублей</span> за
            четверостишие. И вы получаете гарантии, что стихотворение вам
            понравится
          </>
        }
        owlImage="/characters/owl-main-1.svg"
        cloudImageMobile="/clouds/cloud-cta-mob.svg"
      />
      <CorporateSection />
      <VideoSection />
      <GratitudeLetters />
      <CTASection
        title={
          <>
            стильные стихи для решения{' '}
            <span className="font-bold">любых задач</span>
          </>
        }
        subtitle="Вы оплатите заказ, только если стих Вам понравится."
        owlImage="/characters/owl-main-2.svg"
        alternateOwlImage="/characters/owl_poet_mask.svg"
        cloudImageMobile="/clouds/cloud-cta-mob.svg"
      />
    </div>
  );
}
