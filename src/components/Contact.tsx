import { useState, type ChangeEvent, type FocusEvent, type FormEvent, type ReactNode } from "react";
import Reveal from "./Reveal";
import {
  ClockIcon,
  FacebookIcon,
  InstagramIcon,
  MailIcon,
  PhoneIcon,
  PinIcon,
  WhatsAppIcon,
} from "./Icons";
import { site, whatsappLink } from "../config";

const motivos = [
  "Incontinencia urinaria",
  "Embarazo y posparto",
  "Dolor pélvico, abdominal o lumbar",
  "Dolor durante las relaciones sexuales",
  "Debilidad o coordinación del suelo pélvico",
  "Urgencia o control urinario",
  "Diástasis y recuperación abdominal",
  "Prevención y educación sobre salud pélvica",
  "Otro / aún no estoy segura",
];

type Values = { nombre: string; telefono: string; correo: string; motivo: string; mensaje: string };
type Errors = Partial<Record<keyof Values, string>>;
type Status = "idle" | "sending" | "whatsapp" | "sent" | "error";

const empty: Values = { nombre: "", telefono: "", correo: "", motivo: "", mensaje: "" };

function validate(v: Values): Errors {
  const e: Errors = {};
  if (v.nombre.trim().length < 2) e.nombre = "Escribe tu nombre para saber cómo llamarte.";
  const digits = v.telefono.replace(/\D/g, "");
  if (digits.length < 10 || digits.length > 13)
    e.telefono = "Escribe un número de 10 dígitos para poder responderte.";
  if (v.correo.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.correo.trim()))
    e.correo = "Revisa tu correo: parece estar incompleto.";
  if (!v.motivo) e.motivo = "Elige el motivo que más se acerque a lo que sientes.";
  if (v.mensaje.length > 600) e.mensaje = "El mensaje es muy largo. Resúmelo en 600 caracteres o menos.";
  return e;
}

function buildMessage(v: Values) {
  const detalles = [
    `Nombre: ${v.nombre.trim()}`,
    `Motivo de consulta: ${v.motivo}`,
    `WhatsApp / teléfono: ${v.telefono.trim()}`,
    v.correo.trim() ? `Correo: ${v.correo.trim()}` : "",
    v.mensaje.trim() ? `Mensaje: ${v.mensaje.trim()}` : "",
  ].filter(Boolean);
  return ["Hola, me gustaría agendar una cita de fisioterapia de suelo pélvico.", "", ...detalles].join("\n");
}

function Field({
  id,
  label,
  optional,
  error,
  hint,
  children,
}: {
  id: string;
  label: string;
  optional?: boolean;
  error?: string;
  hint?: string;
  children: ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-[0.95rem] font-semibold">
        {label}
        {optional && <span className="font-normal text-suave"> (opcional)</span>}
      </label>
      {children}
      {hint && !error && (
        <p id={`${id}-hint`} className="mt-1.5 text-sm text-suave">
          {hint}
        </p>
      )}
      {error && (
        <p id={`${id}-error`} role="alert" className="mt-1.5 text-sm font-medium text-vino-oscuro">
          {error}
        </p>
      )}
    </div>
  );
}

