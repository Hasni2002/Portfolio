import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../../data/portfolioData';
import { Briefcase, BookOpen } from 'lucide-react';
import CaseStudyModal from '../ui/CaseStudyModal';
import type { Project } from '../../types';

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 flex items-center gap-3">
            <Briefcase className="text-accent" size={32} />
            Engineering <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-accent rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioData.projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-panel rounded-2xl overflow-hidden group flex flex-col h-full hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] transition-shadow cursor-pointer"
              onClick={() => setSelectedProject(project as Project)}
            >
              <div className="relative h-56 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent z-10"></div>
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 backdrop-blur-[2px] flex items-center justify-center">
                  <span className="text-slate-900 dark:text-white font-bold tracking-wider uppercase text-sm border border-white/50 px-4 py-2 rounded-lg bg-black/40">
                    View Case Study
                  </span>
                </div>
              </div>
              
              <div className="p-6 flex-grow flex flex-col relative z-20 -mt-6">
                <div className="bg-surface/80 backdrop-blur-md rounded-xl p-4 border border-slate-900/5 dark:border-white/5 flex-grow shadow-lg flex flex-col">
                  {project.category && (
                    <span className="text-xs text-accent font-semibold uppercase tracking-wider mb-2">
                      {project.category}
                    </span>
                  )}
                  <h3 className="text-xl font-bold mb-3 group-hover:text-accent transition-colors">{project.title}</h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm mb-6 line-clamp-3">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6 mt-auto">
                    {project.techStack.slice(0, 3).map((tech) => (
                      <span key={tech} className="text-xs font-medium text-slate-700 dark:text-slate-300 bg-slate-900/5 dark:bg-white/5 px-2.5 py-1 rounded-md">
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 3 && (
                      <span className="text-xs font-medium text-slate-600 dark:text-slate-400 px-1 py-1">
                        +{project.techStack.length - 3} more
                      </span>
                    )}
                  </div>

                  <div className="flex gap-3 pt-4 border-t border-slate-900/10 dark:border-white/10">
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedProject(project as Project);
                      }}
                      className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg bg-accent/10 hover:bg-accent/20 border border-accent/20 text-accent text-sm font-medium transition-colors"
                    >
                      <BookOpen size={16} /> Case Study
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Modal */}
      <CaseStudyModal 
        project={selectedProject} 
        isOpen={!!selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </section>
  );
};

export default Projects;


