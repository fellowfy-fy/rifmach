import Agreement from './components/agreement';
import Payment from './components/payment';
import styles from './FooterBottom.module.css';
export default function FooterBottom() {
  return (
    <div className={styles.footerBottomWrapper}>
      <Agreement />
      <Payment />
    </div>
  );
}
