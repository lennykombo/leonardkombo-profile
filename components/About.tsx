"use client";
import { motion } from "framer-motion";
import { Code2, Cpu, Globe, Zap } from "lucide-react";

export default function About() {
  const stats = [
  { label: "AI Integration", value: "Grok/LLM", icon: <Zap className="text-yellow-500" size={20} /> },
  { label: "Deployment", value: "Render/Cloud", icon: <Globe className="text-blue-500" size={20} /> }, 
  { label: "Tech Stack", value: "React/RN", icon: <Cpu className="text-indigo-500" size={20} /> },
  { label: "Maps Logic", value: "Geospatial", icon: <Code2 className="text-emerald-500" size={20} /> },
];

  return (
    <section id="about" className="py-24 px-4 bg-[#050505] relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side: Narrative */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-indigo-400 font-mono text-sm tracking-[0.3em] uppercase mb-4">
              The Engineer
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
              Bridging the gap between <span className="italic text-neutral-500">design</span> and <span className="text-indigo-500">scalable logic</span>.
            </h3>
            
            <div className="space-y-6 text-neutral-400 text-lg leading-relaxed">
  <p>
    I am a <span className="text-white font-medium">Full-Stack Engineer</span> based in Kenya, specializing in building high-performance, 
    production-ready applications that solve real-world problems. 
  </p>
  <p>
    With deep expertise in <span className="text-white font-medium">Firebase, Cloudinary, Node.js, React, and React Native</span>, 
    I architect intelligent systems that go far beyond basic CRUD operations. 
    By leveraging <span className="text-indigo-400 font-medium">Grok AI</span> for intent-based search 
    and <span className="text-white font-medium">Node.js backends on Render</span>, I build 
    seamless, data-driven experiences that handle complex geospatial and financial logic.
  </p>
  <p>
    From <span className="text-white italic">AI-powered hospitality platforms</span> to 
    <span className="text-white italic">automated financial reconciliation tools</span>, 
    I bridge the gap between secure <span className="text-white">Pesapal, M-Pesa payment gateways</span> and 
    pixel-perfect user interfaces for the global digital ecosystem.
  </p>
</div>
          </motion.div>

          {/* Right Side: Stats Grid & Skills */}
          {/*<motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="bg-[#0A0A0A] border border-neutral-900 p-8 rounded-3xl hover:border-indigo-500/30 transition-colors group"
              >
                <div className="mb-4 p-3 bg-neutral-900 w-fit rounded-2xl group-hover:scale-110 transition-transform">
                  {stat.icon}
                </div>
                <h4 className="text-3xl font-bold text-white mb-1">{stat.value}</h4>
                <p className="text-neutral-500 text-sm font-mono uppercase tracking-wider">
                  {stat.label}
                </p>
              </div>
            ))}
            
            {/* Professional Skills Tag Cloud *//*
            <div className="col-span-2 mt-4 p-6 bg-gradient-to-br from-indigo-500/5 to-transparent border border-neutral-900 rounded-3xl">
              <h5 className="text-white font-bold mb-4 text-sm uppercase tracking-widest opacity-60">Core Expertise</h5>
              <div className="flex flex-wrap gap-3">
                {["React.js", "Next.js", "Firebase", "Node.js", "Tailwind CSS", "M-Pesa API", "PesaPal", "AI Integration", "Grok AI", "Render", "Netlify", "TypeScript"].map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-neutral-900 border border-neutral-800 rounded-full text-xs text-neutral-300">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>*/}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full"
          >
            {/* Stats Grid: grid-cols-2 works on most phones, but gap-3 is safer */}
            <div className="grid grid-cols-2 gap-3 md:gap-6">
              {stats.map((stat, index) => (
                <div 
                  key={index} 
                  className="bg-[#0A0A0A] border border-neutral-900 p-5 md:p-8 rounded-3xl hover:border-indigo-500/30 transition-colors group"
                >
                  <div className="mb-4 p-2 bg-neutral-900 w-fit rounded-xl">
                    {stat.icon}
                  </div>
                  <h4 className="text-xl md:text-3xl font-bold text-white mb-1">{stat.value}</h4>
                  <p className="text-neutral-500 text-[10px] md:text-sm font-mono uppercase tracking-wider">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
            
            {/* Professional Skills Tag Cloud */}
            <div className="mt-6 p-5 md:p-8 bg-gradient-to-br from-indigo-500/5 to-transparent border border-neutral-900 rounded-3xl w-full">
              <h5 className="text-white font-bold mb-6 text-xs uppercase tracking-widest opacity-60">Technical Arsenal</h5>
              <div className="flex flex-wrap gap-2 md:gap-3">
                {[
                  "Node.js", "Express", "React Native", "Grok AI", 
                  "Render", "Firebase", "M-Pesa API", "TypeScript", 
                  "Maps API", "Tailwind", "Cloudinary"
                ].map((skill) => (
                  <span 
                    key={skill} 
                    className="px-3 py-1.5 bg-neutral-900 border border-neutral-800 rounded-lg text-[11px] md:text-xs text-neutral-300 whitespace-nowrap"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}