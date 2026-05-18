import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Eye, Github, Linkedin, ArrowRight, Mouse } from 'lucide-react';
import MagneticButton from './ui/MagneticButton';

const Hero = () => {
  const [text, setText] = useState('');
  const fullText = "AI-Integrated Full Stack Developer & ML Engineer";
  
  useEffect(() => {
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < fullText.length) {
        setText(fullText.substring(0, i + 1));
        i++;
      } else {
        clearInterval(typingInterval);
      }
    }, 50);
    return () => clearInterval(typingInterval);
  }, []);

  return (
    <section className="min-h-[90vh] flex items-center justify-center px-4 md:px-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
        
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.2 }} // Wait for loading screen
          className="flex flex-col gap-6"
        >
          <div className="inline-flex items-center gap-2 border border-neonBlue/30 bg-neonBlue/10 text-neonBlue px-4 py-1.5 rounded-full text-sm font-medium w-max backdrop-blur-sm">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neonBlue opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-neonBlue"></span>
            </span>
            Available for new opportunities
          </div>
          
          <h1 className="text-5xl md:text-7xl font-display font-bold leading-tight">
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-neonBlue to-neonPurple">Darshan</span>
            <br />
            <span className="text-3xl md:text-4xl lg:text-5xl h-36 sm:h-24 md:h-20 block mt-2 text-white">
              {text}<span className="animate-pulse text-neonBlue">|</span>
            </span>
          </h1>
          
          <p className="text-gray-400 text-lg max-w-lg leading-relaxed">
            Building scalable AI-powered applications, intelligent healthcare systems, and immersive digital experiences.
          </p>

          <div className="flex flex-wrap gap-4 mt-4">
            <MagneticButton href="#projects" className="bg-white text-dark hover:bg-gray-200">
              View Projects <ArrowRight size={18} />
            </MagneticButton>
            <MagneticButton href="/Darshan%20Vilas%20Chandankhede%20%20-%20Resume.pdf" className="glass border border-white/20 hover:bg-white/5">
              View Resume <Eye size={18} />
            </MagneticButton>
            
            <div className="flex gap-4 ml-0 md:ml-2">
              <MagneticButton href="https://github.com/DARSHAN-FS1" className="glass p-3 border border-white/10 rounded-full hover:border-neonPurple/50">
                <Github size={20} />
              </MagneticButton>
              <MagneticButton href="https://www.linkedin.com/in/darshan-chandankhede-592439313/" className="glass p-3 border border-white/10 rounded-full hover:border-neonBlue/50">
                <Linkedin size={20} />
              </MagneticButton>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 2.4 }}
          className="relative flex justify-center items-center mt-12 md:mt-0"
        >
          {/* Rotating Glow Rings */}
          <div className="absolute inset-0 rounded-full border-[1px] border-neonBlue/30 w-60 h-60 md:w-96 md:h-96 m-auto animate-[spin_12s_linear_infinite]"></div>
          <div className="absolute inset-0 rounded-full border-[1px] border-neonPurple/30 w-64 h-64 md:w-[26rem] md:h-[26rem] m-auto animate-[spin_18s_linear_infinite_reverse]"></div>
          <div className="absolute inset-0 rounded-full border border-dashed border-white/20 w-52 h-52 md:w-80 md:h-80 m-auto animate-[spin_24s_linear_infinite]"></div>
          
          {/* Profile Circle */}
          <motion.div 
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="w-44 h-44 md:w-72 md:h-72 rounded-full overflow-hidden border-2 border-white/10 relative z-10 glass flex items-center justify-center shadow-[0_0_50px_rgba(0,240,255,0.15)]"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-neonBlue/20 to-neonPurple/20 animate-pulse"></div>
            <span className="text-7xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-neonBlue to-white relative z-10">
              DC
            </span>
          </motion.div>
        </motion.div>
        
      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500"
      >
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <Mouse size={20} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
