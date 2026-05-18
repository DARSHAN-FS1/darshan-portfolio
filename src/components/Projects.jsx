import React, { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, X, FileText } from 'lucide-react';
import MagneticButton from './ui/MagneticButton';

const projects = [
  {
    title: "Hybrid Deep Learning Model for ASD Detection",
    tech: ["Python", "FastAPI", "React.js", "SQL"],
    desc: "Engineered an AI-based system to detect Autism Spectrum Disorder using MRI data with real-time prediction workflow.",
    github: "https://github.com/VinayMarabe/Autism-Spectrum-Disorder-ASD-detection-systems/tree/Darshan",
    color: "from-blue-500/20 to-purple-500/20",
    border: "group-hover:border-blue-500/50",
    sponsored: true,
    sponsorLetter: "/sponsor.jpeg"
  },
  {
    title: "HyperZone – Esports Tournament App",
    tech: ["Flutter", "Spring Boot"],
    desc: "Built a tournament platform with authentication, leaderboard, and live event management.",
    github: "https://github.com/DARSHAN-FS1/Hyperzone",
    color: "from-red-500/20 to-orange-500/20",
    border: "group-hover:border-red-500/50"
  },
  {
    title: "ShubhVivah – Wedding Vendor Platform",
    tech: ["React.js", "Flutter"],
    desc: "Developed vendor dashboard for managing bookings, payments, analytics, and profiles.",
    github: "https://github.com/ShubhvivahThynktech/Shubhvivah-Vendor-Application",
    color: "from-pink-500/20 to-rose-500/20",
    border: "group-hover:border-pink-500/50"
  },
  {
    title: "Gram Vikas Portal",
    tech: ["HTML", "CSS", "JavaScript", "SQL"],
    desc: "Developed awareness platform for government schemes in rural areas.",
    github: "#", // Placeholder as none was provided, but instructions say no fake stats. Will just render button if link is # or we can link to main profile.
    color: "from-green-500/20 to-emerald-500/20",
    border: "group-hover:border-green-500/50"
  }
];

const ProjectCard = ({ project, index, onClick }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -10 }}
      className={`glass-card relative overflow-hidden group h-full flex flex-col cursor-pointer transition-all duration-500 ${project.border}`}
      onClick={onClick}
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
      
      <div className="relative z-10 flex flex-col h-full pointer-events-none">
        <div className="flex justify-between items-start mb-3 gap-4">
          <h3 className="text-2xl font-display font-bold text-white group-hover:text-white transition-colors drop-shadow-md">{project.title}</h3>
          {project.sponsored && (
            <span className="shrink-0 px-3 py-1 bg-yellow-500/20 border border-yellow-500/50 text-yellow-400 text-[10px] uppercase tracking-wider font-bold rounded-full shadow-[0_0_15px_rgba(234,179,8,0.3)]">
              Sponsored
            </span>
          )}
        </div>
        <p className="text-gray-400 mb-6 flex-grow">{project.desc}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map(t => (
            <span key={t} className="px-3 py-1 text-xs rounded-full bg-white/5 border border-white/10 text-gray-300">
              {t}
            </span>
          ))}
        </div>
        
        <div className="flex flex-wrap gap-4 mt-auto pointer-events-auto">
          {project.github !== '#' && (
            <MagneticButton href={project.github} className="glass border border-white/10 px-4 py-2 !rounded-lg text-sm flex gap-2 items-center hover:border-white/30 hover:bg-white/5">
              View Code <Github size={16} />
            </MagneticButton>
          )}
          {project.sponsorLetter && (
            <MagneticButton href={project.sponsorLetter} className="bg-yellow-500/10 text-yellow-400 border border-yellow-500/30 px-4 py-2 !rounded-lg text-sm flex gap-2 items-center hover:bg-yellow-500/20 hover:border-yellow-500/50 transition-all">
              Sponsor Letter <FileText size={16} />
            </MagneticButton>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

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
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-neonBlue to-neonPurple">Projects</span></h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neonBlue to-transparent rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard 
              key={project.title} 
              project={project} 
              index={index} 
              onClick={() => setSelectedProject(project)} 
            />
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-dark/80 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 50 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="bg-gray-900 border border-white/10 rounded-2xl p-8 max-w-2xl w-full relative shadow-[0_0_50px_rgba(0,240,255,0.1)]"
              onClick={e => e.stopPropagation()}
            >
              <button 
                className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors bg-white/5 rounded-full p-2"
                onClick={() => setSelectedProject(null)}
              >
                <X size={20} />
              </button>
              
              <div className="flex items-start justify-between pr-8 mb-4 gap-4">
                <h3 className="text-3xl font-display font-bold text-white">{selectedProject.title}</h3>
                {selectedProject.sponsored && (
                  <span className="shrink-0 px-4 py-1 bg-yellow-500/20 border border-yellow-500/50 text-yellow-400 text-xs uppercase tracking-wider font-bold rounded-full shadow-[0_0_15px_rgba(234,179,8,0.3)] mt-2">
                    Sponsored
                  </span>
                )}
              </div>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {selectedProject.tech.map(t => (
                  <span key={t} className="px-3 py-1 text-xs rounded-full bg-neonBlue/10 border border-neonBlue/30 text-neonBlue">
                    {t}
                  </span>
                ))}
              </div>
              
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                {selectedProject.desc}
              </p>
              
              <div className="flex flex-wrap gap-4">
                {selectedProject.github !== '#' && (
                  <MagneticButton href={selectedProject.github} className="bg-white text-dark hover:bg-gray-200 px-6 py-3 !rounded-lg flex items-center gap-2 font-medium">
                    <Github size={20} /> View Source Code
                  </MagneticButton>
                )}
                {selectedProject.sponsorLetter && (
                  <MagneticButton href={selectedProject.sponsorLetter} className="bg-yellow-500/10 text-yellow-400 border border-yellow-500/50 hover:bg-yellow-500/20 px-6 py-3 !rounded-lg flex items-center gap-2 font-medium transition-colors">
                    <FileText size={20} /> View Sponsorship Letter
                  </MagneticButton>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
