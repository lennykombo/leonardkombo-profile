"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative h-screen flex flex-col justify-center items-center px-4 overflow-hidden bg-[#050505]">
      {/* Background Ambient Glows */}
      <div className="absolute top-0 left-0 w-full h-full -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-indigo-500/10 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-blue-500/10 blur-[120px]" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <span className="text-indigo-400 font-mono tracking-widest text-sm mb-4 block uppercase px-4 py-1 border border-indigo-500/20 rounded-full bg-indigo-500/5 inline-block">
          Kenya Based • Available Worldwide
        </span>
        
       
        
<h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-6 text-white leading-tight">
  Leonard <span className="text-indigo-500 italic">Kombo</span>
</h1>

<p className="text-gray-400 text-lg md:text-2xl max-w-3xl mx-auto leading-relaxed">
  <span className="text-white font-semibold">Full-Stack Engineer</span> specializing in 
  <span className="text-white font-semibold"> Firebase and Node.js Architecture</span>, 
  <span className="text-white font-semibold"> AI Search Systems</span>, and 
  <span className="text-indigo-400 font-semibold"> Payment Gateways</span>.
</p>

<p className="text-neutral-500 text-md md:text-lg max-w-2xl mx-auto mt-4">
  Building high-performance web and mobile solutions  that solve real-world problems in the global digital ecosystem.
</p>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-10 flex flex-col md:flex-row gap-4"
      >
        <button 
          suppressHydrationWarning 
          onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
          className="cursor-pointer bg-white text-black px-10 py-4 rounded-full font-bold hover:bg-neutral-200 transition-all shadow-lg shadow-white/5"
        >
          View My Work
        </button>
         <button 
          suppressHydrationWarning 
          onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          className="cursor-pointer border border-neutral-800 text-white px-10 py-4 rounded-full font-bold hover:bg-white/5 transition-all active:scale-95"
        >
          Contact Me
        </button>
      </motion.div>

      {/* Subtle Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-neutral-600"
      >
        <div className="w-[1px] h-12 bg-gradient-to-b from-indigo-500 to-transparent mx-auto" />
      </motion.div>
    </section>
  );
}
