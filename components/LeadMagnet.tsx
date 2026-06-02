import { Button } from "@/components/Button";
import { TELEGRAM_URL } from "@/lib/constants";

export function LeadMagnet() {
  return (
    <section id="audit" className="section-padding">
      <div className="container-narrow">
        <div className="relative overflow-hidden rounded-3xl border border-zinc-700 bg-gradient-to-br from-zinc-900 via-surface-card to-zinc-950 px-6 py-14 text-center sm:px-12 sm:py-20">
          <div className="pointer-events-none absolute inset-0 opacity-40">
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/10 blur-2xl" />
            <div className="absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-white/5 blur-2xl" />
          </div>

          <div className="relative mx-auto max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-zinc-400">
              Бесплатно
            </p>
            <h2 className="mt-4 text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
              Бесплатно разберём ваш сайт и подскажем, как увеличить количество
              заявок
            </h2>
            <p className="mt-4 text-lg text-zinc-400">
              Пришлите ссылку в Telegram — вернёмся с конкретными рекомендациями
              по структуре, офферу и точкам контакта. Без обязательств.
            </p>
            <div className="mt-10">
              <Button href={TELEGRAM_URL} external>
                Получить разбор
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
