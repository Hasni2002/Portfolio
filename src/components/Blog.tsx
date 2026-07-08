"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { blogPosts, BlogPost } from "../data/portfolioData";
import { BookOpen, Calendar, Clock, X, Search, FileText, ChevronRight } from "lucide-react";

export default function Blog() {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredPosts = blogPosts.filter((post) =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section id="blog" className="py-24 border-b border-card-border relative overflow-hidden">
      <div className="container mx-auto px-6">
        
        {/* Section Heading & Search */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-[1px] bg-secondary" />
              <span className="text-xs font-mono tracking-widest text-secondary uppercase">11 / Publications</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-montserrat font-extrabold tracking-tight text-primary dark:text-white">
              TECHNICAL BLOG & LOGS
            </h2>
          </div>

          <div className="relative w-full max-w-xs">
            <Search className="w-4 h-4 text-secondary absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search Articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-9 pr-4 py-2 rounded border border-card-border bg-card-bg text-xs font-mono placeholder:text-secondary focus:outline-none focus:border-secondary transition-all"
            />
          </div>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {filteredPosts.map((post, idx) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="glass-card rounded-lg p-6 border border-card-border shadow-sm flex flex-col justify-between space-y-4 group cursor-pointer"
              onClick={() => setSelectedPost(post)}
            >
              
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-[10px] font-mono text-secondary">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                <span className="px-2 py-0.5 rounded-sm bg-accent/10 border border-accent/20 text-[#4CAF50] text-[9px] font-mono font-bold uppercase tracking-wider w-fit block">
                  {post.category}
                </span>

                <h3 className="text-base md:text-lg font-montserrat font-extrabold text-primary dark:text-white leading-snug group-hover:text-accent transition-colors line-clamp-2">
                  {post.title}
                </h3>

                <p className="text-xs font-mono text-foreground/80 dark:text-[#E0E1DD]/80 leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>
              </div>

              <div className="pt-2 border-t border-card-border flex items-center justify-between text-xs text-accent font-poppins font-bold">
                <span>Read Full Technical Log</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>

            </motion.div>
          ))}
        </div>

        {/* Full-Post Reader Panel Modal */}
        <AnimatePresence>
          {selectedPost && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 md:p-6"
            >
              <motion.div
                initial={{ scale: 0.95, y: 30 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.95, y: 30 }}
                className="bg-background rounded-lg border border-card-border w-full max-w-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
              >
                
                {/* Header */}
                <div className="glass-panel border-b border-card-border p-4 px-6 flex items-center justify-between z-10">
                  <div className="flex items-center gap-3">
                    <FileText className="w-5 h-5 text-accent" />
                    <div>
                      <h4 className="text-xs font-mono text-secondary uppercase font-semibold leading-none">
                        TECHNICAL LOGGER // {selectedPost.category}
                      </h4>
                      <span className="text-[10px] font-mono text-secondary/70">
                        Published: {selectedPost.date} &bull; {selectedPost.readTime}
                      </span>
                    </div>
                  </div>
                  <button 
                    onClick={() => setSelectedPost(null)}
                    className="p-2 rounded hover:bg-card-border/10 text-foreground/80 transition-colors cursor-pointer"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Article Reader Body */}
                <div className="p-6 md:p-8 overflow-y-auto space-y-6 font-mono text-xs md:text-sm text-foreground/90 dark:text-[#E0E1DD] leading-relaxed">
                  <h3 className="text-lg md:text-2xl font-montserrat font-extrabold text-primary dark:text-white leading-snug border-b border-card-border pb-3">
                    {selectedPost.title}
                  </h3>
                  
                  {/* Process content markdown-like sections */}
                  <div className="space-y-4 whitespace-pre-line text-foreground/85 dark:text-[#E0E1DD]/85">
                    {selectedPost.content}
                  </div>

                  <div className="pt-6 border-t border-card-border flex justify-between items-center text-[10px] font-mono text-secondary">
                    <span>LOGGER_ID: {selectedPost.id}</span>
                    <span>AUTHOR: HASNI AHAMED // CIVIL UNDERGRADUATE</span>
                  </div>
                </div>

              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
