import { useLoaderData } from "react-router-dom";

const ProductDetails = () => {
  const shoe = useLoaderData();
  console.log(shoe);
  return (
    <div>
      <h2>this is details page</h2>
    </div>
  );
};

export default ProductDetails;
