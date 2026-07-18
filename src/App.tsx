import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/Navbar';
import ParticlesBackground from './components/ParticlesBackground';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Research from './components/sections/Research';
import SiteVisits from './components/sections/SiteVisits';
import Certificates from './components/sections/Certificates';
import CVSection from './components/sections/CVSection';
import Contact from './components/sections/Contact';
import Footer from './components/Footer';
import Loader from './components/Loader';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="bg-background min-h-screen text-slate-800 dark:text-slate-200 selection:bg-accent/30 selection:text-white relative">
      <AnimatePresence mode="wait">
        {isLoading ? (
          <Loader key="loader" onLoadingComplete={() => setIsLoading(false)} />
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <ParticlesBackground />
            <div className="relative z-10">
              <Navbar />
              <main>
                <Hero />
                <About />
                <Skills />
                <Projects />
                <Research />
                <SiteVisits />
                <Certificates />
                <CVSection />
                <Contact />
              </main>
              <Footer />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;


