import { Bloom } from "./Icons";
import { SocialLinks } from "./Contact";
import { site } from "../config";

export default function Footer() {
  return (
    <footer className="on-dark bg-salvia-oscuro pb-28 pt-14 text-crema md:pb-14">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 sm:px-8 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2.5">
            <Bloom className="h-9 w-9" />
            <p className="font-display text-xl">{site.name}</p>
          </div>
          <p className="mt-4 max-w-xs text-crema/85">{site.slogan}</p>
        </div>

        <div>
          <h2 className="font-display text-lg text-rosa">Contacto</h2>
          <ul className="mt-3 space-y-1 text-crema/90">
            <li>
              <a href={`tel:${site.phoneTel}`} className="inline-flex min-h-11 items-center hover:underline">
                {site.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className="inline-flex min-h-11 items-center break-all hover:underline">
                {site.email}
              </a>
            </li>
            <li className="flex min-h-11 items-center">{site.location}</li>
          </ul>
        </div>

        <div>
          <h2 className="font-display text-lg text-rosa">Redes</h2>
          <div className="mt-3 flex flex-col text-crema/90">
            <SocialLinks />
          </div>
        </div>
      </div>

      <p className="mx-auto mt-10 max-w-6xl border-t border-crema/20 px-5 pt-6 text-sm text-crema/75 sm:px-8">
        © {new Date().getFullYear()} {site.name}. Todos los derechos reservados.
      </p>
    </footer>
  );
}
