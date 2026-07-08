"use client";

import React from "react";
import { motion } from "framer-motion";
import { achievementsList } from "../data/portfolioData";
import { Award, Calendar, ShieldAlert, Star } from "lucide-react";

export default function Achievements() {
  return (
    <section id="achievements" className="py-24 border-b border-card-border relative overflow-hidden">
      <div className="container mx-auto px-6">
        
        {/* Section Heading */}
        <div className="mb-16">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-8 h-[1px] bg-secondary" />
            <span className="text-xs font-mono tracking-widest text-secondary uppercase">09 / Honors</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-montserrat font-extrabold tracking-tight text-primary dark:text-white">
            HONORS & ACHIEVEMENTS
          </h2>
        </div>

        {/* Achievement Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {achievementsList.map((ach, idx) => (
            <motion.div
              key={ach.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="glass-card rounded-lg p-6 border border-card-border shadow-sm flex flex-col justify-between space-y-4 group"
            >
              
              <div className="space-y-3">
                {/* Ribbon Tag */}
                <div className="flex items-center justify-between">
                  <div className="w-8 h-8 rounded bg-accent/10 flex items-center justify-center text-accent">
                    <Star className="w-4 h-4 fill-accent" />
                  </div>
                  <div className="flex items-center gap-1 text-[10px] font-mono text-secondary">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{ach.date}</span>
                  </div>
                </div>

                <h3 className="text-base md:text-lg font-montserrat font-extrabold text-primary dark:text-white leading-tight group-hover:text-accent transition-colors">
                  {ach.title}
                </h3>
                
                <span className="text-xs font-poppins font-medium text-secondary uppercase tracking-wider block">
                  BOARD: {ach.awarder}
                </span>

                <p className="text-xs md:text-sm font-mono text-foreground/80 dark:text-[#E0E1DD]/80 leading-relaxed bg-primary/[0.01] dark:bg-white/[0.005] border border-dashed border-card-border p-3 rounded">
                  {ach.description}
                </p>
              </div>

              <div className="text-[9px] font-mono text-secondary uppercase font-bold text-right pt-2 border-t border-card-border">
                RECORDED_HONOR
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
