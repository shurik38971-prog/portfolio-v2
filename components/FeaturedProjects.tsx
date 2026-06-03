import { ProjectCard } from "@/components/ProjectCard";
import { SectionHeader } from "@/components/SectionHeader";
import { PORTFOLIO_DISCLAIMER } from "@/lib/constants";
import { PORTFOLIO_PROJECTS } from "@/lib/projects";

export function FeaturedProjects() {
  return (
    <section id="projects" className="section-padding">
      <div className="container-narrow">
        <SectionHeader
          label="Портфолио"
          title="Избранные демо-проекты"
          description="Живые концепты для разных ниш бизнеса: структура, интерфейс и UX-сценарии."
        />

        <p className="mt-6 max-w-3xl text-base leading-relaxed text-zinc-500 sm:text-lg">
          {PORTFOLIO_DISCLAIMER}
        </p>

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          {PORTFOLIO_PROJECTS.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
