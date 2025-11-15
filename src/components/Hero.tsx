import { Github, Linkedin, Mail, Download } from "lucide-react";
import profilePic from "@/assets/profilepic.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
      {/* Grid background with faded edges */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-background/80 to-background"></div>

      <div className="relative max-w-6xl w-full">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex-1 space-y-8">
            <div className="space-y-4">
              <p className="text-emerald text-sm uppercase tracking-wider">IT Professional</p>
              <h1 className="text-6xl md:text-8xl font-bold font-mono leading-tight">
                Hello I'm <span className="text-emerald">Anthony Doan</span>
              </h1>
              <p className="text-2xl md:text-3xl text-muted-foreground">Computer Technician & Full-Stack Developer</p>
            </div>

            <div className="flex flex-wrap gap-4 items-center">
              <a
                href="/cv.pdf"
                download
                className="px-6 py-3 rounded-full border-2 border-emerald text-emerald hover:bg-emerald/10 flex items-center gap-2 transition-colors font-semibold uppercase text-sm"
              >
                <Download className="w-4 h-4" />
                Download CV
              </a>

              <a
                href="mailto:your.email@example.com"
                className="w-14 h-14 rounded-full border-2 border-emerald text-emerald hover:bg-emerald/10 flex items-center justify-center transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 rounded-full border-2 border-emerald text-emerald hover:bg-emerald/10 flex items-center justify-center transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 rounded-full border-2 border-emerald text-emerald hover:bg-emerald/10 flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="flex-shrink-0">
            <div className="relative">
              <div className="w-72 h-72 rounded-full border-4 border-dashed border-emerald overflow-hidden animate-pulse">
                <img 
                  src={profilePic} 
                  alt="Anthony Doan - IT Professional" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section - Full Width Below */}
        <div className="grid grid-cols-3 gap-8 mt-16 pt-8">
          <div className="flex flex-col items-center justify-center gap-2 text-center">
            <div className="text-4xl md:text-5xl font-bold text-foreground font-mono">24</div>
            <div className="text-base text-muted-foreground">Age</div>
          </div>
          <div className="flex flex-col items-center justify-center gap-2 text-center">
            <div className="text-4xl md:text-5xl font-bold text-foreground font-mono">3</div>
            <div className="text-base text-muted-foreground">Years Experience</div>
          </div>
          <div className="flex flex-col items-center justify-center gap-2 text-center">
            <div className="text-4xl md:text-5xl font-bold text-foreground font-mono">3</div>
            <div className="text-base text-muted-foreground">Projects</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
