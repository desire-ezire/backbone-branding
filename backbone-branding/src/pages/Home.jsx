import React from "react";

const Home = () => {
    return (
      <div className="relative w-full min-h-screen" style={{ paddingTop: '56.25%' /* 16:9 Aspect Ratio */ }}>
          <iframe 
              src="https://player.vimeo.com/video/822957118?muted=1&autoplay=1&loop=1&background=1&controls=0"
              className="absolute top-0 left-0 w-full h-full"
          ></iframe>
      </div>
    )
  }

export default Home;