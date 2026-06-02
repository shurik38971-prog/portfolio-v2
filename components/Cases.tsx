import { CasePreview } from "@/components/CasePreview";

const concepts = [
  {
    niche: "Стоматология",
    variant: "dental" as const,
    task:
      "Концепт лендинга клиники: спокойная подача, понятная иерархия услуг и короткий путь к записи без перегруза интерфейса.",
    solutions: [
      "Сетка популярных услуг с акцентом на визуальный ритм и читаемость",
      "Блок доверия и преимуществ — компактно, без «маркетингового шума»",
      "Сценарий записи: один главный CTA и вторичный контакт",
      "Светлая медицинская палитра и крупная типографика в hero",
    ],
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    niche: "Онлайн-школа",
    variant: "school" as const,
    task:
      "Концепт страницы под одно предложение: быстро показать формат обучения и снизить когнитивную нагрузку до действия.",
    solutions: [
      "Hero с одним оффером и коротким пояснением ценности",
      "Пошаговый блок «как проходит обучение» вместо длинного текста",
      "Карточки преимуществ в равном визуальном весе",
      "Компактная форма заявки без лишних полей",
    ],
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    niche: "Частный юрист",
    variant: "lawyer" as const,
    task:
      "Концепт сайта эксперта: ясно показать направления работы и сценарий обращения, сохранив сдержанный деловой тон.",
    solutions: [
      "Карточки специализаций вместо сплошного текста",
      "Линейный блок этапов сотрудничества",
      "Модуль контактов с несколькими каналами связи",
      "Строгая типографика и контрастная структура разделов",
    ],
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    niche: "Сервис ремонта",
    variant: "repair" as const,
    task:
      "Концепт мобильно-ориентированного сайта услуг: быстрый доступ к контактам, прайсу и форме расчёта стоимости.",
    solutions: [
      "Приоритет контактов и CTA на первом экране",
      "Список услуг с понятными карточками и иконками",
      "Блок калькулятора / заявки на оценку ремонта",
      "Адаптивная сетка с упором на thumb-zone на телефоне",
    ],
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
  },
];

export function Cases() {
  return (
    <section id="concepts" className="section-padding">
      <div className="container-narrow">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-zinc-400">
            Портфолио
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Концепты для разных ниш
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-zinc-400">
            Демонстрационные проекты, показывающие мой подход к структуре, UX и
            упаковке бизнеса.
          </p>
        </div>

        <div className="mt-14 space-y-16 sm:space-y-20">
          {concepts.map((item, index) => (
            <article
              key={item.niche}
              className="grid gap-8 lg:grid-cols-2 lg:items-start lg:gap-12"
            >
              <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                <p className="text-sm font-semibold uppercase tracking-wider text-zinc-500">
                  Ниша
                </p>
                <h3 className="mt-2 text-2xl font-bold text-white sm:text-3xl">
                  {item.niche}
                </h3>

                <div className="mt-8 lg:hidden">
                  <CasePreview variant={item.variant} />
                </div>

                <div className="mt-8">
                  <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
                    Задача
                  </p>
                  <p className="mt-2 leading-relaxed text-zinc-300">{item.task}</p>
                </div>

                <div className="mt-6">
                  <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
                    Ключевые решения
                  </p>
                  <ul className="mt-3 space-y-2.5">
                    {item.solutions.map((solution) => (
                      <li
                        key={solution}
                        className="flex gap-2.5 text-sm leading-relaxed text-zinc-400"
                      >
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-zinc-500" />
                        {solution}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6">
                  <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
                    Стек
                  </p>
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {item.stack.map((tech) => (
                      <li
                        key={tech}
                        className="rounded-full border border-zinc-700 bg-zinc-900/80 px-3 py-1 text-xs font-medium text-zinc-300"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div
                className={`hidden lg:block ${index % 2 === 1 ? "lg:order-1" : ""}`}
              >
                <p className="mb-3 text-xs font-medium uppercase tracking-wider text-zinc-600">
                  Скриншот концепта
                </p>
                <CasePreview variant={item.variant} />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
