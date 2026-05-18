import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Linkedin, Menu, X, Eye } from 'lucide-react';
import MagneticButton from './ui/MagneticButton';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('Home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section
      const sections = navLinks.map(link => document.querySelector(link.href));
      const scrollPosition = window.scrollY + 200;
      
      sections.forEach((section) => {
        if (section) {
          const top = section.offsetTop;
          const height = section.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section.id.charAt(0).toUpperCase() + section.id.slice(1));
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, delay: 2 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? 'py-4' : 'py-6'
      }`}
    >
      <div className="flex justify-center w-full px-4 md:px-8">
        <div className={`flex items-center justify-center rounded-full transition-all duration-500 w-fit ${
          isScrolled ? 'glass px-6 py-3 shadow-[0_0_20px_rgba(0,0,0,0.5)]' : 'px-2'
        }`}>
          


          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-1 bg-white/5 rounded-full p-1 border border-white/10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => scrollTo(e, link.href)}
                className={`relative px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeSection.toLowerCase() === link.name.toLowerCase() 
                    ? 'text-white' 
                    : 'text-gray-400 hover:text-gray-200'
                }`}
              >
                {activeSection.toLowerCase() === link.name.toLowerCase() && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    className="absolute inset-0 bg-white/10 rounded-full"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{link.name}</span>
              </a>
            ))}
          </div>



          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: '100vh' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden fixed top-0 left-0 w-full h-screen bg-dark/95 backdrop-blur-xl z-40 flex flex-col items-center justify-center gap-8"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => scrollTo(e, link.href)}
                className="text-2xl font-display text-gray-300 hover:text-white transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="flex gap-6 mt-8">
              <a href="https://github.com/DARSHAN-FS1" className="text-gray-400 hover:text-white"><Github size={24} /></a>
              <a href="https://www.linkedin.com/in/darshan-chandankhede-592439313/" className="text-gray-400 hover:text-white"><Linkedin size={24} /></a>
            </div>
            <MagneticButton href="/Darshan%20Vilas%20Chandankhede%20%20-%20Resume.pdf" className="mt-4 bg-white/10 border border-white/20 rounded-full px-6 py-3">
              View Resume <Eye size={16} />
            </MagneticButton>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
