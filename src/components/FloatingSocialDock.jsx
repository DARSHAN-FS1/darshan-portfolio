import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

const FloatingSocialDock = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 2.5, duration: 0.8 }}
      className="hidden lg:flex fixed left-8 bottom-0 flex-col items-center gap-6 z-40"
    >
      <a href="https://github.com/DARSHAN-FS1" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white hover:-translate-y-1 transition-all">
        <Github size={20} />
      </a>
      <a href="https://www.linkedin.com/in/darshan-chandankhede-592439313/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-neonBlue hover:-translate-y-1 transition-all">
        <Linkedin size={20} />
      </a>
      <a href="mailto:darshanchandankhede1@gmail.com" className="text-gray-400 hover:text-neonPurple hover:-translate-y-1 transition-all">
        <Mail size={20} />
      </a>
      {/* Vertical Line */}
      <div className="w-[1px] h-24 bg-gradient-to-b from-white/20 to-transparent"></div>
    </motion.div>
  );
};

export default FloatingSocialDock;
