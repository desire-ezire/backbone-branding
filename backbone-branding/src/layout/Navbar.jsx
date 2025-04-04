import { Link } from "react-router-dom";
import React, { useState, useEffect } from 'react';

const Navbar = () => {
    const [lastScrollY, setLastScrollY] = useState(0);
    const [showNavbar, setShowNavbar] = useState(true);
  
    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > lastScrollY) {
          // Scroll Down
          setShowNavbar(false);
        } else {
          // Scroll Up
          setShowNavbar(true);
        }
        setLastScrollY(window.scrollY <= 0 ? 0 : window.scrollY); // Prevent negative scroll
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, [lastScrollY]);
  
  return (
    <nav className="pt-6 pb-8 bg-white">
      <div className="flex justify-between text-xl">
        <Link to="/">
            <img src="./src/assets/logo.png" alt="logo" className="w-27" />
        </Link>
        <div  className="flex justify-end space-x-20">
          <Link to="/works">
            WORKS
          </Link>
          <Link to="/services">
            SERVICES
          </Link>
          <Link to="/awards">
            AWARDS
          </Link>
          <Link to="/press">
            PRESS
          </Link>
          <Link to="/contact">
            CONTACT
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
