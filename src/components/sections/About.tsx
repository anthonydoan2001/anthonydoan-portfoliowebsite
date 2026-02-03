import { EDUCATION_INFO } from "@/lib/constants";
import { aboutContent, educationCourses, techStack } from "@/lib/data";
import { BookOpen, GraduationCap, User } from "lucide-react";
import { Link } from "react-router-dom";
import { useInView } from "@/hooks/useInView";

const ImageBlock = ({ className }: { className?: string }) => (
  <div className={className}>
    <div className="relative rounded-xl sm:rounded-2xl md:rounded-3xl overflow-hidden bg-card border border-border/50 shadow-2xl">
      <div className="aspect-[3/4] relative">
        <img
          src={aboutContent.image.src}
          alt={aboutContent.image.alt}
          className="absolute inset-0 w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-60"></div>
      </div>
    </div>
    {/* Decorative offset border */}
    <div className="absolute -z-10 top-4 -right-4 sm:top-6 sm:-right-6 w-full h-full rounded-xl sm:rounded-2xl md:rounded-3xl border border-emerald/20 bg-emerald/5 translate-x-2 translate-y-2 sm:translate-x-3 sm:translate-y-3"></div>
  </div>
);

const About = () => {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <section
      className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
      id="about"
      ref={ref as React.RefObject<HTMLElement>}
    >
      <div className={`max-w-6xl mx-auto ${isInView ? 'revealed' : ''}`}>
        {/* Centered Header */}
        <div className="text-center mb-10 sm:mb-12 md:mb-16 space-y-3 sm:space-y-4 md:space-y-6 reveal-up">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald/5 border border-emerald/20 text-emerald text-xs font-medium uppercase tracking-wider">
            <User className="w-3 h-3" />
            <span>About Me</span>
          </div>
          <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-bold text-foreground font-mono leading-tight">
            A look into <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald via-emerald/80 to-emerald/60">my background</span>
          </h2>
        </div>

        {/* Image - Mobile Only */}
        <div className="reveal-up stagger-1">
          <ImageBlock className="md:hidden relative w-full max-w-[180px] xs:max-w-[200px] sm:max-w-[240px] mx-auto mb-8 sm:mb-10" />
        </div>

        {/* Two Column Layout (Desktop) */}
        <div className="grid md:grid-cols-[1fr_240px] lg:grid-cols-[1fr_280px] xl:grid-cols-[1fr_320px] gap-8 sm:gap-10 md:gap-12 lg:gap-16 items-start">

          {/* Left Column - Text Content */}
          <div className="space-y-6 sm:space-y-8">
            <div className="space-y-4 sm:space-y-6 reveal-up stagger-2">
              <div className="text-muted-foreground text-sm sm:text-base md:text-lg leading-relaxed space-y-3 sm:space-y-4">
                {aboutContent.paragraphs.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>

              <div className="pt-2 sm:pt-4">
                <Link
                  to={aboutContent.moreAboutLink.path}
                  className="inline-flex items-center justify-center px-5 sm:px-6 py-2.5 sm:py-3 rounded-full border border-emerald/30 text-emerald hover:bg-emerald/5 hover:border-emerald/50 active:bg-emerald/10 transition-all duration-300 text-xs sm:text-sm font-medium touch-manipulation"
                >
                  <span className="mr-2">&#8599;</span> {aboutContent.moreAboutLink.text}
                </Link>
              </div>
            </div>

            <div className="space-y-3 sm:space-y-4 pt-2 reveal-up stagger-3">
              <h3 className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-muted-foreground">Recently Used Technologies</h3>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-border bg-secondary/30 text-foreground/80 text-xs sm:text-sm cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Education - Compact Card */}
            <div className="space-y-3 sm:space-y-4 pt-2 reveal-up stagger-4">
              <h3 className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-muted-foreground flex items-center gap-2">
                <GraduationCap className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald flex-shrink-0" />
                Education
              </h3>
              <div className="flex items-center gap-4 p-4 sm:p-5 rounded-xl border border-border/50 bg-card/30">
                <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12">
                  <img
                    src="/images/logos/UH.svg"
                    alt="University of Houston"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-sm sm:text-base font-bold text-foreground leading-tight">
                    {EDUCATION_INFO.degree}
                  </div>
                  <div className="text-xs sm:text-sm text-muted-foreground mt-0.5">
                    {EDUCATION_INFO.university} | {EDUCATION_INFO.period}
                  </div>
                  <div className="text-xs text-muted-foreground/70 mt-0.5">
                    {EDUCATION_INFO.minor}
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm font-bold text-muted-foreground uppercase tracking-wider mt-3">
                <BookOpen className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald flex-shrink-0" />
                Relevant Coursework
              </div>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {educationCourses.map((course, index) => (
                  <span
                    key={index}
                    className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-border bg-secondary/30 text-foreground/80 text-xs sm:text-sm cursor-default"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Image (Desktop Only) */}
          <div className="reveal-right stagger-2">
            <ImageBlock className="hidden md:block relative w-full" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
