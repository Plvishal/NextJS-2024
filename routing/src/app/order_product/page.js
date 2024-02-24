'use client';
import { useRouter } from 'next/navigation';
export default function OrderProduct() {
  const router = useRouter();
  const handleOrder = () => {
    console.log('Your order Placed successfully done');
    router.push('/');
  };
  return (
    <>
      <h1>Order product</h1>
      <button onClick={handleOrder}>Place Order</button>
    </>
  );
}
