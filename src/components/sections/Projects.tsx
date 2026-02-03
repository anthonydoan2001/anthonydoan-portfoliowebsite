import { GitHubIcon } from "@/components/icons/SocialIcons";
import { PERSONAL_INFO } from "@/lib/constants";
import { projects } from "@/lib/data";
import { ArrowRight, Code2, ExternalLink } from "lucide-react";
import { memo } from "react";
import { useInView } from "@/hooks/useInView";

const Projects = () => {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <section
      className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-gradient-to-b from-background via-background to-secondary/5"
      ref={ref as React.RefObject<HTMLElement>}
    >
      <div className={`max-w-7xl mx-auto ${isInView ? 'revealed' : ''}`}>
        {/* Header */}
        <div className="text-center mb-10 sm:mb-12 md:mb-16 space-y-3 sm:space-y-4 md:space-y-6 reveal-up">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald/5 border border-emerald/20 text-emerald text-xs font-medium uppercase tracking-wider">
            <Code2 className="w-3 h-3" />
            <span>Projects</span>
          </div>
          <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-bold text-foreground font-mono leading-tight">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald via-emerald/80 to-emerald/60">Projects</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            A collection of projects showcasing my skills in automation, full-stack development, and problem-solving
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-5 sm:gap-6 md:gap-8 lg:gap-10 mb-10 sm:mb-12 items-stretch">
          {projects.map((project, index) => (
            <div key={index} className={`reveal-up stagger-${index + 1}`}>
              <ProjectCard project={project} index={index} />
            </div>
          ))}
        </div>

        {/* View All Projects Link */}
        <div className="text-center reveal-up stagger-5">
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full border border-emerald/30 bg-emerald/5 hover:bg-emerald/10 hover:border-emerald/50 active:bg-emerald/15 text-emerald transition-all duration-300 group touch-manipulation text-sm sm:text-base"
          >
            <GitHubIcon className="w-4 h-4" />
            <span className="font-medium">View All on GitHub</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};

const ProjectCard = memo(({ project, index }: { project: typeof projects[0]; index: number }) => {
  const isFeatured = index === 0;

  return (
    <div
      className={`relative h-full rounded-xl sm:rounded-2xl border bg-card/50 backdrop-blur-sm overflow-hidden ${
        isFeatured
          ? "border-emerald/20 shadow-[0_0_30px_-10px_hsl(var(--emerald)/0.15)]"
          : "border-border/50"
      }`}
    >
      {/* Watermark index number */}
      <span className="absolute top-4 left-5 text-6xl font-bold font-mono text-foreground/[0.04] select-none pointer-events-none">
        0{index + 1}
      </span>

      {/* Featured badge */}
      {isFeatured && (
        <span className="absolute top-4 right-4 px-2 py-0.5 text-[10px] uppercase tracking-wider font-semibold bg-emerald/10 text-emerald border border-emerald/20 rounded-full z-10">
          Featured
        </span>
      )}

      {/* Content */}
      <div className="relative p-5 sm:p-6 md:p-8 h-full flex flex-col">
        {/* Header and Description Container */}
        <div className="mb-5 sm:mb-6 min-h-[8rem] sm:min-h-[10rem] flex flex-col">
          {/* Header with Links */}
          <div className="mb-3 sm:mb-4 flex items-start justify-between gap-2 sm:gap-3 md:gap-4">
            <h3 className="text-base sm:text-lg md:text-xl font-bold text-foreground font-mono flex-1 leading-tight min-w-0 pr-2">
              {project.title}
            </h3>
            <div className={`flex items-center gap-2 sm:gap-2.5 flex-shrink-0 ${isFeatured ? 'mt-7' : ''}`}>
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="min-w-[36px] min-h-[36px] sm:min-w-[40px] sm:min-h-[40px] flex items-center justify-center p-2 sm:p-2.5 rounded-lg border border-border/50 bg-secondary/30 hover:bg-emerald/10 hover:border-emerald/30 active:bg-emerald/15 text-muted-foreground hover:text-emerald transition-all duration-300 group/link touch-manipulation"
                  aria-label="View on GitHub"
                >
                  <GitHubIcon className="w-4 h-4 sm:w-5 sm:h-5 group-hover/link:scale-110 transition-transform flex-shrink-0" />
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="min-w-[36px] min-h-[36px] sm:min-w-[40px] sm:min-h-[40px] flex items-center justify-center p-2 sm:p-2.5 rounded-lg border border-border/50 bg-secondary/30 hover:bg-emerald/10 hover:border-emerald/30 active:bg-emerald/15 text-muted-foreground hover:text-emerald transition-all duration-300 group/link touch-manipulation"
                  aria-label="View live site"
                >
                  <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5 group-hover/link:scale-110 transition-transform flex-shrink-0" />
                </a>
              )}
            </div>
          </div>

          {/* Description */}
          <div className="flex-1">
            <p className="text-muted-foreground leading-relaxed text-xs sm:text-sm md:text-base">
              {project.description}
            </p>
          </div>
        </div>

        {/* Bullet Points */}
        {project.bullets && project.bullets.length > 0 && (
          <div className="space-y-2 sm:space-y-2.5 mb-5 sm:mb-6 flex-1">
            {project.bullets.map((bullet, idx) => (
              <div key={idx} className="flex gap-2 sm:gap-3 items-start">
                <span className="text-emerald mt-0.5 flex-shrink-0 w-3 sm:w-4 text-right text-xs">&#9657;</span>
                <p className="text-xs sm:text-sm text-foreground/80 leading-relaxed flex-1">{bullet}</p>
              </div>
            ))}
          </div>
        )}

        {/* Tech Stack Tags */}
        <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-auto pt-3 sm:pt-4 border-t border-border/30">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 sm:px-3 py-1 sm:py-1.5 rounded-lg border border-border/50 bg-secondary/30 text-[10px] sm:text-xs font-medium text-foreground/70"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
});

export default Projects;
