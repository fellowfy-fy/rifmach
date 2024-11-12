import VideoCarousel from "@/components/shared/video-carousel"
import { videos } from "@/constants/videos";

export default function AuthorVideos() {
    return(
        <div className="flex flex-col font-harmonia">
            <p className="font-bold text-headers text-[1.25rem] md:text-[1.5rem]">Видео</p>
            <VideoCarousel videos={videos} variant="author"/>
        </div>
    )
}