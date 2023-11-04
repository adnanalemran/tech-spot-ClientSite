import {  useContext } from "react";
import { AuthContext } from "../components/provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user,loading } = useContext(AuthContext);
  const location  =useLocation();
if(loading){
    return (
        <div className="h-screen mx-auto w-full text-center">
          <h2 className="text-xl pt-32 px-16">Loading...</h2>
          <progress className=" progress px-8 w-1/2"></progress>
        </div>
      );
}
  if (user) {
    return children;
  }

  return <Navigate state={location.pathname} to="/signin" />;
};

export default PrivateRoute;