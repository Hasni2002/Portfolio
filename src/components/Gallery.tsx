"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { galleryList, GalleryItem } from "../data/portfolioData";
import { Filter, Maximize2, X, Image as ImageIcon } from "lucide-react";

const categories = [
  { id: "all", label: "All Items" },
  { id: "survey", label: "Survey Camp" },
  { id: "lab", label: "Laboratories" },
  { id: "construction", label: "Construction Sites" },
  { id: "drone", label: "Drone Photography" },
  { id: "infrastructure", label: "Infrastructure" },
  { id: "research", label: "Research" },
  { id: "university", label: "University Life" },
  { id: "visits", label: "Site Visits" }
];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  const filteredItems = activeCategory === "all"
    ? galleryList
    : galleryList.filter((item) => item.category === activeCategory);

  return (
    <section id="gallery" className="py-24 border-b border-card-border relative bg-primary/[0.01] dark:bg-white/[0.005]">
      <div className="container mx-auto px-6">
        
        {/* Section Heading & Filters */}
        <div className="flex flex-col xl:flex-row xl:items-end justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-[1px] bg-secondary" />
              <span className="text-xs font-mono tracking-widest text-secondary uppercase">10 / Imagery</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-montserrat font-extrabold tracking-tight text-primary dark:text-white">
              PROJECT PHOTO LOG
            </h2>
          </div>

          {/* Filtering buttons */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3 py-1.5 rounded text-[10px] font-poppins font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                  activeCategory === cat.id
                    ? "bg-primary text-white dark:bg-[#4E6E81]"
                    : "bg-card-bg hover:bg-card-border/10 text-foreground/80"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Masonry Columns Layout */}
        <div className="columns-1 sm:columns-2 md:columns-3 gap-6 space-y-6 max-w-6xl mx-auto">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5 }}
                className="break-inside-avoid glass-card rounded overflow-hidden shadow-sm border border-card-border group cursor-pointer relative"
                onClick={() => setSelectedImage(item)}
              >
                {/* Image */}
                <div className="relative overflow-hidden w-full bg-primary/10">
                  <img 
                    src={item.imageUrl} 
                    alt={item.title}
                    className="w-full object-cover filter brightness-95 group-hover:scale-105 transition-transform duration-500"
                  />
                  
                  {/* Zoom Overlay */}
                  <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-all duration-300">
                    <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white border border-white/20">
                      <Maximize2 className="w-5 h-5" />
                    </div>
                  </div>
                </div>

                {/* Caption Panel */}
                <div className="p-3 bg-card-bg/80 backdrop-blur-md border-t border-card-border flex items-center justify-between">
                  <span className="text-[10px] font-montserrat font-bold truncate text-primary dark:text-white mr-2">
                    {item.title}
                  </span>
                  <span className="text-[8px] font-mono text-secondary uppercase font-semibold">
                    {item.category}
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Full-Screen Light-box Modal */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex flex-col items-center justify-center p-4"
              onClick={() => setSelectedImage(null)}
            >
              {/* Close Button */}
              <button 
                className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/10 transition-colors cursor-pointer"
                onClick={() => setSelectedImage(null)}
              >
                <X className="w-5 h-5" />
              </button>

              {/* Light-box photo */}
              <motion.div
                initial={{ scale: 0.95 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.95 }}
                className="relative max-w-4xl max-h-[80vh] rounded overflow-hidden border border-white/10"
                onClick={(e) => e.stopPropagation()}
              >
                <img 
                  src={selectedImage.imageUrl} 
                  alt={selectedImage.title}
                  className="w-full h-full object-contain"
                />
              </motion.div>

              {/* Caption */}
              <div className="mt-4 text-center max-w-md font-mono space-y-1">
                <h4 className="text-white font-montserrat font-bold text-sm">
                  {selectedImage.title}
                </h4>
                <p className="text-[#4E6E81] text-xs uppercase font-semibold">
                  SECTION CATEGORY: {selectedImage.category}
                </p>
              </div>

            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
