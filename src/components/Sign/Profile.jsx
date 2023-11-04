import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

import { AuthContext } from "../provider/AuthProvider";

const showSuccessAlert = () => {
  Swal.fire({
    icon: "success",
    title: "Log out",
    text: "Successfully logged out",
  });
};

const showErrorAlert = (error) => {
  Swal.fire({
    icon: "error",
    title: "Error",
    text: error,
  });
};

const Profile = () => {
  const { user, logOut } = useContext(AuthContext);
  const [userdb, setUser] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userId = user.id;

        const response = await fetch(
          `https://b8a10-brandshop-server-side-ten.vercel.app/user/${userId}`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch user data");
        }

        const data = await response.json();
        setUser(data);
      } catch (error) {
        console.error("Error fetching user data: ", error);
        showErrorAlert(error.message);
      }
    };

    if (user.id) {
      fetchUserData();
    }
  }, [user]);

  const displayName = user.displayName || "user";
  const displayPhotoURL = user.photoURL;

  const handleSignOut = async () => {
    try {
      await logOut();
      showSuccessAlert();
      navigate(location?.state ? location.state : "/");
    } catch (error) {
      console.error(error);
      showErrorAlert(error.message);
    }
  };

  return (
    <>
      {user ? (
        <div className="p-8 mx-auto max-w-xl space-y-6">
          <div className="bg-[#3e63798c] shadow-xl rounded-lg p-4 space-y-4">
            <div className="flex flex-col items-center space-y-2">
              <img
                src={displayPhotoURL}
                alt="Avatar"
                className="w-32 h-32 rounded-full"
              />
              <h2 className="  text-2xl font-bold">Name: {displayName}</h2>
              <p className=" ">Email: {user.email}</p>
            </div>
            <div className="flex justify-center">
              <button onClick={handleSignOut} className="btn btn-primary">
                Sign Out
              </button>
            </div>
          </div>
          <div className="flex align-middle justify-center  gap-4">
            <p className="btn btn-secondary">
              <Link to="/allProduct">All Product</Link>
            </p>
            <p className="btn btn-secondary">
              <Link to="/cart">MY Cart</Link>
            </p>
          </div>
        </div>
      ) : (
        <div>
          <div className="card w-96 bg-base-100 mx-auto shadow-xl py-16">
            <div className="card-body items-center text-center">
              <h2 className="card-title text-4xl">User Not Logged In</h2>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Profile;
