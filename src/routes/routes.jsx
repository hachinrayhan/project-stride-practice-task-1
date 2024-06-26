import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import About from "../pages/About";
import Contacts from "../pages/Contacts";
import ErrorPage from "../pages/ErrorPage";
import DashboardLayout from "../layouts/DashboardLayout";
import Dashboard from "../pages/Dashboard";
import SignUp from "../pages/SignUp";
import Login from "../pages/Login";
import PrivateRoute from "./private/PrivateRoute";
import ProductDetails from "../pages/ProductDetails";
import AllProducts from "../pages/AllProducts";
import AddProduct from "../pages/AddProduct";
import ProductUpdate from "../pages/ProductUpdate";
import EditProfile from "../pages/EditProfile";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("http://localhost:5000/shoes"),
      },
      {
        path: "/products/:id",
        element: <ProductDetails />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/shoes/${params.id}`),
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contacts",
        element: <Contacts />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    // errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: (
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        ),
      },
      {
        path: "profile/edit/:id",
        element: (
          <PrivateRoute>
            <EditProfile />
          </PrivateRoute>
        ),
        loader: ({ params }) => {
          return fetch(`http://localhost:5000/users/${params.id}`).then((res) =>
            res.json()
          );
        },
      },
      {
        path: "all-products",
        element: (
          <PrivateRoute>
            <AllProducts />
          </PrivateRoute>
        ),
      },
      {
        path: "add-product",
        element: (
          <PrivateRoute>
            <AddProduct />
          </PrivateRoute>
        ),
      },
      {
        path: "all-products/edit/:id",
        element: (
          <PrivateRoute>
            <ProductUpdate />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/shoes/${params.id}`),
      },
    ],
  },
]);
