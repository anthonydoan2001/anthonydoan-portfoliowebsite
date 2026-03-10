import { GitHubIcon } from '@/components/icons/SocialIcons';
import { projects } from '@/lib/data';
import { Project } from '@/types';
import { ExternalLink, FolderGit2 } from 'lucide-react';
import { memo } from 'react';

const RepoIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
  </svg>
);

const AllProjects = () => {
  return (
    <section>
      <div className="text-center mb-10 sm:mb-14 flex flex-col items-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald/10 border border-emerald/20 text-emerald text-sm font-medium uppercase tracking-wider">
          <FolderGit2 className="w-4 h-4" />
          <span>All Projects</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
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
    <div className="p-6 bg-card border border-border rounded-lg hover:border-emerald transition-colors flex flex-col justify-between">
      <div>
        {/* Header: repo name + optional badge */}
        <div className="flex items-center justify-between mb-3">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-emerald font-bold hover:underline"
          >
            <RepoIcon className="w-4 h-4" />
            <span>{projectSlug}</span>
          </a>
          {project.badge && (
            <span className="text-[10px] px-2 py-0.5 rounded-full border border-border text-muted-foreground">
              {project.badge}
            </span>
          )}
        </div>

        {/* Description */}
        <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
          {project.description}
        </p>

        {/* Bullet points */}
        {project.bullets && project.bullets.length > 0 && (
          <ul className="text-xs text-muted-foreground space-y-2 mb-4 ml-1">
            {project.bullets.map((bullet, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="text-emerald mt-0.5">-</span>
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        )}

        {/* Tags */}
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

      {/* Footer: language indicator + links */}
      <div className="flex items-center justify-between text-xs font-mono text-muted-foreground">
        {project.language && (
          <span className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full bg-emerald" />
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

export default AllProjects;
