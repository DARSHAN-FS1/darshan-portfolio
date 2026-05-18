import React from 'react';

const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-dark/80 backdrop-blur-md pt-16 pb-8 px-4 md:px-20 relative z-10">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-display font-bold text-white mb-2">Darshan <span className="text-neonBlue">Chandankhede</span></h2>
          <p className="text-gray-400 text-sm font-mono">AI-Integrated Full Stack Developer & ML Engineer</p>
        </div>

      </div>
      
      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-white/5 flex flex-col justify-center items-center gap-4 text-xs text-gray-500 font-mono text-center">
        <p>&copy; {new Date().getFullYear()} Darshan Vilasrao Chandankhede. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
