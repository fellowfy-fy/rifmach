"use client";
import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import VideoCard from "../ui/video-card";

interface VideoSlide {
  videoUrl: string;
  thumbnailUrl: string;
  title: string;
  subtitle: string;
}

interface VideoCarouselProps {
  videos: VideoSlide[];
}

export default function VideoCarousel({ videos }: VideoCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % videos.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + videos.length) % videos.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const getPrevIndex = () => (currentIndex - 1 + videos.length) % videos.length;
  const getNextIndex = () => (currentIndex + 1) % videos.length;

  return (
    <div className="relative w-[1100px] mx-auto mt-16">
      {/* карусель */}
      <div className="relative h-[600px]">
        {/* предыдущий слайд */}
        <div className="absolute left-0 top-[100px] z-10">
          <VideoCard
            {...videos[getPrevIndex()]}
            isActive={false}
            onClick={() => goToSlide(getPrevIndex())}
          />
        </div>

        {/* текущий слайд */}
        <div className="absolute left-1/2 -translate-x-1/2 z-20">
          <VideoCard
            {...videos[currentIndex]}
            isActive={true}
            onClick={() => {/* приделать логику включения видео*/}}
          />
        </div>

        {/* следующий слайд */}
        <div className="absolute right-0 top-[100px] z-10">
          <VideoCard
            {...videos[getNextIndex()]}
            isActive={false}
            onClick={() => goToSlide(getNextIndex())}
          />
        </div>

        {/* навигации */}
        <button
          onClick={prevSlide}
          className="absolute left-0 bottom-10 -translate-y-1/2 text-white transition-opacity hover:opacity-80"
          aria-label="Previous video"
        >
          <ChevronLeft size={40} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-0 bottom-10 -translate-y-1/2 text-white transition-opacity hover:opacity-80"
          aria-label="Next video"
        >
          <ChevronRight size={40} />
        </button>

        {/* пагинация */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex justify-center gap-2">
          {videos.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-[10px] h-[10px] rounded-full transition-colors duration-300 
                ${index === currentIndex ? 'bg-white' : 'bg-white/50'}`}
              aria-label={`Go to video ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}