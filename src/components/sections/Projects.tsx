import { GitHubIcon } from "@/components/icons/SocialIcons";
import { useInView } from "@/hooks/useInView";
import { projects } from "@/lib/data";
import { getLanguageColor } from "@/lib/languageColors";
import { Project } from "@/types";
import { ArrowRight, Code2, ExternalLink } from "lucide-react";
import { memo } from "react";
import { Link } from "react-router-dom";

const RepoIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
  </svg>
);

const Projects = () => {
  const { ref, isInView } = useInView({ threshold: 0.1 });

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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10 sm:mb-14">
          {featuredProjects.map((project, index) => (
            <div key={index} className={`reveal-up stagger-${index + 1}`}>
              <ProjectCard project={project} />
            </div>
          ))}
        </div>

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

const ProjectCard = memo(({ project }: { project: Project }) => {
  const projectSlug = project.title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');

  return (
    <div className="h-full p-6 bg-card border border-border rounded-lg hover:border-emerald transition-colors flex flex-col justify-between">
      <div>
        <div className="flex items-center mb-3">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-emerald font-bold hover:underline"
          >
            <RepoIcon className="w-4 h-4" />
            <span>{projectSlug}</span>
          </a>
        </div>

        <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
          {project.description}
        </p>

        {project.tags && project.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 text-[10px] font-mono uppercase tracking-wider bg-secondary text-secondary-foreground rounded border border-border"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>

      <div className="flex items-center justify-between text-xs font-mono text-muted-foreground">
        {project.language && (
          <span className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full" style={{ backgroundColor: getLanguageColor(project.language) }} />
            {project.language}
          </span>
        )}
        <div className="flex items-center gap-3">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-emerald transition-colors"
              aria-label="View on GitHub"
            >
              <GitHubIcon className="w-4 h-4" />
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-emerald transition-colors"
              aria-label="View live site"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
});

ProjectCard.displayName = 'ProjectCard';

export default Projects;