function ContactForm() {
  const [values, setValues] = useState<Values>(empty);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>("idle");

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    const next = { ...values, [name]: value };
    setValues(next);
    if (errors[name as keyof Values]) {
      const fresh = validate(next);
      setErrors((prev) => ({ ...prev, [name]: fresh[name as keyof Values] }));
    }
  };

  const onBlur = (e: FocusEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const key = e.target.name as keyof Values;
    setErrors((prev) => ({ ...prev, [key]: validate(values)[key] }));
  };

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const found = validate(values);
    setErrors(found);
    if (Object.keys(found).length > 0) {
      const first = (Object.keys(found) as (keyof Values)[])[0];
      document.getElementById(`f-${first}`)?.focus();
      setStatus("idle");
      return;
    }

    if (site.formEndpoint) {
      setStatus("sending");
      try {
        const res = await fetch(site.formEndpoint, {
          method: "POST",
          headers: { Accept: "application/json", "Content-Type": "application/json" },
          body: JSON.stringify(values),
        });
        if (!res.ok) throw new Error("bad response");
        setStatus("sent");
        setValues(empty);
      } catch {
        setStatus("error");
      }
      return;
    }

    window.open(whatsappLink(buildMessage(values)), "_blank", "noopener,noreferrer");
    setStatus("whatsapp");
  };

  const describedBy = (id: string, hasHint = false) =>
    errors[id.replace("f-", "") as keyof Values]
      ? `${id}-error`
      : hasHint
        ? `${id}-hint`
        : undefined;

  const invalid = (k: keyof Values) => (errors[k] ? true : undefined);

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className="rounded-[1.75rem] border border-tinta/12 bg-white/70 p-6 sm:p-8"
    >
      <h3 className="font-display text-2xl">Cuéntame cómo puedo ayudarte</h3>
      <div className="mt-6 grid gap-5">
        <Field id="f-nombre" label="Nombre" error={errors.nombre}>
          <input
            id="f-nombre"
            name="nombre"
            type="text"
            autoComplete="name"
            className="field"
            value={values.nombre}
            onChange={onChange}
            onBlur={onBlur}
            aria-invalid={invalid("nombre")}
            aria-describedby={describedBy("f-nombre")}
            required
          />
        </Field>

        <Field id="f-telefono" label="WhatsApp / Teléfono" error={errors.telefono}>
          <input
            id="f-telefono"
            name="telefono"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            className="field"
            value={values.telefono}
            onChange={onChange}
            onBlur={onBlur}
            aria-invalid={invalid("telefono")}
            aria-describedby={describedBy("f-telefono")}
            required
          />
        </Field>

        <Field id="f-correo" label="Correo" optional error={errors.correo}>
          <input
            id="f-correo"
            name="correo"
            type="email"
            autoComplete="email"
            className="field"
            value={values.correo}
            onChange={onChange}
            onBlur={onBlur}
            aria-invalid={invalid("correo")}
            aria-describedby={describedBy("f-correo")}
          />
        </Field>

        <Field id="f-motivo" label="Motivo de consulta" error={errors.motivo}>
          <select
            id="f-motivo"
            name="motivo"
            className="field"
            value={values.motivo}
            onChange={onChange}
            onBlur={onBlur}
            aria-invalid={invalid("motivo")}
            aria-describedby={describedBy("f-motivo")}
            required
          >
            <option value="">Elige una opción</option>
            {motivos.map((m) => (
              <option key={m} value={m}>
                {m}
              </option>
            ))}
          </select>
        </Field>

        <Field
          id="f-mensaje"
          label="Mensaje"
          optional
          error={errors.mensaje}
          hint="Cuéntame lo que quieras compartir. Solo lo leeré yo."
        >
          <textarea
            id="f-mensaje"
            name="mensaje"
            rows={4}
            className="field resize-y"
            value={values.mensaje}
            onChange={onChange}
            onBlur={onBlur}
            aria-invalid={invalid("mensaje")}
            aria-describedby={describedBy("f-mensaje", true)}
          />
        </Field>
      </div>

      <button type="submit" disabled={status === "sending"} className="btn btn-primary mt-7 w-full disabled:opacity-60">
        {status === "sending" ? "Enviando…" : "Quiero agendar una cita"}
      </button>

      {!site.formEndpoint && status === "idle" && (
        <p className="mt-3 text-sm text-suave">
          Al continuar se abrirá WhatsApp con tu mensaje ya redactado. Se envía cuando tú lo mandes.
        </p>
      )}

      <div aria-live="polite" className="mt-4">
        {status === "whatsapp" && (
          <p className="rounded-xl bg-salvia-claro p-4 text-[0.95rem] text-salvia-oscuro">
            Se abrió WhatsApp con tu mensaje listo. Tu solicitud llegará cuando presiones enviar allí.
            Si no se abrió,{" "}
            <a className="font-semibold underline" href={whatsappLink(buildMessage(values))} target="_blank" rel="noopener noreferrer">
              ábrelo desde aquí
            </a>
            .
          </p>
        )}
        {status === "sent" && (
          <p className="rounded-xl bg-salvia-claro p-4 text-[0.95rem] text-salvia-oscuro">
            Gracias, recibí tu mensaje. Te responderé lo antes posible.
          </p>
        )}
        {status === "error" && (
          <p className="rounded-xl bg-rosa p-4 text-[0.95rem] text-vino-oscuro">
            No pudimos enviar tu mensaje. Inténtalo de nuevo o escríbeme por{" "}
            <a className="font-semibold underline" href={whatsappLink()} target="_blank" rel="noopener noreferrer">
              WhatsApp
            </a>
            .
          </p>
        )}
      </div>
    </form>
  );
}

