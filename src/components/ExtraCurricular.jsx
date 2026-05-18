import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, Youtube } from 'lucide-react';

const activities = [
  {
    title: "Silent Saviors",
    icon: <Leaf size={28} />,
    desc: "A wildlife storytelling initiative focused on emotional short-form content about tigers, extinct species, wildlife conservation, and awareness storytelling.",
    tags: ["Tiger Stories", "Wildlife Awareness", "Extinct Species", "Nature Conservation"],
    color: "from-green-500/20 to-emerald-700/20",
    border: "group-hover:border-green-500/50",
    textHover: "group-hover:text-green-400"
  },
  {
    title: "Content Creation & Digital Storytelling",
    icon: <Youtube size={28} />,
    desc: "Built a community of 750+ subscribers by creating engaging YouTube Shorts focused on emotional storytelling and awareness-based content.",
    tags: ["YouTube Shorts", "Emotional Storytelling", "Video Editing", "Content Strategy"],
    color: "from-red-500/20 to-orange-600/20",
    border: "group-hover:border-red-500/50",
    textHover: "group-hover:text-red-400"
  }
];

const ExtraCurricular = () => {
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
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">Creative & Extra Curricular <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">Activities</span></h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-transparent rounded-full mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {activities.map((act, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`glass-card p-8 relative overflow-hidden group hover:-translate-y-2 transition-all duration-500 ${act.border}`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${act.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white group-hover:bg-white/10 transition-colors">
                    {act.icon}
                  </div>
                  <h3 className={`text-2xl font-display font-bold text-white transition-colors ${act.textHover}`}>{act.title}</h3>
                </div>
                
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {act.desc}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {act.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 text-xs rounded-full bg-black/40 border border-white/10 text-gray-300 group-hover:border-white/30 transition-colors">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExtraCurricular;
