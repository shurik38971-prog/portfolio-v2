import { CasePreview } from "@/components/CasePreview";
import { SectionHeader } from "@/components/SectionHeader";

const concepts = [
  {
    niche: "Стоматология",
    variant: "dental" as const,
    task: "Показать услуги клиники и снизить барьер перед записью на консультацию.",
    solution:
      "Посадочная страница с иерархией услуг, блоком доверия и отдельным сценарием записи.",
    ux: "Спокойная медицинская палитра, крупная типографика, один главный путь к действию.",
    implementation:
      "Сетка карточек услуг, адаптивная вёрстка, анимации появления блоков.",
  },
  {
    niche: "Онлайн-школа",
    variant: "school" as const,
    task: "Объяснить формат обучения и провести пользователя к заявке на программу.",
    solution:
      "Лендинг с фокусом на одном предложении, этапами обучения и короткой формой.",
    ux: "Минимум отвлечений, равный визуальный вес блоков, понятная навигация по смыслу.",
    implementation:
      "Продуктовые карточки, модульная сетка, мобильная оптимизация форм.",
  },
  {
    niche: "Частный юрист",
    variant: "lawyer" as const,
    task: "Раскрыть специализации и формат работы без перегруза текстом.",
    solution:
      "Структура из направлений практики, этапов сотрудничества и каналов связи.",
    ux: "Сдержанный деловой тон, контрастная типографика, логичные якоря разделов.",
    implementation:
      "Карточки направлений, таймлайн процесса, контактный модуль.",
  },
  {
    niche: "Сервис ремонта",
    variant: "repair" as const,
    task: "Дать быстрый доступ к услугам, расчёту стоимости и контактам с телефона.",
    solution:
      "Мобильный лендинг с калькулятором, списком работ и заметными точками связи.",
    ux: "Приоритет первого экрана, thumb-zone для CTA, короткие формулировки.",
    implementation:
      "Интерактивный калькулятор, sticky-контакты, оптимизация под мобильные.",
  },
];

export function Cases() {
  return (
    <section id="concepts" className="section-padding section-alt">
      <div className="container-narrow">
        <SectionHeader
          label="Кейсы"
          title="Концепты и демонстрационные проекты"
          description="Проекты, созданные для демонстрации подхода к UX, структуре и современной веб-разработке."
        />

        <div className="mt-14 space-y-16 sm:space-y-20">
          {concepts.map((item, index) => (
            <article
              key={item.niche}
              className="grid gap-8 lg:grid-cols-2 lg:items-start lg:gap-12"
            >
              <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                <h3 className="text-2xl font-bold text-white sm:text-3xl">
                  {item.niche}
                </h3>

                <div className="mt-8 lg:hidden">
                  <CasePreview variant={item.variant} />
                </div>

                <dl className="mt-8 space-y-6">
                  {[
                    { label: "Задача", text: item.task },
                    { label: "Решение", text: item.solution },
                    { label: "UX-подход", text: item.ux },
                    { label: "Особенности реализации", text: item.implementation },
                  ].map((block) => (
                    <div key={block.label}>
                      <dt className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
                        {block.label}
                      </dt>
                      <dd className="mt-2 leading-relaxed text-zinc-300">
                        {block.text}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>

              <div
                className={`hidden lg:block ${index % 2 === 1 ? "lg:order-1" : ""}`}
              >
                <p className="mb-3 text-xs font-medium uppercase tracking-wider text-zinc-600">
                  Визуал концепта
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
