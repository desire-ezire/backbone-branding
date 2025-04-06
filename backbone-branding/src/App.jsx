import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import Layout from './layout/Layout.jsx';
import Home from './pages/Home.jsx';
import Works from './pages/Works.jsx';
import About from './pages/About.jsx';
import Services from './pages/Services.jsx';
import Awards from './pages/Awards.jsx';
import Press from './pages/Press.jsx';
import Contact from './pages/Contact.jsx';
import {motion} from 'framer-motion';
import './App.css';


function App() {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0
  });

  const [cursorVariant, setCursorVariant] = useState("default");

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };
    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      backgroundColor: "white",
      mixBlendMode: "difference"
    },
    text: {
      x: mousePosition.x - 75,
      y: mousePosition.y - 75,
      height: 150,
      width: 150,
      backgroundColor: "white",
      mixBlendMode: "difference"
    },
  };

  // const textEnter = () => setCursorVariant("text");
  // const textLeave = () => setCursorVariant("default");


  return (
    <Router>
        <motion.div
          className="cursor"
          variants={variants}
          animate={cursorVariant}
        />
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<Home />} />
          <Route path="/works" element={<Works/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/services" element={<Services />} />
          <Route path="/awards" element={<Awards />} />
          <Route path="/press" element={<Press />} />
          <Route path="/contact" element={<Contact />} />

        </Route>
      </Routes>
    </Router>
  );
}

export default App;
