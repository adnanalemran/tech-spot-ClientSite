import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded">
        <nav className="grid grid-flow-col gap-4">
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
        <Link to="/" className="  normal-case text-xl">
            <img
              className="w-32"
              src="https://i.ibb.co/xMCBgDd/logo.png"
              alt="TechSpot"
            />
          </Link>
        </nav>
        <aside>
          <p>Copyright © 2023 - All right reserved by TECH SPTO Industries Ltd</p>
        </aside>
      </footer>

      
    </div>
  );
};

export default Footer;
