import Agreement from './components/agreement';
import Payment from './components/payment';
import styles from './FooterBottom.module.css';
export default function FooterBottom({ isMobile }: { isMobile: boolean }) {
  return (
    <>
      {!isMobile && <hr className="w-full pb-3" />}
      <div className={styles.footerBottomWrapper}>
        {isMobile && <hr className="w-full pb-6" />}
        {isMobile ? (
          <>
            <Payment />
            <hr className="w-full" />
            <Agreement />
          </>
        ) : (
          <>
            <Agreement />
            <Payment />
          </>
        )}
      </div>
    </>
  );
}
