'use client';
import { BreadcrumbWithCustomSeparator } from '../../shared/breadcrumbs';
import { OwlImage } from './components/OwlImage/OwlImage';
import styles from './ContactsIntro.module.css';
import contactsConfig from './ContactsIntro.utils';

export default function ContactsIntro() {
  const scrollToForm = () => {
    const formElement = document.getElementById('contact-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className={styles.contactsIntroSectionWrapper}>
      <div className={styles.breadcrumbsAbsoluteWrapper}>
        <BreadcrumbWithCustomSeparator
          variant="default"
          currentPage="Контакты"
        />
      </div>

      <div className="absolute mx-auto inset-0 pointer-events-none flex justify-center">
        <img
          src="/clouds/clouds-mob.svg"
          alt="Mobile Clouds"
          className="w-full h-auto object-cover block md:hidden absolute bottom-[-4%]"
        />
        <img
          src="/clouds/clouds.svg"
          alt="Desktop Clouds"
          className="max-w-[1440px] w-full h-auto object-cover hidden md:block absolute bottom-[-2px]"
        />
      </div>

      <div className={styles.contactsCustomContainer}>
        <div className="flex flex-col">
          <div className="flex flex-col md:flex-row">
            <div className="flex flex-col mb-0">
              <h1 className="text-[32px] md:text-h1 text-white uppercase">
                Контакты
                <br />
                <span className="font-bold">студии «Рифмач»</span>
              </h1>
              <hr className={styles.introHrStyle} />
              <div className={styles.gridItemsContainer}>
                {contactsConfig.map((contactItem, index) => {
                  return (
                    <div
                      key={contactItem.id}
                      className="flex flex-row gap-[12px] items-center"
                      onClick={index === 3 ? scrollToForm : undefined}
                    >
                      <img
                        src={contactItem.icon}
                        className="h-[15px] md:h-[35px]"
                      />
                      <div className="flex flex-col gap-[1px] text-white">
                        <p className={styles.contactLabelStyle}>
                          {contactItem.title}
                        </p>
                        <p className={contactItem.textClass}>
                          {contactItem.value}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
              <h4 className={styles.supportInfoBlock}>
                Заявки принимаются круглосуточно. <br />
                Поддержка работает с 10:00 до 22:00 по московскому времени.
              </h4>
            </div>
          </div>
        </div>
        <OwlImage />
      </div>
    </section>
  );
}
