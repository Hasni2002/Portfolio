"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { skillCategories, Skill } from "../data/portfolioData";
import * as Icons from "lucide-react";

// Dynamically resolve lucide icons
const DynamicIcon = ({ name, className }: { name: string; className?: string }) => {
  const IconComponent = (Icons as any)[name];
  if (!IconComponent) {
    return <Icons.HelpCircle className={className} />;
  }
  return <IconComponent className={className} />;
};

export default function SkillsHex() {
  const [activeCategory, setActiveCategory] = useState<number>(0);
  const [selectedSkill, setSelectedSkill] = useState<Skill>(skillCategories[0].skills[0]);

  return (
    <section id="skills" className="py-24 border-b border-card-border relative overflow-hidden">
      <div className="container mx-auto px-6">
        
        {/* Section Heading */}
        <div className="mb-16">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-8 h-[1px] bg-secondary" />
            <span className="text-xs font-mono tracking-widest text-secondary uppercase">03 / Competences</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-montserrat font-extrabold tracking-tight text-primary dark:text-white">
            ENGINEERING SKILLS
          </h2>
        </div>

        {/* Categories selector */}
        <div className="flex gap-4 border-b border-card-border pb-3 mb-12">
          {skillCategories.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => {
                setActiveCategory(idx);
                setSelectedSkill(cat.skills[0]);
              }}
              className={`px-4 py-2 rounded text-xs font-poppins font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                activeCategory === idx
                  ? "bg-primary text-white dark:bg-[#4E6E81]"
                  : "bg-card-bg hover:bg-card-border/10 text-foreground/80"
              }`}
            >
              {cat.title}
            </button>
          ))}
        </div>

        {/* Honeycomb Grid and Details Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Honeycomb Layout (8 columns for responsive wrap) */}
          <div className="lg:col-span-8">
            <div className="flex flex-wrap gap-x-2 gap-y-4 justify-center md:justify-start max-w-2xl">
              {skillCategories[activeCategory].skills.map((skill, idx) => {
                const isSelected = selectedSkill.name === skill.name;
                return (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.05 }}
                    className="hexagon-wrapper"
                    onClick={() => setSelectedSkill(skill)}
                  >
                    <div 
                      className={`hexagon-container ${
                        isSelected 
                          ? "bg-primary text-white dark:bg-[#4E6E81] border-accent" 
                          : ""
                      }`}
                    >
                      <DynamicIcon 
                        name={skill.iconName} 
                        className={`w-6 h-6 mb-1 ${
                          isSelected ? "text-accent" : "text-primary dark:text-secondary"
                        }`} 
                      />
                      <span className="text-[10px] font-mono text-center font-bold px-1 line-clamp-2 leading-tight">
                        {skill.name}
                      </span>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Details Panel representing stress tests/specifications sheet */}
          <div className="lg:col-span-4">
            <div className="glass-panel rounded p-6 shadow-sm border border-card-border relative min-h-[300px] flex flex-col justify-between">
              {/* Corner stress tags */}
              <div className="absolute top-2 right-2 text-[8px] font-mono text-secondary">
                SPEC_REF: SKL-{(selectedSkill.name.slice(0, 3)).toUpperCase()}
              </div>

              <div className="space-y-4">
                <span className="px-2.5 py-1 rounded-sm text-[9px] font-mono bg-accent/10 border border-accent/20 text-accent font-extrabold uppercase tracking-widest">
                  Active Member Specs
                </span>
                
                <h3 className="text-xl font-montserrat font-extrabold text-primary dark:text-white">
                  {selectedSkill.name}
                </h3>
                
                <div className="w-12 h-[2px] bg-secondary" />
                
                <p className="text-xs md:text-sm font-mono text-foreground/80 dark:text-[#E0E1DD]/80 leading-relaxed">
                  {selectedSkill.description}
                </p>
              </div>

              {/* Stress-level Indicator circular loader */}
              <div className="mt-8 border-t border-card-border pt-6 flex items-center gap-6">
                <div className="relative w-16 h-16 flex items-center justify-center">
                  <svg className="w-full h-full transform -rotate-90">
                    <circle
                      cx="32"
                      cy="32"
                      r="28"
                      className="stroke-card-border fill-transparent"
                      strokeWidth="3"
                    />
                    <motion.circle
                      cx="32"
                      cy="32"
                      r="28"
                      className="stroke-accent fill-transparent"
                      strokeWidth="3"
                      strokeDasharray={176}
                      initial={{ strokeDashoffset: 176 }}
                      animate={{ strokeDashoffset: 176 - (176 * selectedSkill.level) / 100 }}
                      transition={{ duration: 1.0, ease: "easeOut" }}
                    />
                  </svg>
                  <span className="absolute text-xs font-mono font-bold">{selectedSkill.level}%</span>
                </div>
                <div>
                  <h4 className="text-[10px] font-mono text-secondary uppercase font-semibold leading-none mb-1">
                    Stress Limit (Proficiency)
                  </h4>
                  <p className="text-xs text-foreground/70 dark:text-[#E0E1DD]/70">
                    Validated through academic labs and projects execution.
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
