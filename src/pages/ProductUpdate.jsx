import { useLoaderData } from "react-router-dom";

const ProductUpdate = () => {
  const shoe = useLoaderData();
  console.log(shoe);
  const handleProductUpdate = async (e) => {
    e.preventDefault();
    const form = e.target;
    const id = form.id.value;
    const title = form.title.value;
    const brand = form.brand.value;
    const price = form.price.value;
    const description = form.description.value;
    const image_url = form.image_url.value;
    const productInfo = { id, title, brand, price, description, image_url };
  };

  return (
    <div className="card w-full max-w-xl mx-auto shadow-2xl">
      <h1 className="text-3xl text-center font-bold mt-8">Edit Product</h1>
      <form onSubmit={handleProductUpdate} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Id</span>
          </label>
          <input
            type="text"
            name="id"
            placeholder="Product's Id"
            className="input input-bordered"
            required
          />
        </div>
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
          />
        </div>

        <div className="form-control mt-6">
          <button className="btn btn-primary">Edit</button>
        </div>
      </form>
    </div>
  );
};

export default ProductUpdate;
