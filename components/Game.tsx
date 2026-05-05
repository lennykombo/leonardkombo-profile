"use client";
import React from "react";
import { motion } from "framer-motion";
import InteractiveGlobe from "./InteractiveGlobe";
import Terminal from "./Terminal";
import { Gamepad2, Terminal as TerminalIcon, Globe as GlobeIcon } from "lucide-react";

export default function Game() {
  return (
    <section id="game" className="py-16 px-6 bg-[#050505] border-t border-neutral-900">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Area */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="p-3 bg-indigo-500/10 rounded-2xl mb-4 border border-indigo-500/20"
          >
            <Gamepad2 className="text-indigo-400" size={32} />
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 italic tracking-tighter">
            Play a little game
          </h2>
          <p className="text-neutral-500 max-w-xl">
            Interact with the neural core. Spin the globe to locate nodes or use the terminal to query system data.
          </p>
        </div>

        {/* Side-by-Side Dashboard */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          {/* Left: The Globe Interface */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col bg-[#0A0A0A] border border-neutral-800 rounded-[2.5rem] overflow-hidden shadow-2xl"
          >
            <div className="px-8 py-4 border-b border-neutral-800 flex justify-between items-center bg-neutral-900/20">
              <div className="flex items-center gap-2">
                <GlobeIcon size={14} className="text-indigo-500" />
                <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-widest font-bold">
                  Global Node Map
                </span>
              </div>
              <div className="flex gap-1.5">
                <div className="w-2 h-2 rounded-full bg-red-500/20" />
                <div className="w-2 h-2 rounded-full bg-yellow-500/20" />
                <div className="w-2 h-2 rounded-full bg-green-500/20" />
              </div>
            </div>
            
            <div className="flex-grow flex items-center justify-center min-h-[450px]">
              <InteractiveGlobe />
            </div>
          </motion.div>

          {/* Right: The Terminal Interface */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col bg-[#0A0A0A] border border-neutral-800 rounded-[2.5rem] overflow-hidden shadow-2xl"
          >
            <div className="px-8 py-4 border-b border-neutral-800 flex justify-between items-center bg-neutral-900/20">
              <div className="flex items-center gap-2">
                <TerminalIcon size={14} className="text-emerald-500" />
                <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-widest font-bold">
                  Command Logic Engine
                </span>
              </div>
              <span className="text-[9px] font-mono text-emerald-500/60 animate-pulse">SYSTEM_ACTIVE</span>
            </div>

            <div className="flex-grow p-4">
              <Terminal />
              
              {/* Optional: Small Hint Box inside the Game area */}
              <div className="mt-4 p-4 bg-black/50 border border-neutral-900 rounded-2xl">
                 <p className="text-[10px] text-neutral-600 font-mono italic uppercase">
                   &gt; Try commands: <span className="text-indigo-400">help</span>, <span className="text-indigo-400">bio</span>, <span className="text-indigo-400">projects</span>, or <span className="text-indigo-400">clear</span>
                 </p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}