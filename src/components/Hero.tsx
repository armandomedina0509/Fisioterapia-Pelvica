import { ClockIcon, PinIcon, WhatsAppIcon } from "./Icons";
import { site, whatsappLink } from "../config";

function BreathingBloom() {
  return (
    <svg
      viewBox="0 0 400 400"
      className="breathe h-full w-full"
      aria-hidden="true"
      focusable="false"
    >
      <circle className="ring ring-3" cx="200" cy="200" r="190" fill="none" stroke="#8FA38B" strokeWidth="1" strokeDasharray="2 7" />
      <circle className="ring ring-2" cx="200" cy="200" r="160" fill="#E5EBE0" fillOpacity=".55" />
      <g style={{ mixBlendMode: "multiply" }}>
        {[0, 60, 120, 180, 240, 300].map((r) => (
          <ellipse
            key={r}
            cx="200"
            cy="124"
            rx="46"
            ry="84"
            transform={`rotate(${r} 200 200)`}
            fill={r % 120 === 0 ? "#E3B9B4" : "#F1E3D6"}
            fillOpacity=".85"
          />
        ))}
      </g>
      <circle className="ring" cx="200" cy="200" r="46" fill="#FBF6EF" />
      <circle cx="200" cy="200" r="13" fill="#8B3E50" />
    </svg>
  );
}

export default function Hero() {
  return (
    <section id="inicio" className="scroll-mt-16 overflow-hidden">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 pb-16 pt-12 sm:px-8 md:pb-24 md:pt-16 lg:grid-cols-[1.15fr_0.85fr] lg:gap-6">
        <div>
          <p className="flex items-center gap-3 text-[0.95rem] font-semibold text-salvia-oscuro">
            <span aria-hidden="true" className="h-px w-8 bg-salvia" />
            Fisioterapia especializada en suelo pélvico
          </p>

          <h1 className="mt-5 font-display text-[2.35rem] leading-[1.08] text-tinta sm:text-5xl lg:text-[3.6rem]">
            Conecta con tu cuerpo.
            <span className="mt-1 block text-vino">Recupera tu bienestar desde adentro.</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg text-suave">
            Tu salud íntima merece atención, comprensión y un espacio seguro. Te acompaño de manera
            personalizada para que comprendas tu cuerpo, recuperes su función y vuelvas a sentirte
            segura y cómoda.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="#contacto" className="btn btn-primary">
              Agenda tu cita
            </a>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
            >
              <WhatsAppIcon className="h-5 w-5" />
              Escríbeme por WhatsApp
            </a>
          </div>

          <ul className="mt-9 flex flex-col gap-2.5 text-[0.95rem] text-suave sm:flex-row sm:gap-8">
            <li className="flex items-center gap-2.5">
              <ClockIcon className="h-5 w-5 text-salvia-oscuro" />
              Atención de {site.hours}
            </li>
            <li className="flex items-center gap-2.5">
              <PinIcon className="h-5 w-5 text-salvia-oscuro" />
              {site.location}
            </li>
          </ul>
        </div>

        <div className="mx-auto aspect-square w-full max-w-[22rem] sm:max-w-[26rem] lg:max-w-none">
          <BreathingBloom />
        </div>
      </div>
    </section>
  );
}
