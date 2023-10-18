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
          <Link to="/" className="  normal-case text-xl">
            <img
              src="https://www.samsung.com/etc.clientlibs/samsung/clientlibs/consumer/global/clientlib-common/resources/images/gnb-desktop-120x32.png"
              alt=""
            />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-2 font-bold">
            <li className="">
              <NavLink to="/shop">Shop</NavLink>
            </li>
            <li>
              <NavLink to="/mobile">Mobile</NavLink>
            </li>
            <li>
              <NavLink to="/tv&audio">Tv&Audio</NavLink>
            </li>
            <li>
              <NavLink to="/computing">Computing</NavLink>
            </li>
            <li>
              <NavLink to="/displays">Displays</NavLink>
            </li>
            <li>
              <NavLink to="/accessories">Accessories</NavLink>
            </li>
            <li>
              <NavLink to="/smartThings">SmartThings</NavLink>
            </li>
          </ul>
        </div>

        <div className="navbar-end gap-2">
          <Link className="btn">Sign in</Link>
          <Link className="btn">Sign up</Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
