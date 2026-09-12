// Inline SVG icon set — no icon font, no image requests, no layout shift.

const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": "true",
};

export function PhoneIcon({ className = "h-5 w-5" }) {
  return (
    <svg className={className} {...base}>
      <path d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
    </svg>
  );
}

export function BoltIcon({ className = "h-5 w-5" }) {
  return (
    <svg className={className} {...base}>
      <path d="M13 2.5 4.6 13.2a.9.9 0 0 0 .7 1.45h4.1l-.9 6.85 8.9-11.05a.9.9 0 0 0-.7-1.45h-4.3L13 2.5Z" />
    </svg>
  );
}

export function GaugeIcon({ className = "h-5 w-5" }) {
  return (
    <svg className={className} {...base}>
      <path d="M4.25 17.75a7.75 7.75 0 1 1 15.5 0" />
      <path d="M12 17.75 15.4 13" />
      <circle cx="12" cy="17.75" r="1.15" />
    </svg>
  );
}

export function GearIcon({ className = "h-5 w-5" }) {
  return (
    <svg className={className} {...base}>
      <circle cx="12" cy="12" r="4" />
      <path d="M18.5 12h2M12 5.5v-2M16.6 16.6l1.4 1.4M7.4 16.6 6 18M7.4 7.4 6 6M16.6 7.4 18 6" />
    </svg>
  );
}

export function DropletIcon({ className = "h-5 w-5" }) {
  return (
    <svg className={className} {...base}>
      <path d="M12 3.5c3.2 3.6 5.5 6.6 5.5 9.6a5.5 5.5 0 0 1-11 0c0-3 2.3-6 5.5-9.6Z" />
    </svg>
  );
}

export function CalendarCheckIcon({ className = "h-5 w-5" }) {
  return (
    <svg className={className} {...base}>
      <rect x="3.25" y="4.75" width="17.5" height="16.5" rx="2.5" />
      <path d="M8 2.75v4M16 2.75v4M3.25 9.75h17.5" />
      <path d="m9 15 2 2 4-4" />
    </svg>
  );
}

export function ShieldCheckIcon({ className = "h-5 w-5" }) {
  return (
    <svg className={className} {...base}>
      <path d="M12 2.75 4.75 5.5v6c0 4.5 3 8.2 7.25 9.75 4.25-1.55 7.25-5.25 7.25-9.75v-6L12 2.75Z" />
      <path d="m9.25 11.75 2 2 3.75-3.75" />
    </svg>
  );
}

export function StarIcon({ className = "h-4 w-4" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="m12 2.6 2.9 5.9 6.5.95-4.7 4.6 1.1 6.45L12 17.48 6.2 20.5l1.1-6.45-4.7-4.6 6.5-.95L12 2.6Z" />
    </svg>
  );
}

export function ClockIcon({ className = "h-5 w-5" }) {
  return (
    <svg className={className} {...base}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7.25V12l3.25 2" />
    </svg>
  );
}

export function MapPinIcon({ className = "h-5 w-5" }) {
  return (
    <svg className={className} {...base}>
      <path d="M12 21.5s7-5.6 7-11a7 7 0 1 0-14 0c0 5.4 7 11 7 11Z" />
      <circle cx="12" cy="10.5" r="2.5" />
    </svg>
  );
}

export function CheckIcon({ className = "h-4 w-4" }) {
  return (
    <svg className={className} {...base} strokeWidth="2.2">
      <path d="m4.75 12.5 5 5 9.5-10.5" />
    </svg>
  );
}

export function CheckCircleIcon({ className = "h-5 w-5" }) {
  return (
    <svg className={className} {...base}>
      <circle cx="12" cy="12" r="9" />
      <path d="m8.25 12.25 2.5 2.5 5-5.5" />
    </svg>
  );
}

export function AlertIcon({ className = "h-5 w-5" }) {
  return (
    <svg className={className} {...base}>
      <path d="M12 3.5 2.5 20.5h19L12 3.5Z" />
      <path d="M12 10v4.5M12 17.5h.01" />
    </svg>
  );
}

export function DollarIcon({ className = "h-5 w-5" }) {
  return (
    <svg className={className} {...base}>
      <path d="M12 3v18" />
      <path d="M16 7.5c-.55-1.15-1.9-1.75-3.65-1.75-2.3 0-3.85 1.05-3.85 2.85s1.8 2.55 3.9 2.9c2.05.35 3.6 1.05 3.6 2.85s-1.65 2.85-3.9 2.85c-1.85 0-3.15-.65-3.7-1.85" />
    </svg>
  );
}

export function FormIcon({ className = "h-5 w-5" }) {
  return (
    <svg className={className} {...base}>
      <rect x="5" y="4.75" width="14" height="16.25" rx="2.5" />
      <path d="M9 4.75V3.5A1.25 1.25 0 0 1 10.25 2.25h3.5A1.25 1.25 0 0 1 15 3.5v1.25" />
      <path d="M9 11.25h6M9 15h4" />
    </svg>
  );
}

export function ArrowRightIcon({ className = "h-4 w-4" }) {
  return (
    <svg className={className} {...base} strokeWidth="2">
      <path d="M4.5 12h14M13 6.5l5.5 5.5L13 17.5" />
    </svg>
  );
}

export function ChevronDownIcon({ className = "h-5 w-5" }) {
  return (
    <svg className={className} {...base} strokeWidth="2">
      <path d="m6 9.5 6 6 6-6" />
    </svg>
  );
}

export function LogoMark({ className = "h-8 w-8" }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
      <rect width="64" height="64" rx="14" className="fill-white/10" />
      <path
        d="M32 11c4.8 6.2 9 11 9 16.2a9 9 0 0 1-18 0C23 22 27.2 17.2 32 11Z"
        className="fill-white"
      />
      <path
        d="M34 21.5 28.4 30.2h3.7l-.9 6.8 6.2-9.5h-3.9l.5-6Z"
        className="fill-ocean-700"
      />
    </svg>
  );
}
