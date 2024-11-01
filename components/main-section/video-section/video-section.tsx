import VideoCarousel from "../../shared/video-carousel";
import { videos } from "@/constants/videos";
import { VideoMenu } from "./video-menu";

export default function VideoSection() {


  return (
    <section className="relative bg-gradient-to-r from-[#70B3FF] to-[#70DBFC] h-[698px] md:h-[957px] overflow-hidden items-center px-4 md:px-10 lg:px-20 xl:px-[135px] 2xl:px-[15%]">
      <div className="absolute inset-0 pointer-events-none w-full">

        <div className="block md:hidden absolute top-[-22px] sm:top-0 transform w-full">
          <img
            src="clouds/clouds-flip-mob.svg"
            alt="Mobile Clouds"
            className="w-full max-h-[148px] object-cover"
          />
        </div>

        <div className="hidden md:block absolute top-[-1px] w-full">
          <img
            src="clouds/clouds-flip.svg"
            alt="Desktop Clouds"
            className="w-full h-auto object-cover"
          />
        </div>

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

        <div className="hidden md:block absolute top-10 right-0">
          <img
            src="/alphabet2.svg"
            alt="Alphabet Background"
            className="w-full max-h-[845px]"
          />
        </div>

      </div>

      <div className="relative top-[101px] md:top-[97px]">
        <h2 className="uppercase text-[24px] md:text-h2 text-white">видео от клиентов</h2>
        <hr className="w-[40px] md:w-[50px] h-[5px] bg-white rounded-sm mt-[10px] md:mt-[22px]"/>
        <h3 className="text-h3 md:text-[18px] text-white mt-4 regular max-w-[584px]">
          Реальные живые эмоции клиентов. Узнайте больше о том, как презентуют готовые стихи на публику!
        </h3>


          <div className="mt-[30px]">
            <VideoMenu/>
          </div>


        <VideoCarousel videos={videos} />
      </div>
    </section>
  );
}