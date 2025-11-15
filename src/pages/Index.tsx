import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Education from "@/components/Education";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Journey from "@/components/Journey";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <Hero />
      <Education />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Journey />
      <Contact />
      
      <footer className="border-t border-border py-8 text-center text-muted-foreground">
        <p className="font-mono text-sm">
          Built with React & TypeScript • © 2025 Anthony Doan
        </p>
      </footer>
    </div>
  );
};

export default Index;
