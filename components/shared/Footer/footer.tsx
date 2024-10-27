import GraphicContent from './components/GraphicContent/GraphicContent';
import ServicesBlock from './components/ServicesBlock/ServicesBlock';
import OtherBlock from './components/OtherBlock/OtherBlock';
import CTABlock from './components/CTABlock/CTABlock';
import styles from './footer.module.css';
import FooterBottom from './components/FooterBottom/FooterBottom';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerWrapper}>
        <GraphicContent />
        <ServicesBlock />
        <OtherBlock />
        <CTABlock />
      </div>
      <hr />
      <FooterBottom />
    </footer>
  );
}
