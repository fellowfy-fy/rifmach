'use client';
import React, { useState } from 'react';
import { useSwipeable, SwipeEventData } from 'react-swipeable';
import VideoCard from '../ui/video-card';
import Image from 'next/image';
import VideoPlayer from '../main-section/VideoSection/video-player';
import styles from './video-carousel.module.css';
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
  const [isPlaying, setIsPlaying] = useState(false);
  const [videoUrl, setVideoUrl] = useState('');

  const nextSlide = () => {
    setCurrentIndex(prev => (prev + 1) % videos.length);
  };

  const prevSlide = () => {
    setCurrentIndex(prev => (prev - 1 + videos.length) % videos.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const getPrevIndex = () => (currentIndex - 1 + videos.length) % videos.length;
  const getNextIndex = () => (currentIndex + 1) % videos.length;

  const swipeHandlers = useSwipeable({
    onSwiped: (eventData: SwipeEventData) => {
      if (eventData.dir === 'Left') {
        nextSlide();
      } else if (eventData.dir === 'Right') {
        prevSlide();
      }
      eventData.event.preventDefault();
    },
    trackMouse: true,
    delta: 10,
  });

  const openVideoPlayer = (url: string) => {
    setIsPlaying(true);
    setVideoUrl(url);
  };

  const closeVideoPlayer = () => {
    setIsPlaying(false);
    setVideoUrl('');
  };

  return (
    <div className={styles.container} {...swipeHandlers}>
      {/* карусель */}
      <div className="relative h-[300px] md:h-[600px]">
        {/* предыдущий слайд */}
        <div className="hidden lg:block absolute left-0 top-[100px] z-10 transition-opacity duration-500 opacity-50 hover:opacity-100">
          <VideoCard
            {...videos[getPrevIndex()]}
            isActive={false}
            onClick={() => goToSlide(getPrevIndex())}
          />
        </div>
        {/* текущий слайд */}
        <div className="absolute left-1/2 -translate-x-1/2 z-20 transition-opacity duration-500 opacity-100 w-full md:w-auto">
          <VideoCard
            {...videos[currentIndex]}
            isActive={true}
            onClick={() => openVideoPlayer(videos[currentIndex].videoUrl)}
          />
        </div>
        {/* следующий слайд */}
        <div className="hidden lg:block absolute right-0 top-[100px] z-10 transition-opacity duration-500 opacity-50 hover:opacity-100">
          <VideoCard
            {...videos[getNextIndex()]}
            isActive={false}
            onClick={() => goToSlide(getNextIndex())}
          />
        </div>
      </div>

      {/* навигации */}
      <div className="hidden lg:block">
        <button
          onClick={prevSlide}
          className="absolute left-10 bottom-36 -translate-y-1/2 text-white transition-opacity hover:opacity-80"
          aria-label="Previous video"
        >
          <Image
            src="/icons/arrow-left-video.svg"
            alt="Arrow-left"
            width={55}
            height={5}
          />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-10 bottom-36 -translate-y-1/2 text-white transition-opacity hover:opacity-80"
          aria-label="Next video"
        >
          <Image
            src="/icons/arrow-right-video.svg"
            alt="Arrow-right"
            width={55}
            height={5}
          />
        </button>
      </div>

      {/* пагинация */}
      <div className="absolute bottom-4 md:bottom-16 left-1/2 -translate-x-1/2 flex justify-center gap-4 lg:gap-2">
        {videos.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-[10px] rounded-full transition-all duration-300 ${
              index === currentIndex
                ? 'w-[20px] bg-white'
                : 'w-[10px] bg-white/30'
            }`}
            aria-label={`Go to video ${index + 1}`}
          />
        ))}
      </div>

      {/* видеоплеер */}
      {isPlaying && (
        <VideoPlayer videoUrl={videoUrl} onClose={closeVideoPlayer} />
      )}
    </div>
  );
}
