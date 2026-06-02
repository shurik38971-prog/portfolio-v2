import { Button } from "@/components/Button";
import { CTA_PRIMARY, TELEGRAM_URL } from "@/lib/constants";

const plans = [
  {
    title: "Лендинг",
    price: "от 20 000 ₽",
    features: [
      "анализ задачи",
      "адаптивный дизайн",
      "форма заявок",
      "подключение домена",
      "запуск проекта",
    ],
    featured: false,
  },
  {
    title: "Корпоративный сайт",
    price: "от 35 000 ₽",
    features: [
      "анализ задачи и структуры",
      "несколько страниц",
      "адаптивный дизайн",
      "формы заявок",
      "базовая SEO-структура",
      "запуск проекта",
    ],
    featured: true,
  },
  {
    title: "Индивидуальный проект",
    price: "обсуждается отдельно",
    features: [
      "техническое задание",
      "интеграции и автоматизация",
      "нестандартная логика",
      "тестирование",
      "сопровождение после запуска",
    ],
    featured: false,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="section-padding section-alt">
      <div className="container-narrow">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-zinc-400">
            Стоимость
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Прозрачные цены без сюрпризов
          </h2>
          <p className="mt-4 text-lg text-zinc-400">
            Точная сумма зависит от задачи. Напишите — за 15 минут сориентирую по
            срокам и бюджету.
          </p>
        </div>

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
