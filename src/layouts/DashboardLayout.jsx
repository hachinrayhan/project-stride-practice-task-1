import { Link, Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* Page content here */}
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary rounded-full drawer-button lg:hidden"
        >
          ...
        </label>
        <Outlet />
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 w-60 min-h-full bg-base-200 text-base-content">
          {/* Sidebar content here */}
          <li>
            <Link to={"/dashboard"}>Dashboard</Link>
          </li>
          <li>
            <Link to={"/dashboard/all-products"}>All Products</Link>
          </li>
          <li>
            <Link to={"/dashboard/add-product"}>Add Product</Link>
          </li>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DashboardLayout;
