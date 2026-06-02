import { TELEGRAM_URL, TELEGRAM_LABEL } from "@/lib/constants";

export function Contact() {
  return (
    <section id="contact" className="section-padding section-alt">
      <div className="container-narrow text-center">
        <p className="text-sm font-semibold uppercase tracking-wider text-zinc-400">
          Контакты
        </p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
          Готовы обсудить ваш проект?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-lg text-zinc-400">
          Напишите в Telegram — отвечу в течение дня, задам уточняющие вопросы
          и предложу формат работы под вашу задачу.
        </p>

        <a
          href={TELEGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 inline-flex items-center gap-3 rounded-full bg-accent px-8 py-4 text-lg font-semibold text-zinc-950 shadow-lg shadow-white/10 transition-all hover:bg-accent-hover"
        >
          <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
            <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
          </svg>
          {TELEGRAM_LABEL}
        </a>

        <p className="mt-6 text-sm text-zinc-500">
          Удобнее обсудить голосом? Напишите — договоримся о звонке.
        </p>
      </div>
    </section>
  );
}
