import { Button } from "@/components/Button";
import { BRAND_LINE } from "@/lib/brand";
import { CTA_PRIMARY, CTA_VIEW_PROJECTS, TELEGRAM_URL } from "@/lib/constants";

export function Hero() {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -right-32 top-0 h-96 w-96 rounded-full bg-white/5 blur-3xl" />
        <div className="absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-zinc-800/30 blur-3xl" />
      </div>

      <div className="container-narrow">
        <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-zinc-700 bg-accent-light px-4 py-1.5 text-sm font-medium text-zinc-300">
          <span className="h-2 w-2 rounded-full bg-white" />
          {BRAND_LINE}
        </p>

        <h1 className="max-w-4xl text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl">
          Разрабатываю сайты и цифровые продукты для бизнеса
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-zinc-400 sm:text-xl">
          От продающих лендингов до интерактивных веб-сервисов. Продуманная
          структура, современный UX и решения под задачи бизнеса.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
          <Button href={TELEGRAM_URL} external>
            {CTA_PRIMARY}
          </Button>
          <Button href="#projects" variant="secondary">
            {CTA_VIEW_PROJECTS}
          </Button>
        </div>

        <ul className="mt-14 grid gap-6 border-t border-subtle pt-10 sm:grid-cols-3">
          {[
            {
              value: "Проектирование",
              label: "структура и сценарии под задачу бизнеса",
            },
            {
              value: "UX и интерфейс",
              label: "удобство, иерархия, адаптивность",
            },
            {
              value: "Цифровые продукты",
              label: "от лендинга до веб-сервиса",
            },
          ].map((item) => (
            <li key={item.value}>
              <p className="text-2xl font-bold text-white">{item.value}</p>
              <p className="mt-1 text-sm text-zinc-500">{item.label}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
