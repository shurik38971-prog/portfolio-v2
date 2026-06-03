import Image from "next/image";
import { ProjectBadges } from "@/components/ProjectBadges";
import type { PortfolioProject } from "@/lib/projects";

/** cover — карточки портфолио; full — кейсы: весь скриншот по ширине без обрезки */
export type ProjectPreviewFit = "cover" | "full";

interface ProjectPreviewProps {
  project: PortfolioProject;
  className?: string;
  imageFit?: ProjectPreviewFit;
}

const PREVIEW_WIDTH = 1440;
const PREVIEW_HEIGHT = 900;

export function ProjectPreview({
  project,
  className = "",
  imageFit = "cover",
}: ProjectPreviewProps) {
  if (imageFit === "full") {
    return (
      <a
        href={project.href}
        target="_blank"
        rel="noopener noreferrer"
        className={`group relative block overflow-hidden bg-zinc-950 ${className}`}
        aria-label={`Открыть демо: ${project.title}`}
      >
        <div className="relative">
          <Image
            src={project.image}
            alt={project.imageAlt}
            width={PREVIEW_WIDTH}
            height={PREVIEW_HEIGHT}
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="h-auto w-full transition-transform duration-700 ease-out group-hover:scale-[1.01]"
          />
          <div
            className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-zinc-950/90 to-transparent"
            aria-hidden
          />
          <ProjectBadges />
        </div>
      </a>
    );
  }

  return (
    <a
      href={project.href}
      target="_blank"
      rel="noopener noreferrer"
      className={`group relative block overflow-hidden bg-zinc-950 ${className}`}
      aria-label={`Открыть демо: ${project.title}`}
    >
      <div className="relative aspect-[16/10] w-full min-h-[200px] overflow-hidden sm:min-h-[240px]">
        <Image
          src={project.image}
          alt={project.imageAlt}
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="origin-top object-cover object-[center_top] transition-transform duration-700 ease-out group-hover:scale-[1.04]"
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
