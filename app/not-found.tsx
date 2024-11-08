"use client";
import { CustomButton } from "@/components/ui/CustomButton/CustomButton";
import { useRouter } from "next/navigation";
import styles from "./NotFound.module.css"

export default function NotFound() {
  const router = useRouter();

  const handleRedirect = () => {
    router.push("/");
  };

  return (
    <div className="h-screen text-white bg-[#1C233E] flex flex-col lg:flex-row items-center gap-4 px-4 justify-center">
      <div className="lg:absolute top-40 left-[10%]">
        <h1 className="text-[48px] md:text-h1 2xl:text-[70px]">404</h1>
        <p className="text-[24px] md:text-[36px] 2xl:text-[48px] uppercase">
          Кажется, вы заблудились...
        </p>
        <hr className="w-10 md:w-[50px] h-[5px] bg-white rounded-sm mt-2.5 my:mt-5 hidden md:block"/>
        <p className="md:text-[18px] text-h3 xl:text-[24px] mt-5 my:mt-10 leading-6 xl:leading-8 font-light">
          Такой страницы не существует.<br/>
          Пожалуйста, вернитесь на главную.
        </p>
        <CustomButton 
          type="main" 
          customClass={styles.Button404}
          onClick={handleRedirect}
        >
          НА ГЛАВНУЮ
        </CustomButton>
      </div>
      <div className="lg:absolute lg:right-[20px] xl:right-[35px] 2xl:right-[60px]">
        <img 
          src="/404.svg" 
          className="w-[386.22px] md:w-[493.33px] lg:w-[550px] xl:w-[640.51px] 2xl:min-h-[720px]"
          alt="404 illustration" 
        />
      </div>
    </div>
  );
}