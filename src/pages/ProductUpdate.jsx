import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import ShowToast from "../components/ShowToast";

const ProductUpdate = () => {
  const [showToast, setShowToast] = useState(false);
  const shoe = useLoaderData();
  const [title, setTitle] = useState(shoe.title);
  const [brand, setBrand] = useState(shoe.brand);
  const [price, setPrice] = useState(shoe.price);
  const [description, setDescription] = useState(shoe.description);
  const [image_url, setImage_url] = useState(shoe.image_url);

  const handleProductUpdate = async (e) => {
    const token = localStorage.getItem("token");
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const brand = form.brand.value;
    const price = form.price.value;
    const description = form.description.value;
    const image_url = form.image_url.value;
    const productInfo = { title, brand, price, description, image_url };

    await fetch(`http://localhost:5000/shoes/${shoe._id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(productInfo),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
    setShowToast(true);
  };

  return (
    <div className="card w-full max-w-xl mx-auto shadow-2xl">
      <h1 className="text-3xl text-center font-bold mt-8">Edit Product</h1>
      <form onSubmit={handleProductUpdate} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Title</span>
          </label>
          <input
            type="text"
            name="title"
            placeholder="Product's Title"
            className="input input-bordered"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Brand</span>
          </label>
          <input
            type="text"
            name="brand"
            placeholder="Brand Name"
            className="input input-bordered"
            required
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Price</span>
          </label>
          <input
            type="text"
            name="price"
            placeholder="Price"
            className="input input-bordered"
            required
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Description</span>
          </label>
          <input
            type="text"
            name="description"
            placeholder="Description"
            className="input input-bordered"
            required
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Image URL</span>
          </label>
          <input
            type="text"
            name="image_url"
            placeholder="Image URL"
            className="input input-bordered"
            required
            value={image_url}
            onChange={(e) => setImage_url(e.target.value)}
          />
        </div>

        <div className="form-control mt-6">
          <button className="btn btn-primary">Edit</button>
        </div>
      </form>
      <ShowToast
        showToast={showToast}
        setShowToast={setShowToast}
        msg={"Product Updated Successfully"}
      />
    </div>
  );
};

export default ProductUpdate;
