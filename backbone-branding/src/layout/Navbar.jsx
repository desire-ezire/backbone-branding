import { Link } from "react-router-dom";
import logo from '/src/assets/logo.png';
import React from "react";

const Navbar = () => {
  return (
    <nav className="pt-6 pb-8 bg-white">
      <div className="flex justify-between text-xl">
        <Link to="/">
            <img src={logo} alt="logo" className="w-27" />
        </Link>
        <div  className="flex justify-end space-x-20">
          <Link to="/works">WORKS</Link>
          <Link to="/services">SERVICES</Link>
          <Link to="/awards">AWARDS</Link>
          <Link to="/press">PRESS</Link>
          <Link to="/contact">CONTACT</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
