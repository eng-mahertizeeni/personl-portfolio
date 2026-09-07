import { ExternalLink, Lock } from "lucide-react";
import { projects, type Project } from "@/data/content";
import { GithubIcon } from "@/components/icons";
import ImageGallery from "@/components/ImageGallery";

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="flex flex-col gap-4 rounded-2xl border border-border bg-surface p-6 transition-colors hover:border-accent/60">
      <div className="flex flex-wrap items-start justify-between gap-2">
        <div>
          <h3 className="text-lg font-medium text-foreground">{project.name}</h3>
          {project.role && (
            <p className="mt-0.5 text-xs text-accent">{project.role}</p>
          )}
        </div>
        <div className="flex flex-col items-end gap-1">
          <span className="rounded-full border border-border px-2.5 py-0.5 font-mono text-xs text-accent">
            {project.type}
          </span>
          {project.period && (
            <span className="text-xs text-muted">{project.period}</span>
          )}
        </div>
      </div>

      <p className="text-sm leading-relaxed text-muted">{project.summary}</p>

      {project.images && project.images.length > 0 && (
        <ImageGallery images={project.images} />
      )}

      <ul className="list-disc space-y-1.5 pl-4 text-sm leading-relaxed text-muted marker:text-accent">
        {project.highlights.map((point) => (
          <li key={point}>{point}</li>
        ))}
      </ul>

      <div className="flex flex-wrap gap-2 pt-1">
        {project.tech.map((tech) => (
          <span
            key={tech}
            className="rounded-full bg-surface-2 px-2.5 py-1 text-xs text-muted"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="flex flex-wrap items-center gap-4 pt-2 text-sm">
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-foreground hover:text-accent"
          >
            <GithubIcon className="h-4 w-4" />
            Code
          </a>
        )}
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-foreground hover:text-accent"
          >
            <ExternalLink size={16} />
            Live demo
          </a>
        )}
        {project.privateRepo && (
          <span className="inline-flex items-center gap-1.5 text-muted">
            <Lock size={14} />
            Private repository
          </span>
        )}
      </div>
    </article>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-5xl px-6 py-20">
      <h2 className="font-mono text-sm text-accent">03. Projects</h2>
      <div className="mt-4 grid grid-cols-1 gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  );
}
