import { Button } from "@/components/Button";
import { CTA_PRIMARY, TELEGRAM_URL, TELEGRAM_LABEL } from "@/lib/constants";

export function Contact() {
  return (
    <section id="contact" className="section-padding">
      <div className="container-narrow">
        <div className="relative overflow-hidden rounded-3xl border border-zinc-700 bg-gradient-to-br from-zinc-900 via-surface-card to-zinc-950 px-6 py-14 text-center sm:px-12 sm:py-20">
          <div className="pointer-events-none absolute inset-0 opacity-40">
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/10 blur-2xl" />
            <div className="absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-white/5 blur-2xl" />
          </div>

          <div className="relative mx-auto max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-zinc-400">
              Контакты
            </p>
            <h2 className="mt-4 text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
              Есть идея проекта?
            </h2>
            <p className="mt-4 text-lg text-zinc-400">
              Расскажите о задаче — предложу оптимальное решение и помогу
              определить объём работ.
            </p>
            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Button href={TELEGRAM_URL} external>
                {CTA_PRIMARY}
              </Button>
              <a
                href={TELEGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-zinc-400 transition-colors hover:text-white"
              >
                {TELEGRAM_LABEL} ↗
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
