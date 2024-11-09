import { Button } from '@/components/ui/button';
import Image from 'next/image';
import styles from './CTABlock.module.css';
import { useState } from 'react';
import { Contactus } from '@/components/modals/Contactus/ContactusModal';

export default function CTABlock(props: { isMobile: boolean }) {
  const [isContactusModalOpen, setIsContactusModalOpen] = useState(false);

  return (
    <>
      <div className={styles.CTABlock}>
        {props.isMobile ? (
          <div className={styles.CTABlockMobile}>
            <h4 className="uppercase text-headers text-h3 mb-4">пообщаеся?</h4>
            <div className="flex flex-row items-center">
              <Image
                src="/icons/phone.svg"
                alt="Телефон"
                width={26}
                height={25}
              />
              <button className="text-[20px] text-[#25253F] font-semibold">
                +7 999 333-89-60
              </button>
              <div className="flex items-center gap-3 mx-auto md:mx-0">
                <button>
                  <Image
                    src="/icons/vk.svg"
                    alt="Telegram"
                    width={25}
                    height={25}
                  />
                </button>
                <button>
                  <Image
                    src="/icons/tg.svg"
                    alt="Telegram"
                    width={25}
                    height={25}
                  />
                </button>
                <button>
                  <Image
                    src="/icons/WhatsApp.svg"
                    alt="WhatsApp"
                    width={25}
                    height={25}
                  />
                </button>
              </div>
            </div>
            <div className="flex gap-6 items-center mt-3 pb-6">
              <Button
                variant="callback"
                className="uppercase bg-transparent items-center"
                onClick={() => setIsContactusModalOpen(true)}
              >
                ОБРАТНЫЙ ЗВОНОК
              </Button>
              <hr className="w-[202px] my-[15px] hidden md:block" />
              <a
                href="mailto:mail@rifmach.ru"
                className={'text-[#ED5640] underline text-h3 mx-auto md:mx-0'}
              >
                mail@rifmach.ru
              </a>
            </div>
            <hr />
          </div>
        ) : (
          <>
            <h4 className="uppercase text-headers text-h3 mb-4">пообщаеся?</h4>
            <div className="flex flex-col gap-4 text-left justify-start items-start">
              <div className="flex flex-row items-center">
                <Image
                  src="/icons/phone.svg"
                  alt="Телефон"
                  width={26}
                  height={25}
                />
                <button className="text-[20px] text-[#25253F] font-semibold">
                  +7 999 333-89-60
                </button>
              </div>
              <Button 
                variant="callback" 
                className="hidden md:block uppercase" 
                onClick={() => setIsContactusModalOpen(true)}
              >
                ОБРАТНЫЙ ЗВОНОК
              </Button>
              <hr className="w-[202px] my-[15px] hidden md:block" />
              <a href="mailto:mail@rifmach.ru" className={styles.email}>
                mail@rifmach.ru
              </a>
              <hr className="w-[202px] my-[15px] hidden md:block" />
              <div className="flex items-center gap-3 mx-auto md:mx-0">
                <button>
                  <Image
                    src="/icons/vk.svg"
                    alt="Telegram"
                    width={25}
                    height={25}
                  />
                </button>
                <button>
                  <Image
                    src="/icons/tg.svg"
                    alt="Telegram"
                    width={25}
                    height={25}
                  />
                </button>
                <button>
                  <Image
                    src="/icons/WhatsApp.svg"
                    alt="WhatsApp"
                    width={25}
                    height={25}
                  />
                </button>
              </div>
            </div>
          </>
        )}
      </div>
      <Contactus 
        isOpen={isContactusModalOpen} 
        onOpenChange={setIsContactusModalOpen}
      />
    </>
  );
}