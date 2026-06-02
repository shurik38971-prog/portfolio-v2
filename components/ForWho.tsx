const items = [
  "получать заявки с сайта",
  "запускать рекламу на лендинг",
  "представить услуги понятнее",
  "заменить устаревший сайт",
];

export function ForWho() {
  return (
    <section id="for-who" className="section-padding section-alt">
      <div className="container-narrow">
        <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
          Подходит, если вам нужно:
        </h2>
        <ul className="mt-8 grid gap-4 sm:grid-cols-2">
          {items.map((item) => (
            <li
              key={item}
              className="flex items-start gap-3 rounded-2xl border border-subtle bg-surface-card px-5 py-4"
            >
              <span className="mt-0.5 text-lg leading-none text-white" aria-hidden>
                ✅
              </span>
              <span className="text-base leading-relaxed text-zinc-300">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
