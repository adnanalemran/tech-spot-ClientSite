import { createBrowserRouter } from "react-router-dom";
import Socket from "../components/Socket/Socket";
import Page404 from "../components/Page404/Page404";
import Home from "../components/HomePage/Home";
import SignIn from "../components/Sign/SignIn";
import SignUp from "../components/Sign/SignUp";
import AddProduct from "../components/Product/AddProduct";
import TechTipsSection from "../components/HomePage/TechTipsSection";
import DisplayProducts from "../components/Product/DisplayProducts";
import ProductDetail from "../components/Product/ProductDetail";
import Cart from "../components/Product/Cart";
import UpdateProduct from "../components/Product/UpdateProduct";
import CompanyProduct from "../components/Product/CompanyProduct";
import Profile from "../components/Sign/Profile";
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
        element: <AddProduct />,
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
        element: <UpdateProduct />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/product/update/${params.id}`),
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
