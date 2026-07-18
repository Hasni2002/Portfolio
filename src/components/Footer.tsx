import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { Link } from 'react-scroll';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-surface/80 border-t border-slate-900/5 dark:border-white/5 pt-16 pb-8 relative overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent"></div>
      
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <Link to="home" smooth={true} duration={500} className="cursor-pointer inline-block mb-4">
              <div className="text-2xl font-bold tracking-tighter">
                <span className="text-slate-900 dark:text-white">HasBro</span>
                <span className="text-gradient">.</span>
              </div>
            </Link>
            <p className="text-slate-600 dark:text-slate-400 max-w-sm">
              "Engineering resilient infrastructure and sustainable communities for a better tomorrow."
            </p>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-slate-900/10 dark:border-white/10 text-slate-500 text-sm">
          <p className="mb-4 md:mb-0 text-center md:text-left">
            &copy; {currentYear} {portfolioData.personal.name}. All rights reserved.
          </p>
          
          <p className="flex items-center gap-1.5">
            Designed & Built with Sirius Intelligence.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


