import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

const MagneticButton = ({ children, className = '', onClick, href }) => {
  const ref = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e) => {
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX * 0.2, y: middleY * 0.2 });
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  const { x, y } = position;
  
  const innerContent = (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x, y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className={`relative inline-flex items-center justify-center ${
        className.includes('p-') ? '' : 'px-8 py-3'
      } overflow-hidden font-medium rounded-full group cursor-pointer ${className}`}
      onClick={onClick}
    >
      <span className="absolute inset-0 w-full h-full transition duration-300 ease-out opacity-0 group-hover:opacity-100 bg-gradient-to-r from-neonBlue/20 to-neonPurple/20 blur-sm"></span>
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </motion.div>
  );

  if (href) {
    const isExternal = href.startsWith('http') || href.endsWith('.pdf');
    return (
      <a 
        href={href} 
        className="inline-block" 
        target={isExternal ? "_blank" : "_self"} 
        rel={isExternal ? "noopener noreferrer" : undefined}
      >
        {innerContent}
      </a>
    );
  }
  
  return <div className="inline-block">{innerContent}</div>;
};

export default MagneticButton;
