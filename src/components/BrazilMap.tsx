import { useState } from "react";

/**
 * Mapa estilizado do Brasil com pins de localidades onde a Mahvla atua.
 * Brasília é destacada como sede; demais estados como projetos ativos.
 * Coordenadas são aproximadas dentro do viewBox 0 0 600 620.
 */

type Pin = {
  id: string;
  label: string;
  x: number;
  y: number;
  hq?: boolean;
};

const pins: Pin[] = [
  { id: "df", label: "Brasília · Sede", x: 340, y: 348, hq: true },
  { id: "es", label: "Espírito Santo", x: 438, y: 388 },
  { id: "go", label: "Goiás", x: 318, y: 360 },
  { id: "ap", label: "Amapá", x: 282, y: 110 },
  { id: "ro", label: "Rondônia", x: 188, y: 295 },
  { id: "rr", label: "Roraima", x: 230, y: 90 },
  { id: "to", label: "Tocantins", x: 318, y: 270 },
  { id: "pa", label: "Pará", x: 280, y: 200 },
  { id: "ba", label: "Bahia", x: 410, y: 320 },
  { id: "rn", label: "Rio Grande do Norte", x: 478, y: 222 },
  { id: "pb", label: "Paraíba", x: 480, y: 248 },
];

// Silhueta simplificada do Brasil (path aproximado para fins ilustrativos)
const BRAZIL_PATH =
  "M210,80 L260,70 L300,90 L340,75 L360,110 L395,130 L430,160 L470,200 L500,230 L520,275 L515,320 L495,360 L470,395 L455,435 L430,475 L400,515 L355,545 L300,560 L255,545 L210,520 L175,485 L150,445 L135,400 L130,355 L140,310 L155,270 L150,225 L160,185 L180,145 L195,110 Z";

const BrazilMap = () => {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <svg
        viewBox="0 0 600 620"
        className="w-full h-full max-h-[640px]"
        aria-label="Mapa do Brasil com locais de atuação da Mahvla"
      >
        <defs>
          <radialGradient id="pinGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="hsl(24 100% 55%)" stopOpacity="0.5" />
            <stop offset="100%" stopColor="hsl(24 100% 55%)" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="hqGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="hsl(210 90% 60%)" stopOpacity="0.55" />
            <stop offset="100%" stopColor="hsl(210 90% 60%)" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Silhueta */}
        <path
          d={BRAZIL_PATH}
          fill="hsl(0 0% 96%)"
          stroke="hsl(0 0% 80%)"
          strokeWidth="1.5"
        />

        {/* Pins */}
        {pins.map((p) => {
          const isHQ = p.hq;
          const color = isHQ ? "hsl(210 90% 50%)" : "hsl(24 100% 50%)";
          const glow = isHQ ? "url(#hqGlow)" : "url(#pinGlow)";
          return (
            <g
              key={p.id}
              transform={`translate(${p.x}, ${p.y})`}
              onMouseEnter={() => setHovered(p.id)}
              onMouseLeave={() => setHovered(null)}
              className="cursor-pointer"
            >
              <circle r={isHQ ? 28 : 20} fill={glow} className="animate-pulse" />
              <circle
                r={isHQ ? 10 : 7}
                fill={color}
                stroke="white"
                strokeWidth="2.5"
              />
              {isHQ && <circle r={4} fill="white" />}
              {(hovered === p.id || isHQ) && (
                <g transform={`translate(${isHQ ? 16 : 12}, ${isHQ ? -8 : -6})`}>
                  <rect
                    x={0}
                    y={-12}
                    rx={4}
                    height={20}
                    width={p.label.length * 6.4 + 14}
                    fill="hsl(0 0% 10%)"
                    opacity={0.92}
                  />
                  <text
                    x={7}
                    y={2}
                    fill="white"
                    fontSize="11"
                    fontFamily="Inter, sans-serif"
                    fontWeight={600}
                  >
                    {p.label}
                  </text>
                </g>
              )}
            </g>
          );
        })}
      </svg>
    </div>
  );
};

export default BrazilMap;