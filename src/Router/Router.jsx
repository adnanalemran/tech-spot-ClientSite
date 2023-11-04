import { createBrowserRouter } from "react-router-dom";
import Home from "../components/HomePage/Home";
import TechTipsSection from "../components/HomePage/TechTipsSection";
import Page404 from "../components/Page404/Page404";
import AddProduct from "../components/Product/AddProduct";
import Cart from "../components/Product/Cart";
import CompanyProduct from "../components/Product/CompanyProduct";
import DisplayProducts from "../components/Product/DisplayProducts";
import ProductDetail from "../components/Product/ProductDetail";
import UpdateProduct from "../components/Product/UpdateProduct";
import Profile from "../components/Sign/Profile";
import SignIn from "../components/Sign/SignIn";
import SignUp from "../components/Sign/SignUp";
import Socket from "../components/Socket/Socket";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Socket />,
    errorElement: <Page404 />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/signin",
        element: <SignIn />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/techTips",
        element: <TechTipsSection />,
      },
      {
        path: "/addProduct",
        element: (
          <PrivateRoute>
            {" "}
            <AddProduct />
          </PrivateRoute>
        ),
      },
      {
        path: "/allProduct",
        element: <DisplayProducts />,
      },
      {
        path: "/product/:id",
        // element: <ProductDetail />,
        element: (
          <PrivateRoute>
            <ProductDetail />
          </PrivateRoute>
        ),
      },
      {
        path: "/product/update/:id",
        element: (
          <PrivateRoute>
            <UpdateProduct />
          </PrivateRoute>
        ),

        loader: ({ params }) =>
          fetch(
            `https://b8a10-brandshop-server-side-ten.vercel.app/product/update/${params.id}`
          ),
      },
      {
        path: "/cart",
        element: (
          <PrivateRoute>
            <Cart />
          </PrivateRoute>
        ),
      },
      {
        path: "/companyProductView/:brandName",
        element: <CompanyProduct />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
    ],
  },
]);

export default router;
