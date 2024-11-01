// components/modals/foreign-card-modal.tsx
import { ModalContainer } from '@/components/ui/modal';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { DialogClose } from '@/components/ui/dialog';

export const ForeignCardModal = ({
  isOpen,
  onOpenChange
}: {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}) => {
  return (
    <ModalContainer
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      className="!p-0 !max-w-[609px] md:!h-[283px] !w-[380px] !h-[311px] md:!w-[609px] bg-gradient-to-b from-[#70B3FF] to-[#70DBFC] flex items-center justify-center"
    >
      <div className="bg-white rounded-[5px] w-[360px] h-[291px] md:w-[579px] md:h-[253px] relative">
        <DialogClose className="absolute right-[17px] top-[17px] hover:opacity-80 transition-opacity">
          <Image
            src="/icons/close.svg"
            alt="Закрыть"
            width={12}
            height={12}
          />
          <span className="sr-only">Закрыть</span>
        </DialogClose>

        <div className="flex flex-col items-center h-full px-[35px] md:px-[42px]">
          <h2 className="pt-[35px] text-center text-[18px] text-headers">
            ОПЛАТА ИНОСТРАННОЙ КАРТОЙ
          </h2>
          
          <div className="text-center pt-[12px] pb-[15px] w-[290px] md:w-[495px]">
            <p className="text-[16px] text-textsmain leading-5">
              Оплата происходит на грузинский банк в валюте Лари.
            </p>
            <p className="text-[16px] text-textsmain font-bold leading-5">
              Рубли будут автоматически конвертированы в Лари по курсу:
            </p>
          </div>

          <div className="w-[189px] h-[37px] bg-[#F9F9F9] rounded flex items-center justify-center gap-[1px] text-[16px] uppercase">
            <span>1</span>
            <Image
              src="/icons/rus-flag.svg"
              alt="RUB"
              width={24}
              height={16}
              className="object-contain"
            />
            <span>RUB = 0,029</span>
            <Image
              src="/icons/geo-flag.svg"
              alt="GEL"
              width={24}
              height={16}
              className="object-contain"
            />
            <span>GEL</span>
          </div>

          <Button
            variant="main"
            className="w-[340px] md:w-[199px] h-[44px] mt-6"
            onClick={() => onOpenChange(false)}
          >
            ПЕРЕЙТИ К ОПЛАТЕ
          </Button>
        </div>
      </div>
    </ModalContainer>
  );
};