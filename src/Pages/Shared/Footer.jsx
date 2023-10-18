import { Link, NavLink } from "react-router-dom";
import { FaTwitter, FaYoutube, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <footer className="footer px-10 items-center p-4 bg-red-600 text-white">
        <aside className="items-center grid-flow-col">
          <NavLink to="/" className="text-3xl font-semibold">
          Techno & Electro
          </NavLink>
          <p className="text-md font-semibold">Copyright © 2023 - All right reserved</p>
        </aside>
        <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
          <Link to="https://www.twitter.com/" className="text-2xl">
            <FaTwitter></FaTwitter>
          </Link>
          <Link to="https://www.youtube.com/" className="text-2xl">
            <FaYoutube></FaYoutube>
          </Link>
          <Link to="https://www.facebook.com/" className="text-2xl">
            <FaFacebook></FaFacebook>
          </Link>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
