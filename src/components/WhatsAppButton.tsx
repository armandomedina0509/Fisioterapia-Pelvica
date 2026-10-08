import { WhatsAppIcon } from "./Icons";
import { whatsappLink } from "../config";

export default function WhatsAppButton() {
  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escríbeme por WhatsApp"
      className="fixed right-4 z-50 flex h-14 items-center justify-center gap-2 rounded-full bg-[#128c4a] px-4 text-white shadow-lg shadow-black/20 transition-transform hover:scale-105 hover:bg-[#0f7a40] active:scale-95 sm:right-6 sm:px-5"
      style={{ bottom: "max(1rem, env(safe-area-inset-bottom))" }}
    >
      <WhatsAppIcon className="h-7 w-7" />
      <span className="hidden font-semibold sm:inline">WhatsApp</span>
    </a>
  );
}
