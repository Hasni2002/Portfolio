import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../../data/portfolioData';
import { Camera, MapPin, Calendar } from 'lucide-react';

const SiteVisits: React.FC = () => {
  return (
    <section id="site-visits" className="py-24 relative bg-surface/30">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 flex items-center gap-3">
            <Camera className="text-accent" size={32} />
            Field Work & <span className="text-gradient">Site Visits</span>
          </h2>
          <div className="w-20 h-1 bg-accent rounded-full mb-6"></div>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl text-lg">
            Practical exposure bridges the gap between theoretical calculations and real-world execution. Here are some key projects I've inspected on-site.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {portfolioData.siteVisits.map((visit, index) => (
            <motion.div
              key={visit.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl glass-panel aspect-[4/3] sm:aspect-[16/9]"
            >
              {/* Image Background */}
              <img 
                src={visit.imageUrl} 
                alt={visit.title} 
                className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
              
              {/* Gradient Overlay (Always visible at bottom, darker on hover) */}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300"></div>
              
              {/* Content */}
              <div className="absolute inset-0 p-6 sm:p-8 flex flex-col justify-end">
                <span className="inline-block px-3 py-1 bg-accent/20 text-accent border border-accent/20 rounded-full text-xs font-semibold mb-3 w-max backdrop-blur-md uppercase tracking-wider">
                  {visit.category}
                </span>
                
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">{visit.title}</h3>
                
                <div className="flex flex-wrap items-center gap-4 text-sm text-slate-700 dark:text-slate-300 mb-4">
                  <div className="flex items-center gap-1.5">
                    <MapPin size={16} className="text-accent" />
                    <span>{visit.location}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Calendar size={16} className="text-accent" />
                    <span>{visit.date}</span>
                  </div>
                </div>
                
                <p className="text-slate-800 dark:text-slate-200 line-clamp-3 group-hover:line-clamp-none transition-all duration-300 text-sm sm:text-base hidden sm:block">
                  {visit.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SiteVisits;


