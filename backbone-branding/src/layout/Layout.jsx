import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";

const Layout = () => {
    return (
      <div>
        <div className="px-14">
            <Navbar />
            <div className="h-screen">
                <Outlet/>
            </div>
        </div>
        <div className='bg-black text-white mt-18 pt-18 px-14 pb-8'>
            <Footer/> 
        </div>
      </div>
    );
};

export default Layout;
