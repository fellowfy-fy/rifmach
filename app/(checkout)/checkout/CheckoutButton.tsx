// components/checkout/checkout-button.tsx
"use client"
import { CustomButton } from '@/components/ui/CustomButton/CustomButton';
import { useRouter } from 'next/navigation';
import styles from "./Page.module.css"

export function CheckoutButton() {
  const router = useRouter();
  
  return (
    <CustomButton
      type="main" 
      onClick={() => router.push('/checkout/thank-you')}
      customClass={styles.checkoutButton}
    >
      ОПЛАТИТЬ ЗАКАЗ
    </CustomButton>
  );
}



