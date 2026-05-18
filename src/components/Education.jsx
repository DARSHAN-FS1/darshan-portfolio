import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award } from 'lucide-react';

const education = [
  {
    degree: "Bachelor's Degree in Artificial Intelligence & Machine Learning",
    institution: "ISB&M College of Engineering",
    date: "2023 - 2026",
    score: null
  },
  {
    degree: "Diploma in Computer Science Engineering",
    institution: "Government Polytechnic, Arvi",
    date: "2020 - 2023",
    score: "81.37%"
  }
];

const Education = () => {
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
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">Academic <span className="text-transparent bg-clip-text bg-gradient-to-r from-neonPurple to-neonBlue">Background</span></h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neonPurple to-transparent rounded-full mx-auto"></div>
        </motion.div>

        <div className="space-y-6">
          {education.map((edu, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-card p-8 relative overflow-hidden group hover:border-neonPurple/50"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-neonPurple/5 rounded-bl-full -z-10 transition-transform group-hover:scale-150 duration-500"></div>
              
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-2">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-neonPurple/10 flex items-center justify-center text-neonPurple border border-neonPurple/20 group-hover:bg-neonPurple group-hover:text-white transition-colors">
                    <GraduationCap size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-display font-bold text-white group-hover:text-neonPurple transition-colors">{edu.degree}</h3>
                    <h4 className="text-lg text-gray-300">{edu.institution}</h4>
                  </div>
                </div>
                <div className="flex flex-col items-end gap-2">
                  <div className="px-4 py-1.5 rounded-full glass border border-white/10 text-gray-300 text-sm font-mono whitespace-nowrap w-max group-hover:border-neonPurple/30">
                    {edu.date}
                  </div>
                  {edu.score && (
                    <div className="flex items-center gap-1 text-neonBlue text-sm font-bold bg-neonBlue/10 px-3 py-1 rounded-md">
                      <Award size={14} /> {edu.score}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
