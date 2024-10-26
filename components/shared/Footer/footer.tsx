import GraphicContent from "./graphic-content";
import ServicesBlock from "./sevices-block";
import OtherBlock from "./other-block";
import CTABlock from "./cta-block";
import AgreementPayment from "./footer-agreement-payments";

export default function Footer() {
  return (
    <footer className="h-[917px] md:h-[520px] bg-[#E2F2FF] md:bg-white px-4 md:px-10 lg:px-20 xl:px-32 2xl:px-[15%] flex flex-col justify-center mx-auto">
      <div className="flex flex-col md:flex-row gap-[12%] justify-center mb-[75px]">
        <GraphicContent />
        <ServicesBlock />
        <OtherBlock />
        <CTABlock />
      </div>
      <hr />
      <AgreementPayment />
    </footer>
  );
}