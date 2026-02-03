import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Experience from "@/components/sections/Experience";
import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";

export default function HomePage() {
  return (
    <>
      <Hero />
      <div className="section-divider-gradient" />
      <About />
      <div className="section-divider-gradient" />
      <Experience />
      <div className="section-divider-gradient" />
      <Projects />
      <div className="section-divider-gradient" />
      <Contact />
    </>
  );
}
