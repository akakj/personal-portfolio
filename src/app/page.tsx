import About from "./components/sections/About";
import Contact from "./components/sections/Contact";
import Experience from "./components/sections/Experience";
import Footer from "./components/sections/Footer";
import Hero from "./components/sections/Hero";
import Navbar from "./components/sections/Navbar";
import Projects from "./components/sections/Projects";
import Skills from "./components/sections/Skills";
import Certifications from "./components/sections/Certifications";
import FairyBackground from "./components/ui/FairyBackground";

export default function Home() {
  return (
    <main
      className="
        relative isolate min-h-screen overflow-x-hidden
        bg-[#fff3ff] text-[#371c59]
        transition-colors duration-500
        dark:bg-[#0d0715] dark:text-[#f8efff]
      "
    >
      <FairyBackground />

      <Navbar />

      <div className="relative z-10">
        <Hero />
        <Projects />
        <Skills />
        <Experience />
        <Certifications />
        <About />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}