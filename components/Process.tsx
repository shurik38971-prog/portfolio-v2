const steps = [
  {
    step: "01",
    title: "Анализ бизнеса",
    description:
      "Разбираем нишу, аудиторию, конкурентов и что должно произойти после визита на сайт.",
  },
  {
    step: "02",
    title: "Прототип",
    description:
      "Схема страниц и блоков без «украшательств» — согласуем логику и путь к заявке.",
  },
  {
    step: "03",
    title: "Дизайн и разработка",
    description:
      "Современный минималистичный интерфейс, быстрая загрузка, адаптив под телефон и десктоп.",
  },
  {
    step: "04",
    title: "Запуск и улучшения",
    description:
      "Публикуем сайт, подключаем аналитику и при необходимости дорабатываем по обратной связи.",
  },
];

export function Process() {
  return (
    <section id="process" className="section-padding">
      <div className="container-narrow">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-zinc-400">
            Процесс
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Простая схема работы
          </h2>
          <p className="mt-4 text-lg text-zinc-400">
            Вы всегда понимаете, на каком этапе проект и что будет дальше.
          </p>
        </div>

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
