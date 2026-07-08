"use client";

import React from "react";
import { motion } from "framer-motion";
import { educationList } from "../data/portfolioData";
import { GraduationCap, Calendar, Award, BookOpen } from "lucide-react";

export default function Education() {
  return (
    <section id="education" className="py-24 border-b border-card-border relative bg-primary/[0.01] dark:bg-white/[0.005]">
      <div className="container mx-auto px-6">
        
        {/* Section Heading */}
        <div className="mb-16">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-8 h-[1px] bg-secondary" />
            <span className="text-xs font-mono tracking-widest text-secondary uppercase">02 / Academic</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-montserrat font-extrabold tracking-tight text-primary dark:text-white">
            EDUCATION
          </h2>
        </div>

        {/* Milestone Cards Timeline */}
        <div className="max-w-4xl mx-auto space-y-12 relative before:absolute before:top-4 before:bottom-4 before:left-6 md:before:left-1/2 before:w-[1px] before:bg-card-border">
          {educationList.map((edu, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <div 
                key={idx} 
                className={`relative flex flex-col md:flex-row items-stretch ${
                  isEven ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline node */}
                <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-6 h-6 rounded-full border border-secondary bg-background flex items-center justify-center z-10 shadow-sm">
                  <GraduationCap className="w-3.5 h-3.5 text-primary dark:text-secondary" />
                </div>

                {/* Left/Right Card Spacer */}
                <div className="w-full md:w-1/2 pl-12 md:pl-0 md:px-8" />

                {/* Actual Card content */}
                <motion.div 
                  initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8 }}
                  className="w-full md:w-1/2 pl-12 md:pl-0 md:px-8 mt-2 md:mt-0"
                >
                  <div className="glass-card rounded p-6 shadow-sm border border-card-border hover:shadow-md">
                    <div className="flex items-center gap-2 text-accent text-xs font-mono mb-2">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{edu.period}</span>
                    </div>

                    <h3 className="text-lg md:text-xl font-montserrat font-extrabold text-primary dark:text-white mb-1">
                      {edu.degree}
                    </h3>
                    
                    <p className="text-sm font-poppins font-medium text-secondary mb-4">
                      {edu.institution}
                    </p>

                    {/* GPA / Honors banner */}
                    <div className="flex items-center gap-2 px-3 py-1.5 rounded bg-primary/5 dark:bg-white/5 border border-primary/10 dark:border-white/10 mb-4 w-fit">
                      <Award className="w-4 h-4 text-accent" />
                      <span className="text-xs font-mono font-bold text-foreground/80 dark:text-[#E0E1DD]">
                        {edu.gpa}
                      </span>
                    </div>

                    {/* Key Modules */}
                    <div>
                      <div className="flex items-center gap-1.5 mb-2 text-xs font-mono uppercase tracking-wider text-secondary">
                        <BookOpen className="w-3.5 h-3.5" />
                        <span>Core Syllabi</span>
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {edu.keyModules.map((module, mIdx) => (
                          <span 
                            key={mIdx} 
                            className="px-2.5 py-1 rounded-sm text-[11px] font-mono bg-card-bg border border-card-border text-foreground/75 hover:border-secondary hover:text-primary dark:hover:text-white transition-colors"
                          >
                            {module}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
