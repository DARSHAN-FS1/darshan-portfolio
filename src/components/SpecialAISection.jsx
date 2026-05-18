import React from 'react';
import { motion } from 'framer-motion';
import { Network, Activity, Cpu, Scan, CheckCircle2 } from 'lucide-react';

const SpecialAISection = () => {
  return (
    <section className="py-24 px-4 md:px-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-neonPurple/5 to-transparent pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-neonPurple/30 bg-neonPurple/10 text-neonPurple mb-4">
            <Scan size={16} />
            <span className="text-sm font-medium tracking-wider uppercase font-mono">Specialized AI Work</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">MRI-Based Autism Detection <span className="text-transparent bg-clip-text bg-gradient-to-r from-neonPurple to-neonBlue">AI System</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Building explainable AI systems for healthcare and medical imaging.</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* AI Workflow Visuals */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[580px] md:h-[450px] w-full rounded-3xl glass border border-neonPurple/20 overflow-hidden group shadow-[0_0_40px_rgba(188,19,254,0.1)]"
          >
            {/* Animated Grid Background */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:20px_20px] opacity-20"></div>
            
            <div className="absolute inset-0 flex flex-col justify-center items-center gap-6 md:gap-12 p-6 md:p-8">
              <div className="flex flex-col md:flex-row justify-between items-center w-full max-w-[200px] md:max-w-md relative gap-14 md:gap-0">
                {/* Connecting Lines */}
                <div className="absolute top-10 md:top-1/2 bottom-10 md:bottom-auto left-1/2 md:left-10 md:right-10 w-0.5 md:w-auto h-auto md:h-0.5 bg-gradient-to-b md:bg-gradient-to-r from-neonBlue via-white to-neonPurple -translate-x-1/2 md:translate-x-0 md:-translate-y-1/2 z-0">
                  <div className="w-full h-full bg-white opacity-50 animate-[pulse_1.5s_infinite]"></div>
                </div>
                
                {/* Nodes */}
                <motion.div whileHover={{ scale: 1.1, rotate: 90 }} className="relative z-10 w-20 h-20 rounded-full bg-dark border-2 border-neonBlue flex items-center justify-center shadow-[0_0_20px_rgba(0,240,255,0.4)]">
                  <Scan className="text-neonBlue" size={32} />
                  <span className="absolute left-24 md:left-1/2 md:-translate-x-1/2 top-1/2 md:top-auto md:-bottom-8 -translate-y-1/2 md:translate-y-0 text-xs font-mono text-neonBlue text-left md:text-center w-32 whitespace-nowrap">MRI Input</span>
                </motion.div>
                <motion.div whileHover={{ scale: 1.1 }} className="relative z-10 w-24 h-24 rounded-full bg-dark border-2 border-neonPurple flex items-center justify-center shadow-[0_0_25px_rgba(188,19,254,0.4)]">
                  <Network className="text-neonPurple" size={40} />
                  <span className="absolute left-28 md:left-1/2 md:-translate-x-1/2 top-1/2 md:top-auto md:-bottom-8 -translate-y-1/2 md:translate-y-0 text-xs font-mono text-neonPurple text-left md:text-center w-32 whitespace-nowrap">FastAPI Model</span>
                </motion.div>
                <motion.div whileHover={{ scale: 1.1 }} className="relative z-10 w-20 h-20 rounded-full bg-dark border-2 border-green-400 flex items-center justify-center shadow-[0_0_20px_rgba(74,222,128,0.4)]">
                  <Activity className="text-green-400" size={32} />
                  <span className="absolute left-24 md:left-1/2 md:-translate-x-1/2 top-1/2 md:top-auto md:-bottom-8 -translate-y-1/2 md:translate-y-0 text-xs font-mono text-green-400 text-left md:text-center w-32 whitespace-nowrap">Grad-CAM Output</span>
                </motion.div>
              </div>
              
              <div className="text-center space-y-3 mt-4 md:mt-8 glass-card border-white/10 bg-black/50 w-full max-w-sm hover:border-neonPurple/50 transition-colors">
                <h4 className="text-white font-semibold flex items-center justify-center gap-2 font-display">
                  <Cpu size={18} className="text-neonPurple" /> Explainable Inference
                </h4>
                <p className="text-sm text-gray-400">Processing complex neuroimaging data through deep convolutional networks to provide explainable healthcare results.</p>
              </div>
            </div>
          </motion.div>

          {/* Details */}
          <div className="grid gap-4">
            {[
              "MRI ASD Detection",
              "Grad-CAM Explainability",
              "FastAPI AI Backend",
              "Real-time AI Inference",
              "React Frontend Integration",
              "AI-assisted Healthcare Workflow"
            ].map((feature, i) => (
              <motion.div 
                key={feature}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass-card p-4 flex items-center gap-4 hover:border-neonPurple/40 hover:bg-white/5 transition-all group"
              >
                <div className="w-10 h-10 rounded-full bg-neonPurple/10 flex items-center justify-center text-neonPurple group-hover:bg-neonPurple group-hover:text-white transition-colors">
                  <CheckCircle2 size={20} />
                </div>
                <h3 className="text-lg font-medium text-gray-200 group-hover:text-white transition-colors">{feature}</h3>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default SpecialAISection;
