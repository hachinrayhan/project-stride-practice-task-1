import { useEffect, useState } from "react";
import SingleProduct from "../components/SingleProduct";

const AllProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/shoes")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  });

  return (
    <div>
      <h1 className="text-3xl text-center font-bold py-5">
        All Products ({products.length})
      </h1>
      <div className="flex flex-wrap justify-center gap-4">
        {products.map((shoe) => (
          <SingleProduct key={shoe.id} shoe={shoe} />
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
