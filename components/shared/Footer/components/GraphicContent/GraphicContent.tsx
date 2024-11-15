import Image from 'next/image';
import BackgroundMusic from '../BackgroundMusic/BackgroundMusic';
import styles from './GraphicContent.module.css';
import { useEffect, useState } from 'react';

export default function GraphicContent() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Initial check
    checkIfMobile();

    // Add event listener
    window.addEventListener('resize', checkIfMobile);

    // Cleanup
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  return (
    <div className={styles.graphicContent}>
      <Image src="/icons/logo.svg" width={138} height={44} alt="logo" />
      {!isMobile && <BackgroundMusic />}
    </div>
  );
}
