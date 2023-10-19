import React, { useContext } from "react";
 
import { AuthContext } from "../provider/AuthProvider";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

// Function to display a Swal success alert
const showSuccessAlert = () => {
  Swal.fire({
    icon: "success",
    title: "Log out !",
    text: "success Log out",
  });
};

const showErrorAlert = (error) => {
  Swal.fire({
    icon: "error",
    title: "error",
    text: error,
  });
};

const Profile = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleSignOut = () => {
    logOut()
      .then((result) => {
        console.log(result);

        showSuccessAlert();
      })
      .catch((error) => {
        console.log(error);
        showErrorAlert(error);
      });
  };

  const displayName = user?.displayName || "Person";
  const displayPhotoURL =
    user?.photoURL ||
    "https://i.ibb.co/cbLWFkM/male-user-avatar-icon-in-flat-design-style-person-signs-illustration-png.png";

  return (
    <>
      {user ? (
        <div className="p-8 mx-auto max-w-md space-y-6">
  <div className="bg-gray-800 shadow-xl rounded-lg p-4 space-y-4">
    <div className="flex flex-col items-center space-y-2">
      <img src={displayPhotoURL} alt="Avatar" className="w-32 h-32 rounded-full" />
      <h2 className="text-2xl font-bold">{displayName}</h2>
      <p className="text-gray-400">Email: {user.email}</p>
    </div>
    <div className="flex justify-center">
      <button onClick={handleSignOut} className="btn btn-primary">Sign Out</button>
    </div>
  </div>
</div>

      ) : (
        <div>
          <div className="card w-96 bg-base-100 mx-auto shadow-xl py-16">
            <div className="card-body items-center text-center">
              <h2 className="card-title text-4xl">User Not Login </h2>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Profile;
