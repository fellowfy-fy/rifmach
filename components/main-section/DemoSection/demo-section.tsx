import { DemoMenu } from "./demo-menu";
import { Task } from "./task";
import { PoemBlock } from "./poem-block/poem-block";
import styles from './DemoSection.module.css';

export default function DemoSection() {
  return (
    <section className={styles.sectionWrapper}>
      <div className="absolute inset-0 pointer-events-none flex justify-center">
        <img
          src="/clouds/clouds-flip-mob.svg"
          alt="Mobile Clouds"
          className="w-full h-auto object-cover block md:hidden absolute top-[-22px] sm:top-0"
        />
        <img
          src="/clouds/clouds-flip.svg"
          alt="Desktop Clouds"
          className="max-w-[1920px] w-full h-auto object-cover hidden md:block 3xl:hidden absolute top-[-1px]"
        />
        <img
          src="/clouds/clouds-wide-alt.svg"
          alt="Desktop Clouds"
          className="max-w-[1600px] w-full h-auto object-cover hidden 3xl:block absolute top-[-1px]"
        />
      </div>
      
      <div className={styles.customContainer}>
        <div className="relative top-[101px] md:top-[97px]">
          <h2 className={styles.title}>
            посмотрите несколько
            <br />
            <span className="font-bold">интересных примеров</span>
          </h2>
          <hr className={styles.divider} />
          <h3 className={styles.subtitle}>
            Вы достойны стихов, написанных по всем законам стихосложения: <span className="font-bold">качественные интересные рифмы, необычные образы, точный ритм</span>
          </h3>
          <div className="mt-[30px]">
            <DemoMenu />
          </div>
          <div className="mt-[36px] md:-[45px] flex flex-row gap-[80px]">
            <Task />
            <PoemBlock />
          </div>
        </div>
      </div>

      <div className="absolute inset-0 pointer-events-none w-full">
        <div className="hidden md:block absolute bottom-0 w-full">
          <img
            src="/arc.svg"
            alt="Desktop arch"
            className="w-full h-auto object-cover"
          />
        </div>
        <div className="block md:hidden absolute bottom-0 w-full">
          <img
            src="/arc-mob.svg"
            alt="Mobile arch"
            className="w-full h-auto object-cover"
          />
        </div>
        <div className="hidden md:block 3xl:hidden absolute top-10 right-0">
          <img
            src="/alphabet2.svg"
            alt="Alphabet Background"
            className="w-full max-h-[845px]"
          />
        </div>
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