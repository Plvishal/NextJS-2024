import { notFound } from 'next/navigation';

export default function ReviewDetails({ params }) {
  const random = 2;
  if (random != 1) {
    throw new Error('Something went wrong inside the reviews');
  }
  if (params.reviewid > 100) {
    notFound();
  }
  return (
    <>
      <h2>
        Revies {params.reviewid} for Product {params.productid}
      </h2>
    </>
  );
}
