import { SectionHeader } from "@/components/SectionHeader";

const steps = [
  {
    step: "01",
    title: "Анализ задачи",
    description:
      "Разбираем бизнес-контекст, аудиторию и сценарий, который должен поддерживать интерфейс.",
  },
  {
    step: "02",
    title: "Прототип",
    description:
      "Схема страниц и блоков — согласуем структуру, логику и путь пользователя.",
  },
  {
    step: "03",
    title: "Дизайн и разработка",
    description:
      "Визуальная система, вёрстка, интерактив и адаптив под все устройства.",
  },
  {
    step: "04",
    title: "Запуск",
    description:
      "Публикация, проверка на реальных устройствах и доработки по обратной связи.",
  },
];

export function Process() {
  return (
    <section id="process" className="section-padding">
      <div className="container-narrow">
        <SectionHeader
          label="Процесс"
          title="Как проходит работа"
          description="Прозрачные этапы — от постановки задачи до готового продукта."
        />

        <ol className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((item, index) => (
            <li key={item.step} className="relative">
              {index < steps.length - 1 && (
                <span
                  className="absolute left-1/2 top-8 hidden h-px w-full bg-gradient-to-r from-zinc-600 to-transparent lg:block"
                  aria-hidden
                />
              )}
              <div className="relative h-full rounded-2xl border border-subtle bg-surface-card p-6">
                <span className="text-4xl font-bold text-zinc-800">{item.step}</span>
                <h3 className="mt-4 text-lg font-bold text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                  {item.description}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
