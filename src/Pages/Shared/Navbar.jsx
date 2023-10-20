import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import { FaCartPlus } from 'react-icons/fa';


const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleSignOut = () => {
    logOut().then().catch();
  };

  const navLinks = (
    <>
      <li>
        <NavLink to="/" className='hover:bg-red-600 text-[16px] hover:text-white text-red-600'>Home</NavLink>
      </li>
      {
        user && <>
          <li>
          <NavLink to="/addproduct" className='hover:bg-red-600 text-[16px] hover:text-white'>Add Product</NavLink>
          </li>
        </>
      }
      <li>
        <NavLink to="/login" className='hover:bg-red-600 text-[16px] hover:text-white'>Login</NavLink>
      </li>
      <li>
        <NavLink to="/register" className='hover:bg-red-600 text-[16px] hover:text-white'>Register</NavLink>
      </li>
      <li>
        <NavLink to="/cart" className='hover:bg-red-600 text-[16px] hover:text-white'><FaCartPlus className="text-lg"></FaCartPlus>Cart</NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100 md:max-w-4xl lg:max-w-7xl md:mx-auto flex-col-reverse md:flex-row">
      <div className="navbar-start justify-center md:justify-start">
      <NavLink to='/' className='text-xl md:text-3xl font-bold text-red-600'>Techno & Electro</NavLink>
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
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box"
          >
            {navLinks}
          </ul>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-red-600 font-medium ">{navLinks}</ul>
      </div>
      <div className="navbar-end justify-center md:justify-start lg:justify-end">
        {user ? <>
            <img src={user.photoURL} className="w-8 mr-2 rounded-full" alt="" />
            <a className="text-lg text-red-600 font-medium">{user.providerData[0].displayName}</a>
            <button onClick={handleSignOut} className="btn ml-2 text-red-600 hover:bg-red-600 hover:text-white">
            Sign Out
          </button>
        </> : (
          <Link to="/login">
            <button className="btn text-red-600 hover:bg-red-600 hover:text-white">Login</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
