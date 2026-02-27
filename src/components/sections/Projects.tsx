import { GitHubIcon } from "@/components/icons/SocialIcons";
import { useInView } from "@/hooks/useInView";
import { projects } from "@/lib/data";
import { Project } from "@/types";
import { ArrowRight, Code2, ExternalLink } from "lucide-react";
import { memo } from "react";
import { Link } from "react-router-dom";

const Projects = () => {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  // Featured projects on the home page (limit to 3)
  const featuredProjects = projects.slice(0, 3);

  return (
    <section
      className="pt-6 sm:pt-8 md:pt-10 pb-12 sm:pb-16 md:pb-20 lg:pb-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-gradient-to-b from-background via-background to-secondary/5"
      ref={ref as React.RefObject<HTMLElement>}
    >
      <div className={`max-w-7xl mx-auto ${isInView ? 'revealed' : ''}`}>
        <div className="text-center mb-8 sm:mb-12 reveal-up flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald/5 border border-emerald/20 text-emerald text-xs font-medium uppercase tracking-wider mb-4">
            <Code2 className="w-3 h-3" />
            <span>Featured Projects</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold font-mono text-foreground">
            Selected <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald to-emerald/70">Works</span>
          </h2>
        </div>

        {/* Projects List */}
        <div className="space-y-4 sm:space-y-6 mb-10 sm:mb-14">
          {featuredProjects.map((project, index) => (
            <div key={index} className={`reveal-up stagger-${index + 1}`}>
              <ProjectRow project={project} />
            </div>
          ))}
        </div>

        {/* View All Projects Link */}
        <div className="text-center reveal-up stagger-5">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-3.5 rounded-full border border-emerald/30 bg-emerald/5 hover:bg-emerald/10 hover:border-emerald/50 hover:shadow-[0_0_20px_rgba(16,185,129,0.15)] active:bg-emerald/15 text-emerald transition-all duration-300 group touch-manipulation text-sm font-semibold tracking-wide"
          >
            <span>View All Projects</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300" />
          </Link>
        </div>
      </div>
    </section>
  );
};

const ProjectRow = memo(({ project }: { project: Project }) => {
  const hasImage = project.image && project.image.length > 0;

  return (
    <div className="group rounded-2xl border border-border/40 bg-card/40 hover:bg-card/60 hover:border-emerald/30 transition-all duration-300 p-4 sm:p-6 shadow-sm hover:shadow-xl hover:shadow-emerald/5 relative overflow-hidden flex flex-col sm:flex-row gap-5 sm:gap-6 lg:gap-8 items-start sm:items-center">
      {/* Background glowing accent */}
      <div className="absolute inset-0 bg-gradient-to-r from-emerald/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      {/* Thumbnail */}
      <div className="flex-shrink-0 w-full sm:w-40 lg:w-48 aspect-video rounded-xl overflow-hidden border border-border/50 bg-secondary/20 relative z-10 group-hover:border-emerald/20 transition-colors duration-500">
        <div className="absolute inset-0 bg-secondary/20 mix-blend-overlay group-hover:bg-transparent transition-colors duration-500 z-10" />
        {hasImage ? (
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center gap-2 bg-gradient-to-br from-secondary/40 via-secondary/20 to-emerald-900/5 relative overflow-hidden">
             <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/10 rounded-full translate-x-1/2 -translate-y-1/2" />
            <Code2 className="w-6 h-6 sm:w-8 sm:h-8 text-emerald/20 group-hover:text-emerald/40 transition-colors duration-500 z-20" />
            <span className="text-[10px] sm:text-xs font-semibold text-emerald/30 uppercase tracking-widest z-20">Preview</span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0 relative z-10 w-full flex flex-col justify-between">
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 sm:gap-4 mb-3 sm:mb-2 text-left">
          <div className="flex-1 min-w-0">
            <h3 className="text-base sm:text-lg font-bold text-foreground font-mono leading-tight group-hover:text-emerald transition-colors duration-300">
              {project.title}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed mt-2 line-clamp-2">
              {project.description}
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex items-center gap-2 flex-shrink-0 mt-2 sm:mt-0">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg border border-border/50 bg-secondary/30 hover:bg-emerald/10 hover:border-emerald/30 active:bg-emerald/15 text-muted-foreground hover:text-emerald transition-all duration-300"
                aria-label="View on GitHub"
                onClick={(e) => e.stopPropagation()}
              >
                <GitHubIcon className="w-4 h-4" />
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg border border-border/50 bg-secondary/30 hover:bg-emerald/10 hover:border-emerald/30 active:bg-emerald/15 text-muted-foreground hover:text-emerald transition-all duration-300"
                aria-label="View live site"
                onClick={(e) => e.stopPropagation()}
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-border/30">
          {project.tags.slice(0, 4).map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 rounded-md border border-border/50 bg-background/50 text-[11px] sm:text-xs font-medium text-foreground/70 group-hover:border-emerald/20 transition-colors duration-300"
            >
              {tag}
            </span>
          ))}
          {project.tags.length > 4 && (
            <span className="px-2.5 py-1 rounded-md border border-border/30 bg-transparent text-[11px] sm:text-xs font-medium text-muted-foreground">
              +{project.tags.length - 4} more
            </span>
          )}
        </div>
      </div>
    </div>
  );
});

export default Projects;
