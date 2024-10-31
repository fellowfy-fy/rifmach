import CorporateCards from '../shared/CorporateCards/CorporateCards';

export default function CorporateSection() {
  return (
    <section className="bg-white py-20 md:py-6">
      <div className="mx-auto px-4 md:px-10 lg:px-20 xl:px-[135px] 2xl:px-60 max-w-[1920px]">
        <h2 className="text-headers text-2xl md:text-h2 uppercase">
          Корпоративным клиентам
        </h2>

        <hr className="w-10 md:w-[50px] h-[5px] bg-main rounded-sm mt-2.5 md:mt-5" />

        <CorporateCards />
      </div>
    </section>
  );
}
