"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { siteVisitsList, SiteVisit } from "../data/portfolioData";
import { MapPin, Calendar, FileText, ChevronLeft, ChevronRight } from "lucide-react";

export default function SiteVisits() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % siteVisitsList.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + siteVisitsList.length) % siteVisitsList.length);
  };

  const activeVisit = siteVisitsList[activeIndex];

  return (
    <section id="site-visits" className="py-24 border-b border-card-border relative overflow-hidden">
      <div className="container mx-auto px-6">
        
        {/* Section Heading */}
        <div className="mb-16">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-8 h-[1px] bg-secondary" />
            <span className="text-xs font-mono tracking-widest text-secondary uppercase">07 / Field Studies</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-montserrat font-extrabold tracking-tight text-primary dark:text-white">
            SITE VISITS & FIELD WORK
          </h2>
        </div>

        {/* Carousel Layout for Technical Field Logs */}
        <div className="max-w-5xl mx-auto glass-panel rounded-lg border border-card-border shadow-md overflow-hidden grid grid-cols-1 lg:grid-cols-12 items-stretch">
          
          {/* Left Side: Field Photo Frame */}
          <div className="lg:col-span-6 relative aspect-video lg:aspect-auto bg-primary/10">
            <img 
              src={activeVisit.imageUrl} 
              alt={activeVisit.title}
              className="w-full h-full object-cover filter brightness-90"
            />
            {/* Category tag */}
            <span className="absolute top-4 left-4 px-2.5 py-1 rounded bg-[#4CAF50] text-white text-[10px] font-mono tracking-wider uppercase font-bold">
              {activeVisit.category}
            </span>
          </div>

          {/* Right Side: Field log card details */}
          <div className="lg:col-span-6 p-6 md:p-8 flex flex-col justify-between space-y-6">
            
            <div className="space-y-4">
              <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-secondary">
                <div className="flex items-center gap-1">
                  <MapPin className="w-4 h-4 text-accent" />
                  <span>{activeVisit.location}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  <span>{activeVisit.date}</span>
                </div>
              </div>

              <h3 className="text-xl md:text-2xl font-montserrat font-extrabold text-primary dark:text-white leading-tight">
                {activeVisit.title}
              </h3>

              <div className="w-12 h-[2px] bg-secondary" />

              <div className="space-y-2">
                <div className="flex items-center gap-1 text-[10px] font-mono uppercase text-secondary font-bold">
                  <FileText className="w-3.5 h-3.5" />
                  <span>Field Observation Notes</span>
                </div>
                <p className="text-xs md:text-sm font-mono text-foreground/80 dark:text-[#E0E1DD]/80 leading-relaxed bg-primary/5 dark:bg-white/5 border border-card-border p-4 rounded">
                  {activeVisit.description}
                </p>
              </div>
            </div>

            {/* Slider controls */}
            <div className="flex items-center justify-between border-t border-card-border pt-4">
              <span className="text-xs font-mono text-secondary font-bold">
                LOG: {activeIndex + 1} OF {siteVisitsList.length}
              </span>
              <div className="flex gap-2">
                <button
                  onClick={handlePrev}
                  className="p-2 rounded border border-card-border bg-card-bg text-foreground/80 hover:text-primary dark:hover:text-white transition-colors cursor-pointer"
                  aria-label="Previous log"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={handleNext}
                  className="p-2 rounded border border-card-border bg-card-bg text-foreground/80 hover:text-primary dark:hover:text-white transition-colors cursor-pointer"
                  aria-label="Next log"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
