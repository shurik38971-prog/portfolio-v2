import { SectionHeader } from "@/components/SectionHeader";

const technologies = [
  { name: "Next.js", description: "App Router, SSR, производительность" },
  { name: "TypeScript", description: "типизация и надёжность кода" },
  { name: "React", description: "компонентные интерфейсы" },
  { name: "Tailwind CSS", description: "дизайн-система и адаптив" },
  { name: "Framer Motion", description: "микроанимации и переходы" },
];

export function Technologies() {
  return (
    <section id="tech" className="section-padding section-alt">
      <div className="container-narrow">
        <SectionHeader
          label="Стек"
          title="Технологии"
          description="Инструменты, на которых собираю интерфейсы — без лишнего усложнения."
        />

        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {technologies.map((tech) => (
            <li
              key={tech.name}
              className="rounded-2xl border border-subtle bg-surface-card px-5 py-6 text-center"
            >
              <p className="text-lg font-bold text-white">{tech.name}</p>
              <p className="mt-2 text-xs leading-relaxed text-zinc-500">
                {tech.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
