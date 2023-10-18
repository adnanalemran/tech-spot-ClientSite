import { Link, NavLink } from "react-router-dom";

const Header = () => {
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
              <li>
                <a>Item 1</a>
              </li>

              <li>
                <a>Item 3</a>
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
              <span className="badge badge-sm indicator-item">0</span>
            </div>
          </label>
          </Link>
          <Link className="btn" to="/signin">
            Sign in
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
