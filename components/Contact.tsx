"use client";
import { motion } from "framer-motion";
import { Mail, Phone, FileText } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-4 bg-[#050505]">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-white mb-6 italic tracking-tight">
            Let&apos;s Build Something Great
          </h2>
          <p className="text-neutral-400 text-lg mb-12 max-w-2xl mx-auto">
            Currently open to <span className="text-white font-medium">Full-stack Engineering roles</span> and high-impact collaborations in AI, Fintech, and Mobile.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {/* Email Link */}
            <a href="mailto:leonardkombo14@gmail.com" 
            suppressHydrationWarning  
            className="p-8 bg-[#0A0A0A] border border-neutral-900 rounded-3xl hover:border-indigo-500/50 transition-all group">
              <Mail className="mx-auto mb-4 text-neutral-500 group-hover:text-indigo-400 transition-colors" size={28} />
              <span className="text-white font-medium block">Email Me</span>
              <span className="text-neutral-600 text-xs mt-1">Get in touch via mail</span>
            </a>

            {/* LinkedIn Link (SVG) */}
            <a href="https://www.linkedin.com/in/leonardkombo/" target="_blank" rel="noopener noreferrer" className="p-8 bg-[#0A0A0A] border border-neutral-900 rounded-3xl hover:border-indigo-500/50 transition-all group">
              <svg className="mx-auto mb-4 text-neutral-500 group-hover:text-indigo-400 transition-colors" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
              <span className="text-white font-medium block">LinkedIn</span>
              <span className="text-neutral-600 text-xs mt-1">Professional Network</span>
            </a>

            {/* Resume Link */}
            <a href="/Leonard_Kombo_FullStack_Engineer.pdf"
              target="_blank"                 
              rel="noopener noreferrer"       
              className="p-8 bg-indigo-600 rounded-3xl hover:bg-indigo-500 transition-all group shadow-lg shadow-indigo-500/10 flex flex-col items-center"
            >
             <FileText className="mx-auto mb-4 text-white font-bold" size={28} />
             <span className="text-white font-bold block text-lg">Download CV</span>
             <span className="text-indigo-200 text-xs mt-1 italic">Full Technical Resume (PDF)</span>
              </a>
          </div>

          <div className="flex flex-wrap justify-center gap-8 text-neutral-500 border-t border-neutral-900 pt-12">
             {/* GitHub Link (SVG) */}
             <a href="https://github.com/lennykombo" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-2 font-mono text-sm uppercase tracking-wider">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                  <path d="M9 18c-4.51 2-5-2-7-2"></path>
                </svg>
                <span>GitHub</span>
             </a>

             {/* WhatsApp/Phone Link (SVG) */}
             <a href="https://wa.me/254793556235" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-2 font-mono text-sm uppercase tracking-wider">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                <span>WhatsApp</span>
             </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}