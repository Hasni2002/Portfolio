import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Calculator, Target, Info, CheckCircle, Layers, BookOpen, Camera } from 'lucide-react';
import type { Project } from '../../types';

interface CaseStudyModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

const CaseStudyModal: React.FC<CaseStudyModalProps> = ({ project, isOpen, onClose }) => {
  // Lock body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-12">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-background/80 backdrop-blur-sm"
          />
          
          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-5xl max-h-[90vh] bg-surface border border-slate-900/10 dark:border-white/10 rounded-2xl shadow-2xl overflow-hidden flex flex-col z-10"
          >
            {/* Header / Hero Image */}
            <div className="relative h-64 md:h-80 shrink-0 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent z-10" />
              <div className="absolute inset-0 bg-accent/20 mix-blend-overlay z-10" />
              <img 
                src={project.imageUrl} 
                alt={project.title} 
                className="w-full h-full object-cover object-center"
              />
              <button 
                onClick={onClose}
                className="absolute top-4 right-4 z-20 p-2 bg-surface/50 hover:bg-surface backdrop-blur-md rounded-full border border-slate-900/10 dark:border-white/10 text-slate-900 dark:text-white transition-colors"
              >
                <X size={24} />
              </button>
              
              <div className="absolute bottom-6 left-6 right-6 z-20">
                <span className="inline-block px-3 py-1 bg-accent/20 text-accent border border-accent/20 rounded-full text-xs font-semibold mb-3">
                  {project.category || 'Civil Engineering'}
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-2">{project.title}</h2>
              </div>
            </div>

            {/* Scrollable Content Body */}
            <div className="p-6 md:p-10 overflow-y-auto custom-scrollbar flex-grow bg-surface/90">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                
                {/* Main Content Column */}
                <div className="lg:col-span-2 space-y-10">
                  
                  {/* Overview */}
                  <section>
                    <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-slate-900 dark:text-white">
                      <Info className="text-accent" size={24} /> 
                      Project Overview
                    </h3>
                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-lg">
                      {project.description}
                    </p>
                  </section>

                  {/* Problem Statement */}
                  {project.problemStatement && (
                    <section className="bg-red-900/10 border border-red-500/20 rounded-xl p-6">
                      <h3 className="text-xl font-bold mb-3 flex items-center gap-2 text-slate-900 dark:text-white">
                        <Info className="text-red-400" size={24} /> 
                        Problem Statement
                      </h3>
                      <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                        {project.problemStatement}
                      </p>
                    </section>
                  )}

                  {/* Methodology & Process */}
                  {project.methodology && (
                    <section>
                      <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-slate-900 dark:text-white">
                        <Layers className="text-accent" size={24} /> 
                        Engineering Methodology
                      </h3>
                      <ul className="space-y-4">
                        {project.methodology.map((step, idx) => (
                          <li key={idx} className="flex gap-4">
                            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center text-accent font-bold">
                              {idx + 1}
                            </div>
                            <p className="text-slate-700 dark:text-slate-300 pt-1">{step}</p>
                          </li>
                        ))}
                      </ul>
                    </section>
                  )}

                  {/* Calculations */}
                  {project.calculations && project.calculations.length > 0 && (
                    <section>
                      <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-slate-900 dark:text-white">
                        <Calculator className="text-accent" size={24} /> 
                        Key Calculations & Formulas
                      </h3>
                      <div className="grid grid-cols-1 gap-4">
                        {project.calculations.map((calc, idx) => (
                          <div key={idx} className="bg-black/30 border border-slate-900/5 dark:border-white/5 rounded-xl p-5 hover:border-accent/30 transition-colors">
                            <p className="text-slate-600 dark:text-slate-400 text-sm mb-2">{calc.description}</p>
                            <div className="font-mono text-lg text-accent bg-background/50 py-3 px-4 rounded-lg mb-3 border border-slate-900/5 dark:border-white/5 overflow-x-auto">
                              {calc.formula}
                            </div>
                            <div className="flex items-start gap-2">
                              <CheckCircle className="text-emerald-400 shrink-0 mt-0.5" size={18} />
                              <span className="text-slate-800 dark:text-slate-200 font-medium">{calc.result}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </section>
                  )}

                  {/* Results */}
                  {project.results && (
                    <section>
                      <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-slate-900 dark:text-white">
                        <Target className="text-accent" size={24} /> 
                        Outcomes & Results
                      </h3>
                      <div className="bg-emerald-900/10 border border-emerald-500/20 rounded-xl p-6">
                        <p className="text-slate-800 dark:text-slate-200 leading-relaxed">
                          {project.results}
                        </p>
                      </div>
                    </section>
                  )}
                  
                  {/* Lessons Learned */}
                  {project.lessonsLearned && (
                    <section>
                      <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-slate-900 dark:text-white">
                        <BookOpen className="text-accent" size={24} /> 
                        Lessons Learned
                      </h3>
                      <ul className="list-disc list-inside space-y-2 text-slate-700 dark:text-slate-300">
                        {project.lessonsLearned.map((lesson, idx) => (
                          <li key={idx}>{lesson}</li>
                        ))}
                      </ul>
                    </section>
                  )}

                  {/* Gallery */}
                  {project.gallery && project.gallery.length > 0 && (
                    <section>
                      <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-slate-900 dark:text-white">
                        <Camera className="text-accent" size={24} /> 
                        Project Gallery
                      </h3>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                        {project.gallery.map((imgUrl, idx) => (
                          <a key={idx} href={imgUrl} target="_blank" rel="noopener noreferrer" className="block aspect-square rounded-xl overflow-hidden border border-slate-900/10 dark:border-white/10 hover:border-accent/50 transition-colors">
                            <img src={imgUrl} alt={`${project.title} Gallery ${idx + 1}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
                          </a>
                        ))}
                      </div>
                    </section>
                  )}

                </div>

                {/* Sidebar Column */}
                <div className="space-y-8">
                  
                  {/* Tech Stack */}
                  <div className="bg-background/50 border border-slate-900/5 dark:border-white/5 rounded-xl p-6">
                    <h4 className="text-sm font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-4">Tech Stack & Tools</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech) => (
                        <span key={tech} className="text-xs font-medium text-slate-900 dark:text-white bg-slate-900/10 dark:bg-white/10 border border-slate-900/10 dark:border-white/10 px-3 py-1.5 rounded-md">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Objectives */}
                  {project.objectives && (
                    <div className="bg-background/50 border border-slate-900/5 dark:border-white/5 rounded-xl p-6">
                      <h4 className="text-sm font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-4">Core Objectives</h4>
                      <ul className="space-y-3">
                        {project.objectives.map((obj, idx) => (
                          <li key={idx} className="flex gap-2 text-sm text-slate-700 dark:text-slate-300">
                            <Target className="text-accent shrink-0 mt-0.5" size={16} />
                            <span>{obj}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Links & Documents */}
                  {(project.liveUrl || project.githubUrl || project.reportPdfUrl || (project.documents && project.documents.length > 0)) && (
                    <div className="bg-background/50 border border-slate-900/5 dark:border-white/5 rounded-xl p-6 space-y-3">
                      <h4 className="text-sm font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-4">Resources</h4>
                      
                      {project.reportPdfUrl && (
                        <a 
                          href={project.reportPdfUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-2 w-full py-3 rounded-lg bg-accent/20 hover:bg-accent/30 border border-accent/30 text-accent text-sm font-medium transition-colors mb-4"
                        >
                          <BookOpen size={18} /> View Technical Report
                        </a>
                      )}
                      
                      {project.documents && project.documents.length > 0 && (
                        <div className="space-y-2 mt-4 mb-4 max-h-[300px] overflow-y-auto custom-scrollbar pr-1">
                          {project.documents.map((doc, idx) => (
                            <a 
                              key={idx}
                              href={doc.url} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="flex items-center gap-3 w-full py-2.5 px-3 rounded-lg bg-accent/5 hover:bg-accent/15 border border-accent/10 hover:border-accent/30 text-accent text-sm transition-all group"
                            >
                              <BookOpen size={16} className="shrink-0 text-accent/70 group-hover:text-accent" />
                              <span className="truncate flex-1 text-left">{doc.title}</span>
                            </a>
                          ))}
                        </div>
                      )}
                      
                      {project.liveUrl && (
                        <a 
                          href={project.liveUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-2 w-full py-3 rounded-lg bg-slate-900/5 dark:bg-white/5 hover:bg-slate-900/10 dark:bg-white/10 border border-slate-900/10 dark:border-white/10 text-slate-900 dark:text-white text-sm font-medium transition-colors"
                        >
                          <ExternalLink size={18} /> Live Demo / Site
                        </a>
                      )}
                    </div>
                  )}

                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default CaseStudyModal;


