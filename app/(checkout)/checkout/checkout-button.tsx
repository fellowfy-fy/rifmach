// components/checkout/checkout-button.tsx
"use client"
import { Button } from "@/components/ui/button"
import { useRouter } from 'next/navigation';

export function CheckoutButton() {
  const router = useRouter();
  
  return (
    <Button 
      variant="main" 
      onClick={() => router.push('/checkout/thank-you')}
      className="w-full md:w-[200px] h-50px"
    >
      ОПЛАТИТЬ ЗАКАЗ
    </Button>
  );
}



