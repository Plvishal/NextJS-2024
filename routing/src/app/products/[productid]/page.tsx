import { Metadata } from 'next';

type Props = {
  params: {
    productid: string;
  };
};

export const generateMetadata = ({ params }: Props): Metadata => {
  
  return {
    title: `Product ${params.productid}`,
  };
};
export default function ProductDetails({ params }: Props) {
  return (
    <>
      <h1>Details about products: {params.productid}</h1>
    </>
  );
}
