import Reveal from "./Reveal";

const signs = [
  "Pérdidas de orina",
  "Dolor pélvico",
  "Molestias durante las relaciones",
  "Cambios después del embarazo",
];

export default function ProblemSection() {
  return (
    <section className="bg-nude py-16 md:py-24">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <h2 className="font-display text-4xl leading-[1.1] text-tinta sm:text-5xl">
            No tienes que normalizarlo.
          </h2>
          <p className="mt-6 max-w-md text-lg text-suave">
            ¿Vives con pérdidas de orina, dolor pélvico, molestias durante las relaciones o cambios
            después del embarazo?
          </p>
        </Reveal>

        <Reveal delay={120}>
          <p className="text-lg text-suave">
            Lo que sientes merece atención, comprensión y un espacio donde puedas hablarlo sin
            sentirte juzgada.
          </p>
          <ul className="mt-6 border-t border-tinta/20">
            {signs.map((s) => (
              <li
                key={s}
                className="flex items-center gap-4 border-b border-tinta/20 py-4 font-display text-xl text-salvia-oscuro sm:text-2xl"
              >
                <span aria-hidden="true" className="h-2.5 w-2.5 shrink-0 rounded-full bg-rosa-polvo" />
                {s}
              </li>
            ))}
          </ul>
          <p className="mt-7 max-w-lg text-lg text-tinta">
            A través de la fisioterapia especializada en suelo pélvico, te acompaño a comprender tu
            cuerpo, recuperar su función y volver a sentirte segura y cómoda en tu día a día.
          </p>
          <a href="#ayuda" className="btn btn-primary mt-8 w-full sm:w-auto">
            Quiero conocer más
          </a>
        </Reveal>
      </div>
    </section>
  );
}
