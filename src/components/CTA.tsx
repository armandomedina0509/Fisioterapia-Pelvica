import Reveal from "./Reveal";
import { WhatsAppIcon } from "./Icons";
import { whatsappLink } from "../config";

export default function CTA() {
  return (
    <section className="bg-rosa py-16 md:py-24">
      <Reveal className="mx-auto max-w-4xl px-5 sm:px-8">
        <h2 className="font-display text-4xl leading-[1.1] text-vino-oscuro sm:text-5xl">
          Tu bienestar no tiene por qué esperar.
        </h2>
        <p className="mt-5 text-xl text-tinta">Empieza a cuidar de ti desde hoy.</p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a href="#contacto" className="btn btn-primary">
            Agenda tu cita
          </a>
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline-light"
          >
            <WhatsAppIcon className="h-5 w-5" />
            WhatsApp
          </a>
        </div>
      </Reveal>
    </section>
  );
}
