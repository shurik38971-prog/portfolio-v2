import { Button } from "@/components/Button";
import { SectionHeader } from "@/components/SectionHeader";
import { CTA_PRIMARY, TELEGRAM_URL } from "@/lib/constants";

const plans = [
  {
    title: "Лендинг",
    price: "от 20 000 ₽",
    features: [
      "анализ задачи и структуры",
      "адаптивный интерфейс",
      "формы и сценарии обращения",
      "подключение домена",
      "запуск проекта",
    ],
    featured: false,
  },
  {
    title: "Корпоративный сайт",
    price: "от 35 000 ₽",
    features: [
      "проектирование нескольких страниц",
      "дизайн-система и компоненты",
      "адаптивная вёрстка",
      "интеграция форм",
      "запуск и сопровождение",
    ],
    featured: true,
  },
  {
    title: "Индивидуальный проект",
    price: "обсуждается отдельно",
    features: [
      "техническое задание",
      "интеграции и API",
      "интерактивная логика",
      "тестирование",
      "поддержка после релиза",
    ],
    featured: false,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="section-padding">
      <div className="container-narrow">
        <SectionHeader
          label="Стоимость"
          title="Ориентиры по бюджету"
          description="Точная оценка — после обсуждения задачи, объёма и сроков."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {plans.map((plan) => (
            <article
              key={plan.title}
              className={`flex flex-col rounded-2xl border p-8 ${
                plan.featured
                  ? "border-zinc-500 bg-surface-card shadow-lg shadow-black/20"
                  : "border-subtle bg-surface-card"
              }`}
            >
              <h3 className="text-xl font-bold text-white">{plan.title}</h3>
              <p className="mt-4 text-3xl font-bold tracking-tight text-white">
                {plan.price}
              </p>
              <ul className="mt-6 flex-1 space-y-2.5">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2 text-sm text-zinc-400"
                  >
                    <span className="text-white" aria-hidden>
                      ✓
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button href={TELEGRAM_URL} external>
            {CTA_PRIMARY}
          </Button>
        </div>
      </div>
    </section>
  );
}
