import { useState } from "react";
import { Link } from "react-router-dom";
import ShowToast from "../components/ShowToast";

/* eslint-disable react/prop-types */
const ProductManagement = ({ shoe, refetch }) => {
  const { _id, title, brand, price, description, image_url } = shoe;
  const [showToast, setShowToast] = useState(false);

  const handleDelete = async () => {
    const token = localStorage.getItem("token");
    await fetch(`http://localhost:5000/shoes/${_id}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
    setShowToast(true);
    refetch(_id);
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
            <Link to={`/products/${_id}`}>See Details</Link>
          </button>
          <button className="btn btn-info">
            <Link to={`/dashboard/all-products/edit/${_id}`}>Edit</Link>
          </button>
          <button onClick={handleDelete} className="btn btn-error">
            Delete
          </button>
        </div>
      </div>
      <ShowToast
        showToast={showToast}
        setShowToast={setShowToast}
        msg={"Product Deleted Successfully"}
      />
    </div>
  );
};

export default ProductManagement;
