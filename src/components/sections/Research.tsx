import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../../data/portfolioData';
import { BookOpen, ExternalLink, GraduationCap, ChevronRight } from 'lucide-react';

const Research: React.FC = () => {
  return (
    <section id="research" className="py-24 relative">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 flex items-center gap-3">
            <GraduationCap className="text-accent" size={32} />
            Academic <span className="text-gradient">Research</span>
          </h2>
          <div className="w-20 h-1 bg-accent rounded-full mb-6"></div>
          <p className="text-slate-400 max-w-2xl text-lg">
            Investigating advanced computational models and sustainable materials to push the boundaries of modern civil engineering.
          </p>
        </motion.div>

        <div className="space-y-8">
          {portfolioData.research.map((paper, index) => (
            <motion.div
              key={paper.id}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-panel rounded-2xl p-6 md:p-8 flex flex-col md:flex-row gap-8 border border-white/5 hover:border-accent/30 transition-colors"
            >
              <div className="flex-grow">
                <span className="text-xs text-accent font-semibold uppercase tracking-wider mb-2 block">
                  {paper.researchArea}
                </span>
                <h3 className="text-2xl font-bold text-white mb-4 leading-tight">
                  {paper.title}
                </h3>
                
                {paper.conferencePaper && (
                  <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-3 py-1.5 rounded-lg text-sm font-medium mb-6">
                    <BookOpen size={16} />
                    <span>{paper.conferencePaper}</span>
                  </div>
                )}

                <div className="bg-background/50 border border-white/5 rounded-xl p-5 mb-6">
                  <h4 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-2">Abstract</h4>
                  <p className="text-slate-300 leading-relaxed italic text-sm md:text-base">
                    "{paper.abstract}"
                  </p>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {paper.keywords.map((keyword, idx) => (
                    <span key={idx} className="text-xs font-medium text-slate-300 bg-white/5 border border-white/10 px-3 py-1 rounded-full">
                      {keyword}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Right Column / Actions & Future Scope */}
              <div className="md:w-80 shrink-0 flex flex-col">
                <div className="bg-surface/80 border border-white/5 rounded-xl p-6 mb-6 flex-grow">
                  <h4 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-4">Future Scope</h4>
                  <ul className="space-y-3">
                    {paper.futureScope.map((scope, idx) => (
                      <li key={idx} className="flex gap-2 text-sm text-slate-300">
                        <ChevronRight className="text-accent shrink-0 mt-0.5" size={16} />
                        <span>{scope}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {paper.technicalReportUrl && (
                  <a 
                    href={paper.technicalReportUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-3.5 rounded-lg bg-accent hover:bg-accent/90 text-background font-bold transition-colors shadow-lg shadow-accent/20"
                  >
                    <ExternalLink size={18} /> Read Technical Report
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Research;
