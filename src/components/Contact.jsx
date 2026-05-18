import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Instagram } from 'lucide-react';
import MagneticButton from './ui/MagneticButton';

const Contact = () => {
  return (
    <section className="py-24 px-4 md:px-20 relative">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-neonBlue to-neonPurple">Connect</span></h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neonBlue to-transparent rounded-full mx-auto mb-6"></div>
          <p className="text-gray-400 max-w-lg mx-auto">Have a project in mind or want to discuss AI integration? I'm always open to new opportunities. Reach out on my social platforms below!</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-wrap justify-center gap-6 md:gap-10"
        >
          <MagneticButton href="https://github.com/DARSHAN-FS1" className="glass p-6 md:p-10 border border-white/10 rounded-3xl hover:border-white hover:bg-white/5 hover:shadow-[0_0_30px_rgba(255,255,255,0.1)] group">
            <div className="flex flex-col items-center gap-4 w-20">
              <Github size={42} className="text-gray-300 group-hover:text-white group-hover:scale-110 transition-all duration-300" />
              <span className="font-display font-bold text-gray-400 group-hover:text-white transition-colors">GitHub</span>
            </div>
          </MagneticButton>
          
          <MagneticButton href="https://www.linkedin.com/in/darshan-chandankhede-592439313/" className="glass p-6 md:p-10 border border-white/10 rounded-3xl hover:border-neonBlue hover:bg-neonBlue/5 hover:shadow-[0_0_30px_rgba(0,240,255,0.15)] group">
            <div className="flex flex-col items-center gap-4 w-20">
              <Linkedin size={42} className="text-gray-300 group-hover:text-neonBlue group-hover:scale-110 transition-all duration-300" />
              <span className="font-display font-bold text-gray-400 group-hover:text-neonBlue transition-colors">LinkedIn</span>
            </div>
          </MagneticButton>

          {/* NOTE: Update the href="#" with your actual Instagram profile link */}
          <MagneticButton href="#" className="glass p-6 md:p-10 border border-white/10 rounded-3xl hover:border-pink-500 hover:bg-pink-500/5 hover:shadow-[0_0_30px_rgba(236,72,153,0.15)] group">
            <div className="flex flex-col items-center gap-4 w-20">
              <Instagram size={42} className="text-gray-300 group-hover:text-pink-500 group-hover:scale-110 transition-all duration-300" />
              <span className="font-display font-bold text-gray-400 group-hover:text-pink-500 transition-colors">Instagram</span>
            </div>
          </MagneticButton>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
