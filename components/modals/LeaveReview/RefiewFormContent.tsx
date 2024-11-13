import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { CustomButton } from '@/components/ui/CustomButton/CustomButton';
import styles from './LeaveReview.module.css';
import { Textarea } from '@/components/ui/textarea';

interface ReviewFormContentProps {
  onSubmit: () => void;
}

export const ReviewFormContent: React.FC<ReviewFormContentProps> = ({ onSubmit }) => {
  return (
    <div className='flex justify-left text-left flex-col max-w-[28rem] p-2 font-harmonia'>
      {/* Social Media Login Options */}
      <p className='text-headers text-[1rem]'>Авторизуйтесь с помощью социальной сети</p>
      <div className="flex gap-3 justify-left mt-4">
        {['vk', 'mailru', 'facebook', 'yandex', 'ok'].map((social, i) => (
          <Button key={i} variant="image" size="icon">
            <Image
              src={`/icons/${social}.svg`}
              alt={`${social} icon`}
              width={36}
              height={36}
            />
          </Button>
        ))}
      </div>

      {/* Feedback Tags */}
      <p className='text-headers text-[1rem] mt-4'>Что особенно понравилось?</p>
      <div className="flex flex-wrap gap-2 mt-4">
        {['Цена', 'Качество', 'Вежливость', 'Пунктуальность', 'Оригинальность', 'Скорость'].map((tag, i) => (
          <button key={i} className="px-4 py-1 bg-gray-200 rounded-lg text-gray-700">
            {tag}
          </button>
        ))}
      </div>

      {/* Comment Box */}
      <div className="mt-4">
        <p className='text-headers text-[1rem] mb-2'>Комментарий</p>
        <Textarea
            placeholder="Какие у вас впечатления от работы с нами?"
            className="w-full lg:w-[26.25rem] h-[5rem] placeholder:text-[#A4AFB5] focus:placeholder:opacity-0 transition-all"
        />
      </div>

      {/* Attach Files */}
      <div className='flex justify-left'>
        <Button variant="expand" size="icon" className='text-[1rem] flex flex-row gap-1 mt-5'>
            <Image 
                src="/icons/file.svg" 
                width={13} 
                height={15} 
                alt='Файл'
                className='mb-1'
            /> 
                Прикрепить файлы
            </Button>
      </div>

      {/* Submit Button and Anonymous Checkbox */}
      <div className="flex items-center flex-row mt-4 gap-14 mb-8">
        <CustomButton type='main' customClass={styles.button} onClick={onSubmit}>
          ОТПРАВИТЬ
        </CustomButton>

        <div className='flex items-center'>
            <input type="checkbox" className="mr-2" />
            <label className="text-headers text-[1rem] mt-1">
                Анонимно
            </label>
        </div>
      </div>
    </div>
  );
};
