import { SectionHeader } from "@/components/SectionHeader";

const faq = [
  {
    question: "Сколько времени занимает разработка?",
    answer:
      "Лендинг — обычно от одной до двух недель. Многостраничный сайт или сервис — от 2 до 6 недель в зависимости от логики и согласований.",
  },
  {
    question: "Что нужно от меня для старта?",
    answer:
      "Описание задачи, материалы по бизнесу (если есть), примеры референсов и пожелания по структуре. Помогу собрать недостающее на этапе проектирования.",
  },
  {
    question: "Можно ли дорабатывать сайт после запуска?",
    answer:
      "Да. Заложу модульную структуру и при необходимости подключу админку или покажу, как менять ключевые блоки.",
  },
  {
    question: "Работаете ли с готовым дизайном?",
    answer:
      "Да, могу сверстать и реализовать по макету. Чаще проектирую структуру и интерфейс вместе с разработкой — так быстрее согласуется логика.",
  },
  {
    question: "Как происходит оплата?",
    answer:
      "Обычно поэтапно: предоплата перед стартом, остаток после сдачи. Для крупных проектов — разбивка по milestone.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="section-padding section-alt">
      <div className="container-narrow">
        <SectionHeader label="FAQ" title="Частые вопросы" />

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
