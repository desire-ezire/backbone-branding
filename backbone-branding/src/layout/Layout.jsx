import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";

const Layout = () => {
    return (
      <>
        <div className="px-14">
            <Navbar/>
            <div>
                <Outlet/>
            </div>
        </div>
        <div className='footer'>
            <Footer/> 
        </div>
      </>
    );
};

export default Layout;
