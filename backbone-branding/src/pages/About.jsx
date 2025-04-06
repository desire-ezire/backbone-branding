import React from 'react';

function About({ setCursorVariant }) {
  return (
    <div
      onMouseEnter={() => setCursorVariant("pageVariant")}
      onMouseLeave={() => setCursorVariant("default")}
    >
      <h1
        onMouseEnter={() => setCursorVariant("text")}
        onMouseLeave={() => setCursorVariant("pageVariant")}
      >
        This is the About Page
      </h1>
    </div>
  );
}

export default About;
