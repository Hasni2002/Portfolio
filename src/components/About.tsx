"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { personalInfo, timelineSteps } from "../data/portfolioData";
import { Target, Eye, Compass, Rocket, Briefcase, GraduationCap, Award } from "lucide-react";

export default function About() {
  const [activeTab, setActiveTab] = useState<"bio" | "mission" | "vision" | "philosophy" | "goals">("bio");

  const tabIcons = {
    bio: <Briefcase className="w-4 h-4" />,
    mission: <Target className="w-4 h-4" />,
    vision: <Eye className="w-4 h-4" />,
    philosophy: <Compass className="w-4 h-4" />,
    goals: <Rocket className="w-4 h-4" />
  };

  return (
    <section id="about" className="py-24 border-b border-card-border relative overflow-hidden">
      <div className="container mx-auto px-6">
        
        {/* Section Heading */}
        <div className="mb-16">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-8 h-[1px] bg-secondary" />
            <span className="text-xs font-mono tracking-widest text-secondary uppercase">01 / Profile</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-montserrat font-extrabold tracking-tight text-primary dark:text-white">
            ABOUT ME
          </h2>
        </div>

        {/* Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-24">
          
          {/* Left Side: CAD Portrait Frame */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm aspect-[4/5] rounded border border-secondary/30 bg-card-bg p-4 shadow-lg group overflow-hidden">
              {/* Engineering measurement lines around portrait */}
              <div className="absolute top-0 left-0 w-8 h-[1px] bg-secondary/60" />
              <div className="absolute top-0 left-0 w-[1px] h-8 bg-secondary/60" />
              <div className="absolute top-0 right-0 w-8 h-[1px] bg-secondary/60" />
              <div className="absolute top-0 right-0 w-[1px] h-8 bg-secondary/60" />
              <div className="absolute bottom-0 left-0 w-8 h-[1px] bg-secondary/60" />
              <div className="absolute bottom-0 left-0 w-[1px] h-8 bg-secondary/60" />
              <div className="absolute bottom-0 right-0 w-8 h-[1px] bg-secondary/60" />
              <div className="absolute bottom-0 right-0 w-[1px] h-8 bg-secondary/60" />
              
              {/* Technical dimension marks */}
              <div className="absolute top-1/2 left-2 -translate-y-1/2 text-[8px] font-mono text-secondary -rotate-90 select-none">
                H: 297mm
              </div>
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 text-[8px] font-mono text-secondary select-none">
                W: 210mm
              </div>

              {/* Portrait image container */}
              <div className="relative w-full h-full rounded overflow-hidden bg-primary/10">
                <img
                  src="/images/hasni.jpg"
                  alt="Hasni Ahamed Portrait"
                  className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-750"
                  onError={(e) => {
                    // Fallback to a solid color placeholder if image fails
                    (e.target as HTMLElement).style.display = "none";
                  }}
                />
                
                {/* Blueprint lines on hover */}
                <div className="absolute inset-0 border border-dashed border-accent/0 group-hover:border-accent/40 pointer-events-none transition-all duration-500" />
                <div className="absolute inset-0 bg-primary/20 dark:bg-[#16324F]/30 mix-blend-multiply opacity-20 pointer-events-none" />
              </div>
            </div>
          </div>

          {/* Right Side: Narrative and Tabs */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-xl md:text-2xl font-montserrat font-bold text-primary dark:text-white">
              HASNI AHAMED
            </h3>
            <p className="text-sm font-mono text-secondary font-semibold">
              Civil Engineering Undergraduate &bull; KDU Sri Lanka
            </p>

            {/* Tab controls */}
            <div className="flex flex-wrap gap-2 border-b border-card-border pb-3">
              {(["bio", "mission", "vision", "philosophy", "goals"] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-2 rounded text-xs font-poppins font-medium tracking-wide uppercase transition-all flex items-center gap-2 cursor-pointer ${
                    activeTab === tab
                      ? "bg-primary text-white dark:bg-[#4E6E81]"
                      : "bg-card-bg hover:bg-card-border/10 text-foreground/80"
                  }`}
                >
                  {tabIcons[tab]}
                  {tab}
                </button>
              ))}
            </div>

            {/* Tab contents */}
            <div className="min-h-[200px] glass-panel rounded p-6 shadow-sm border border-card-border">
              <AnimatePresence mode="wait">
                {activeTab === "bio" && (
                  <motion.div
                    key="bio"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="space-y-4"
                  >
                    <p className="text-sm leading-relaxed text-foreground/90 dark:text-[#E0E1DD]">
                      I am a dedicated Civil Engineering Undergraduate at **General Sir John Kotelawala Defence University (KDU), Sri Lanka**. My passion lies in understanding structural mechanics, designing sustainable concrete and steel configurations, and implementing computational modeling techniques (Finite Element Analysis) to solve modern infrastructural puzzles.
                    </p>
                    <p className="text-sm leading-relaxed text-foreground/90 dark:text-[#E0E1DD]">
                      Through my academic curriculum and hands-on laboratory experiences, I explore structural analysis, transportation hydraulics, surveying traverses, and geotechnical foundations. I aim to merge engineering precision with sustainable environmental solutions.
                    </p>
                  </motion.div>
                )}

                {activeTab === "mission" && (
                  <motion.div
                    key="mission"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="space-y-4"
                  >
                    <h4 className="text-xs font-mono uppercase tracking-widest text-[#4CAF50] font-semibold">My Mission</h4>
                    <p className="text-sm leading-relaxed text-foreground/90 dark:text-[#E0E1DD] italic">
                      &ldquo;{personalInfo.mission}&rdquo;
                    </p>
                  </motion.div>
                )}

                {activeTab === "vision" && (
                  <motion.div
                    key="vision"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="space-y-4"
                  >
                    <h4 className="text-xs font-mono uppercase tracking-widest text-[#4CAF50] font-semibold">My Vision</h4>
                    <p className="text-sm leading-relaxed text-foreground/90 dark:text-[#E0E1DD] italic">
                      &ldquo;{personalInfo.vision}&rdquo;
                    </p>
                  </motion.div>
                )}

                {activeTab === "philosophy" && (
                  <motion.div
                    key="philosophy"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="space-y-4"
                  >
                    <h4 className="text-xs font-mono uppercase tracking-widest text-[#4CAF50] font-semibold">Engineering Philosophy</h4>
                    <p className="text-sm leading-relaxed text-foreground/90 dark:text-[#E0E1DD] italic">
                      &ldquo;{personalInfo.philosophy}&rdquo;
                    </p>
                  </motion.div>
                )}

                {activeTab === "goals" && (
                  <motion.div
                    key="goals"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="space-y-3"
                  >
                    <h4 className="text-xs font-mono uppercase tracking-widest text-[#4CAF50] font-semibold">Future Goals & Objectives</h4>
                    <ul className="space-y-2">
                      {personalInfo.futureGoals.map((goal, idx) => (
                        <li key={idx} className="text-sm text-foreground/80 dark:text-[#E0E1DD] flex items-start gap-2">
                          <span className="text-[#4CAF50] font-bold font-mono mt-0.5">&rsaquo;</span>
                          {goal}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Engineering Journey Timeline */}
        <div className="mt-20">
          <h3 className="text-xl md:text-2xl font-montserrat font-extrabold text-center text-primary dark:text-white mb-16">
            ENGINEERING JOURNEY ROADMAP
          </h3>

          <div className="relative border-l border-card-border md:border-l-0 md:flex md:justify-between md:items-start max-w-5xl mx-auto pl-6 md:pl-0 md:before:absolute md:before:top-10 md:before:left-0 md:before:right-0 md:before:h-[1px] md:before:bg-card-border">
            {timelineSteps.map((step, idx) => {
              const isFuture = step.year === "Future Goal";
              return (
                <div 
                  key={step.id} 
                  className="relative mb-12 md:mb-0 md:flex-1 md:px-4 flex flex-col items-start md:items-center text-left md:text-center group"
                >
                  {/* Timeline dot */}
                  <div className={`absolute left-[-31px] md:left-auto md:top-7 w-4 h-4 rounded-full border-2 bg-background flex items-center justify-center transition-all duration-300 group-hover:scale-125 ${
                    isFuture 
                      ? "border-secondary/40" 
                      : "border-accent shadow-[0_0_8px_rgba(76,175,80,0.5)]"
                  }`}>
                    {!isFuture && <div className="w-1.5 h-1.5 rounded-full bg-accent" />}
                  </div>

                  <span className={`text-[10px] font-mono font-bold tracking-widest mb-1 ${
                    isFuture ? "text-secondary/50" : "text-accent"
                  }`}>
                    {step.year}
                  </span>
                  
                  <h4 className="text-sm font-montserrat font-bold text-primary dark:text-white mb-2">
                    {step.title}
                  </h4>
                  
                  <span className="text-[10px] font-mono text-secondary mb-3 leading-none">
                    {step.subtitle}
                  </span>
                  
                  <p className="text-xs text-foreground/70 dark:text-[#E0E1DD]/70 max-w-[200px] leading-relaxed">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
