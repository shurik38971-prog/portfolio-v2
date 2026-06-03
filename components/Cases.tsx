import { ProjectPreview } from "@/components/ProjectPreview";
import { SectionHeader } from "@/components/SectionHeader";
import { CTA_VIEW_DEMO, PORTFOLIO_DISCLAIMER } from "@/lib/constants";
import { getProjectBySlug, type ProjectSlug } from "@/lib/projects";

const concepts: {
  niche: string;
  slug: ProjectSlug;
  task: string;
  solution: string;
  ux: string;
  implementation: string;
}[] = [
  {
    niche: "Стоматология",
    slug: "dental",
    task: "Показать услуги клиники и снизить барьер перед записью на консультацию.",
    solution:
      "Посадочная страница с иерархией услуг, блоком доверия и отдельным сценарием записи.",
    ux: "Спокойная медицинская палитра, крупная типографика, один главный путь к действию.",
    implementation:
      "Сетка карточек услуг, адаптивная вёрстка, анимации появления блоков.",
  },
  {
    niche: "Онлайн-школа",
    slug: "online-school",
    task: "Объяснить формат обучения и провести пользователя к заявке на программу.",
    solution:
      "Лендинг с фокусом на одном предложении, этапами обучения и короткой формой.",
    ux: "Минимум отвлечений, равный визуальный вес блоков, понятная навигация по смыслу.",
    implementation:
      "Продуктовые карточки, модульная сетка, мобильная оптимизация форм.",
  },
  {
    niche: "Частный юрист",
    slug: "advokat",
    task: "Раскрыть специализации и формат работы без перегруза текстом.",
    solution:
      "Структура из направлений практики, этапов сотрудничества и каналов связи.",
    ux: "Сдержанный деловой тон, контрастная типографика, логичные якоря разделов.",
    implementation:
      "Карточки направлений, таймлайн процесса, контактный модуль.",
  },
  {
    niche: "Сервис ремонта",
    slug: "remont",
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
          description="Разбор UX-задач и решений по каждой нише — без вымысленных коммерческих результатов."
        />

        <p className="mt-6 max-w-3xl text-base leading-relaxed text-zinc-500 sm:text-lg">
          {PORTFOLIO_DISCLAIMER}
        </p>

        <div className="mt-14 space-y-16 sm:space-y-24">
          {concepts.map((item, index) => {
            const project = getProjectBySlug(item.slug);
            if (!project) return null;

            return (
              <article
                key={item.niche}
                className="overflow-hidden rounded-2xl border border-subtle bg-surface-card"
              >
                <div className="grid lg:grid-cols-2 lg:items-stretch">
                  <div
                    className={`relative lg:min-h-[420px] ${index % 2 === 1 ? "lg:order-2" : ""}`}
                  >
                    <ProjectPreview project={project} fillHeight />
                  </div>

                  <div
                    className={`p-6 sm:p-8 lg:p-10 ${index % 2 === 1 ? "lg:order-1" : ""}`}
                  >
                    <p className="text-sm font-semibold uppercase tracking-wider text-zinc-500">
                      Ниша
                    </p>
                    <h3 className="mt-2 text-2xl font-bold text-white sm:text-3xl">
                      {item.niche}
                    </h3>

                    <dl className="mt-8 space-y-6">
                      {[
                        { label: "Задача", text: item.task },
                        { label: "Решение", text: item.solution },
                        { label: "UX-подход", text: item.ux },
                        {
                          label: "Особенности реализации",
                          text: item.implementation,
                        },
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

                    <a
                      href={project.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-8 inline-flex items-center text-sm font-semibold text-white transition-colors hover:text-zinc-300"
                    >
                      {CTA_VIEW_DEMO}
                      <span className="ml-2" aria-hidden>
                        ↗
                      </span>
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
