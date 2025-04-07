import React, { useState, useEffect } from 'react';
import {motion} from 'framer-motion';

const Cursor = () => {
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
    
      const textEnter = () => setCursorVariant("text");
      const textLeave = () => setCursorVariant("default");
    
  return (
    <div>
        <motion.div
        className="fixed rounded-full top-0 left-0 bg-[#111] h-8 w-8 pointer-events-none"
        variants={variants}
        animate={cursorVariant}
      />
    </div>
  )
}

export default Cursor