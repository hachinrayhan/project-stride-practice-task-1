import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const ProductManagement = ({ shoe }) => {
  const { id, title, brand, price, description, image_url } = shoe;

  const handleDelete = async () => {
    await fetch(`http://localhost:3000/shoes/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={image_url} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <h2 className="text-lg font-semibold">{brand}</h2>
        <h2 className="text-lg text-red-400 font-bold">${price}</h2>
        <p>{description}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">
            <Link to={`/products/${id}`}>See Details</Link>
          </button>
          <button className="btn btn-info">
            <Link to={`/dashboard/all-products/edit/${id}`}>Edit</Link>
          </button>
          <button onClick={handleDelete} className="btn btn-error">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductManagement;
