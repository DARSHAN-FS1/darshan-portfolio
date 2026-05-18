import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck } from 'lucide-react';

const certifications = [
  {
    title: "MERN Stack Development",
    issuer: "Apna College"
  },
  {
    title: "Associate Software Engineer Internship",
    issuer: "ThynkTech India"
  }
];

const Certifications = () => {
  return (
    <section className="py-24 px-4 md:px-20 relative">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-neonBlue">Certifications</span></h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-transparent rounded-full mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-6 flex items-center gap-6 group hover:border-green-400/40"
            >
              <div className="w-16 h-16 shrink-0 rounded-full bg-green-400/10 border border-green-400/20 flex items-center justify-center text-green-400 group-hover:scale-110 group-hover:bg-green-400 group-hover:text-dark transition-all duration-300">
                <ShieldCheck size={32} />
              </div>
              <div>
                <h3 className="text-lg font-display font-bold text-white group-hover:text-green-400 transition-colors">{cert.title}</h3>
                <p className="text-gray-400 text-sm">{cert.issuer}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
