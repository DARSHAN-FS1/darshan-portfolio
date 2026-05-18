import React from 'react';
import { motion } from 'framer-motion';

const skills = [
  { name: 'JavaScript', level: 90, color: '#f7df1e', tooltip: 'Core language for building dynamic and interactive web applications.' },
  { name: 'Python', level: 85, color: '#3776ab', tooltip: 'Building AI workflows, automation systems, and backend logic.' },
  { name: 'React.js', level: 88, color: '#61dafb', tooltip: 'Building scalable responsive user interfaces using component-driven architecture.' },
  { name: 'FastAPI', level: 80, color: '#009688', tooltip: 'Developing high-performance AI-powered backend APIs.' },
  { name: 'Express.js', level: 85, color: '#ffffff', tooltip: 'Building robust Node.js backend services and RESTful APIs.' },
  { name: 'Flutter', level: 10, color: '#02569b', tooltip: 'Developing cross-platform mobile applications with expressive UI.' },
  { name: 'Spring Boot', level: 10, color: '#6db33f', tooltip: 'Creating enterprise-grade Java backend applications.' },
  { name: 'MySQL', level: 80, color: '#4479a1', tooltip: 'Designing and managing relational databases for scalable applications.' },
  { name: 'REST APIs', level: 90, color: '#ff6c37', tooltip: 'Designing scalable and secure RESTful architectures.' },
  { name: 'GitHub', level: 85, color: '#ffffff', tooltip: 'Version control, collaborative development, and CI/CD.' },
  { name: 'Postman', level: 85, color: '#ff6c37', tooltip: 'API testing, documentation, and endpoint debugging.' },
  { name: 'HTML', level: 95, color: '#e34f26', tooltip: 'Structuring web content with semantic markup.' },
  { name: 'CSS', level: 90, color: '#1572b6', tooltip: 'Styling modern layouts with Flexbox, Grid, and Tailwind CSS.' },
];

const SkillRing = ({ skill, index }) => {
  const radius = 30;
  const circumference = 2 * Math.PI * radius;
  
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      whileHover={{ y: -5, scale: 1.05 }}
      className="glass-card flex flex-col items-center justify-center p-6 relative group overflow-visible hover:bg-white/5 hover:border-white/20 transition-all duration-500 shadow-lg hover:shadow-[0_0_30px_rgba(255,255,255,0.05)]"
    >
      {/* Tooltip */}
      <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-52 p-3 bg-black/90 backdrop-blur-xl border border-white/10 rounded-xl text-xs text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-20 shadow-[0_10px_30px_rgba(0,0,0,0.8)] text-gray-300">
        {skill.tooltip}
        <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-black/90 border-b border-r border-white/10 rotate-45"></div>
      </div>

      <div className="relative w-24 h-24 flex items-center justify-center mb-4">
        {/* Background Ring */}
        <svg className="w-full h-full transform -rotate-90">
          <circle
            cx="48"
            cy="48"
            r={radius}
            fill="transparent"
            stroke="rgba(255,255,255,0.05)"
            strokeWidth="6"
          />
          {/* Animated Progress Ring */}
          <motion.circle
            cx="48"
            cy="48"
            r={radius}
            fill="transparent"
            stroke={skill.color}
            strokeWidth="6"
            strokeLinecap="round"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            whileInView={{ strokeDashoffset: circumference - (circumference * skill.level) / 100 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, delay: 0.5 + index * 0.1, ease: "easeOut" }}
            style={{ filter: `drop-shadow(0 0 10px ${skill.color})` }}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center text-sm font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-colors">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1.5 + index * 0.1 }}
          >
            {skill.level}%
          </motion.span>
        </div>
      </div>
      
      <span className="font-display font-medium text-gray-200 group-hover:text-white transition-colors text-center w-full truncate">
        {skill.name}
      </span>
      
      {/* Glow Effect */}
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-20 rounded-2xl transition-opacity duration-500 pointer-events-none blur-2xl z-0"
        style={{ backgroundColor: skill.color }}
      />
    </motion.div>
  );
};

const Skills = () => {
  return (
    <section className="py-24 px-4 md:px-20 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">Tech <span className="text-transparent bg-clip-text bg-gradient-to-r from-neonPurple to-neonBlue">Arsenal</span></h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neonPurple to-transparent rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
          {skills.map((skill, index) => (
            <SkillRing key={skill.name} skill={skill} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
