"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { certificationsList } from "../data/portfolioData";
import { Award, FileText, CheckCircle, Search, ExternalLink } from "lucide-react";

export default function Certifications() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCerts = certificationsList.filter((cert) =>
    cert.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    cert.issuer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section id="certifications" className="py-24 border-b border-card-border relative bg-primary/[0.01] dark:bg-white/[0.005]">
      <div className="container mx-auto px-6">
        
        {/* Section Heading & Search */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-[1px] bg-secondary" />
              <span className="text-xs font-mono tracking-widest text-secondary uppercase">08 / Credentials</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-montserrat font-extrabold tracking-tight text-primary dark:text-white">
              CERTIFICATIONS
            </h2>
          </div>

          {/* Search bar styled like a command solver */}
          <div className="relative w-full max-w-xs">
            <Search className="w-4 h-4 text-secondary absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search Certificates..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-9 pr-4 py-2 rounded border border-card-border bg-card-bg text-xs font-mono placeholder:text-secondary focus:outline-none focus:border-secondary transition-all"
            />
          </div>
        </div>

        {/* Certificate Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCerts.map((cert, idx) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="glass-card rounded-lg p-6 shadow-sm border border-card-border flex flex-col justify-between space-y-4 group relative overflow-hidden"
            >
              {/* Engineering watermark */}
              <div className="absolute top-2 right-2 opacity-5 select-none pointer-events-none">
                <Award className="w-16 h-16 text-secondary" />
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-accent" />
                  <span className="text-[10px] font-mono text-secondary uppercase font-bold">
                    VERIFIED CREDENTIAL
                  </span>
                </div>

                <h3 className="text-base font-montserrat font-extrabold text-primary dark:text-white leading-snug group-hover:text-accent transition-colors">
                  {cert.title}
                </h3>

                <p className="text-xs font-poppins font-medium text-secondary">
                  ISSUER: {cert.issuer}
                </p>

                <div className="flex flex-col gap-1 text-[10px] font-mono text-foreground/70 dark:text-[#E0E1DD]/70">
                  <span>DATE: {cert.date}</span>
                  {cert.credentialId && <span>ID: {cert.credentialId}</span>}
                </div>
              </div>

              {/* Verify Link */}
              <div className="pt-2 border-t border-card-border flex items-center justify-between">
                <span className="text-[9px] font-mono text-secondary font-semibold">SECURITY: SECURE_LINK</span>
                
                {cert.pdfUrl && (
                  <a
                    href={cert.pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-xs font-poppins font-bold text-accent hover:underline cursor-pointer"
                  >
                    <span>Verify Credential</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
