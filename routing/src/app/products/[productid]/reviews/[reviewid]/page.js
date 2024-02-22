import { notFound } from 'next/navigation';

export default function ReviewDetails({ params }) {
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
