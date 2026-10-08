import Reveal from "./Reveal";

const topics = [
  {
    title: "Incontinencia urinaria",
    intro: "Pérdidas de orina al:",
    items: ["Toser", "Correr", "Saltar", "Hacer ejercicio"],
  },
  {
    title: "Embarazo y posparto",
    items: [
      "Cambios durante el embarazo",
      "Molestias durante el embarazo",
      "Preparación física para el embarazo",
      "Preparación para el parto",
      "Recuperación posparto",
    ],
  },
  {
    title: "Dolor y molestias",
    items: [
      "Dolor durante las relaciones sexuales",
      "Dolor pélvico",
      "Molestias abdominales",
      "Molestias lumbares",
      "Molestias en la zona pélvica",
    ],
  },
  {
    title: "Suelo pélvico y actividad física",
    items: [
      "Debilidad del suelo pélvico",
      "Falta de coordinación del suelo pélvico",
      "Pérdidas de orina durante el deporte",
    ],
  },
  {
    title: "Control urinario",
    items: ["Urgencia urinaria", "Dificultad para controlar las ganas de orinar"],
  },
  {
    title: "Recuperación y prevención",
    items: [
      "Diástasis abdominal",
      "Recuperación de la función abdominal y pélvica",
      "Prevención",
      "Educación sobre salud pélvica",
    ],
  },
];

export default function Topics() {
  return (
    <section id="suelo-pelvico" className="scroll-mt-16 bg-salvia-claro py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal className="max-w-2xl">
          <h2 className="font-display text-4xl leading-[1.1] sm:text-5xl">
            Suelo pélvico: temas de atención
          </h2>
          <p className="mt-5 text-lg text-suave">
            Si te identificas con alguno de estos temas, no tienes que esperar a que empeore para
            pedir ayuda.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-x-10 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
          {topics.map((t, i) => (
            <Reveal key={t.title} delay={(i % 3) * 90}>
              <section className="border-t-2 border-rosa-polvo pt-5">
                <h3 className="font-display text-2xl leading-snug text-salvia-oscuro">{t.title}</h3>
                {t.intro && <p className="mt-2 text-suave">{t.intro}</p>}
                <ul className="mt-3 space-y-2 text-tinta">
                  {t.items.map((it) => (
                    <li key={it} className="flex gap-3">
                      <span
                        aria-hidden="true"
                        className="mt-[0.7em] h-1.5 w-1.5 shrink-0 rounded-full bg-vino"
                      />
                      {it}
                    </li>
                  ))}
                </ul>
              </section>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
