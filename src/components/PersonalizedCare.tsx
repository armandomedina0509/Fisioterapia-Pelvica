import Reveal from "./Reveal";

const steps = [
  {
    title: "Valoración individual",
    text: "Partimos de ti: tus necesidades, tus objetivos y tu estilo de vida.",
  },
  {
    title: "Comprender tu cuerpo",
    text: "Entender cómo funciona tu cuerpo es el primer paso para recuperar su función.",
  },
  {
    title: "Tratamiento adaptado",
    text: "Tu tratamiento se ajusta a ti, no al revés.",
  },
  {
    title: "Acompañamiento",
    text: "Estoy contigo para que te sientas segura y cómoda en cada etapa.",
  },
];

export default function PersonalizedCare() {
  return (
    <section className="bg-crema py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal className="max-w-2xl">
          <h2 className="font-display text-4xl leading-[1.1] sm:text-5xl">
            Una atención que parte de ti
          </h2>
          <p className="mt-5 text-lg text-suave">
            Una valoración personalizada para que cada paso tenga sentido para tu cuerpo y tu día a
            día.
          </p>
        </Reveal>

        <ol className="mt-14 grid gap-10 md:grid-cols-4 md:gap-6">
          {steps.map((s, i) => (
            <li key={s.title} className="relative">
              <Reveal delay={i * 110}>
                <div className="flex items-center gap-4">
                  <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-rosa font-display text-2xl text-vino-oscuro">
                    {i + 1}
                  </span>
                  {i < steps.length - 1 && (
                    <span
                      aria-hidden="true"
                      className="hidden h-px flex-1 border-t border-dashed border-salvia md:block"
                    />
                  )}
                </div>
                <h3 className="mt-5 font-display text-2xl leading-snug">{s.title}</h3>
                <p className="mt-2 text-suave">{s.text}</p>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
