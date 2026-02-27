import { GitHubIcon } from "@/components/icons/SocialIcons";
import { projects } from "@/lib/data";
import { Project } from "@/types";
import { Code2, ExternalLink, FolderGit2 } from "lucide-react";
import { memo } from "react";

const AllProjects = () => {

  return (
    <section
      className="pb-12 sm:pb-16 md:pb-20 lg:pb-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-gradient-to-b from-background via-background to-secondary/5"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald/5 border border-emerald/20 text-emerald text-sm font-medium uppercase tracking-wider mb-6">
            <FolderGit2 className="w-4 h-4" />
            <span>All Projects</span>
          </div>

          <p className="text-muted-foreground text-sm sm:text-base max-w-2xl mx-auto">
            A comprehensive collection of my professional and personal projects, showcasing my expertise in modern web development, backend systems, and automation.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mt-4">
          {projects.map((project, index) => (
            <div key={index} className="h-full">
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectCard = memo(({ project }: { project: Project }) => {
  const hasImage = project.image && project.image.length > 0;

  return (
    <div className="group relative flex flex-col h-full rounded-2xl border border-border/50 bg-card/40 overflow-hidden hover:border-emerald/30 transition-all duration-300 hover:shadow-lg hover:shadow-emerald/10">
      {/* Background glow effect on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      {/* Image / Thumbnail Section */}
      <div className="relative aspect-[16/9] w-full overflow-hidden border-b border-border/50">
        <div className="absolute inset-0 bg-secondary/20 mix-blend-overlay group-hover:bg-transparent transition-colors duration-500 z-10" />
        {hasImage ? (
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-in-out"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center gap-3 bg-gradient-to-br from-secondary/50 via-secondary/20 to-emerald-900/10 relative overflow-hidden">
             {/* Decorative background elements replaced with light gradients instead of expensive blur filters */}
             <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-full translate-x-1/2 -translate-y-1/2" />
             <div className="absolute bottom-0 left-0 w-32 h-32 bg-emerald-500/5 rounded-full -translate-x-1/2 translate-y-1/2" />

            <Code2 className="w-12 h-12 text-emerald/30 group-hover:text-emerald/50 transition-colors duration-500 z-20" />
            <span className="text-xs font-semibold text-emerald/40 uppercase tracking-widest z-20">Preview Available</span>
          </div>
        )}

        {/* Quick Links overlay on image */}
        <div className="absolute top-4 right-4 flex gap-2 z-20 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-background/80 backdrop-blur-md border border-white/10 text-foreground hover:bg-emerald/20 hover:text-emerald hover:border-emerald/50 transition-all duration-300 shadow-xl"
              aria-label="View Data on GitHub"
            >
              <GitHubIcon className="w-4 h-4" />
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-background/80 backdrop-blur-md border border-white/10 text-foreground hover:bg-emerald/20 hover:text-emerald hover:border-emerald/50 transition-all duration-300 shadow-xl"
              aria-label="View live Data"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>

      {/* Content Section */}
      <div className="flex flex-col flex-1 p-6 relative z-10">
        <h3 className="text-xl font-bold text-foreground font-mono mb-3 group-hover:text-emerald transition-colors duration-300">
          {project.title}
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed mb-6">
          {project.description}
        </p>

        {project.bullets && project.bullets.length > 0 && (
          <ul className="mb-6 space-y-2 flex-1">
            {project.bullets.map((bullet, idx) => (
              <li key={idx} className="text-sm text-muted-foreground/80 flex items-start gap-2">
                <span className="mt-1.5 w-1 h-1 rounded-full bg-emerald/50 flex-shrink-0" />
                <span className="leading-relaxed">{bullet}</span>
              </li>
            ))}
          </ul>
        )}

        {!project.bullets && <div className="flex-1" />}

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-auto pt-5 border-t border-border/30">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 rounded-md border border-border/50 bg-secondary/30 text-xs font-medium text-foreground/80 group-hover:border-emerald/20 transition-colors duration-300"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
});

export default AllProjects;
