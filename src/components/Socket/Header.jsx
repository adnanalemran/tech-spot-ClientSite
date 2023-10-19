import { Link, NavLink } from "react-router-dom";
import React, { useState, useEffect, useContext } from "react";

import { AuthContext } from "../provider/AuthProvider";

const Header = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  const handleToggle = (e) => {
    if (e.target.checked) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.querySelector("html").setAttribute("data-theme", theme);
  }, [theme]);

  const { user, logOut } = useContext(AuthContext);
  const displayName = user?.displayName || "Person";
  const displayPhotoURL =
    user?.photoURL ||
    "https://i.ibb.co/cbLWFkM/male-user-avatar-icon-in-flat-design-style-person-signs-illustration-png.png";

  const handleSignOut = () => {
    logOut().then().catch();
  };

  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li className="">
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/addProduct">Add Product</NavLink>
              </li>
              <li>
                <NavLink to="/allProduct">All Product</NavLink>
              </li>
              <li>
                <NavLink to="/techTips">Tech Tips</NavLink>
              </li>
            </ul>
          </div>
          <div className="flex items-center justify-center">
            <Link
              to="/"
              className="flex items-center justify-center text-xl gap-2"
            >
              <img
                className="w-10 hidden lg:grid"
                src="https://i.ibb.co/b1P6gfX/logo.jpg"
                alt="TechSpot"
              />
              <p className="font-extrabold">TechSpot</p>
            </Link>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-2 font-bold">
            <li className="">
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/addProduct">Add Product</NavLink>
            </li>
            <li>
              <NavLink to="/allProduct">All Product</NavLink>
            </li>
            <li>
              <NavLink to="/techTips">Tech Tips</NavLink>
            </li>
         
          </ul>
        </div>

        <div className="navbar-end gap-2">
          <Link to="/cart">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <div className="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
            </label>
          </Link>


          <section className=" ">
        <label className="swap swap-rotate">
          <input type="checkbox" onChange={handleToggle} />

          <svg
            className="swap-on fill-current w-5 h-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
          </svg>

          <svg
            className="swap-off fill-current w-5 h-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
          </svg>
        </label>
      </section>


          <div className="flex-none p-4">
            {user ? (
              <>
                <div className=" flex   flex-row gap-4 items-center">
                  <Link
                    to="/profile"
                    className="flex justify-center items-center"
                  >
                    <label
                      tabIndex={0}
                      className="btn btn-ghost  btn-circle avatar"
                    >
                      <div className="w-10 rounded-full">
                        <img src={displayPhotoURL} />
                      </div>
                    </label>
                    <p className="hidden lg:grid">{displayName}</p>
                  </Link>

                  <Link
                    onClick={handleSignOut}
                    className="  rounded px-5 py-2   overflow-hidden group bg-indigo-500 relative hover:bg-gradient-to-r hover:from-indigo-500 hover:to-indigo-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-indigo-400 transition-all ease-out duration-300  "
                  >
                    <span className="relative">Log Out</span>
                  </Link>
                </div>
              </>
            ) : (
              <>
                <Link
                  to="/signin"
                  className="  rounded px-5 py-2.5 overflow-hidden group bg-indigo-500 relative hover:bg-gradient-to-r hover:from-indigo-500 hover:to-indigo-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-indigo-400 transition-all ease-out duration-300"
                >
                  <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                  <span className="relative">Log In</span>
                </Link>

              </>
            )}
          </div>
        </div>
      </div>
  
    </div>
  );
};

export default Header;
