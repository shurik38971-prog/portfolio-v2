const reasons = [
  "Без шаблонного подхода",
  "Помогаю с текстами и структурой",
  "Адаптация под мобильные устройства",
  "Быстрая загрузка сайта",
  "Поддержка после запуска",
];

export function WhyMe() {
  return (
    <section id="why-me" className="section-padding section-alt">
      <div className="container-narrow">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
          Почему клиенты выбирают меня
        </h2>

        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((item) => (
            <li
              key={item}
              className="flex items-start gap-3 rounded-2xl border border-subtle bg-surface-card px-5 py-4"
            >
              <span
                className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white/10 text-sm font-bold text-white"
                aria-hidden
              >
                ✓
              </span>
              <span className="text-base leading-relaxed text-zinc-300">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
