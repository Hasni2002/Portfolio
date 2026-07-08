"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { personalInfo, educationList, skillCategories, achievementsList } from "../data/portfolioData";
import { FileText, Download, Copy, Check, ChevronRight } from "lucide-react";

export default function ResumeCV() {
  const [copiedSection, setCopiedSection] = useState<string | null>(null);

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedSection(id);
    setTimeout(() => setCopiedSection(null), 2000);
  };

  const personalDetailsText = `
Name: ${personalInfo.name}
Title: ${personalInfo.title}
University: ${personalInfo.university}
Headline: ${personalInfo.headline}
Mission: ${personalInfo.mission}
  `.trim();

  return (
    <section id="resume" className="py-24 border-b border-card-border relative bg-primary/[0.01] dark:bg-white/[0.005]">
      <div className="container mx-auto px-6">
        
        {/* Section Heading & Download */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-[1px] bg-secondary" />
              <span className="text-xs font-mono tracking-widest text-secondary uppercase">12 / CV</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-montserrat font-extrabold tracking-tight text-primary dark:text-white">
              INTERACTIVE RESUME
            </h2>
          </div>

          {/* Download Resume PDF */}
          <a
            href="/certificates/93807498-Ahamed,H-Student Membership Letter.pdf" // Default PDF fallback
            download="Hasni_Ahamed_Resume.pdf"
            className="px-6 py-3 rounded bg-accent hover:bg-accent/90 text-white font-poppins text-xs font-bold uppercase tracking-wider shadow-md flex items-center gap-2 w-fit cursor-pointer"
          >
            <Download className="w-4 h-4" />
            Download Resume PDF
          </a>
        </div>

        {/* Interactive CV Layout */}
        <div className="max-w-4xl mx-auto glass-panel rounded-lg border border-card-border shadow-md overflow-hidden">
          
          {/* CV Header */}
          <div className="p-6 md:p-8 bg-primary/5 dark:bg-white/5 border-b border-card-border flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl md:text-3xl font-montserrat font-extrabold text-primary dark:text-white">
                {personalInfo.name}
              </h3>
              <p className="text-sm font-poppins font-medium text-secondary mt-1">
                {personalInfo.title}
              </p>
              <p className="text-xs font-mono text-foreground/80 dark:text-[#E0E1DD]/80 mt-1">
                {personalInfo.university}
              </p>
            </div>
            
            <button
              onClick={() => handleCopy(personalDetailsText, "header")}
              className="px-4 py-2 rounded border border-card-border bg-card-bg text-xs font-mono text-foreground/80 hover:text-primary dark:hover:text-white transition-all flex items-center gap-1.5 cursor-pointer"
            >
              {copiedSection === "header" ? (
                <>
                  <Check className="w-3.5 h-3.5 text-accent" />
                  Copied Contact details!
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  Copy Details
                </>
              )}
            </button>
          </div>

          {/* CV Sections */}
          <div className="p-6 md:p-8 space-y-8 font-mono text-xs md:text-sm text-foreground/90 dark:text-[#E0E1DD]">
            
            {/* Summary */}
            <div className="space-y-3">
              <h4 className="text-sm font-montserrat font-extrabold text-primary dark:text-white border-b border-card-border pb-1 uppercase">
                1.0 Professional Profile Summary
              </h4>
              <p className="leading-relaxed">
                {personalInfo.objective}
              </p>
            </div>

            {/* Education */}
            <div className="space-y-4">
              <h4 className="text-sm font-montserrat font-extrabold text-primary dark:text-white border-b border-card-border pb-1 uppercase">
                2.0 Academic Background
              </h4>
              <div className="space-y-4">
                {educationList.map((edu, idx) => (
                  <div key={idx} className="space-y-1">
                    <div className="flex justify-between items-start flex-wrap gap-2">
                      <strong className="text-primary dark:text-white">{edu.degree}</strong>
                      <span className="text-secondary font-bold">{edu.period}</span>
                    </div>
                    <div>{edu.institution}</div>
                    <div className="text-accent font-bold">Grade Status: {edu.gpa}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Core Competencies Matrix */}
            <div className="space-y-4">
              <h4 className="text-sm font-montserrat font-extrabold text-primary dark:text-white border-b border-card-border pb-1 uppercase">
                3.0 Engineering Competence Matrix
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {skillCategories.map((cat, idx) => (
                  <div key={idx} className="space-y-2">
                    <strong className="text-primary dark:text-white uppercase text-xs">{cat.title}:</strong>
                    <div className="flex flex-wrap gap-1.5">
                      {cat.skills.map((skill) => (
                        <span key={skill.name} className="px-2.5 py-1 rounded-sm bg-card-bg border border-card-border text-[10px]">
                          {skill.name} ({skill.level}%)
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Achievements */}
            <div className="space-y-3">
              <h4 className="text-sm font-montserrat font-extrabold text-primary dark:text-white border-b border-card-border pb-1 uppercase">
                4.0 Accolades & Accreditations
              </h4>
              <div className="space-y-2">
                {achievementsList.map((ach) => (
                  <div key={ach.id} className="flex items-start gap-2.5">
                    <span className="text-[#4CAF50] font-bold font-mono mt-0.5">&rsaquo;</span>
                    <div>
                      <strong>{ach.title}</strong> &mdash; <span>{ach.awarder} ({ach.date})</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* References */}
            <div className="space-y-3">
              <h4 className="text-sm font-montserrat font-extrabold text-primary dark:text-white border-b border-card-border pb-1 uppercase">
                5.0 Academic References
              </h4>
              <p className="leading-relaxed italic">
                Available immediately upon request (Faculty of Engineering, General Sir John Kotelawala Defence University, Sri Lanka).
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
