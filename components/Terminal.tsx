"use client";
import React, { useState, useEffect, useRef } from "react";

const COMMANDS = {
  help: "Available: bio, skills, projects, contact, clear, coffee",
  bio: "Leonard Kombo: Full-Stack Engineer. Specialized in Node.js, React Native, and AI.",
  skills: "Frontend: React, Next.js | Backend: Node.js, Firebase | AI: Grok (xAI) | Mobile: React Native",
  projects: "6 production apps including Reserve Me (AI) and MTTA Awards (Live Event).",
  contact: "Email: leonard@example.com | WhatsApp: +254...",
  coffee: "☕ Order placed! (Just kidding, but I do love coffee).",
};

export default function Terminal() {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<string[]>(["Welcome. Type 'help' to begin."]);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [history]);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = input.toLowerCase().trim();
    let response = "";

    if (cmd === "clear") {
      setHistory([]);
    } else if (cmd in COMMANDS) {
      response = COMMANDS[cmd as keyof typeof COMMANDS];
      setHistory([...history, `> ${input}`, response]);
    } else {
      setHistory([...history, `> ${input}`, "Command not found. Type 'help'."]);
    }
    setInput("");
  };

  return (
    <div className="w-full max-w-2xl mx-auto mt-12 font-mono text-sm shadow-2xl rounded-lg overflow-hidden border border-neutral-800 bg-[#0A0A0A]">
      {/* Terminal Header */}
      <div className="bg-[#1A1A1A] px-4 py-2 flex items-center gap-2 border-b border-neutral-800">
        <div className="w-3 h-3 rounded-full bg-red-500/50" />
        <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
        <div className="w-3 h-3 rounded-full bg-green-500/50" />
        <span className="ml-2 text-neutral-500 text-xs tracking-widest">leonard-os — 80x24</span>
      </div>

      {/* Terminal Body */}
      <div ref={scrollRef} className="p-6 h-64 overflow-y-auto text-emerald-500/90 space-y-2 custom-scrollbar">
        {history.map((line, i) => (
          <div key={i} className={line.startsWith(">") ? "text-white" : "text-emerald-500/80"}>
            {line}
          </div>
        ))}
        
        <form onSubmit={handleCommand} className="flex gap-2">
          <span className="text-indigo-400">leonard@portfolio:~$</span>
          {/*<input
            suppressHydrationWarning
            autoFocus
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="bg-transparent border-none outline-none flex-grow text-white"
          />*/}
          <input
  suppressHydrationWarning
  type="text"
  value={input}
  onChange={(e) => setInput(e.target.value)}
  className="bg-transparent border-none outline-none flex-grow text-white"
  placeholder="Type 'help'..."
/>
        </form>
      </div>
    </div>
  );
}