const faq = [
  {
    question: "Сколько времени занимает разработка?",
    answer:
      "Лендинг — обычно 3–7 дней. Корпоративный сайт — от 2 до 4 недель. Сроки зависят от объёма и скорости согласований с вашей стороны.",
  },
  {
    question: "Что нужно от меня для старта?",
    answer:
      "Кратко о бизнесе, примеры конкурентов (если есть), тексты или тезисы, логотип и пожелания по структуре. Если текстов нет — помогу собрать основу под вашу нишу.",
  },
  {
    question: "Можно ли потом править сайт самостоятельно?",
    answer:
      "Да. Подключаю удобную админку или показываю, как менять ключевые блоки. Цель — чтобы вы не зависели от разработчика в мелочах.",
  },
  {
    question: "Помогаете с рекламой и аналитикой?",
    answer:
      "Сайт готовлю под запуск рекламы: быстрая загрузка, понятный оффер, цели в Метрике. Настройку рекламных кабинетов обсуждаем отдельно.",
  },
  {
    question: "Как происходит оплата?",
    answer:
      "Обычно 50% перед стартом и 50% после сдачи. Для крупных проектов — поэтапно. Все условия фиксируем до начала работы.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="section-padding">
      <div className="container-narrow">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-zinc-400">
            FAQ
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Частые вопросы
          </h2>
        </div>

        <dl className="mt-12 space-y-4">
          {faq.map((item) => (
            <div
              key={item.question}
              className="rounded-2xl border border-subtle bg-surface-card p-6 sm:p-8"
            >
              <dt className="text-lg font-bold text-white">{item.question}</dt>
              <dd className="mt-3 leading-relaxed text-zinc-400">{item.answer}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
