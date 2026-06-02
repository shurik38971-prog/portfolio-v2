import { Button } from "@/components/Button";
import { CTA_PRIMARY, TELEGRAM_URL } from "@/lib/constants";

const services = [
  {
    title: "Сайт для получения заявок",
    description:
      "Структура, тексты и формы заточены под один результат — чтобы клиент оставил заявку, а не просто посмотрел и ушёл.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    ),
  },
  {
    title: "Лендинг под рекламу",
    description:
      "Одна страница — один оффер. Быстрая загрузка, понятный путь к действию, готовность к запуску таргета и контекста.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
      />
    ),
  },
  {
    title: "Сайт для услуг и экспертов",
    description:
      "Показываете экспертизу, отзывы и формат работы так, чтобы человек доверил вам задачу и написал первым.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
      />
    ),
  },
  {
    title: "Редизайн для повышения конверсии",
    description:
      "Если сайт есть, но заявок мало — пересобираю логику, оффер и визуал, чтобы посетители чаще доходили до контакта.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
      />
    ),
  },
];

export function Services() {
  return (
    <section id="services" className="section-padding section-alt">
      <div className="container-narrow">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-zinc-400">
            Услуги
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Не «разработка», а результат для вашего бизнеса
          </h2>
          <p className="mt-4 text-lg text-zinc-400">
            Каждый формат решает конкретную задачу: больше заявок, понятный
            оффер, доверие к эксперту.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {services.map((service) => (
            <article
              key={service.title}
              className="group rounded-2xl border border-subtle bg-surface-card p-8 transition-colors hover:border-zinc-600"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-accent-light text-white">
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {service.icon}
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white">{service.title}</h3>
              <p className="mt-3 leading-relaxed text-zinc-400">
                {service.description}
              </p>
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
