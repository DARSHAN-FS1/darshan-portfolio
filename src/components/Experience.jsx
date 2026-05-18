import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';

const experiences = [
  {
    role: "Associate Software Engineer Intern",
    company: "ThynkTech India",
    date: "Sept 2025 – March 2026",
    bullets: [
      "Developed responsive UI using React.js",
      "Integrated frontend with backend APIs"
    ]
  },
  {
    role: "Python Developer Intern",
    company: "IBASE Technology",
    date: "Sept 2022 – Dec 2022",
    bullets: [
      "Developed backend logic and Python scripts",
      "Debugged applications and optimized performance"
    ]
  },
  {
    role: "Full Stack Android Developer",
    company: "Mountreach Solution Pvt Ltd",
    date: "Feb 2022 – Apr 2022",
    bullets: [
      "Developed Android applications with backend integration",
      "Implemented authentication and database connectivity"
    ]
  }
];

const Experience = () => {
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
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-neonBlue to-neonPurple">Experience</span></h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neonBlue to-transparent rounded-full mx-auto"></div>
        </motion.div>

        <div className="relative border-l-2 border-white/10 ml-4 md:ml-0 md:pl-0">
          {experiences.map((exp, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`relative pl-8 md:pl-0 mb-12 flex flex-col md:flex-row gap-8 ${
                index % 2 === 0 ? 'md:flex-row-reverse md:text-right' : ''
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-[-9px] md:left-1/2 md:-translate-x-1/2 top-0 w-4 h-4 rounded-full bg-neonBlue border-4 border-dark z-10 shadow-[0_0_10px_#00f0ff] hover:scale-150 transition-transform"></div>
              
              {/* Desktop Timeline Center Line Override */}
              <div className="hidden md:block absolute left-1/2 top-0 bottom-[-3rem] w-[2px] bg-white/10 -translate-x-1/2"></div>
              
              {/* Content */}
              <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:pl-0' : 'md:pl-12 md:pr-0'}`}>
                <div className="glass-card p-6 hover:border-neonBlue/50 hover:shadow-[0_0_30px_rgba(0,240,255,0.1)] transition-all group">
                  <div className={`flex items-center gap-2 mb-3 text-neonBlue font-mono text-sm ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                    <Calendar size={14} />
                    <span>{exp.date}</span>
                  </div>
                  <h3 className="text-xl font-display font-bold text-white group-hover:text-neonBlue transition-colors mb-1">{exp.role}</h3>
                  <div className={`flex items-center gap-2 mb-4 text-gray-400 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                    <Briefcase size={16} />
                    <h4 className="text-lg">{exp.company}</h4>
                  </div>
                  <ul className={`text-gray-400 space-y-2 text-sm ${index % 2 === 0 ? 'md:text-right' : 'text-left'}`}>
                    {exp.bullets.map((bullet, i) => (
                      <li key={i} className="flex gap-2 items-start justify-end md:justify-start flex-row-reverse md:flex-row">
                        {index % 2 === 0 ? (
                          <>
                            <span>{bullet}</span>
                            <span className="text-neonBlue mt-1 mt-0.5">•</span>
                          </>
                        ) : (
                          <>
                            <span className="text-neonBlue mt-1">•</span>
                            <span>{bullet}</span>
                          </>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div className="hidden md:block md:w-1/2"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
