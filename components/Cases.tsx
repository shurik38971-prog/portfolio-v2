const cases = [
  {
    niche: "Стоматология",
    problem:
      "Старый сайт не объяснял услуги, не было явного призыва записаться — пациенты уходили на агрегаторы.",
    solution:
      "Собрал лендинг с понятными пакетами услуг, блоком доверия и формой записи в один клик.",
    result:
      "Владелец стал получать заявки напрямую с сайта, без посредников. Запись стала понятнее для новых пациентов.",
  },
  {
    niche: "Онлайн-школа",
    problem:
      "Трафик из рекламы уходил на длинную страницу без фокуса — мало людей доходили до заявки на пробный урок.",
    solution:
      "Сделал лендинг под один оффер: пробный урок + короткая форма и ответы на возражения.",
    result:
      "Путь к заявке стал короче, команда начала стабильнее получать обращения с рекламных кампаний.",
  },
  {
    niche: "Частный юрист",
    problem:
      "Сайт выглядел как визитка: не было ясно, с какими вопросами обращаться и почему доверять именно этому специалисту.",
    solution:
      "Перестроил структуру: ниши, кейсы, процесс работы и явный CTA в мессенджер.",
    result:
      "Клиенты стали писать с конкретным запросом, меньше «пустых» обращений и больше целевых диалогов.",
  },
  {
    niche: "Локальный сервис (ремонт)",
    problem:
      "Мобильная версия тормозила, контакты были спрятаны — звонки шли в основном с сарафана.",
    solution:
      "Быстрый адаптивный сайт с акцентом на телефон, Telegram и расчёт стоимости в два шага.",
    result:
      "Заявки с поиска и карт перестали теряться: контакт виден с первого экрана на любом устройстве.",
  },
];

export function Cases() {
  return (
    <section id="cases" className="section-padding">
      <div className="container-narrow">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-zinc-400">
            Кейсы
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Было → сделали → стало
          </h2>
          <p className="mt-4 text-lg text-zinc-400">
            Реальные сценарии: от проблемы бизнеса до сайта, который ведёт к
            заявке.
          </p>
        </div>

        <div className="mt-14 space-y-8">
          {cases.map((item, index) => (
            <article
              key={item.niche}
              className="rounded-2xl border border-subtle bg-surface-card p-6 sm:p-10"
            >
              <div className="flex flex-wrap items-center gap-3">
                <span className="rounded-full border border-zinc-700 bg-accent-light px-3 py-1 text-sm font-semibold text-zinc-200">
                  {item.niche}
                </span>
                <span className="text-sm text-zinc-400">Кейс {index + 1}</span>
              </div>

              <div className="mt-8 grid gap-6 lg:grid-cols-3">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
                    Проблема
                  </p>
                  <p className="mt-2 leading-relaxed text-zinc-300">
                    {item.problem}
                  </p>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-zinc-300">
                    Решение
                  </p>
                  <p className="mt-2 leading-relaxed text-zinc-300">
                    {item.solution}
                  </p>
                </div>
                <div className="rounded-xl border border-zinc-800 bg-surface-raised p-5">
                  <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
                    Результат
                  </p>
                  <p className="mt-2 font-medium leading-relaxed text-white">
                    {item.result}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
