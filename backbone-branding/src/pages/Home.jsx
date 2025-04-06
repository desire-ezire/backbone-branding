import React from "react";
import { Link } from "react-router-dom";
import Card from "../components/Card";

const Home = () => {
    return (
      <>
        <div className="h-full overflow-hidden">
          <iframe 
            src="https://player.vimeo.com/video/822957118?muted=1&autoplay=1&loop=1&background=1&controls=0"
            className="w-426 h-240 object-cover"
          ></iframe>
        </div>
        <div className="text-8xl font-bold mt-20 space-y-7">
          <h1>DARING TO IMAGINE. ABLE TO</h1>
          <h1>MAKE </h1>
          <h1>IT REAL.</h1>
        </div>

        <p className="mt-7 text-[32px]">Our imagination is the force that allows us to dare to create unique brands or reimagine iconic ones. <br />
        We aim to elevate products through design, offering our clients bold solutions for their brands that challenge their industries and wow consumers around the world.</p>
        <h2 className="flex justify-end underline font-extrabold text-4xl"><Link to="/about">ABOUT US</Link></h2>

        <Card />

      </>
    )
  }

export default Home;