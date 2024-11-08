import VideoCarousel from "../../shared/video-carousel";
import { videos } from "@/constants/videos";
import { VideoMenu } from "./video-menu";
import styles from './VideoSection.module.css';

export default function VideoSection() {
  return (
    <section className={styles.sectionWrapper}>
      <div className="absolute inset-0 pointer-events-none flex justify-center">
        {/* Мобильные облака */}
        <img
          src="clouds/clouds-flip-mob.svg"
          alt="Mobile Clouds"
          className="w-full h-auto object-cover block md:hidden absolute top-0 sm:top-0"
        />
        {/* Десктопные облака */}
        <img
          src="/clouds/clouds-flip.svg"
          alt="Desktop Clouds"
          className="max-w-[1920px] w-full h-auto object-cover hidden md:block 3xl:hidden absolute top-[-1px]"
        />
        {/* Широкие облака */}
        <img
          src="/clouds/clouds-wide-alt.svg"
          alt="Desktop Clouds"
          className="max-w-[3840px] w-full h-auto object-cover hidden 3xl:block absolute top-[-1px]"
        />
      </div>

      <div className={styles.customContainer}>
        <div className="relative top-[101px] md:top-[97px]">
          <h2 className={styles.title}>видео от клиентов</h2>
          <hr className={styles.divider}/>
          <h3 className={styles.subtitle}>
            Реальные живые эмоции клиентов. Узнайте больше о том, как презентуют готовые стихи на публику!
          </h3>
          <div className="mt-[30px]">
            <VideoMenu/>
          </div>
          <VideoCarousel videos={videos} />
        </div>
      </div>

      {/* Декоративные элементы */}
      <div className="absolute inset-0 pointer-events-none w-full">
        {/* Десктопная арка */}
        <div className="hidden md:block absolute bottom-0 w-full">
          <img
            src="/arc.svg"
            alt="Desktop arch"
            className="w-full h-auto object-cover"
          />
        </div>
        {/* Мобильная арка */}
        <div className="block md:hidden absolute bottom-0 w-full">
          <img
            src="/arc-mob.svg"
            alt="Mobile arch"
            className="w-full h-auto object-cover"
          />
        </div>
        {/* Алфавит для десктопа */}
        <div className="hidden md:block 3xl:hidden absolute top-10 right-0">
          <img
            src="/alphabet2.svg"
            alt="Alphabet Background"
            className="w-full max-h-[845px]"
          />
        </div>
        {/* Широкий алфавит */}
        <div className="hidden 3xl:block absolute top-10 right-20">
          <img
            src="/alphabet-wide.svg"
            alt="Alphabet Background"
            className="w-full h-[850px]"
          />
        </div>
      </div>
    </section>
  );
}