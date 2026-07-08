import { CircuitBackground } from "./components/CircuitBackground";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Philosophy } from "./components/Philosophy";
import { Experience } from "./components/Experience";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="relative min-h-screen bg-deep text-text">
      <CircuitBackground />
      <Navbar />
      <Hero />
      <main className="max-w-5xl mx-auto px-6 pb-24 space-y-20">
        <About />
        <Skills />
        <Philosophy />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
