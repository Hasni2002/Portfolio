"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react";
import { Linkedin, Github } from "@/components/SocialIcons";

export default function Contact() {
  const [formState, setFormState] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API request
    setTimeout(() => {
      setSubmitted(true);
      setFormState({ name: "", email: "", subject: "", message: "" });
    }, 800);
  };

  return (
    <section id="contact" className="py-24 border-b border-card-border relative overflow-hidden">
      <div className="container mx-auto px-6">
        
        {/* Section Heading */}
        <div className="mb-16">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-8 h-[1px] bg-secondary" />
            <span className="text-xs font-mono tracking-widest text-secondary uppercase">13 / Inquiries</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-montserrat font-extrabold tracking-tight text-primary dark:text-white">
            CONTACT ME
          </h2>
        </div>

        {/* Contact Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch max-w-6xl mx-auto">
          
          {/* Left Side: Contact details & Vector Map */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            <div className="glass-panel rounded-lg p-6 border border-card-border space-y-6">
              <h3 className="text-lg font-montserrat font-extrabold text-primary dark:text-white border-b border-card-border pb-2">
                OFFICE & COORDINATES
              </h3>

              <div className="space-y-4 font-mono text-xs md:text-sm text-foreground/90 dark:text-[#E0E1DD]">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded bg-primary/5 dark:bg-white/5 border border-card-border flex items-center justify-center text-primary dark:text-secondary">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] text-secondary font-bold">EMAIL ADDRESS</div>
                    <a href="mailto:hasniahamed2002@gmail.com" className="hover:underline">
                      hasniahamed2002@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded bg-primary/5 dark:bg-white/5 border border-card-border flex items-center justify-center text-primary dark:text-secondary">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] text-secondary font-bold">TELEPHONE CONTACT</div>
                    <a href="tel:+94771234567" className="hover:underline">
                      +94 77 123 4567
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded bg-primary/5 dark:bg-white/5 border border-card-border flex items-center justify-center text-primary dark:text-secondary">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] text-secondary font-bold">ADDRESS COORDINATES</div>
                    <span>General Sir John Kotelawala Defence University, Ratmalana, Sri Lanka</span>
                  </div>
                </div>
              </div>

              {/* Social Channels */}
              <div className="pt-4 border-t border-card-border flex gap-3">
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded border border-card-border bg-card-bg text-foreground/80 hover:text-primary dark:hover:text-white transition-all flex items-center justify-center cursor-pointer"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a 
                  href="https://github.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded border border-card-border bg-card-bg text-foreground/80 hover:text-primary dark:hover:text-white transition-all flex items-center justify-center cursor-pointer"
                  aria-label="GitHub Profile"
                >
                  <Github className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Interactive Vector Map of Sri Lanka */}
            <div className="glass-panel rounded-lg p-6 border border-card-border flex-1 flex flex-col justify-between min-h-[250px] relative">
              <div className="text-[9px] font-mono text-secondary uppercase font-bold mb-3">
                PROJECT MAP DATUM // SRI_LANKA
              </div>
              
              {/* Interactive SVG Drawing */}
              <div className="flex-1 flex items-center justify-center">
                <svg
                  className="w-40 h-52 text-secondary/30 dark:text-secondary/20"
                  viewBox="0 0 100 150"
                  fill="currentColor"
                >
                  {/* Simplistic outline map of Sri Lanka */}
                  <path
                    d="M 50,10 C 58,15 62,25 65,35 C 68,45 78,55 78,65 C 78,75 75,85 70,95 C 65,105 60,115 52,125 C 48,130 45,138 42,142 C 40,140 37,135 34,130 C 31,120 28,110 26,100 C 24,90 20,80 20,70 C 20,60 25,50 28,40 C 31,30 35,20 40,12 Z"
                    className="fill-none stroke-current"
                    strokeWidth="1.5"
                    strokeDasharray="3 3"
                  />
                  {/* Pinpointing Colombo / KDU */}
                  <circle cx="31" cy="74" r="2.5" className="fill-accent stroke-background" strokeWidth="0.5" />
                  <line x1="31" y1="74" x2="48" y2="85" className="stroke-accent" strokeWidth="0.5" />
                  <rect x="48" y="80" width="45" height="12" rx="1" className="fill-background stroke-card-border" strokeWidth="0.5" />
                  <text x="51" y="88" className="text-[5px] font-mono fill-foreground font-bold font-semibold">KDU, Colombo</text>
                </svg>
              </div>

              <div className="text-[8px] font-mono text-secondary text-center mt-3 select-none">
                LAT: 6.8159° N &bull; LON: 79.8801° E (KDU Campus)
              </div>
            </div>
          </div>

          {/* Right Side: Contact Form */}
          <div className="lg:col-span-7">
            <div className="glass-panel rounded-lg p-6 md:p-8 border border-card-border h-full flex flex-col justify-between relative">
              {/* Corner markings */}
              <div className="absolute top-2 right-2 text-[8px] font-mono text-secondary">
                SHEET_REF: CON_01
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-montserrat font-extrabold text-primary dark:text-white">
                    TECHNICAL TRANSMITTAL FORM
                  </h3>
                  <p className="text-xs font-mono text-secondary mt-1">
                    Send specifications or project inquiries directly.
                  </p>
                </div>

                <AnimatePresence mode="wait">
                  {submitted ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="bg-accent/10 border border-accent/20 rounded p-6 text-center space-y-4 flex flex-col items-center justify-center my-12"
                    >
                      <CheckCircle2 className="w-12 h-12 text-accent" />
                      <h4 className="text-base font-montserrat font-extrabold text-primary dark:text-white">
                        TRANSMITTAL DELIVERED
                      </h4>
                      <p className="text-xs font-mono text-foreground/80 dark:text-[#E0E1DD]/80 max-w-sm">
                        Thank you. Your message has been logged. I will review the coordinates and respond within 24 hours.
                      </p>
                    </motion.div>
                  ) : (
                    <motion.form 
                      key="form"
                      onSubmit={handleSubmit} 
                      className="space-y-4 font-mono text-xs md:text-sm"
                    >
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-1.5">
                          <label className="text-[10px] text-secondary font-bold uppercase">Your Name</label>
                          <input
                            type="text"
                            required
                            value={formState.name}
                            onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                            className="w-full p-3 rounded border border-card-border bg-card-bg text-foreground placeholder:text-secondary focus:outline-none focus:border-secondary transition-all"
                            placeholder="e.g. John Doe"
                          />
                        </div>
                        <div className="space-y-1.5">
                          <label className="text-[10px] text-secondary font-bold uppercase">Your Email</label>
                          <input
                            type="email"
                            required
                            value={formState.email}
                            onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                            className="w-full p-3 rounded border border-card-border bg-card-bg text-foreground placeholder:text-secondary focus:outline-none focus:border-secondary transition-all"
                            placeholder="e.g. john@example.com"
                          />
                        </div>
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-[10px] text-secondary font-bold uppercase">Subject / Project Reference</label>
                        <input
                          type="text"
                          required
                          value={formState.subject}
                          onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                          className="w-full p-3 rounded border border-card-border bg-card-bg text-foreground placeholder:text-secondary focus:outline-none focus:border-secondary transition-all"
                          placeholder="e.g. Structural Drafting Consultations"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-[10px] text-secondary font-bold uppercase">Specification / Message</label>
                        <textarea
                          required
                          rows={6}
                          value={formState.message}
                          onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                          className="w-full p-3 rounded border border-card-border bg-card-bg text-foreground placeholder:text-secondary focus:outline-none focus:border-secondary transition-all resize-none"
                          placeholder="Write technical requirements or project scopes..."
                        />
                      </div>

                      <button
                        type="submit"
                        className="px-6 py-3 rounded bg-primary dark:bg-[#4E6E81] text-white font-poppins text-xs font-bold uppercase tracking-wider shadow-md hover:opacity-90 flex items-center justify-center gap-2 cursor-pointer w-full md:w-auto"
                      >
                        <Send className="w-4 h-4" />
                        Transmit Message
                      </button>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
