import { useEffect, useState } from "react";
import { Bloom, CloseIcon, MenuIcon } from "./Icons";
import { site } from "../config";

const links = [
  { href: "#inicio", label: "Inicio" },
  { href: "#por-que", label: "¿Por qué elegirme?" },
  { href: "#ayuda", label: "¿Cómo puedo ayudarte?" },
  { href: "#suelo-pelvico", label: "Suelo pélvico" },
  { href: "#contacto", label: "Contacto" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="sticky top-0 z-40 border-b border-tinta/10 bg-crema/90 backdrop-blur">
      <nav
        aria-label="Principal"
        className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5 sm:px-8"
      >
        <a href="#inicio" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <Bloom className="h-8 w-8" />
          <span className="font-display text-lg leading-none text-salvia-oscuro">{site.name}</span>
        </a>

        <ul className="hidden items-center gap-7 text-[0.95rem] font-medium text-tinta lg:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="py-2 transition-colors hover:text-vino">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a href="#contacto" className="btn btn-primary hidden min-h-11 px-5 sm:inline-flex">
            Agenda tu cita
          </a>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full text-salvia-oscuro hover:bg-nude lg:hidden"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={open}
            aria-controls="menu-movil"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </nav>

      {open && (
        <div id="menu-movil" className="border-t border-tinta/10 bg-crema lg:hidden">
          <ul className="mx-auto flex max-w-6xl flex-col px-5 py-3 sm:px-8">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="flex min-h-12 items-center border-b border-tinta/10 text-base font-medium"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li className="py-4">
              <a href="#contacto" onClick={() => setOpen(false)} className="btn btn-primary w-full">
                Agenda tu cita
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
