import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Target, Activity } from 'lucide-react';

const startups = [
  {
    title: "RoutineX",
    icon: <Target size={28} />,
    desc: "AI-powered productivity and routine management platform focused on habit tracking, consistency, and self-improvement.",
    status: "In Development",
    color: "from-blue-500/20 to-cyan-500/20",
    border: "group-hover:border-cyan-400/50",
    glow: "group-hover:shadow-[0_0_30px_rgba(34,211,238,0.2)]"
  },
  {
    title: "FitVision AI",
    icon: <Activity size={28} />,
    desc: "AI-powered fitness and physique analysis platform focused on body transformation insights and smart fitness guidance.",
    status: "Concept Phase",
    color: "from-purple-500/20 to-fuchsia-500/20",
    border: "group-hover:border-fuchsia-400/50",
    glow: "group-hover:shadow-[0_0_30px_rgba(232,121,249,0.2)]"
  }
];

const StartupVision = () => {
  return (
    <section className="py-24 px-4 md:px-20 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-yellow-500/30 bg-yellow-500/10 text-yellow-500 mb-4">
            <Rocket size={16} />
            <span className="text-sm font-medium tracking-wider uppercase font-mono">Future Innovations</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">Startup Vision & <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">Innovations</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Developing cutting-edge platforms that leverage AI to solve real-world problems in productivity and healthcare.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {startups.map((startup, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`glass-card p-8 relative overflow-hidden group transition-all duration-500 ${startup.border} ${startup.glow}`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${startup.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex justify-between items-start mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-dark border border-white/10 flex items-center justify-center text-white group-hover:scale-110 transition-transform shadow-lg">
                    {startup.icon}
                  </div>
                  <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-gray-300">
                    {startup.status}
                  </span>
                </div>
                
                <h3 className="text-2xl font-display font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 transition-all">
                  {startup.title}
                </h3>
                
                <p className="text-gray-400 leading-relaxed">
                  {startup.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StartupVision;
