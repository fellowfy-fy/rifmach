'use client';
import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import styles from './BackgroundMusic.module.css';
import OwlStart from './OwlStart';
import OwlPlaying from './OwlPlaying';

const BackgroundMusic: React.FC = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.4;
    }
  }, []);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleEnded = () => {
    setIsPlaying(false);
  };

  return (
    <div className={styles.bgmusicWrapper}>
      <audio ref={audioRef} onEnded={handleEnded}>
        <source
          src="https://dl.dropbox.com/s/c04n37178gndz4w/rifmach-gimn.mp3?dl=0"
          type="audio/mpeg"
        />
        Your browser does not support the audio element.
      </audio>
      <div className={styles.bgmusicButton} onClick={togglePlay}>
        {!isPlaying ? (
          <OwlStart className={styles.playOwlStyle} />
        ) : (
          <OwlPlaying className={styles.playingOwlStyle} />
        )}
      </div>
    </div>
  );
};

export default BackgroundMusic;
