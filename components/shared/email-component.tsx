import { Input } from "../ui/input"
import Image from 'next/image'

export default function EmailComponent() {
  return (
    <div className="w-full pt-[24px]">
      <p className="text-h3 text-headers mb-[9px]">E-mail для отправки чека</p>
      <div className="relative">
        <Input 
          className="w-full h-[52px] pl-[40px]"
        />
        <div className="absolute left-[14px] top-1/2 -translate-y-1/2 pointer-events-none">
          <Image
            src="/icons/email2.svg"
            alt="Email"
            width={20}
            height={20}
            className="opacity-60"
          />
        </div>
      </div>
    </div>
  )
}