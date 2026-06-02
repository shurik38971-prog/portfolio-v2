const cases = [
  {
    title: "🦷 Стоматологическая клиника",
    problem:
      "Сайт не помогал посетителю принять решение о записи: ключевые услуги и преимущества клиники были недостаточно заметны.",
    solution:
      "Создал посадочную страницу с акцентом на популярных услугах, преимуществах клиники и простом сценарии записи.",
    result:
      "Получился современный инструмент презентации услуг, который помогает потенциальным пациентам быстрее перейти к записи на консультацию.",
  },
  {
    title: "🎓 Онлайн-школа английского языка",
    problem:
      "Страница содержала слишком много информации и не помогала посетителю быстро понять ценность предложения и следующий шаг.",
    solution:
      "Разработал лендинг с акцентом на одном предложении, понятной структурой, блоком преимуществ и короткой формой заявки.",
    result:
      "Путь пользователя стал проще и понятнее. Посетитель быстрее знакомится с предложением и может оставить заявку без лишних действий.",
  },
  {
    title: "⚖️ Частный юрист",
    problem:
      "Сайт не объяснял специализацию юриста и не помогал посетителям быстро понять, по каким вопросам можно обратиться.",
    solution:
      "Перестроил структуру сайта: выделил основные направления работы, добавил описание процесса сотрудничества и удобные способы связи.",
    result:
      "Информация стала восприниматься проще, а посетители получили понятный сценарий обращения за консультацией.",
  },
  {
    title: "🔧 Сервис по ремонту техники",
    problem:
      "Сайт был неудобен для мобильных пользователей: важная информация и контакты находились слишком глубоко в структуре страниц.",
    solution:
      "Создал адаптивный сайт с быстрым доступом к контактам, услугам и форме расчёта стоимости.",
    result:
      "Пользователи могут быстрее найти нужную информацию и связаться с компанией с любого устройства.",
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
            Было → сделал → стало
          </h2>
          <p className="mt-4 text-lg text-zinc-400">
            Реальные сценарии: от проблемы бизнеса до сайта, который ведёт к
            заявке.
          </p>
        </div>

        <div className="mt-14 space-y-8">
          {cases.map((item) => (
            <article
              key={item.title}
              className="rounded-2xl border border-subtle bg-surface-card p-6 sm:p-10"
            >
              <h3 className="text-lg font-semibold text-white sm:text-xl">
                {item.title}
              </h3>

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
