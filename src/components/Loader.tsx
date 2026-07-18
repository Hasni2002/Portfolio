import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Loader: React.FC<{ onLoadingComplete: () => void }> = ({ onLoadingComplete }) => {
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    // Show text slightly after truss starts drawing
    const textTimer = setTimeout(() => setShowText(true), 1200);
    // End loading after animation sequence finishes
    const endTimer = setTimeout(() => onLoadingComplete(), 2800);
    
    return () => {
      clearTimeout(textTimer);
      clearTimeout(endTimer);
    };
  }, [onLoadingComplete]);

  // Framer Motion variants for drawing paths
  const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i: number) => {
      const delay = i * 0.15;
      return {
        pathLength: 1,
        opacity: 1,
        transition: {
          pathLength: { delay, type: "spring", duration: 1.5, bounce: 0 },
          opacity: { delay, duration: 0.01 }
        }
      };
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background">
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="flex flex-col items-center"
      >
        {/* Truss Bridge SVG Animation */}
        <motion.svg
          width="240"
          height="120"
          viewBox="0 0 240 120"
          initial="hidden"
          animate="visible"
          className="text-accent overflow-visible"
        >
          {/* Bottom Chord */}
          <motion.line x1="20" y1="90" x2="220" y2="90" stroke="currentColor" strokeWidth="5" strokeLinecap="round" variants={draw} custom={0} />
          {/* Top Chord */}
          <motion.line x1="60" y1="30" x2="180" y2="30" stroke="currentColor" strokeWidth="5" strokeLinecap="round" variants={draw} custom={1} />
          
          {/* Vertical Members */}
          <motion.line x1="60" y1="30" x2="60" y2="90" stroke="currentColor" strokeWidth="4" strokeLinecap="round" variants={draw} custom={2} />
          <motion.line x1="100" y1="30" x2="100" y2="90" stroke="currentColor" strokeWidth="4" strokeLinecap="round" variants={draw} custom={3} />
          <motion.line x1="140" y1="30" x2="140" y2="90" stroke="currentColor" strokeWidth="4" strokeLinecap="round" variants={draw} custom={4} />
          <motion.line x1="180" y1="30" x2="180" y2="90" stroke="currentColor" strokeWidth="4" strokeLinecap="round" variants={draw} custom={5} />
          
          {/* Diagonal Members */}
          <motion.line x1="20" y1="90" x2="60" y2="30" stroke="#f59e0b" strokeWidth="4" strokeLinecap="round" variants={draw} custom={2.5} />
          <motion.line x1="60" y1="30" x2="100" y2="90" stroke="#f59e0b" strokeWidth="4" strokeLinecap="round" variants={draw} custom={3.5} />
          <motion.line x1="100" y1="90" x2="140" y2="30" stroke="#f59e0b" strokeWidth="4" strokeLinecap="round" variants={draw} custom={4.5} />
          <motion.line x1="140" y1="30" x2="180" y2="90" stroke="#f59e0b" strokeWidth="4" strokeLinecap="round" variants={draw} custom={5.5} />
          <motion.line x1="180" y1="30" x2="220" y2="90" stroke="#f59e0b" strokeWidth="4" strokeLinecap="round" variants={draw} custom={6} />
        </motion.svg>

        {/* Loading Text */}
        <AnimatePresence>
          {showText && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="mt-8 flex items-center gap-3"
            >
              <div className="w-2 h-2 rounded-full bg-purple animate-ping"></div>
              <span className="font-display font-semibold tracking-widest text-slate-700 dark:text-slate-300 uppercase text-sm">
                Engineering in Progress
              </span>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default Loader;


