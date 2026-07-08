"use client";

import React, { useState, useEffect } from "react";
import { Sun, Moon, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface NavbarProps {
  theme: "light" | "dark";
  toggleTheme: () => void;
  activeSection: string;
  onScrollToSection: (id: string) => void;
}

const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "education", label: "Education" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "research", label: "Research" },
  { id: "experience", label: "Experience" },
  { id: "certifications", label: "Certifications" },
  { id: "gallery", label: "Gallery" },
  { id: "blog", label: "Blog" },
  { id: "resume", label: "Resume" },
  { id: "contact", label: "Contact" }
];

export default function Navbar({ theme, toggleTheme, activeSection, onScrollToSection }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollPercentage, setScrollPercentage] = useState(0);

  // Monitor scrolling to add background blur and update progress bar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight > 0) {
        const pct = (window.scrollY / docHeight) * 100;
        setScrollPercentage(pct);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (id: string) => {
    setMobileMenuOpen(false);
    onScrollToSection(id);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled 
            ? "glass-panel border-b border-card-border py-3" 
            : "bg-transparent py-5"
        }`}
      >
        {/* Scroll Progress Bar */}
        <div 
          className="absolute top-0 left-0 h-[3px] bg-accent transition-all duration-75"
          style={{ width: `${scrollPercentage}%` }}
        />

        <div className="container mx-auto px-6 flex items-center justify-between">
          {/* Logo Branding */}
          <div 
            onClick={() => onScrollToSection("home")}
            className="flex items-center gap-2 cursor-pointer select-none"
          >
            <div className="w-8 h-8 rounded border border-primary dark:border-secondary flex items-center justify-center font-montserrat font-extrabold text-sm text-primary dark:text-white">
              HA
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-montserrat font-black tracking-wider text-primary dark:text-white leading-none">HASNI AHAMED</span>
              <span className="text-[8px] font-mono text-secondary tracking-widest leading-none mt-1">CIVIL ENGINEER UNDERGRADUATE</span>
            </div>
          </div>

          {/* Desktop Navigation Link Items */}
          <nav className="hidden xl:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleLinkClick(item.id)}
                  className={`px-3 py-1.5 rounded text-xs font-poppins font-medium tracking-wide uppercase transition-all relative cursor-pointer ${
                    isActive 
                      ? "text-primary dark:text-[#4CAF50] font-bold" 
                      : "text-foreground/75 hover:text-primary dark:hover:text-white"
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute bottom-0 left-3 right-3 h-[2px] bg-primary dark:bg-accent"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Actions: Theme Toggle + Mobile Menu Trigger */}
          <div className="flex items-center gap-4">
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded border border-card-border bg-card-bg text-foreground/80 hover:text-primary dark:hover:text-white transition-all cursor-pointer"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-primary" />}
            </button>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 rounded border border-card-border bg-card-bg text-foreground/85 transition-all cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="xl:hidden bg-background border-b border-card-border glass-panel absolute top-full left-0 right-0 overflow-hidden shadow-lg"
            >
              <div className="px-6 py-4 flex flex-col gap-2">
                {navItems.map((item) => {
                  const isActive = activeSection === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => handleLinkClick(item.id)}
                      className={`py-2 px-3 text-left rounded text-xs font-poppins font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                        isActive
                          ? "bg-primary/5 text-primary dark:bg-white/5 dark:text-accent border-l-2 border-primary dark:border-accent"
                          : "text-foreground/75 hover:bg-card-border/10"
                      }`}
                    >
                      {item.label}
                    </button>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
