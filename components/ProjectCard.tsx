import Image from "next/image";
import type { PortfolioProject } from "@/lib/projects";

interface ProjectCardProps {
  project: PortfolioProject;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-subtle bg-surface-card transition-colors hover:border-zinc-600">
      <a
        href={project.href}
        target="_blank"
        rel="noopener noreferrer"
        className="relative block aspect-[16/10] min-h-[200px] overflow-hidden sm:min-h-[240px]"
        aria-label={`Открыть проект: ${project.title}`}
      >
        <Image
          src={project.image}
          alt={project.imageAlt}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.04]"
          priority={project.slug === "dental" || project.slug === "online-school"}
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-surface-card via-surface-card/40 to-transparent"
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-gradient-to-br from-black/50 via-black/10 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-90"
          aria-hidden
        />
        <span className="absolute bottom-4 left-4 rounded-full border border-white/20 bg-black/40 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
          Live demo
        </span>
      </a>

      <div className="flex flex-1 flex-col p-6 sm:p-8">
        <h3 className="text-xl font-bold text-white">
          <span className="mr-2" aria-hidden>
            {project.emoji}
          </span>
          {project.title}
        </h3>
        <p className="mt-3 flex-1 leading-relaxed text-zinc-400">
          {project.description}
        </p>

        <ul className="mt-5 flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <li
              key={tech}
              className="rounded-full border border-zinc-700 bg-zinc-900/80 px-3 py-1 text-xs font-medium text-zinc-300"
            >
              {tech}
            </li>
          ))}
        </ul>

        <a
          href={project.href}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex w-full items-center justify-center rounded-full border border-zinc-600 bg-transparent px-6 py-3.5 text-sm font-semibold text-white transition-all hover:border-zinc-400 hover:bg-white/5 sm:w-auto"
        >
          Открыть проект
          <span className="ml-2 opacity-60" aria-hidden>
            ↗
          </span>
        </a>
      </div>
    </article>
  );
}
