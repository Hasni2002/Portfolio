"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projectsList, Project } from "../data/portfolioData";
import { FileText, ExternalLink, X, Settings, CheckCircle2, ChevronRight } from "lucide-react";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-24 border-b border-card-border relative bg-primary/[0.01] dark:bg-white/[0.005]">
      <div className="container mx-auto px-6">
        
        {/* Section Heading */}
        <div className="mb-16">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-8 h-[1px] bg-secondary" />
            <span className="text-xs font-mono tracking-widest text-secondary uppercase">04 / Portfolios</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-montserrat font-extrabold tracking-tight text-primary dark:text-white">
            PROJECT PORTFOLIO
          </h2>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectsList.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              className="glass-card rounded overflow-hidden shadow-sm border border-card-border flex flex-col group cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              {/* Image Frame */}
              <div className="relative aspect-video w-full overflow-hidden bg-primary/10">
                <img 
                  src={project.heroImage} 
                  alt={project.title}
                  className="w-full h-full object-cover filter brightness-95 group-hover:scale-105 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-primary/20 dark:bg-[#16324F]/30 mix-blend-multiply opacity-25 group-hover:opacity-10 transition-opacity" />
                
                {/* Category tag */}
                <span className="absolute top-4 left-4 px-2.5 py-1 rounded bg-primary/95 text-white dark:bg-[#4E6E81] text-[10px] font-mono tracking-wider uppercase font-semibold">
                  {project.category}
                </span>
              </div>

              {/* Info Panel */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-montserrat font-extrabold text-primary dark:text-white mb-2 leading-snug group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs text-foreground/80 dark:text-[#E0E1DD]/80 font-mono mb-4 line-clamp-2 leading-relaxed">
                    {project.overview}
                  </p>
                </div>

                <div className="flex items-center gap-1.5 text-xs text-accent font-poppins font-semibold">
                  <span>View Calculation Sheet</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Cinematic Project Details Modal (Calculation Sheet Design) */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 md:p-6"
            >
              <motion.div
                initial={{ scale: 0.95, y: 30 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.95, y: 30 }}
                className="bg-background rounded-lg border border-card-border w-full max-w-5xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
              >
                
                {/* Modal Header */}
                <div className="glass-panel border-b border-card-border p-4 px-6 flex items-center justify-between z-10">
                  <div className="flex items-center gap-3">
                    <Settings className="w-5 h-5 text-accent animate-spin-slow" />
                    <div>
                      <h4 className="text-xs font-mono text-secondary uppercase font-semibold leading-none">
                        ENGINEERING COMPUTATION SHEET
                      </h4>
                      <h3 className="text-base md:text-lg font-montserrat font-extrabold text-primary dark:text-white leading-none mt-1">
                        {selectedProject.title}
                      </h3>
                    </div>
                  </div>
                  <button 
                    onClick={() => setSelectedProject(null)}
                    className="p-2 rounded hover:bg-card-border/10 text-foreground/80 transition-colors cursor-pointer"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Modal Body */}
                <div className="p-6 md:p-8 overflow-y-auto space-y-8 font-mono text-xs md:text-sm text-foreground/90 dark:text-[#E0E1DD]">
                  
                  {/* Banner image & general sheet metadata */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 border-b border-card-border pb-6">
                    <div className="md:col-span-2 aspect-video w-full rounded overflow-hidden border border-card-border">
                      <img 
                        src={selectedProject.heroImage} 
                        alt={selectedProject.title} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="space-y-3 bg-primary/5 dark:bg-white/5 border border-card-border rounded p-4 flex flex-col justify-between">
                      <div>
                        <div className="text-[10px] text-secondary font-bold uppercase mb-1">PROJ_REF:</div>
                        <div className="font-bold text-primary dark:text-white uppercase mb-3">{(selectedProject.id).replace('-', '_')}</div>
                        
                        <div className="text-[10px] text-secondary font-bold uppercase mb-1">DISCIPLINE:</div>
                        <div className="text-foreground/80 dark:text-[#E0E1DD]/80 mb-3">{selectedProject.category}</div>
                        
                        <div className="text-[10px] text-secondary font-bold uppercase mb-1">SOFTWARE USED:</div>
                        <div className="flex flex-wrap gap-1 mt-1">
                          {selectedProject.softwareUsed.map((soft) => (
                            <span key={soft} className="px-2 py-0.5 rounded-sm bg-card-bg border border-card-border text-[10px] text-foreground/80">
                              {soft}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Download PDFs links */}
                      <div className="space-y-2 pt-4">
                        {selectedProject.reportPdfUrl && (
                          <a 
                            href={selectedProject.reportPdfUrl} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="w-full py-2 rounded bg-primary text-white dark:bg-[#4E6E81] hover:opacity-90 flex items-center justify-center gap-1.5 font-poppins text-[10px] uppercase font-semibold cursor-pointer"
                          >
                            <FileText className="w-3.5 h-3.5" />
                            Calculation PDF
                          </a>
                        )}
                        {selectedProject.presentationUrl && selectedProject.presentationUrl !== "#" && (
                          <a 
                            href={selectedProject.presentationUrl}
                            target="_blank"
                            rel="noopener noreferrer" 
                            className="w-full py-2 rounded border border-card-border bg-card-bg hover:bg-card-border/10 flex items-center justify-center gap-1.5 font-poppins text-[10px] uppercase font-semibold text-foreground/80 cursor-pointer"
                          >
                            <ExternalLink className="w-3.5 h-3.5" />
                            Slideshow Presentation
                          </a>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Overview and Problem statement */}
                  <div className="space-y-4">
                    <h4 className="text-sm font-montserrat font-extrabold text-primary dark:text-white border-b border-card-border pb-1">
                      1.0 PROJECT GENERAL DATA & PROBLEM STATEMENT
                    </h4>
                    <p className="leading-relaxed">
                      <strong>OVERVIEW:</strong> {selectedProject.overview}
                    </p>
                    <p className="leading-relaxed bg-accent/5 dark:bg-accent/10 border border-accent/20 rounded p-4">
                      <strong>PROBLEM STATEMENT:</strong> {selectedProject.problemStatement}
                    </p>
                  </div>

                  {/* Objectives Checklists */}
                  <div className="space-y-4">
                    <h4 className="text-sm font-montserrat font-extrabold text-primary dark:text-white border-b border-card-border pb-1">
                      2.0 SCOPE OF WORKS & OBJECTIVES
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {selectedProject.objectives.map((obj, oIdx) => (
                        <div key={oIdx} className="flex items-start gap-2.5 bg-card-bg border border-card-border rounded p-3">
                          <CheckCircle2 className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                          <span>{obj}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Methodology */}
                  <div className="space-y-4">
                    <h4 className="text-sm font-montserrat font-extrabold text-primary dark:text-white border-b border-card-border pb-1">
                      3.0 DESIGN METHODOLOGY & CALCULATION FLOWCHART
                    </h4>
                    <div className="space-y-2.5 pl-4 border-l border-card-border">
                      {selectedProject.methodology.map((meth, mIdx) => (
                        <div key={mIdx} className="relative before:absolute before:left-[-21px] before:top-2 before:w-2 before:h-2 before:rounded-full before:bg-secondary">
                          <strong>STEP {mIdx + 1}:</strong> {meth}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Calculations Sheet table */}
                  <div className="space-y-4">
                    <h4 className="text-sm font-montserrat font-extrabold text-primary dark:text-white border-b border-card-border pb-1">
                      4.0 DETAILED STRESS & HYDRAULIC CALCULATIONS
                    </h4>
                    <div className="overflow-x-auto border border-card-border rounded">
                      <table className="w-full border-collapse">
                        <thead>
                          <tr className="bg-primary/5 dark:bg-white/5 border-b border-card-border text-left">
                            <th className="p-3 font-bold border-r border-card-border">CALCULATION MODULE</th>
                            <th className="p-3 font-bold border-r border-card-border">EQUATIONS & PARAMETERS</th>
                            <th className="p-3 font-bold">COMPUTED RESULT</th>
                          </tr>
                        </thead>
                        <tbody>
                          {selectedProject.calculations.map((calc, cIdx) => (
                            <tr key={cIdx} className="border-b border-card-border last:border-0 hover:bg-card-border/5">
                              <td className="p-3 font-bold border-r border-card-border leading-relaxed">
                                {calc.description}
                              </td>
                              <td className="p-3 font-mono border-r border-card-border italic text-secondary leading-relaxed">
                                {calc.formula}
                              </td>
                              <td className="p-3 font-bold text-accent leading-relaxed">
                                {calc.result}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* Construction / Implementation process */}
                  {selectedProject.constructionProcess && (
                    <div className="space-y-4">
                      <h4 className="text-sm font-montserrat font-extrabold text-primary dark:text-white border-b border-card-border pb-1">
                        5.0 CONSTRUCTION SITE EXECUTION FLOW
                      </h4>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {selectedProject.constructionProcess.map((proc, pIdx) => (
                          <div key={pIdx} className="bg-card-bg border border-card-border rounded p-3 flex flex-col justify-between">
                            <span className="text-[10px] text-secondary font-bold">PHASE 0{pIdx + 1}</span>
                            <span className="mt-2 font-bold">{proc}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Results & Lessons */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-3 bg-card-bg border border-card-border rounded p-4">
                      <h5 className="font-bold text-primary dark:text-white border-b border-card-border pb-1">
                        6.0 COMPUTED RESULTS SUMMARY
                      </h5>
                      <p className="leading-relaxed">{selectedProject.results}</p>
                    </div>
                    <div className="space-y-3 bg-card-bg border border-card-border rounded p-4">
                      <h5 className="font-bold text-primary dark:text-white border-b border-card-border pb-1">
                        7.0 CRITICAL LESSONS LEARNED
                      </h5>
                      <ul className="space-y-2 list-disc pl-4">
                        {selectedProject.lessonsLearned.map((lesson, lIdx) => (
                          <li key={lIdx} className="leading-relaxed">{lesson}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Future scope / improvements */}
                  <div className="space-y-3 bg-card-bg border border-card-border rounded p-4">
                    <h5 className="font-bold text-primary dark:text-white border-b border-card-border pb-1">
                      8.0 FUTURE SYSTEM IMPROVEMENTS
                    </h5>
                    <ul className="space-y-1.5 pl-4 list-decimal">
                      {selectedProject.futureImprovements.map((imp, iIdx) => (
                        <li key={iIdx} className="leading-relaxed">{imp}</li>
                      ))}
                    </ul>
                  </div>

                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
