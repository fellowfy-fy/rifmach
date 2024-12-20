"use client"
import { Input } from '../../ui/input';
import { Textarea } from '../../ui/textarea';
import ContactsAccordion from '../contacts-accordion';
import Image from 'next/image';
import { CustomButton } from '../../ui/CustomButton/CustomButton';
import styles from './ContactsForm.module.css';
import { useState } from 'react';
import { SuccessModal } from '@/components/modals/Succsess/SuccessModal';

export default function ContactsForm() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmit = () => {
    // Здесь будет логика отправки формы
    setIsModalOpen(true);
  };

  return (
    <div
      id="contact-form"
      className="max-w-[1440px] m-auto px-4 md:px-10 lg:px-20 xl:px-[135px] 2xl:px-auto items-center pt-[30px] md:pt-[20px] font-harmonia"
    >
      <div className="flex flex-col lg:flex-row gap-[2%] mb-[20px] md:mb-[82px]">
        <div className="w-full flex flex-col gap-4">
          <div className="mb-8">
            <h1 className="text-[24px] md:text-h2 text-headers uppercase">
              напишите нам
            </h1>
            <hr className="w-[40px] md:w-[50px] h-[5px] bg-main rounded-sm mt-[10px] md:mt-[22px]" />
          </div>
          <div className="flex flex-col md:flex-row gap-4 text-h4 text-textsmain">
            <div>
              <p className="mb-2">Как вас зовут?</p>
              <Input
                placeholder="Иван"
                className="w-full lg:w-[280px] shadow-md placeholder:text-[#A4AFB5] focus:placeholder:opacity-0 transition-all"
              />
            </div>
            <div>
              <p className="mb-2">E-mail</p>
              <div className="relative w-full lg:w-[280px]">
                <Input
                  placeholder="mail@example.com"
                  className="shadow-md placeholder:text-[#A4AFB5] pl-10 focus:placeholder:opacity-0 transition-all"
                />
                <div className="absolute left-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                  <Image
                    src="/icons/email2.svg"
                    alt="email"
                    width={20}
                    height={20}
                    className="opacity-60"
                  />
                </div>
              </div>
            </div>
          </div>
          <div>
            <p className="text-h4 text-textsmain mb-2">Тема</p>
            <Textarea
              placeholder="Привет, Рифмачи!"
              className="w-full shadow-md lg:w-[577px] h-[140px] placeholder:text-[#A4AFB5] focus:placeholder:opacity-0 transition-all"
            />
          </div>
          <div className="flex flex-col md:flex-row items-center gap-4">
            <CustomButton 
              type="main" 
              customClass={styles.contactsFormButton}
              onClick={handleSubmit}
            >
              отправить сообщение
            </CustomButton>
            <p className="text-textsmain text-[10px] text-center md:text-left">
              Даю согласие на обработку
              <br />
              Персональных данных
            </p>
          </div>
        </div>
        <div className="mt-4 lg:mt-0 text-textsmain">
          <div className="flex flex-row justify-between mb-[10px] items-center text-center">
            <p className="text-[18px]">Наши реквизиты</p>
            <button className="flex flex-row text-main text-[12px] gap-2 hover:underline justify-center">
              <Image src="/icons/pdf.svg" alt="pdf" width={16} height={16} />
              СКАЧАТЬ В PDF
            </button>
          </div>
          <ContactsAccordion />
        </div>
      </div>
      <hr className="hidden md:block" />
      <SuccessModal
        isOpen={isModalOpen}
        onOpenChange={setIsModalOpen}
      />
    </div>
  );
}