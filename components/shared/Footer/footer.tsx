'use client';
import GraphicContent from './components/GraphicContent/GraphicContent';
import ServicesBlock from './components/ServicesBlock/ServicesBlock';
import OtherBlock from './components/OtherBlock/OtherBlock';
import CTABlock from './components/CTABlock/CTABlock';
import styles from './footer.module.css';
import FooterBottom from './components/FooterBottom/FooterBottom';
import { useEffect, useState } from 'react';
import BackgroundMusic from './components/BackgroundMusic/BackgroundMusic';

export default function Footer() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 767);
    };

    // Initial check
    checkIfMobile();

    // Add event listener
    window.addEventListener('resize', checkIfMobile);

    // Cleanup
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  return (
    <footer className={styles.footer}>
      {isMobile && <hr />}
      <div className={styles.footerWrapper}>
        <GraphicContent />
        {isMobile && <CTABlock isMobile={isMobile} />}
        {isMobile ? (
          <div className="flex gap-3 mx-auto items-start">
            <ServicesBlock />
            <OtherBlock />
          </div>
        ) : (
          <>
            <ServicesBlock />
            <OtherBlock />
          </>
        )}
        {!isMobile && <CTABlock isMobile={isMobile} />}
        {isMobile && <BackgroundMusic />}
      </div>
      <FooterBottom isMobile={isMobile} />
    </footer>
  );
}
