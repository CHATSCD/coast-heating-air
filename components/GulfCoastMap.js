/**
 * Hand-built SVG map of the Mississippi Gulf Coast service area.
 * No image file, no external tiles — ~2KB of inline SVG that scales to any size.
 */
const CITIES = [
  { name: "Gulfport", x: 46, y: 106, accent: false },
  { name: "Biloxi", x: 118, y: 102, accent: false },
  { name: "Ocean Springs", x: 196, y: 99, accent: true },
  { name: "Gautier", x: 268, y: 97, accent: false },
  { name: "Pascagoula", x: 330, y: 103, accent: false },
];

const LABEL_Y = 78;

export default function GulfCoastMap({
  className = "",
  primaryCity = "Ocean Springs",
}) {
  return (
    <svg
      viewBox="0 0 400 240"
      className={className}
      role="img"
      aria-label={`Map of the Mississippi Gulf Coast showing Coast Heating & Air service cities: ${CITIES.map(
        (city) => city.name
      ).join(", ")}.`}
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <linearGradient id="coastWater" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0c4a6e" />
          <stop offset="100%" stopColor="#062f4a" />
        </linearGradient>
        <linearGradient id="coastLand" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0b3a56" />
          <stop offset="100%" stopColor="#082e46" />
        </linearGradient>
      </defs>

      {/* Gulf of Mexico */}
      <rect width="400" height="240" fill="url(#coastWater)" />

      {/* Landmass */}
      <path
        d="M0 0H400v100c-50 12-100-10-150 0-50 10-100-12-150 0-33 8-70-2-100 6Z"
        fill="url(#coastLand)"
      />

      {/* Shoreline */}
      <path
        d="M400 100c-50 12-100-10-150 0-50 10-100-12-150 0-33 8-70-2-100 6"
        fill="none"
        stroke="#7dd3fc"
        strokeWidth="1.6"
        opacity="0.55"
      />

      {/* Service corridor running the length of the coast */}
      <path
        d="M18 122c60 6 118-10 178-2 62 8 116-12 186-4"
        fill="none"
        stroke="#38bdf8"
        strokeWidth="2"
        strokeDasharray="6 7"
        strokeLinecap="round"
        opacity="0.45"
      />

      {/* Deer Island / barrier islands */}
      <ellipse cx="150" cy="134" rx="30" ry="3.2" fill="#7dd3fc" opacity="0.26" />
      <ellipse cx="316" cy="146" rx="16" ry="2.6" fill="#7dd3fc" opacity="0.18" />

      {/* Water texture */}
      <path
        d="M42 176c8-6 16-6 24 0s16 6 24 0"
        fill="none"
        stroke="#38bdf8"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.3"
      />
      <path
        d="M244 202c8-6 16-6 24 0s16 6 24 0"
        fill="none"
        stroke="#38bdf8"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.22"
      />

      {/* Water / state labels */}
      <text
        x="200"
        y="28"
        textAnchor="middle"
        fontSize="11"
        fontWeight="700"
        letterSpacing="3"
        fill="#7dd3fc"
        opacity="0.42"
      >
        MISSISSIPPI
      </text>
      <text
        x="200"
        y="214"
        textAnchor="middle"
        fontSize="10.5"
        fontWeight="700"
        letterSpacing="4"
        fill="#38bdf8"
        opacity="0.45"
      >
        GULF OF MEXICO
      </text>

      {/* City pins */}
      {CITIES.map((city) => {
        const isPrimary = city.name === primaryCity || city.accent;
        return (
          <g key={city.name}>
            <circle
              cx={city.x}
              cy={city.y}
              r={isPrimary ? 13 : 8}
              fill="#38bdf8"
              opacity={isPrimary ? 0.28 : 0.16}
              className={isPrimary ? "animate-soft-pulse" : undefined}
            />
            <line
              x1={city.x}
              y1={city.y - 6}
              x2={city.x}
              y2={LABEL_Y + 5}
              stroke="#7dd3fc"
              strokeWidth="1"
              opacity="0.3"
            />
            <circle cx={city.x} cy={city.y} r={isPrimary ? 4.2 : 3.2} fill="#ffffff" />
            <text
              x={city.x}
              y={LABEL_Y}
              textAnchor="middle"
              fontSize="10.5"
              fontWeight="700"
              fill={isPrimary ? "#ffffff" : "#e0f2fe"}
            >
              {city.name}
            </text>
          </g>
        );
      })}
    </svg>
  );
}
