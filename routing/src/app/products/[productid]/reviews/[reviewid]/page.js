export default function ReviewDetails({ params }) {
  return (
    <>
      <h2>
        Revies {params.reviewid} for Product {params.productid}
      </h2>
    </>
  );
}
