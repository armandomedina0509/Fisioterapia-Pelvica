import type { ReactNode } from "react";
import Reveal from "./Reveal";
import { AbdomenIcon, CoreIcon, DropIcon, HeartIcon, PulseIcon, SproutIcon } from "./Icons";

type Area = { title: string; text: string; icon: ReactNode; tone: string };

const areas: Area[] = [
  {
    title: "Incontinencia urinaria",
    text: "Pérdidas de orina al toser, correr, saltar o hacer ejercicio.",
    icon: <DropIcon />,
    tone: "bg-rosa text-vino-oscuro",
  },
  {
    title: "Embarazo y posparto",
    text: "Acompañamiento durante las diferentes etapas.",
    icon: <SproutIcon />,
    tone: "bg-salvia-claro text-salvia-oscuro",
  },
  {
    title: "Dolor pélvico",
    text: "Atención a molestias pélvicas, abdominales y lumbares.",
    icon: <PulseIcon />,
    tone: "bg-nude text-vino-oscuro",
  },
  {
    title: "Salud sexual",
    text: "Molestias o dolor durante las relaciones sexuales.",
    icon: <HeartIcon />,
    tone: "bg-rosa text-vino-oscuro",
  },
  {
    title: "Suelo pélvico",
    text: "Debilidad y falta de coordinación.",
    icon: <CoreIcon />,
    tone: "bg-salvia-claro text-salvia-oscuro",
  },
  {
    title: "Recuperación abdominal",
    text: "Diástasis y recuperación de la función abdominal y pélvica.",
    icon: <AbdomenIcon />,
    tone: "bg-nude text-vino-oscuro",
  },
];

export default function Services() {
  return (
    <section id="ayuda" className="scroll-mt-16 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal className="max-w-2xl">
          <h2 className="font-display text-4xl leading-[1.1] sm:text-5xl">¿Cómo puedo ayudarte?</h2>
          <p className="mt-5 text-lg text-suave">
            Estas son las áreas en las que te acompaño. Si no ves exactamente lo que sientes,
            escríbeme y lo platicamos.
          </p>
        </Reveal>

        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {areas.map((a, i) => (
            <li key={a.title}>
              <Reveal delay={(i % 3) * 90} className="h-full">
                <article className="h-full rounded-[1.75rem] border border-tinta/12 bg-white/60 p-7 transition-colors hover:bg-white">
                  <span
                    className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl ${a.tone}`}
                  >
                    {a.icon}
                  </span>
                  <h3 className="mt-5 font-display text-2xl leading-snug">{a.title}</h3>
                  <p className="mt-2 text-suave">{a.text}</p>
                </article>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
