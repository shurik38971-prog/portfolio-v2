import { SectionHeader } from "@/components/SectionHeader";

const niches = [
  {
    niche: "Стоматология",
    focus: "доверие, спокойная подача, понятная запись на приём",
  },
  {
    niche: "Онлайн-школа",
    focus: "путь ученика и продуктовый интерфейс обучения",
  },
  {
    niche: "Ремонт",
    focus: "калькулятор стоимости и удобный сценарий обращения",
  },
  {
    niche: "Юрист",
    focus: "экспертность и ясная структура услуг",
  },
];

export function DesignApproach() {
  return (
    <section id="approach" className="section-padding">
      <div className="container-narrow">
        <SectionHeader title="Каждая ниша требует своего подхода" />

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <ul className="space-y-4">
            {niches.map((item) => (
              <li
                key={item.niche}
                className="rounded-2xl border border-subtle bg-surface-card px-5 py-4"
              >
                <span className="font-semibold text-white">{item.niche}</span>
                <span className="text-zinc-500"> — </span>
                <span className="text-zinc-400">{item.focus}</span>
              </li>
            ))}
          </ul>

          <div className="rounded-2xl border border-subtle bg-surface-card p-6 sm:p-8">
            <p className="text-lg leading-relaxed text-zinc-300">
              Поэтому каждый проект начинается с анализа задачи и пользовательского
              сценария, а уже затем создаётся дизайн и разрабатывается интерфейс.
            </p>
            <p className="mt-5 leading-relaxed text-zinc-400">
              Такой порядок помогает не копировать шаблоны, а собирать решение под
              конкретный бизнес: от структуры страниц до деталей взаимодействия.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
