import { createBrowserRouter } from "react-router-dom";
import Socket from "../components/Socket/Socket";
import Page404 from "../components/Page404/Page404";
import Home from "../components/HomePage/Home";
import SignIn from "../components/Sign/SignIn";
import SignUp from "../components/Sign/SignUp";
import AddProduct from "../components/Product/AddProduct";

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
        path: "/addProduct",
        element: <AddProduct />,
      },
    ],
  },
]);
export default router;
