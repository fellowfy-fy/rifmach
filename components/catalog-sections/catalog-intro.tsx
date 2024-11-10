import CallToAction from '../shared/Call-to-action.tsx/call-to-action';
import QuoteBlock from '../shared/QuoteBlock/QuoteBlock';
import { BreadcrumbWithCustomSeparator } from '../shared/breadcrumbs';
import styles from './CatalogIntro.module.css';

export default function CatalogIntro() {
  return (
    <section className={styles.sectionWrapper}>
      <div className={styles.breadcrumbsWrapper}>
        <BreadcrumbWithCustomSeparator variant="muted" currentPage="Каталог" />
      </div>

      <div className={styles.customContainer}>
        <div className="flex flex-col md:flex-row justify-between items-left md:items-end text-left">
          <div className="flex flex-col md:max-w-[50%]">
            <div className="flex flex-col mb-[31px] md:mb-[14px]">
              <h1 className="text-[32px] md:text-[45px] text-headers pt-[19px] md:pt-[29px] uppercase">
                стихи на юбилей
                <br />
                <span className="font-bold">на заказ</span>
              </h1>
              <hr className="w-[40px] md:w-[50px] h-[4px] bg-main rounded-sm mt-[10px] md:mt-[16px] hidden md:block" />
              <p className="text-headers font-harmonia text-[18px] hidden md:block mt-[37px]">
                Получите начало стиха в течение суток:
              </p>
            </div>
            <div className="hidden md:block">
              <CallToAction variant="secondary" showConsent={false} />
            </div>
          </div>
          <QuoteBlock />
          <div className="block md:hidden mt-4">
            <p className="text-headers text-[18px] hidden md:block mt-[37px]">
              Получите начало стиха в течении суток:
            </p>
            <CallToAction
              shadow={false}
              variant="secondary"
              showConsent={true}
              consentBreak={false}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
