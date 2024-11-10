import React from 'react';
import Image from 'next/image';

interface PoemPlayerProps {
  isPlaying: boolean;
  progress: number;
  onPlayPause: () => void;
  onProgressChange: (value: number) => void;
}

export const PoemPlayer: React.FC<PoemPlayerProps> = ({
  isPlaying = false,
  progress = 0,
  onPlayPause,
  onProgressChange
}) => {
  return (
    <div className="flex items-center gap-4 pt-10">
      <button
        onClick={onPlayPause}
        className="flex items-center justify-center rounded-full px-4"
      >
        <Image
          src="/icons/poem-play.svg"
          alt={isPlaying ? "Pause" : "Play"}
          width={31}
          height={31}
          className={`${isPlaying ? 'opacity-0' : 'opacity-100'} transition-opacity absolute`}
        />
        <Image
          src="/icons/poem-pause.svg"
          alt={isPlaying ? "Pause" : "Play"}
          width={31}
          height={31}
          className={`${isPlaying ? 'opacity-100' : 'opacity-0'} transition-opacity absolute`}
        />
      </button>
      
      <div className="relative w-[311px] h-[6px] bg-white/40 rounded-full">
        <div
          className="absolute left-0 top-0 h-full bg-white rounded-full"
          style={{ width: `${progress}%` }}
        />
        <input
          type="range"
          min="0"
          max="100"
          value={progress}
          onChange={(e) => onProgressChange(Number(e.target.value))}
          className="absolute w-full h-full opacity-0 cursor-pointer"
          style={{
            WebkitAppearance: 'none',
            appearance: 'none'
          }}
        />
        <div
          className="absolute w-3 h-3 bg-white rounded-full top-1/2 -translate-y-1/2"
          style={{ left: `calc(${progress}% - 6px)` }}
        />
      </div>
    </div>
  );
};