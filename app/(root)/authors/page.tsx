import CTASection from "@/components/shared/cta-section";
import AllAuthorsSection from "@/components/authors-sections/all-authors-section";
import AuthorsCatalogIntro from "@/components/shared/authors-catalog-intro";

export default function Authors() {
    return(
        <div>
       <AuthorsCatalogIntro
        title="авторы"
        subtitle={<>
          Подберём оптимального автора под <span className="font-bold">вашу задачу</span>
        </>}
        isShadowEnabled={true}
      />
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
                    четверостишие. И вы получаете гарантии, что стихотворение вам
                    понравится
                </>
                }
                owlImage="/characters/owl-main-1.svg"
                cloudImageMobile="/clouds/cloud-cta-mob.svg"
                cloudImageDesktop="/clouds/cloud-cta.svg"
            />
        </div>
    );
}

//comment