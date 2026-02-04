import { GitHubIcon } from "@/components/icons/SocialIcons";
import { PERSONAL_INFO } from "@/lib/constants";
import { projects } from "@/lib/data";
import { Project } from "@/types";
import { ArrowRight, Code2, ExternalLink } from "lucide-react";
import { memo } from "react";
import { useInView } from "@/hooks/useInView";

const Projects = () => {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <section
      className="pt-6 sm:pt-8 md:pt-10 pb-12 sm:pb-16 md:pb-20 lg:pb-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-gradient-to-b from-background via-background to-secondary/5"
      ref={ref as React.RefObject<HTMLElement>}
    >
      <div className={`max-w-7xl mx-auto ${isInView ? 'revealed' : ''}`}>
        <div className="text-center mb-5 sm:mb-6 reveal-up">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald/5 border border-emerald/20 text-emerald text-xs font-medium uppercase tracking-wider">
            <Code2 className="w-3 h-3" />
            <span>Projects</span>
          </div>
        </div>

        {/* Projects List */}
        <div className="space-y-3 sm:space-y-4 mb-8 sm:mb-10">
          {projects.map((project, index) => (
            <div key={index} className={`reveal-up stagger-${index + 1}`}>
              <ProjectRow project={project} />
            </div>
          ))}
        </div>

        {/* View All Projects Link */}
        <div className="text-center reveal-up stagger-5">
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full border border-emerald/30 bg-emerald/5 hover:bg-emerald/10 hover:border-emerald/50 active:bg-emerald/15 text-emerald transition-all duration-300 group touch-manipulation text-sm"
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

const ProjectThumbnail = memo(({ image, title }: { image?: string; title: string }) => {
  const hasImage = image && image.length > 0;

  return (
    <div className="flex-shrink-0 w-28 sm:w-36 aspect-video rounded-lg overflow-hidden border border-border/50 bg-secondary/20">
      {hasImage ? (
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      ) : (
        <div className="w-full h-full flex flex-col items-center justify-center gap-1.5 bg-gradient-to-br from-secondary/40 via-secondary/20 to-emerald/5">
          <Code2 className="w-5 h-5 sm:w-6 sm:h-6 text-emerald/20" />
          <span className="text-[9px] sm:text-[10px] font-medium text-muted-foreground/30 uppercase tracking-wider">Preview</span>
        </div>
      )}
    </div>
  );
});

const ProjectRow = memo(({ project }: { project: Project }) => (
  <div className="rounded-xl border border-border/50 bg-card/50 backdrop-blur-sm hover:border-emerald/20 transition-all duration-300 p-4 sm:p-5">
    <div className="flex items-start gap-3 sm:gap-4">
      {/* Thumbnail */}
      <ProjectThumbnail image={project.image} title={project.title} />

      {/* Content + Links */}
      <div className="flex-1 min-w-0 flex items-start justify-between gap-3 sm:gap-4">
        {/* Title + Description */}
        <div className="flex-1 min-w-0">
          <h3 className="text-sm sm:text-base font-bold text-foreground font-mono leading-tight">
            {project.title}
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed mt-1.5 line-clamp-2">
            {project.description}
          </p>
        </div>

        {/* Links */}
        <div className="flex items-center gap-2 flex-shrink-0">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="min-w-[36px] min-h-[36px] flex items-center justify-center p-2 rounded-lg border border-border/50 bg-secondary/30 hover:bg-emerald/10 hover:border-emerald/30 active:bg-emerald/15 text-muted-foreground hover:text-emerald transition-all duration-300 group/link touch-manipulation"
              aria-label="View on GitHub"
            >
              <GitHubIcon className="w-4 h-4 group-hover/link:scale-110 transition-transform flex-shrink-0" />
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="min-w-[36px] min-h-[36px] flex items-center justify-center p-2 rounded-lg border border-border/50 bg-secondary/30 hover:bg-emerald/10 hover:border-emerald/30 active:bg-emerald/15 text-muted-foreground hover:text-emerald transition-all duration-300 group/link touch-manipulation"
              aria-label="View live site"
            >
              <ExternalLink className="w-4 h-4 group-hover/link:scale-110 transition-transform flex-shrink-0" />
            </a>
          )}
        </div>
      </div>
    </div>

    {/* Tags */}
    <div className="flex flex-wrap gap-1.5 mt-3 pt-3 border-t border-border/30">
      {project.tags.map((tag) => (
        <span
          key={tag}
          className="px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-md border border-border/50 bg-secondary/30 text-[11px] sm:text-xs font-medium text-foreground/70"
        >
          {tag}
        </span>
      ))}
    </div>
  </div>
));

export default Projects;
