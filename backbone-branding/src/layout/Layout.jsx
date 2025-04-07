import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";
import Cursor from "../components/Cursor.jsx";

const Layout = () => {
    return (
      <>
        <div className="bg-white">
          <div className="px-14">
          <Cursor/>

              <Navbar/>
              <div>
                <Outlet/>
              </div>
          </div>
          <div className='footer'>
              <Footer/> 
          </div>
          </div>
      </>
    );
};

export default Layout;
