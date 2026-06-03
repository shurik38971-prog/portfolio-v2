import { Button } from "@/components/Button";
import { SectionHeader } from "@/components/SectionHeader";
import { CTA_PRIMARY, TELEGRAM_URL } from "@/lib/constants";

const facts = [
  "Индивидуальный подход к задаче",
  "Адаптация под мобильные устройства",
  "Поддержка после запуска",
  "Работа напрямую без посредников",
];

export function About() {
  return (
    <section id="about" className="section-padding">
      <div className="container-narrow">
        <div className="grid items-start gap-10 lg:grid-cols-[1fr_280px] lg:gap-12">
          <div className="max-w-3xl">
            <SectionHeader
              label="Обо мне"
              title="Александр"
              description="Веб-разработчик и проектировщик интерфейсов для бизнеса."
            />

            <div className="mt-8 space-y-5 text-lg leading-relaxed text-zinc-400">
              <p>
                Я разрабатываю сайты для малого бизнеса, экспертов и локальных
                компаний — от лендингов до более сложных проектов с интеграциями
                и автоматизацией.
              </p>
              <p>
                Для меня важен не только дизайн. Главная задача проекта — помочь
                бизнесу понятнее донести ценность своих услуг и выстроить удобный
                сценарий для пользователя.
              </p>
            </div>

            <div className="mt-10 rounded-2xl border border-subtle bg-surface-card p-6 sm:p-8">
              <p className="text-sm font-semibold uppercase tracking-wider text-zinc-500">
                Почему я
              </p>
              <div className="mt-4 space-y-4 text-zinc-300">
                <p>
                  Я создаю сайты и интерфейсы, которые помогают бизнесу понятнее
                  доносить ценность своих услуг и продуктов.
                </p>
                <p>
                  Для меня важен не только дизайн, но и удобство пользователя,
                  структура информации и сценарии взаимодействия.
                </p>
                <p>
                  Каждый проект рассматриваю как продукт, который должен решать
                  конкретную задачу.
                </p>
              </div>
            </div>

            <div className="mt-8 lg:hidden">
              <FactsCard items={facts} />
            </div>

            <div className="mt-8">
              <Button href={TELEGRAM_URL} external>
                {CTA_PRIMARY}
              </Button>
            </div>
          </div>

          <div className="hidden lg:block">
            <FactsCard items={facts} />
          </div>
        </div>
      </div>
    </section>
  );
}

function FactsCard({ items }: { items: string[] }) {
  return (
    <aside className="rounded-2xl border border-subtle bg-surface-card p-6">
      <ul className="space-y-4">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-3 text-sm text-zinc-300">
            <span className="font-bold text-white" aria-hidden>
              ✓
            </span>
            {item}
          </li>
        ))}
      </ul>
    </aside>
  );
}
