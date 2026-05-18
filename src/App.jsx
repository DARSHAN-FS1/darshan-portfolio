import React from 'react';
import { ReactLenis } from '@studio-freight/react-lenis';

import LoadingScreen from './components/ui/LoadingScreen';
import CustomCursor from './components/ui/CustomCursor';
import Navbar from './components/Navbar';
import ParticlesBackground from './components/ui/ParticlesBackground';

import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import ExtraCurricular from './components/ExtraCurricular';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <ReactLenis root options={{ lerp: 0.05, smoothWheel: true }}>
      <div className="relative min-h-screen bg-dark text-white font-sans selection:bg-neonBlue selection:text-dark">
        <LoadingScreen />
        <CustomCursor />
        <Navbar />
        <ParticlesBackground />
        
        {/* Animated Background Gradients */}
        <div className="fixed inset-0 z-0 opacity-20 pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-neonPurple rounded-full mix-blend-screen filter blur-[128px] animate-blob"></div>
          <div className="absolute top-[20%] right-[-10%] w-96 h-96 bg-neonBlue rounded-full mix-blend-screen filter blur-[128px] animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-[-20%] left-[20%] w-96 h-96 bg-neonPurple rounded-full mix-blend-screen filter blur-[128px] animate-blob animation-delay-4000"></div>
        </div>
        
        {/* Main Content */}
        <main className="relative z-10 pt-20">
          <div id="home"><Hero /></div>
          <div id="about"><About /></div>
          <div id="skills"><Skills /></div>
          <div id="projects"><Projects /></div>
          <div id="experience"><Experience /></div>
          <div id="education"><Education /></div>
          <div id="extracurricular"><ExtraCurricular /></div>
          <div id="contact"><Contact /></div>
        </main>
        
        <Footer />
      </div>
    </ReactLenis>
  );
}

export default App;
