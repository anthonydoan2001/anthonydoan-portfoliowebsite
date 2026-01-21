import { PERSONAL_INFO } from "@/lib/constants";
import { aboutContent, techStack } from "@/lib/data";
import { Github, Linkedin, Mail, User } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section className="py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden" id="about">
      <div className="max-w-6xl mx-auto">
        {/* Centered Header */}
        <div className="text-center mb-12 md:mb-16 space-y-4 md:space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald/5 border border-emerald/20 text-emerald text-xs font-medium uppercase tracking-wider">
            <User className="w-3 h-3" />
            <span>About Me</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground font-mono">
            A look into <span className="text-emerald">my background</span>
          </h2>
        </div>

        {/* Image - Below Header (Mobile Only) */}
        <div className="md:hidden relative group w-full max-w-[200px] sm:max-w-[240px] mx-auto mb-10">
           {/* Image Container */}
            <div className="relative rounded-2xl overflow-hidden bg-card border border-border/50 shadow-2xl transform transition-transform duration-500 hover:scale-[1.02]">
            <div className="aspect-[3/4] relative">
              <img
                src={aboutContent.image.src}
                alt={aboutContent.image.alt}
                className="absolute inset-0 w-full h-full object-cover object-top"
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-60"></div>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute -z-10 top-6 -right-6 w-full h-full rounded-2xl border border-emerald/20 bg-emerald/5 translate-x-3 translate-y-3"></div>
        </div>

        {/* Two Column Layout (Desktop) */}
        <div className="grid md:grid-cols-[1fr_280px] lg:grid-cols-[1fr_320px] gap-10 md:gap-12 lg:gap-16 items-start">

          {/* Left Column - Text Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="text-muted-foreground text-base sm:text-lg leading-relaxed space-y-4 sm:space-y-6">
                {aboutContent.paragraphs.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>

              <div className="pt-4">
                <Link
                  to={aboutContent.moreAboutLink.path}
                  className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-emerald/30 text-emerald hover:bg-emerald/5 hover:border-emerald/50 transition-all duration-300 text-sm font-medium"
                >
                  <span className="mr-2">↗</span> {aboutContent.moreAboutLink.text}
                </Link>
              </div>
            </div>

            <div className="space-y-4 pt-2">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Recently Used Technologies</h3>
              <div className="flex flex-wrap gap-3">
                {techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 rounded-full border border-border bg-secondary/30 text-foreground/80 text-sm cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="space-y-4 pt-2">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Social Quick Links</h3>
              <div className="flex flex-wrap gap-4">
                <SocialButton href={PERSONAL_INFO.github} icon={Github} label="GitHub" />
                <SocialButton href={PERSONAL_INFO.linkedin} icon={Linkedin} label="LinkedIn" />
                <SocialButton href={`mailto:${PERSONAL_INFO.email}`} icon={Mail} label="Email" />
              </div>
            </div>
          </div>

          {/* Right Column - Image (Desktop Only) */}
          <div className="hidden md:block relative group w-full">
             {/* Image Container */}
            <div className="relative rounded-2xl md:rounded-3xl overflow-hidden bg-card border border-border/50 shadow-2xl transform transition-transform duration-500 hover:scale-[1.02]">
              <div className="aspect-[3/4] relative">
                <img
                  src={aboutContent.image.src}
                  alt={aboutContent.image.alt}
                  className="absolute inset-0 w-full h-full object-cover object-top"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-60"></div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -z-10 top-6 -right-6 md:top-8 md:-right-8 w-full h-full rounded-2xl md:rounded-3xl border border-emerald/20 bg-emerald/5 translate-x-3 translate-y-3 md:translate-x-4 md:translate-y-4"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

const SocialButton = ({ href, icon: Icon, label }: { href: string; icon: React.ElementType; label: string }) => {
  const isExternal = href.startsWith("http");
  return (
    <a
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className="flex items-center gap-2 px-5 py-2.5 rounded-xl border border-border bg-card hover:border-emerald/50 hover:bg-emerald/5 transition-all duration-300 group"
    >
      <Icon className="w-4 h-4 text-emerald group-hover:scale-110 transition-transform" />
      <span className="text-sm font-medium text-foreground/80 group-hover:text-foreground">{label}</span>
    </a>
  );
};

export default About;
