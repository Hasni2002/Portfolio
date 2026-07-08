"use client";

import React from "react";
import { Send } from "lucide-react";

interface FooterProps {
  onScrollToSection: (id: string) => void;
}

export default function Footer({ onScrollToSection }: FooterProps) {
  const handleScroll = (id: string) => {
    onScrollToSection(id);
  };

  return (
    <footer className="relative bg-[#0B192C] text-[#F1F5F9] pt-20 pb-8 overflow-hidden border-t border-card-border/10">
      
      {/* Animated City Skyline & Suspension Bridge Vector Overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none opacity-10 select-none z-0">
        <svg
          className="w-full h-full text-secondary"
          viewBox="0 0 1000 150"
          preserveAspectRatio="none"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          {/* Skyline Buildings */}
          <path d="M 0,150 L 0,120 L 25,120 L 25,150 L 40,150 L 40,80 L 75,80 L 75,150 L 90,150 L 90,100 L 130,100 L 130,150 L 150,150 L 150,60 L 190,60 L 190,150 L 210,150 L 210,110 L 240,110 L 240,150 L 270,150" />
          
          {/* Suspension Bridge Silhouette */}
          <path d="M 270,150 L 270,140 M 350,150 L 350,70 M 650,150 L 650,70 M 730,150 L 730,140" />
          {/* Main Cables */}
          <path d="M 270,140 Q 350,70 500,125 Q 650,70 730,140" />
          {/* Deck */}
          <path d="M 250,140 L 750,140" />
          {/* Hangers */}
          <path d="M 390,140 L 390,102 M 430,140 L 430,113 M 470,140 L 470,121 M 530,140 L 530,121 M 570,140 L 570,113 M 610,140 L 610,102" />

          {/* Right side skyline */}
          <path d="M 750,150 L 750,90 L 790,90 L 790,150 L 810,150 L 810,115 L 850,115 L 850,150 L 870,150 L 870,70 L 910,70 L 910,150 L 940,150 L 940,110 L 980,110 L 980,150 L 1000,150" />
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10 grid grid-cols-1 md:grid-cols-12 gap-12 items-start mb-16">
        
        {/* Left column: Branding & Quote */}
        <div className="md:col-span-5 space-y-4">
          <div 
            onClick={() => handleScroll("home")}
            className="flex items-center gap-2 cursor-pointer select-none w-fit"
          >
            <div className="w-8 h-8 rounded border border-secondary flex items-center justify-center font-montserrat font-extrabold text-sm text-white">
              HA
            </div>
            <span className="text-sm font-montserrat font-black tracking-wider text-white">HASNI AHAMED</span>
          </div>

          <p className="text-xs md:text-sm font-mono text-secondary max-w-sm italic">
            &ldquo;Engineering is the art of transforming ideas into resilient and sustainable infrastructure.&rdquo;
          </p>

          <p className="text-[10px] font-mono text-[#4E6E81]">
            General Sir John Kotelawala Defence University, Sri Lanka.
          </p>
        </div>

        {/* Center column: Shortcuts */}
        <div className="md:col-span-4 space-y-4">
          <h4 className="text-xs font-mono font-bold tracking-widest text-[#4CAF50] uppercase">
            QUICK NAVIGATION
          </h4>
          <div className="grid grid-cols-2 gap-x-4 gap-y-2 font-poppins text-xs">
            <button onClick={() => handleScroll("home")} className="text-left text-foreground/80 hover:text-white transition-colors cursor-pointer">&bull; Home</button>
            <button onClick={() => handleScroll("about")} className="text-left text-foreground/80 hover:text-white transition-colors cursor-pointer">&bull; About</button>
            <button onClick={() => handleScroll("education")} className="text-left text-foreground/80 hover:text-white transition-colors cursor-pointer">&bull; Education</button>
            <button onClick={() => handleScroll("skills")} className="text-left text-foreground/80 hover:text-white transition-colors cursor-pointer">&bull; Skills</button>
            <button onClick={() => handleScroll("projects")} className="text-left text-foreground/80 hover:text-white transition-colors cursor-pointer">&bull; Projects</button>
            <button onClick={() => handleScroll("research")} className="text-left text-foreground/80 hover:text-white transition-colors cursor-pointer">&bull; Research</button>
            <button onClick={() => handleScroll("experience")} className="text-left text-foreground/80 hover:text-white transition-colors cursor-pointer">&bull; Experience</button>
            <button onClick={() => handleScroll("certifications")} className="text-left text-foreground/80 hover:text-white transition-colors cursor-pointer">&bull; Certs</button>
          </div>
        </div>

        {/* Right column: Newsletter */}
        <div className="md:col-span-3 space-y-4">
          <h4 className="text-xs font-mono font-bold tracking-widest text-[#4CAF50] uppercase">
            TRANSMITTAL NEWSLETTER
          </h4>
          <p className="text-[11px] font-mono text-secondary">
            Subscribe to receive structural research logs and survey field updates.
          </p>
          
          <form onSubmit={(e) => e.preventDefault()} className="flex items-center gap-1">
            <input
              type="email"
              placeholder="Enter email address..."
              required
              className="flex-1 px-3 py-2 rounded bg-white/5 border border-card-border text-xs font-mono placeholder:text-secondary focus:outline-none focus:border-secondary text-white"
            />
            <button 
              type="submit" 
              className="p-2 rounded bg-accent hover:bg-accent/90 text-white transition-colors cursor-pointer"
              aria-label="Subscribe"
            >
              <Send className="w-4.5 h-4.5" />
            </button>
          </form>
        </div>

      </div>

      {/* Copyright notes */}
      <div className="container mx-auto px-6 pt-8 border-t border-card-border/10 flex flex-col md:flex-row items-center justify-between gap-4 relative z-10 text-[10px] font-mono text-secondary">
        <div>
          &copy; {new Date().getFullYear()} HASNI AHAMED. All Rights Reserved.
        </div>
        <div className="flex gap-4">
          <span>SRI LANKA WGS-84 GRID</span>
          <span>COMPLIANT ACCESSIBILITY</span>
        </div>
      </div>

    </footer>
  );
}
