"use client";
import React, { useState } from 'react';
import { PoemCard } from '@/components/shared/PoemCard/PoemCard';
import { PoemPlayer } from '../../../shared/PoemCard/PoemPlayer';
import { NavigationModule } from './NavigationModule/NavigationModule';
import { POEMS } from '@/constants/Poems';

export const PoemBlock = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentPoemIndex, setCurrentPoemIndex] = useState(0);

  const poemKeys = Object.keys(POEMS).filter(key => key !== 'DEFAULT');
  const totalPoems = poemKeys.length;

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleProgressChange = (value: number) => {
    setProgress(value);
  };

  const handleNext = () => {
    setCurrentPoemIndex((prev) => (prev + 1) % totalPoems);
    setIsPlaying(false);
    setProgress(0);
  };

  const currentPoemKey = poemKeys[currentPoemIndex];
  const currentPoem = POEMS[currentPoemKey];
  const prevPoemKey = poemKeys[(currentPoemIndex - 1 + totalPoems) % totalPoems];
  const prevPoem = POEMS[prevPoemKey];
  const prevPrevPoemKey = poemKeys[(currentPoemIndex - 2 + totalPoems) % totalPoems];
  const prevPrevPoem = POEMS[prevPrevPoemKey];

  return (
    <div className="flex flex-col">
      <h2 className="text-[20px] font-bold mb-5 text-white/70 uppercase">
        Готовое стихотворение
      </h2>
      <div className="relative">
        {/* Background cards */}
        <div
          className="absolute -top-6 left-[7rem] transform rotate-[5.6deg] -z-10 hidden lg:block"
          style={{
            filter: 'blur(1px) brightness(0.97)',
          }}
        >
          <PoemCard title={prevPoem.title} text={prevPoem.text} isBackground />
        </div>
        <div
          className="absolute -top-12 left-[8rem] transform -rotate-[4.3deg] -z-20 hidden lg:block"
          style={{
            filter: 'blur(1px) brightness(0.9)',
          }}
        >
          <PoemCard title={prevPrevPoem.title} text={prevPrevPoem.text} isBackground />
        </div>
        {/* Main card */}
        <div className="relative z-0">
          <PoemCard title={currentPoem.title} text={currentPoem.text} />
          <PoemPlayer
            isPlaying={isPlaying}
            progress={progress}
            onPlayPause={handlePlayPause}
            onProgressChange={handleProgressChange}
          />
        </div>
        {/* Navigation */}
        <div className="absolute bottom-14 right-[-20rem] hidden lg:block">
          <NavigationModule
            currentStep={currentPoemIndex + 1}
            totalPoems={totalPoems}
            onNext={handleNext}
          />
        </div>
      </div>
    </div>
  );
};