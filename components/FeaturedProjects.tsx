import { ProjectCard } from "@/components/ProjectCard";
import { SectionHeader } from "@/components/SectionHeader";
import { PORTFOLIO_PROJECTS } from "@/lib/projects";

export function FeaturedProjects() {
  return (
    <section id="projects" className="section-padding">
      <div className="container-narrow">
        <SectionHeader
          label="Портфолио"
          title="Избранные проекты"
          description="Живые демо: интерфейсы, структура и UX-решения для разных ниш бизнеса."
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          {PORTFOLIO_PROJECTS.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
