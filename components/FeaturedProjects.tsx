import { CasePreview } from "@/components/CasePreview";
import { SectionHeader } from "@/components/SectionHeader";

const projects = [
  {
    title: "Стоматология",
    emoji: "🦷",
    variant: "dental" as const,
    description:
      "Премиальный сайт медицинской клиники с акцентом на доверие, услуги и запись на консультацию.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    href: "https://premium-dental-clinic-bay.vercel.app",
  },
  {
    title: "Онлайн-школа",
    emoji: "🎓",
    variant: "school" as const,
    description:
      "Концепт образовательной платформы с личным кабинетом, программой обучения и продуктовым UX.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    href: "https://online-school-seven.vercel.app",
  },
  {
    title: "Ремонт квартир",
    emoji: "🔧",
    variant: "repair" as const,
    description:
      "Коммерческий лендинг с калькулятором стоимости и сценариями обращения клиента.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    href: "https://remont-kappa.vercel.app",
  },
  {
    title: "Юрист",
    emoji: "⚖️",
    variant: "lawyer" as const,
    description:
      "Сайт частного специалиста с акцентом на доверие и экспертность.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    href: "https://advokat-coral.vercel.app",
  },
];

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
          {projects.map((project) => (
            <article
              key={project.href}
              className="group flex flex-col overflow-hidden rounded-2xl border border-subtle bg-surface-card transition-colors hover:border-zinc-600"
            >
              <div className="border-b border-subtle p-4 sm:p-5">
                <CasePreview variant={project.variant} />
              </div>

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
          ))}
        </div>
      </div>
    </section>
  );
}
