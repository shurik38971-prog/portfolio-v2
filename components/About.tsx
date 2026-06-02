import { Button } from "@/components/Button";
import { CTA_PRIMARY, TELEGRAM_URL } from "@/lib/constants";

const facts = [
  "Индивидуальный подход",
  "Адаптация под мобильные устройства",
  "Поддержка после запуска",
  "Работа напрямую без посредников",
];

export function About() {
  return (
    <section id="about" className="section-padding section-alt">
      <div className="container-narrow">
        <div className="grid items-start gap-10 lg:grid-cols-[1fr_280px] lg:gap-12">
          <div className="max-w-3xl">
            <p className="text-2xl font-bold text-white sm:text-3xl">
              Привет! Меня зовут Александр.
            </p>

            <div className="mt-6 space-y-5 text-lg leading-relaxed text-zinc-400">
              <p>
                Я разрабатываю сайты для малого бизнеса, экспертов и локальных
                компаний — от лендингов до более сложных проектов с интеграциями
                и автоматизацией.
              </p>
              <p>
                Для меня важен не только дизайн. Главная задача проекта — помочь
                бизнесу понятнее донести ценность своих услуг и сделать обращение
                клиента максимально простым.
              </p>
            </div>

            <div className="mt-10 rounded-2xl border border-subtle bg-surface-card p-6 sm:p-8">
              <p className="text-lg font-semibold text-white">
                За время работы я понял одну вещь:
              </p>
              <p className="mt-4 text-xl font-bold leading-snug text-white sm:text-2xl">
                Большинству компаний нужен не просто красивый сайт.
              </p>
              <p className="mt-3 text-xl font-bold leading-snug text-white sm:text-2xl">
                Им нужен понятный инструмент, который помогает привлекать
                клиентов.
              </p>
              <p className="mt-6 leading-relaxed text-zinc-400">
                Поэтому каждый проект начинаю с анализа бизнеса, аудитории и
                сценария взаимодействия с клиентом, а уже потом перехожу к
                дизайну и разработке.
              </p>
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
