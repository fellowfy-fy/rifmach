"use client";
import { CustomButton } from "@/components/ui/CustomButton/CustomButton";
import { useRouter } from "next/navigation";
import styles from "./NotFound.module.css";

export default function NotFound() {
  const router = useRouter();
  
  const handleRedirect = () => {
    router.push("/");
  };

  return (
    <div className="min-h-screen w-full text-white bg-[#1C233E]">
      <div className="max-w-[1440px] mx-auto h-screen relative flex flex-col lg:flex-row items-center gap-4 px-4 justify-center font-harmonia">
        <div className="lg:absolute top-48 left-[10%]">
          <h1 className="text-[48px] md:text-h1">404</h1>
          <p className="text-[24px] md:text-[36px] uppercase">
            Кажется, вы заблудились...
          </p>
          <hr className="w-10 md:w-[50px] h-[4px] bg-white rounded-sm mt-2.5 md:my-8 hidden md:block"/>
          <p className="md:text-[18px] text-h3 mt-5 my:mt-10 leading-[23px] md:leading-[26px] xl:leading-8 font-light max-w-[300px]">
            Такой страницы не существует.
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
        <div className="lg:absolute lg:right-[20px] xl:right-[35px]">
          <img
            src="/404.svg"
            className="hidden md:block md:w-[493.33px] lg:w-[550px] xl:w-[753.33px] xl:h-[593.33px]"
            alt="404 illustration"
          />
          <img
            src="/404mob.svg"
            className="block md:hidden w-[386.22px] h-[317px]"
            alt="404 illustration"
          />
        </div>
      </div>
    </div>
  );
}