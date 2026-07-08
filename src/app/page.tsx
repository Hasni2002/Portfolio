"use client";

import React, { useState, useEffect } from "react";
import Lenis from "lenis";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Education from "@/components/Education";
import SkillsHex from "@/components/SkillsHex";
import Projects from "@/components/Projects";
import Research from "@/components/Research";
import Experience from "@/components/Experience";
import SiteVisits from "@/components/SiteVisits";
import Certifications from "@/components/Certifications";
import Achievements from "@/components/Achievements";
import Gallery from "@/components/Gallery";
import Blog from "@/components/Blog";
import ResumeCV from "@/components/ResumeCV";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [activeSection, setActiveSection] = useState("home");

  // Load and apply initial theme preference
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
    const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    
    const initialTheme = savedTheme || (systemPrefersDark ? "dark" : "light");
    setTheme(initialTheme);
    
    if (initialTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    
    if (newTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  // Initialize Lenis Smooth Scroll
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  // Section Observer for scroll-spy active highlights
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -60% 0px", // Focus window for active section detection
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  // Smooth scroll handler targeting element IDs
  const handleScrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setActiveSection(id);
    }
  };

  return (
    <div className="relative min-h-screen flex flex-col justify-between">
      {/* Sticky Top Navbar */}
      <Navbar 
        theme={theme} 
        toggleTheme={toggleTheme} 
        activeSection={activeSection} 
        onScrollToSection={handleScrollToSection} 
      />

      {/* Main Sections */}
      <main className="flex-1">
        <Hero theme={theme} onScrollToSection={handleScrollToSection} />
        <About />
        <Education />
        <SkillsHex />
        <Projects />
        <Research />
        <Experience />
        <SiteVisits />
        <Certifications />
        <Achievements />
        <Gallery />
        <Blog />
        <ResumeCV />
        <Contact />
      </main>

      {/* Site Footer */}
      <Footer onScrollToSection={handleScrollToSection} />
    </div>
  );
}