function SocialLink({
  handle,
  url,
  label,
  icon,
}: {
  handle: string;
  url: string;
  label: string;
  icon: ReactNode;
}) {
  const inner = (
    <>
      {icon}
      <span>{handle}</span>
    </>
  );
  const cls = "inline-flex min-h-11 items-center gap-2.5";
  return url ? (
    <a href={url} target="_blank" rel="noopener noreferrer" aria-label={`${label}: ${handle}`} className={`${cls} hover:text-vino`}>
      {inner}
    </a>
  ) : (
    <span className={cls}>
      <span className="sr-only">{label}: </span>
      {inner}
    </span>
  );
}

export function SocialLinks() {
  return (
    <>
      <SocialLink
        label="Instagram"
        handle={site.instagram.handle}
        url={site.instagram.url}
        icon={<InstagramIcon className="h-5 w-5" />}
      />
      <SocialLink
        label="Facebook"
        handle={site.facebook.handle}
        url={site.facebook.url}
        icon={<FacebookIcon className="h-5 w-5" />}
      />
    </>
  );
}

function InfoRow({ icon, label, children }: { icon: ReactNode; label: string; children: ReactNode }) {
  return (
    <li className="flex gap-4">
      <span className="mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-rosa text-vino-oscuro">
        {icon}
      </span>
      <div>
        <p className="text-sm font-semibold text-suave">{label}</p>
        <div className="text-lg font-medium">{children}</div>
      </div>
    </li>
  );
}

export default function Contact() {
  return (
    <section id="contacto" className="scroll-mt-16 py-16 md:py-24">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <Reveal>
          <h2 className="font-display text-4xl leading-[1.1] sm:text-5xl">Agenda tu cita</h2>
          <p className="mt-5 max-w-md text-lg text-suave">
            Escríbeme o llámame. Cuéntame lo que sientes y te ayudo a dar el primer paso.
          </p>

          <ul className="mt-9 space-y-6">
            <InfoRow icon={<WhatsAppIcon className="h-5 w-5" />} label="WhatsApp">
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-vino"
              >
                {site.phoneDisplay}
              </a>
            </InfoRow>
            <InfoRow icon={<PhoneIcon className="h-5 w-5" />} label="Teléfono">
              <a href={`tel:${site.phoneTel}`} className="hover:text-vino">
                {site.phoneDisplay}
              </a>
            </InfoRow>
            <InfoRow icon={<MailIcon className="h-5 w-5" />} label="Correo">
              <a href={`mailto:${site.email}`} className="break-all hover:text-vino">
                {site.email}
              </a>
            </InfoRow>
            <InfoRow icon={<ClockIcon className="h-5 w-5" />} label="Horario">
              {site.hours}
            </InfoRow>
            <InfoRow icon={<PinIcon className="h-5 w-5" />} label="Ubicación">
              {site.location}
            </InfoRow>
          </ul>

          <div className="mt-8 flex flex-col text-lg font-medium sm:flex-row sm:gap-8">
            <SocialLinks />
          </div>
        </Reveal>

        <Reveal delay={120}>
          <ContactForm />
        </Reveal>
      </div>
    </section>
  );
}
