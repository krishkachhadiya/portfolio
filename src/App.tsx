import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { useReveal } from "./hooks/useReveal";

/**
 * App — top-level layout for the developer portfolio.
 * Wires together every section in a single-page flow with
 * smooth scrolling, sticky frosted nav, and reveal animations.
 */
export default function App() {
  // Activate scroll-triggered fade-in animations site-wide.
  useReveal();

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-slate-950 text-slate-200 selection:bg-cyan-400/30 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
