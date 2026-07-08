"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowDown, DraftingCompass, Cpu, Layers, FileText, Send } from "lucide-react";
import ThreeCanvas from "./ThreeCanvas";

interface HeroProps {
  theme: "light" | "dark";
  onScrollToSection: (id: string) => void;
}

export default function Hero({ theme, onScrollToSection }: HeroProps) {
  const [loading, setLoading] = useState(true);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [scrollProgress, setScrollProgress] = useState(0);

  // Mouse spotlight coordinates for the blueprint cursor overlay
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Track scroll depth to morph blueprint lines into realistic structures
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const val = Math.min(scrolled / 600, 1);
      setScrollProgress(val);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Set loading timer for the bridge assembly
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Immersive Bridge Assembly Loading Screen */}
      <AnimatePresence>
        {loading && (
          <motion.div
            key="loader"
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#0B192C] text-[#F1F5F9] select-none"
            exit={{ opacity: 0, y: -100 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            {/* Vector Truss Bridge Assembling */}
            <svg
              className="w-80 h-32 mb-6"
              viewBox="0 0 300 120"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            >
              {/* Lower Chord */}
              <motion.path
                d="M 10,90 L 290,90"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
              />
              {/* Upper Chord */}
              <motion.path
                d="M 40,30 L 260,30"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.2, delay: 0.4, ease: "easeInOut" }}
              />
              {/* Abutments / Piers */}
              <motion.path
                d="M 10,90 L 10,110 M 290,90 L 290,110 M 100,90 L 100,115 M 200,90 L 200,115"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.8, delay: 0.6, ease: "easeInOut" }}
              />
              {/* Warren Truss Diagonals */}
              <motion.path
                d="M 10,90 L 40,30 L 70,90 L 100,30 L 130,90 L 160,30 L 190,90 L 220,30 L 250,90 L 260,30 L 290,90"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2.0, delay: 0.8, ease: "easeInOut" }}
              />
              {/* Vertical Web Members */}
              <motion.path
                d="M 70,90 L 70,30 M 130,90 L 130,30 M 190,90 L 190,30 M 250,90 L 250,30"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.5, delay: 1.2, ease: "easeInOut" }}
              />
            </svg>
            <motion.h2 
              className="text-lg font-montserrat tracking-[0.3em] uppercase text-[#4CAF50]"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0.5, 1] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              Assembling Structure...
            </motion.h2>
            <p className="text-xs text-[#4E6E81] mt-2 font-mono">HASNI AHAMED • KDU Sri Lanka</p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Hero Section */}
      <section 
        id="home" 
        className="relative min-h-screen w-full flex items-center justify-center blueprint-grid overflow-hidden py-20"
      >
        {/* Interactive 3D Canvas Background */}
        <ThreeCanvas theme={theme} />

        {/* CAD Crosshair spotlight overlay */}
        <div 
          className="pointer-events-none fixed inset-0 z-0 opacity-10 hidden md:block"
          style={{
            background: `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, rgba(76, 175, 80, 0.15), transparent 80%)`
          }}
        />
        
        {/* CAD Blueprint cursor details */}
        <div 
          className="pointer-events-none absolute z-10 text-[9px] font-mono text-secondary opacity-40 hidden md:block"
          style={{ left: mousePos.x + 15, top: mousePos.y + 15 }}
        >
          X: {mousePos.x}px<br />
          Y: {mousePos.y}px<br />
          Z: {(scrollProgress * 100).toFixed(1)}%
        </div>

        {/* Blueprint Line Overlays that morph/fade based on scroll */}
        <div 
          className="absolute inset-0 pointer-events-none transition-opacity duration-300 z-0 select-none opacity-20"
          style={{ opacity: 1 - scrollProgress * 0.9 }}
        >
          {/* Animated Crane */}
          <div className="absolute top-10 right-10 w-48 h-32 border border-dashed border-secondary rounded-lg opacity-40 animate-pulse">
            <span className="absolute text-[8px] font-mono top-1 left-1">CAD_CRANE_ASSEMBLY_01</span>
            <div className="w-full h-[2px] bg-secondary absolute top-10 origin-left rotate-[-15deg] transition-all duration-[3000ms] animate-bounce" />
          </div>

          {/* Drones, coordinates and technical tags */}
          <div className="absolute bottom-16 left-10 text-[10px] font-mono text-secondary space-y-1">
            <div>[REF: KDU_CAMP_TRAVERSE_SECT]</div>
            <div>[DATUM: SRI_LANKA_MSL]</div>
            <div>[PROJ_MEMBER: HASNI_AHAMED]</div>
          </div>
        </div>

        {/* Content Container */}
        <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, delay: 0.2 }}
            className="mb-4"
          >
            <span className="px-4 py-1.5 rounded-full text-xs font-mono tracking-widest uppercase border border-secondary/20 bg-primary/5 text-primary dark:text-secondary dark:bg-white/5">
              Available for Internships & Projects
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.3 }}
            className="text-5xl md:text-8xl font-montserrat font-extrabold tracking-tight mb-4 text-primary dark:text-white"
          >
            HASNI AHAMED
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.0, delay: 0.5 }}
            className="text-lg md:text-2xl font-poppins font-medium tracking-wider mb-6 text-secondary dark:text-[#4E6E81]"
          >
            Civil Engineering Undergraduate
          </motion.p>

          {/* Vertical divider line */}
          <div className="w-[1px] h-12 bg-gradient-to-b from-secondary/50 to-transparent mb-6" />

          <motion.h3
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, delay: 0.6 }}
            className="max-w-3xl text-sm md:text-base font-mono text-foreground/80 dark:text-[#E0E1DD] mb-8 leading-relaxed"
          >
            Structural Engineering &bull; Sustainable Infrastructure &bull; Computational Mechanics &bull; Research Enthusiast
          </motion.h3>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.7 }}
            className="max-w-2xl text-base md:text-lg italic text-foreground/70 dark:text-[#E0E1DD]/80 mb-12"
          >
            &ldquo;Designing resilient infrastructure. Building sustainable communities. Engineering tomorrow.&rdquo;
          </motion.p>

          {/* Quick CTA Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, delay: 0.8 }}
            className="flex flex-wrap gap-4 justify-center items-center max-w-lg"
          >
            <button
              onClick={() => onScrollToSection("projects")}
              className="px-6 py-3 rounded-lg font-poppins text-xs font-semibold tracking-wider uppercase bg-primary hover:bg-primary/90 text-white dark:bg-[#4E6E81] dark:hover:bg-[#4E6E81]/80 shadow-md transition-all flex items-center gap-2 group cursor-pointer"
            >
              <DraftingCompass className="w-4 h-4 group-hover:rotate-45 transition-transform" />
              Explore Portfolio
            </button>
            <button
              onClick={() => onScrollToSection("research")}
              className="px-6 py-3 rounded-lg font-poppins text-xs font-semibold tracking-wider uppercase border border-primary/20 hover:border-primary/40 bg-white/40 dark:bg-white/5 dark:border-white/10 dark:hover:border-white/20 text-primary dark:text-white transition-all flex items-center gap-2 cursor-pointer"
            >
              <Cpu className="w-4 h-4" />
              View Projects
            </button>
            <button
              onClick={() => onScrollToSection("resume")}
              className="px-6 py-3 rounded-lg font-poppins text-xs font-semibold tracking-wider uppercase border border-primary/20 hover:border-primary/40 bg-white/40 dark:bg-white/5 dark:border-white/10 dark:hover:border-white/20 text-primary dark:text-white transition-all flex items-center gap-2 cursor-pointer"
            >
              <FileText className="w-4 h-4" />
              Download Resume
            </button>
            <button
              onClick={() => onScrollToSection("contact")}
              className="px-6 py-3 rounded-lg font-poppins text-xs font-semibold tracking-wider uppercase bg-accent hover:bg-accent/90 text-white shadow-md transition-all flex items-center gap-2 cursor-pointer"
            >
              <Send className="w-4 h-4" />
              Contact Me
            </button>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10 pointer-events-none select-none">
          <span className="text-[10px] font-mono tracking-widest text-secondary uppercase opacity-70">Scroll to Explore</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <ArrowDown className="w-4 h-4 text-accent" />
          </motion.div>
        </div>
      </section>
    </>
  );
}
