/* eslint-disable react/prop-types */
import SingleProduct from "../SingleProduct";

const Products = ({ data: shoes }) => {
  return (
    <div>
      <h1 className="my-8 text-3xl font-bold text-center">Our Products</h1>
      <div className="flex flex-wrap justify-center gap-4">
        {Array.isArray(shoes) &&
          shoes
            .slice(0, 3)
            .map((shoe) => <SingleProduct key={shoe._id} shoe={shoe} />)}
      </div>
    </div>
  );
};

export default Products;
