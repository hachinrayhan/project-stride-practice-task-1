import { useLoaderData } from "react-router-dom";

const EditProfile = () => {
  const user = useLoaderData();
  const handleUpdateProfile = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const dob = form.dob.value;
    const address = form.address.value;
    const mobile = form.mobile.value;
    const userData = { name, dob, address, mobile };
    fetch(`http://localhost:5000/users/${user?._id}`, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(userData),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };
  return (
    <div className="max-w-xl mx-auto">
      <h1 className="text-center text-3xl font-bold mt-8">
        Update your profile
      </h1>
      <form onSubmit={handleUpdateProfile} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            type="text"
            name="name"
            defaultValue={user?.name}
            placeholder="Name"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            name="email"
            defaultValue={user?.email}
            readOnly
            placeholder="Email"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Date of Birth</span>
          </label>
          <input
            type="date"
            name="dob"
            placeholder="Date of Birth"
            defaultValue={user?.dob}
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Address</span>
          </label>
          <input
            type="text"
            name="address"
            placeholder="Address"
            defaultValue={user?.address}
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Mobile Number</span>
          </label>
          <input
            type="number"
            name="mobile"
            placeholder="Mobile Number"
            defaultValue={user?.mobile}
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control mt-6">
          <button type="submit" className="btn btn-primary">
            Update
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditProfile;
