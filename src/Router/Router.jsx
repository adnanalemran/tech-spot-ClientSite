import { createBrowserRouter } from "react-router-dom";
import Socket from "../components/Socket/Socket";
import Page404 from "../components/Page404/Page404";
import Home from "../components/HomePage/Home";

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
    ],
  },
]);
export default router;
