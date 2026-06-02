export function Intro() {
  return (
    <section id="intro" className="section-padding">
      <div className="container-narrow max-w-3xl">
        <p className="text-2xl font-bold text-white sm:text-3xl">
          Привет! Меня зовут Александр.
        </p>

        <div className="mt-6 space-y-5 text-lg leading-relaxed text-zinc-400">
          <p>
            Я создаю современные сайты для бизнеса: от лендингов и сайтов услуг
            до более сложных проектов с интеграциями и автоматизацией.
          </p>
          <p>
            Для меня важно не просто сделать красивый дизайн, а создать сайт,
            который помогает привлекать клиентов и развивать бизнес.
          </p>
        </div>

        <div className="mt-10 rounded-2xl border border-subtle bg-surface-card p-6 sm:p-8">
          <p className="text-lg font-semibold text-white">
            За последние годы я понял одну вещь:
          </p>
          <p className="mt-4 text-xl font-bold leading-snug text-white sm:text-2xl">
            Большинству компаний не нужен красивый сайт.
          </p>
          <p className="mt-3 text-xl font-bold leading-snug text-white sm:text-2xl">
            Им нужен сайт, который приводит заявки.
          </p>
          <p className="mt-6 leading-relaxed text-zinc-400">
            Поэтому каждый проект начинаю с анализа бизнеса и пути клиента, а
            уже потом занимаюсь дизайном и разработкой.
          </p>
        </div>
      </div>
    </section>
  );
}
