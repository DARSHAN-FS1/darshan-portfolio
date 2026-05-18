import React from 'react';
import { motion } from 'framer-motion';
import { GitCommit, Star, GitPullRequest, Flame } from 'lucide-react';

const GitHubIntegration = () => {
  return (
    <section className="py-24 px-4 md:px-20 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Open Source <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">Contributions</span></h2>
          <div className="w-24 h-1 bg-white/20 rounded-full mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-6 mb-12">
          {[
            { icon: <GitCommit size={24} />, label: "Total Commits", value: "1,245+", color: "text-neonBlue" },
            { icon: <Star size={24} />, label: "Stars Earned", value: "48", color: "text-yellow-400" },
            { icon: <GitPullRequest size={24} />, label: "Pull Requests", value: "156", color: "text-neonPurple" },
            { icon: <Flame size={24} />, label: "Current Streak", value: "14 Days", color: "text-orange-500" }
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card text-center flex flex-col items-center justify-center p-6 gap-3"
            >
              <div className={`p-3 rounded-full bg-white/5 border border-white/10 ${stat.color}`}>
                {stat.icon}
              </div>
              <h3 className="text-3xl font-bold text-white">{stat.value}</h3>
              <p className="text-gray-400 text-sm uppercase tracking-wider">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Mock Contribution Graph */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass-card p-8 overflow-x-auto"
        >
          <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
            <GitCommit className="text-gray-400" /> Contribution Activity
          </h3>
          <div className="min-w-[800px]">
            <div className="flex gap-1">
              {Array.from({ length: 52 }).map((_, col) => (
                <div key={col} className="flex flex-col gap-1">
                  {Array.from({ length: 7 }).map((_, row) => {
                    const intensity = Math.random();
                    let bgClass = "bg-white/5";
                    if (intensity > 0.8) bgClass = "bg-neonBlue shadow-[0_0_5px_#00f0ff]";
                    else if (intensity > 0.6) bgClass = "bg-neonBlue/60";
                    else if (intensity > 0.4) bgClass = "bg-neonBlue/40";
                    else if (intensity > 0.2) bgClass = "bg-neonBlue/20";
                    
                    return (
                      <div 
                        key={`${col}-${row}`} 
                        className={`w-3 h-3 rounded-sm ${bgClass} transition-colors hover:border hover:border-white`}
                      ></div>
                    );
                  })}
                </div>
              ))}
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default GitHubIntegration;
