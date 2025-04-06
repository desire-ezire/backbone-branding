import { Link } from "react-router-dom";
import { useState } from 'react';
import logo from '/src/assets/logo.png';
import menu from '/src/assets/menu.png';
import { FiMenu,FiX } from 'react-icons/fi';

import React from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="pt-6 pb-8 bg-white">
      <div className="flex justify-between text-xl">
        <Link to="/">
            <img src={logo} alt="logo" className="w-27" />
        </Link>
        <div  className="hidden
                        lg:flex lg:justify-end lg:space-x-20">
          <Link to="/works">WORKS</Link>
          <Link to="/about">ABOUT US</Link>
          <Link to="/services">SERVICES</Link>
          <Link to="/awards">AWARDS</Link>
          <Link to="/press">PRESS</Link>
          <Link to="/contact">CONTACT</Link>
        </div>
        <div className="lg:hidden">
          <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu"> {isOpen ? <FiX /> : <img src={menu} className="w-8"alt="menu"/>}</button>

          {isOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-70 z-40 flex justify-center items-center">
              <div className="text-white text-2xl space-y-6 p-8 bg-transparent">
                <button
                  className="absolute top-4 right-4 text-4xl text-white"
                  onClick={() => setIsOpen(false)}
                  aria-label="Close Menu"
                >
                  <FiX />
                </button>
                <ul className="space-y-8">
                  <li><Link to="/works">WORKS</Link></li>
                  <li><Link to="/about">ABOUT US</Link></li>
                  <li><Link to="/services">SERVICES</Link></li>
                  <li><Link to="/awards">AWARDS</Link></li>
                  <li><Link to="/press">PRESS</Link></li>
                  <li><Link to="/contact">CONTACT</Link></li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
      <hr className="mt-5 text-gray-500"/>
    </nav>
  );
};

export default Navbar;
