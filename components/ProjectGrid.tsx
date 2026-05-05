"use client";
import { projects } from "@/data/projects";
import { motion } from "framer-motion";
import { ExternalLink, Code2 } from "lucide-react";
import Image from "next/image"; // 1. Import Image component

export default function ProjectGrid() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section id="projects" className="py-24 px-4 bg-[#050505]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div className="max-w-2xl">
            <h2 className="text-4xl font-bold text-white mb-4 italic tracking-tight">
              Selected Works
            </h2>
            <p className="text-neutral-500 text-lg">
              A collection of production-ready applications, ranging from AI-powered search engines to complex financial reconciliation systems.
            </p>
          </div>
          <div className="flex items-center gap-2 text-neutral-500 text-sm font-mono">
            <Code2 size={16} className="text-indigo-500" />
            <span>6 Projects Developed</span>
          </div>
        </div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={item}
              className="group relative flex flex-col h-full bg-[#0A0A0A] border border-neutral-900 rounded-3xl p-6 hover:border-indigo-500/30 hover:bg-[#0d0d0d] transition-all duration-500 overflow-hidden"
            >
              {/* 2. ADDED: Image Container */}
              <div className="relative w-full h-48 mb-6 overflow-hidden rounded-2xl bg-neutral-900">
                <Image 
                  src={project.image} 
                  alt={project.title}
                  fill
                  className="object-fill group-hover:scale-110 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                  sizes="(max-w-768px) 100vw, 33vw"
                />
                {/* Subtle Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/80 to-transparent opacity-60" />
              </div>

              {/* Github & Link Icons */}
              <div className="flex gap-4 text-neutral-600 items-center mb-6">
                {project.github.web && project.github.web !== "#" && (
                  <a href={project.github.web} target="_blank" className="hover:text-white transition-colors flex items-center gap-1" title="Web Dashboard Source">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
                    <span className="text-[10px] font-bold">Web</span>
                  </a>
                )}

                {project.github.mobile && project.github.mobile !== "#" && (
                  <a href={project.github.mobile} target="_blank" className="hover:text-indigo-400 transition-colors flex items-center gap-1" title="Mobile App Source">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
                    <span className="text-[10px] font-bold">App</span>
                  </a>
                )}
                
                <a href={project.link} target="_blank" className="hover:text-white transition-colors" title="Live Site">
                  <ExternalLink size={18} />
                </a>
              </div>

              <div className="flex-grow">
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-indigo-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-neutral-500 text-[10px] font-mono uppercase tracking-widest mb-4">
                  {project.category}
                </p>
                <p className="text-neutral-400 text-sm leading-relaxed mb-6 opacity-80">
                  {project.longDescription}
                </p>
              </div>

              <div className="mt-auto">
                <div className="flex flex-wrap gap-2 pt-4 border-t border-neutral-900/50">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className="text-[9px] font-semibold bg-neutral-950 text-neutral-500 border border-neutral-800 px-2 py-1 rounded-md uppercase tracking-wider group-hover:border-neutral-700 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}