import { Link } from "react-router-dom";

 

const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 bg-base-200 text-base-content">
  <aside>
   
  <Link to="/" className="  normal-case text-xl">
            <img
              src="https://www.samsung.com/etc.clientlibs/samsung/clientlibs/consumer/global/clientlib-common/resources/images/gnb-desktop-120x32.png"
              alt=""
            />
          </Link>
    <p>samsung Industries Ltd.<br/>Providing reliable tech since 1992</p>
  </aside> 
  <nav>
    <header className="footer-title">Services</header> 
    <a className="link link-hover">Branding</a> 
    <a className="link link-hover">Design</a> 
    <a className="link link-hover">Marketing</a> 
    <a className="link link-hover">Advertisement</a>
  </nav> 
  <nav>
    <header className="footer-title">Company</header> 
    <a className="link link-hover">About us</a> 
    <a className="link link-hover">Contact</a> 
    <a className="link link-hover">Jobs</a> 
    <a className="link link-hover">Press kit</a>
  </nav> 
  <nav>
    <header className="footer-title">Legal</header> 
    <a className="link link-hover">Terms of use</a> 
    <a className="link link-hover">Privacy policy</a> 
    <a className="link link-hover">Cookie policy</a>
  </nav>
</footer>
        </div>
    );
};

export default Footer;