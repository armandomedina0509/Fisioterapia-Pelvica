import type { ReactNode } from "react";

type IconProps = { className?: string };

function Svg({ children, className = "h-6 w-6" }: IconProps & { children: ReactNode }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      {children}
    </svg>
  );
}

export const DropIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M12 3c3.5 4.2 6 7.2 6 10.5a6 6 0 0 1-12 0C6 10.2 8.5 7.2 12 3z" />
  </Svg>
);
export const SproutIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M12 21v-8" />
    <path d="M12 13c0-4-3-6-7-6 0 4 3 6 7 6z" />
    <path d="M12 11c0-3.5 2.5-5.5 7-5.5 0 3.5-2.5 5.5-7 5.5z" />
  </Svg>
);
export const PulseIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M3 12h4l2.5-6 4 12 2.5-6H21" />
  </Svg>
);
export const HeartIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.5A4 4 0 0 1 19 10c0 5.6-7 10-7 10z" />
  </Svg>
);
export const CoreIcon = (p: IconProps) => (
  <Svg {...p}>
    <circle cx="12" cy="12" r="9" />
    <circle cx="12" cy="12" r="4.5" />
    <circle cx="12" cy="12" r="0.8" fill="currentColor" />
  </Svg>
);
export const AbdomenIcon = (p: IconProps) => (
  <Svg {...p}>
    <rect x="5" y="3" width="14" height="18" rx="7" />
    <path d="M12 6.5v11" />
    <path d="M8.5 10h7M8.5 14h7" />
  </Svg>
);
export const PhoneIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" />
  </Svg>
);
export const MailIcon = (p: IconProps) => (
  <Svg {...p}>
    <rect x="3" y="5" width="18" height="14" rx="3" />
    <path d="m4 8 8 6 8-6" />
  </Svg>
);
export const ClockIcon = (p: IconProps) => (
  <Svg {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 2" />
  </Svg>
);
export const PinIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M12 21s-6.5-5.6-6.5-11a6.5 6.5 0 0 1 13 0C18.5 15.400 12 21 12 21z" />
    <circle cx="12" cy="10" r="2.3" />
  </Svg>
);
export const WhatsAppIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M3 21l1.6-4.8A9 9 0 1 1 8 19.6L3 21z" />
    <path d="M9 8.800c0 3 2.500 5.700 5.700 5.700l1.100-1.500-2-1-.9.800a4 4 0 0 1-1.800-1.800l.8-.9-1-2L9 8.800z" />
  </Svg>
);
export const InstagramIcon = (p: IconProps) => (
  <Svg {...p}>
    <rect x="3.500" y="3.500" width="17" height="17" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17" cy="7" r="0.8" fill="currentColor" />
  </Svg>
);
export const FacebookIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M14 8h2.500V4.500H14A4 4 0 0 0 10 8.500V11H7.500v3.500H10V21h3.500v-6.500H16L16.500 11h-3V8.800c0-.5.200-.8.500-.8z" />
  </Svg>
);
export const MenuIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M4 7h16M4 12h16M4 17h16" />
  </Svg>
);
export const CloseIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M6 6l12 12M18 6 6 18" />
  </Svg>
);

/** Flor abstracta: marca del sitio (no es una fotografía ni una imagen médica). */
export function Bloom({ className = "h-8 w-8" }: IconProps) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true" focusable="false">
      <g transform="translate(32 32)" fill="#E3B9B4" fillOpacity=".85">
        {[0, 60, 120, 180, 240, 300].map((r) => (
          <ellipse key={r} cx="0" cy="-12" rx="7" ry="13" transform={`rotate(${r})`} />
        ))}
      </g>
      <circle cx="32" cy="32" r="5.500" fill="#8B3E50" />
    </svg>
  );
}
