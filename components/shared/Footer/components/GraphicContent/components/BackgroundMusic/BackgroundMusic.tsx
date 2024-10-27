'use client';
import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import styles from './BackgroundMusic.module.css';

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
        <Image
          src={
            isPlaying
              ? '/characters/footer-playing.svg'
              : '/characters/footer-start.svg'
          }
          alt={isPlaying ? 'Stop music' : 'Play music'}
          layout="fill"
          style={{ marginTop: '-60px' }}
        />
      </div>
    </div>
  );
};

export default BackgroundMusic;
