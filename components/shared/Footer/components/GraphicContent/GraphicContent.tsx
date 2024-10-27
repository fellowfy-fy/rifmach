import Image from 'next/image';
import BackgroundMusic from './components/BackgroundMusic/BackgroundMusic';
import styles from './GraphicContent.module.css';

export default function GraphicContent() {
  return (
    <div className={styles.graphicContent}>
      <Image src="/icons/logo.svg" width={138} height={44} alt="logo" />
      <BackgroundMusic />
    </div>
  );
}
