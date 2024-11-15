import CorporateCards from './CorporateCards/CorporateCards';
import styles from './CorporateSection.module.css';

export default function CorporateSection() {
  return (
    <section className="bg-white">
      <div className={styles.corporateSectionWrapper}>
        <h2 className="text-headers text-2xl md:text-h2 uppercase hidden md:block">
          Корпоративным клиентам
        </h2>
        <h2 className="md:hidden text-headers uppercase text-[24px] leading-[28px]">
          Корпоративным
          <br />
          <span className="font-bold text-2xl">клиентам</span>
        </h2>
        <hr className="w-10 md:w-[50px] h-[5px] bg-main rounded-sm mt-[10px] md:mt-[25px]" />
        <CorporateCards />
      </div>
    </section>
  );
}
