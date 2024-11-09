import CTASection from "@/components/shared/CtaSection/cta-section";
import AllAuthorsSection from "@/components/authors-sections/all-authors-section";
import AuthorsIntro from "@/components/authors-sections/authors-intro";

export default function Authors() {
    return(
        <div>
       <AuthorsIntro/>
      <AllAuthorsSection/>
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
                    четверостишие. <br />Яркий запоминающийся стих по цене букета цветов. Представьте!

                </>
                }
                owlImage="/characters/pushkin-1.svg"
                owlImageMobile="/pushkin-1-mob.svg"
                cloudImageMobile="/clouds/cloud-cta-mob.svg"
            />
        </div>
    );
}