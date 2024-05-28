import { useLoaderData } from "react-router-dom";

const ProductDetails = () => {
  const shoe = useLoaderData();
  const { title, brand, price, description, image_url } = shoe;
  return (
    <div>
      <h1 className="text-3xl text-center py-5 font-bold">{title}</h1>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={image_url} className="max-w-xl rounded-lg shadow-2xl" />
          <div className="text-center lg:text-start">
            <h1 className="text-2xl font-bold">Brand Name: {brand}</h1>
            <h1 className="text-2xl text-red-400 font-bold">Price: ${price}</h1>
            <p className="py-5">{description}</p>
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
