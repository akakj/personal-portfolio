import About from "./components/sections/About";
import Contact from "./components/sections/Contact";
import Education from "./components/sections/Education";
import Experience from "./components/sections/Experience";
import Footer from "./components/sections/Footer";
import Hero from "./components/sections//Hero";
import Navbar from "./components/sections/Navbar";
import Projects from "./components/sections/Projects";
import Skills from "./components/sections/Skills";
import Sparkle from "./components/Sparkle";

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#fff8fc] text-[#3f3040] transition-colors duration-500 dark:bg-[#0d0715] dark:text-[#f8efff]">
      {/* Background decoration */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div className="absolute -left-24 top-24 h-96 w-96 rounded-full bg-pink-200/40 blur-3xl transition-colors duration-500 dark:bg-purple-800/20" />

        <div className="absolute -right-24 top-[40%] h-120 w-120 rounded-full bg-purple-200/30 blur-3xl transition-colors duration-500 dark:bg-fuchsia-900/20" />

        <div className="absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-rose-200/30 blur-3xl transition-colors duration-500 dark:bg-violet-800/20" />
      </div>

      {/* Pixie dust */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <Sparkle className="absolute left-[8%] top-[18%] h-3 w-3 text-pink-400/50 dark:text-fuchsia-300/60" />

        <Sparkle className="absolute right-[14%] top-[26%] h-2 w-2 text-purple-300/60 dark:text-violet-300/60" />

        <Sparkle className="absolute left-[18%] top-[66%] h-2 w-2 text-pink-300/60 dark:text-purple-300/50" />

        <Sparkle className="absolute right-[8%] top-[74%] h-4 w-4 text-rose-300/50 dark:text-fuchsia-400/40" />
      </div>

      <Navbar />

      <div className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
