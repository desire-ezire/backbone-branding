import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";

const Layout = () => {
    return (
      <div>
        <div className="px-14">
            <Navbar />
            <div className="h-screen bg-amber-50">
                <Outlet/>
            </div>
            <div className="h-screen bg-amber-50">
                <Outlet/>
            </div>            <div className="h-screen bg-amber-50">
                <Outlet/>
            </div>            <div className="h-screen bg-amber-50">
                <Outlet/>
            </div>
        </div>

        <Footer/>
      </div>
    );
};

export default Layout;
