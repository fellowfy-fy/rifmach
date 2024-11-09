import CallToAction from "../shared/Call-to-action.tsx/call-to-action";
import QuoteBlock from "../shared/quote-block";
import { BreadcrumbWithCustomSeparator } from "../shared/breadcrumbs";
import styles from './AuthorsIntro.module.css';

export default function AuthorsIntro() {
  return (
    <section className={styles.sectionWrapper}>
      <div className={styles.breadcrumbsWrapper}>
        <BreadcrumbWithCustomSeparator variant="muted" currentPage="Авторы"/>
      </div>
      
      <div className={styles.customContainer}>
        <div className="flex flex-col md:flex-row justify-between items-left md:items-center text-left">
          <div className="flex flex-col md:max-w-[50%]">
            <div className="flex flex-col mb-[31px] md:mb-[24px]">
              <h1 className="text-[32px] md:text-h1 text-headers pt-[19px] md:pt-[29px] uppercase">
                авторы
              </h1>
              <hr className="w-[40px] md:w-[50px] h-[4px] bg-main rounded-sm mt-[10px] md:mt-[16px] mb-[10px] md:mb-[27px] hidden md:block" />
              <p className="text-h3 md:text-[18px] text-textsmain regular max-w-[544px] hidden md:block">
                Подберём оптимального автора под <span className="font-bold">вашу задачу</span>
              </p>
              <p className="text-headers text-[18px] hidden md:block mt-[42px] font-normal">
                Получите начало стиха в течении суток:
              </p>
            </div>
            <div className="hidden md:block">
              <CallToAction
                variant="secondary"
                showConsent={false}
              />
            </div>
          </div>
          <QuoteBlock />
          <div className="block md:hidden mt-4">
            <p className="text-[18px] text-headers mt-4 mb-[13px] regular uppercase max-w-[318px]">
              Подберём оптимального автора под <span className="font-bold">вашу задачу</span>
            </p>
            <CallToAction
              shadow={false}
              variant="secondary"
              showConsent={false}
            />
          </div>
        </div>
      </div>
    </section>
  );
}