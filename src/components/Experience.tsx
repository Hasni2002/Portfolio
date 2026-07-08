"use client";

import React from "react";
import { motion } from "framer-motion";
import { experienceList } from "../data/portfolioData";
import { Briefcase, Calendar, CheckSquare, Award } from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="py-24 border-b border-card-border relative bg-primary/[0.01] dark:bg-white/[0.005]">
      <div className="container mx-auto px-6">
        
        {/* Section Heading */}
        <div className="mb-16">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-8 h-[1px] bg-secondary" />
            <span className="text-xs font-mono tracking-widest text-secondary uppercase">06 / Practice</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-montserrat font-extrabold tracking-tight text-primary dark:text-white">
            PRACTICAL EXPERIENCE
          </h2>
        </div>

        {/* Experience Timeline */}
        <div className="max-w-4xl mx-auto space-y-12 relative before:absolute before:top-4 before:bottom-4 before:left-6 before:w-[1px] before:bg-card-border">
          {experienceList.map((exp, idx) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              className="relative pl-12 md:pl-16 group"
            >
              {/* Timeline icon */}
              <div className="absolute left-6 -translate-x-1/2 top-1.5 w-8 h-8 rounded-full border border-secondary bg-background flex items-center justify-center z-10 transition-colors group-hover:bg-primary dark:group-hover:bg-[#4E6E81] group-hover:text-white">
                <Briefcase className="w-4 h-4 text-primary dark:text-secondary group-hover:text-white" />
              </div>

              {/* Log entry layout */}
              <div className="glass-card rounded p-6 shadow-sm border border-card-border">
                
                {/* Header details */}
                <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-lg md:text-xl font-montserrat font-extrabold text-primary dark:text-white">
                      {exp.role}
                    </h3>
                    <p className="text-sm font-poppins font-medium text-secondary">
                      {exp.organization}
                    </p>
                  </div>

                  <div className="flex items-center gap-1.5 text-xs font-mono text-accent font-bold">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                {/* Job descriptions / responsibilities list */}
                <div className="space-y-2.5">
                  <div className="flex items-center gap-1 text-xs font-mono uppercase text-secondary mb-1">
                    <CheckSquare className="w-3.5 h-3.5" />
                    <span>Execution Records</span>
                  </div>
                  <ul className="space-y-2 pl-4 list-disc text-xs md:text-sm text-foreground/80 dark:text-[#E0E1DD]/80 leading-relaxed font-mono">
                    {exp.description.map((desc, dIdx) => (
                      <li key={dIdx} className="leading-relaxed">
                        {desc}
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
