import Image from "next/image";
import { ProjectBadges } from "@/components/ProjectBadges";
import type { PortfolioProject } from "@/lib/projects";

interface ProjectPreviewProps {
  project: PortfolioProject;
  className?: string;
  fillHeight?: boolean;
}

export function ProjectPreview({
  project,
  className = "",
  fillHeight = false,
}: ProjectPreviewProps) {
  return (
    <a
      href={project.href}
      target="_blank"
      rel="noopener noreferrer"
      className={`group relative block overflow-hidden ${fillHeight ? "h-full min-h-[240px] lg:min-h-0" : "rounded-xl border border-zinc-800"} ${className}`}
      aria-label={`Открыть демо: ${project.title}`}
    >
      <div
        className={`relative w-full overflow-hidden ${
          fillHeight
            ? "aspect-[16/10] min-h-[240px] lg:absolute lg:inset-0 lg:aspect-auto lg:min-h-0"
            : "aspect-[16/10] min-h-[220px]"
        }`}
      >
        <Image
          src={project.image}
          alt={project.imageAlt}
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.04]"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/30 to-transparent"
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-gradient-to-br from-black/40 via-transparent to-transparent"
          aria-hidden
        />
        <ProjectBadges />
      </div>
    </a>
  );
}
