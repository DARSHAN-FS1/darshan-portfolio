import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Brain, Terminal, Server } from 'lucide-react';

const About = () => {
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
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">About <span className="text-transparent bg-clip-text bg-gradient-to-r from-neonBlue to-neonPurple">Me</span></h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neonBlue to-transparent rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-300 space-y-6 text-lg leading-relaxed font-light"
          >
            <p>
              <strong className="text-white font-medium">AI & ML student</strong> with strong problem-solving skills and hands-on experience in building real-world applications.
            </p>
            <p>
              Skilled in frontend development, API design, and full-stack systems using <span className="text-neonBlue font-medium">React.js</span> and <span className="text-neonPurple font-medium">FastAPI</span>. Developed impactful projects including an AI-based medical system and scalable web platforms.
            </p>
            <p>
              Interested in solving real-world problems through efficient and clean code, bridging the gap between intelligent algorithms and user-centric design.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {[
              { icon: <Brain size={24} />, title: "AI / ML", desc: "Building intelligent systems & models", color: "text-neonBlue", bg: "bg-neonBlue/10" },
              { icon: <Code2 size={24} />, title: "Frontend Development", desc: "React, modern UI/UX", color: "text-neonPurple", bg: "bg-neonPurple/10" },
              { icon: <Server size={24} />, title: "Backend Engineering", desc: "FastAPI, Spring Boot, APIs", color: "text-green-400", bg: "bg-green-400/10" },
              { icon: <Terminal size={24} />, title: "Tools & APIs", desc: "Git, Postman, Databases", color: "text-orange-400", bg: "bg-orange-400/10" }
            ].map((card, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -5 }}
                className="glass-card flex flex-col items-center justify-center text-center gap-3 p-6 group border-white/5 hover:border-white/20"
              >
                <div className={`w-12 h-12 rounded-full ${card.bg} flex items-center justify-center ${card.color} mb-2 group-hover:scale-110 transition-transform`}>
                  {card.icon}
                </div>
                <h3 className="font-semibold text-white font-display">{card.title}</h3>
                <p className="text-xs text-gray-400">{card.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
