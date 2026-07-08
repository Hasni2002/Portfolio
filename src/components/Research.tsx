"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { researchList, ResearchPaper } from "../data/portfolioData";
import { BookOpen, FileText, ChevronDown, ChevronUp, Share2, Award } from "lucide-react";

export default function Research() {
  const [expandedPaper, setExpandedPaper] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedPaper(expandedPaper === id ? null : id);
  };

  return (
    <section id="research" className="py-24 border-b border-card-border relative overflow-hidden">
      <div className="container mx-auto px-6">
        
        {/* Section Heading */}
        <div className="mb-16">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-8 h-[1px] bg-secondary" />
            <span className="text-xs font-mono tracking-widest text-secondary uppercase">05 / Publications</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-montserrat font-extrabold tracking-tight text-primary dark:text-white">
            RESEARCH & RESEARCH THESES
          </h2>
        </div>

        {/* Scientific Journal Layout List */}
        <div className="max-w-4xl mx-auto space-y-8">
          {researchList.map((paper, idx) => {
            const isExpanded = expandedPaper === paper.id;
            return (
              <div 
                key={paper.id}
                className="glass-panel rounded-lg border border-card-border shadow-sm overflow-hidden p-6 md:p-8 space-y-4 hover:border-secondary transition-all"
              >
                
                {/* Header info */}
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div className="space-y-1.5 flex-1">
                    <span className="px-2.5 py-0.5 rounded-sm bg-primary/5 dark:bg-white/5 border border-primary/10 dark:border-white/10 text-[9px] font-mono text-secondary uppercase tracking-widest">
                      {paper.researchArea}
                    </span>
                    <h3 className="text-lg md:text-xl font-montserrat font-bold text-primary dark:text-white leading-snug">
                      {paper.title}
                    </h3>
                  </div>

                  {paper.conferencePaper && (
                    <div className="flex items-center gap-1.5 px-3 py-1 rounded bg-[#4CAF50]/10 border border-[#4CAF50]/20 text-[#4CAF50] text-[10px] font-mono font-bold">
                      <Award className="w-3.5 h-3.5" />
                      <span>{paper.conferencePaper}</span>
                    </div>
                  )}
                </div>

                {/* Abstract Preview */}
                <div className="text-xs md:text-sm text-foreground/80 dark:text-[#E0E1DD]/80 leading-relaxed font-mono">
                  <strong>ABSTRACT:</strong>{" "}
                  {isExpanded ? paper.abstract : `${paper.abstract.slice(0, 160)}...`}
                  
                  <button 
                    onClick={() => toggleExpand(paper.id)}
                    className="ml-2 text-accent hover:underline font-bold inline-flex items-center gap-0.5 cursor-pointer"
                  >
                    {isExpanded ? (
                      <>
                        Collapse <ChevronUp className="w-3.5 h-3.5" />
                      </>
                    ) : (
                      <>
                        Read Full Abstract <ChevronDown className="w-3.5 h-3.5" />
                      </>
                    )}
                  </button>
                </div>

                {/* Keywords */}
                <div className="flex flex-wrap gap-1.5 items-center">
                  <span className="text-[10px] font-mono text-secondary uppercase font-bold mr-1">KEYWORDS:</span>
                  {paper.keywords.map((word) => (
                    <span key={word} className="px-2 py-0.5 rounded-sm bg-card-bg border border-card-border text-[9px] font-mono text-foreground/75">
                      #{word}
                    </span>
                  ))}
                </div>

                {/* Expanded Details: Future Scope & Steps */}
                {isExpanded && (
                  <div className="pt-4 border-t border-card-border grid grid-cols-1 md:grid-cols-12 gap-6 animate-fadeIn">
                    
                    {/* Future Scope */}
                    <div className="md:col-span-8 space-y-2">
                      <h4 className="text-xs font-mono font-bold text-primary dark:text-white uppercase tracking-wider">
                        Future Scope & Expansion Steps
                      </h4>
                      <ul className="space-y-1.5 list-disc pl-4 text-xs font-mono">
                        {paper.futureScope.map((scope, sIdx) => (
                          <li key={sIdx} className="leading-relaxed">{scope}</li>
                        ))}
                      </ul>
                    </div>

                    {/* Actions links */}
                    <div className="md:col-span-4 flex flex-col justify-end gap-2.5">
                      {paper.technicalReportUrl && (
                        <a 
                          href={paper.technicalReportUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full py-2 px-3 rounded bg-primary text-white dark:bg-[#4E6E81] text-center font-poppins text-[10px] uppercase font-bold tracking-wider hover:opacity-90 flex items-center justify-center gap-1.5 cursor-pointer"
                        >
                          <FileText className="w-3.5 h-3.5" />
                          View Technical Report
                        </a>
                      )}
                      
                      {paper.presentationUrl && paper.presentationUrl !== "#" && (
                        <a 
                          href={paper.presentationUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full py-2 px-3 rounded border border-card-border bg-card-bg text-center text-foreground/80 font-poppins text-[10px] uppercase font-bold tracking-wider hover:bg-card-border/10 flex items-center justify-center gap-1.5 cursor-pointer"
                        >
                          <Share2 className="w-3.5 h-3.5" />
                          Share Presentation
                        </a>
                      )}
                    </div>

                  </div>
                )}

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
