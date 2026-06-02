import { Button } from "@/components/Button";
import { CTA_PRIMARY, TELEGRAM_URL } from "@/lib/constants";

const trustPoints = [
  {
    title: "Фокус на конверсии",
    text: "Сначала — кто ваш клиент и что он должен сделать на сайте. Дизайн и вёрстка служат этой цели.",
  },
  {
    title: "Понимание маркетинга",
    text: "Оффер, структура, социальное доказательство и призывы к действию — не «красиво ради красиво».",
  },
  {
    title: "Простые решения для бизнеса",
    text: "Без лишней сложности: понятные сроки, прозрачный процесс и сайт, которым вы сможете пользоваться сами.",
  },
];

export function About() {
  return (
    <section id="about" className="section-padding section-alt">
      <div className="container-narrow">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-zinc-400">
              Почему мне доверяют
            </p>
            <blockquote className="mt-4 text-3xl font-bold leading-snug tracking-tight text-white sm:text-4xl">
              Я делаю сайты не ради дизайна, а ради результата — заявок и
              клиентов.
            </blockquote>
            <p className="mt-6 text-lg leading-relaxed text-zinc-400">
              Работаю с малым бизнесом, экспертами и услугами. Моя задача —
              чтобы сайт окупался диалогами с клиентами, а не висел в закладках.
            </p>
            <div className="mt-8">
              <Button href={TELEGRAM_URL} external>
                {CTA_PRIMARY}
              </Button>
            </div>
          </div>

          <ul className="space-y-5">
            {trustPoints.map((point) => (
              <li
                key={point.title}
                className="rounded-2xl border border-subtle bg-surface-card p-6"
              >
                <h3 className="text-lg font-bold text-white">{point.title}</h3>
                <p className="mt-2 leading-relaxed text-zinc-400">
                  {point.text}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
