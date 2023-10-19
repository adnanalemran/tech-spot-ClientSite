import React, { useState, useEffect, useContext } from "react";
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

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userId = user.id;

        const response = await fetch(`http://localhost:5000/user/${userId}`);

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

  const displayName = user.displayName || userdb.displayName;
  const displayPhotoURL = user.photoURL || userdb.photoURL;

  const handleSignOut = async () => {
    try {
      await logOut();
      showSuccessAlert();
    } catch (error) {
      console.error(error);
      showErrorAlert(error.message);
    }
  };

  return (
    <>
      {user ? (
        <div className="p-8 mx-auto max-w-md space-y-6">
          <div className="bg-gray-800 shadow-xl rounded-lg p-4 space-y-4">
            <div className="flex flex-col items-center space-y-2">
              <img src={displayPhotoURL} alt="Avatar" className="w-32 h-32 rounded-full" />
              <h2 className=" text-gray-500 text-2xl font-bold">{displayName}</h2>
              <p className="text-gray-400">Email: {user.email}</p>
            </div>
            <div className="flex justify-center">
              <button onClick={handleSignOut} className="btn btn-primary">
                Sign Out
              </button>
            </div>
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
