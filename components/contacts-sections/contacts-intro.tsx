export default function ContactsIntro() {
  return (
    <section className="relative bg-gradient-to-r from-[#70B3FF] to-[#70DBFC] px-4 md:px-10 lg:px-20 xl:px-32 2xl:px-[15%]  h-[600px] md:h-[600px] overflow-hidden items-center">

      <div className="absolute inset-0 pointer-events-none w-full">
        <div className="block md:hidden absolute bottom-[20px] w-full">
          <img
            src="/clouds/clouds-mob.svg"
            alt="Mobile Clouds"
            className="w-full h-auto object-cover"
          />
        </div>
        {/* белое пространство под облаком */}
        <div className="block md:hidden absolute bottom-[-20px] w-full h-[90px] bg-white"></div>

        <div className="hidden md:block absolute bottom-[-2px] w-full">
          <img
            src="/clouds/clouds.svg"
            alt="Desktop Clouds"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>

      <div className="relative z-10 flex md:flex-row flex-col">
        <div className="flex flex-col">
          <div className="flex flex-col md:flex-row">
            <div className="flex flex-col mb-[31px] md:mb-[24px]">
              <h1 className="text-[32px] md:text-h1 text-white pt-[33px] md:pt-[85px] uppercase mb-[26px]">
                Контакты<br />студии «Рифмач»
              </h1>
              <hr className="w-[40px] md:w-[50px] h-[4px] bg-white rounded-sm md:mb-[40px] hidden md:block" />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div className="flex flex-row gap-2 items-center">
                    <img src="/icons/phone2.svg" className="h-[15px] md:h-[35px]"/>
                    <div className="flex flex-col text-white">
                        <p className="uppercase text-[13px] hidden md:block">телефон для связи</p>
                        <p className="text-h3 md:text-[20px] md:bold">+7 999 333-89-60</p>
                    </div>
                </div>

                <div className="flex flex-row gap-2 items-center">
                    <img src="/icons/email.svg" className="h-[12px] md:h-[30px]"/>
                    <div className="flex flex-col text-white">
                        <p className="uppercase text-[13px] hidden md:block">электронная почта</p>
                        <p className="text-h3 md:text-[20px] md:bold underline">mail@rifmach.ru</p>
                    </div>
                </div>

                <div className="flex flex-row gap-2 items-center">
                    <img src="/icons/case.svg" className="h-[14px] md:h-[36px]"/>
                    <div className="flex flex-col text-white">
                        <p className="uppercase text-[13px] hidden md:block">Для сотрудничества</p>
                        <button className="text-h3 md:text-[20px] md:bold underline">Написать нам</button>
                    </div>
                </div>

                <div className="flex flex-row gap-2 items-center">
                    <img src="/icons/pen.svg" className="h-[15px] md:h-[37px]"/>
                    <div className="flex flex-col text-white">
                        <p className="uppercase text-[13px] hidden md:block">оставьте заявку</p>
                        <p className="text-h3 md:text-[20px] md:bold">+7 999 333-89-60</p>
                    </div>
                </div>
              </div>

              <h4 className="text-h4 text-white mt-4 regular max-w-[544px] hidden md:block">
                Заявки принимаются круглосуточно. Поддержка работает с 10:00 до 22:00 по московскому времени.
              </h4>
            </div>
          </div>
        </div>

        <img src="/characters/owl-globe.svg" className="absolute bottom-[-300px] md:bottom-[-70px] md:right-[10px] 2xl:right-[80px] max-h-[292px] md:max-h-[350px] lg:max-h-[400px] xl:max-h-[476px] 2xl:h-[600px]"/>
      </div>
    </section>
  );
}
