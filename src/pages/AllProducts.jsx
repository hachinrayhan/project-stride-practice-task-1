import { useEffect, useState } from "react";
import ProductManagement from "./ProductManagement";

const AllProducts = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/shoes")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  });

  const refetch = (id) => {
    setProducts(products.filter((product) => product._id !== id));
  };

  return (
    <div>
      <h1 className="text-3xl text-center font-bold py-5">
        All Products ({products.length})
      </h1>
      <div className="flex flex-wrap justify-center gap-4">
        {products.map((shoe) => (
          <ProductManagement key={shoe._id} shoe={shoe} refetch={refetch} />
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
