import Reveal from "./Reveal";

const values = [
  "Confianza",
  "Seguridad",
  "Profesionalismo",
  "Atención personalizada",
  "Sin juicios",
  "Acompañamiento",
  "Bienestar",
];

export default function Benefits() {
  return (
    <section id="por-que" className="on-dark scroll-mt-16 bg-salvia-oscuro py-16 text-crema md:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <h2 className="text-lg font-semibold text-rosa">¿Por qué elegirme?</h2>
          <p className="mt-5 max-w-4xl font-display text-3xl leading-[1.15] sm:text-4xl lg:text-5xl">
            Porque tu salud íntima merece un espacio seguro, profesional y libre de juicios.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-8 md:grid-cols-2 md:gap-14">
          <Reveal delay={80}>
            <p className="text-lg text-crema/90">
              Soy fisioterapeuta especializada en suelo pélvico y mi objetivo es acompañarte de
              manera personalizada para que comprendas tu cuerpo, recuperes su función y vuelvas a
              sentirte segura y cómoda en cada etapa de tu vida.
            </p>
          </Reveal>
          <Reveal delay={160}>
            <p className="text-lg text-crema/90">
              Cada mujer es diferente. Por eso, mi atención parte de una valoración individual y de
              un tratamiento adaptado a tus necesidades, objetivos y estilo de vida.
            </p>
          </Reveal>
        </div>

        <Reveal delay={200}>
          <ul className="mt-12 flex flex-wrap gap-3">
            {values.map((v) => (
              <li
                key={v}
                className="rounded-full border border-crema/40 px-5 py-2 text-[0.95rem] font-medium"
              >
                {v}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
