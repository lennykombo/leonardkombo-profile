import Hero from "@/components/Hero";
import About from "@/components/About";
import ProjectGrid from "@/components/ProjectGrid";
import Contact from "@/components/Contact";
//import Terminal from "@/components/Terminal";
import Game from "@/components/Game";

export default function Home() {
  return (
    <main className="bg-[#050505]">
      <Hero />
      <About />
       <Game />
      <ProjectGrid />
      <Contact />
      
      
      {/* Contact Section will go here */}
      <footer className="py-10 text-center text-neutral-600 text-sm border-t border-neutral-900">
        © {new Date().getFullYear()} Leonard Kombo. Built with Next.js & TypeScript.
      </footer>
    </main>
  );
}