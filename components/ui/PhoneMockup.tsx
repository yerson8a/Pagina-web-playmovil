import type { ReactNode } from "react";

/**
 * Maqueta de iPhone construida 100% con CSS — sin imágenes externas.
 * Marco tipo titanio con Dynamic Island; el contenido de pantalla es libre.
 *
 * 📷 Para usar fotos reales: reemplaza el contenido de `children`
 *    por un <Image /> de Next.js apuntando a /public/images.
 */
type PhoneMockupProps = {
  /** Degradado Tailwind de la pantalla, ej: "from-brand-400 to-ink-800". */
  screen?: string;
  children?: ReactNode;
  className?: string;
};

export function PhoneMockup({
  screen = "from-brand-500/40 via-brand-700/40 to-ink-800",
  children,
  className,
}: PhoneMockupProps) {
  return (
    <div
      className={`relative aspect-[10/20] w-full rounded-[2.6rem] bg-gradient-to-b from-white/25 via-white/5 to-white/15 p-[3px] shadow-card ${
        className ?? ""
      }`}
    >
      {/* Marco interior (negro titanio) */}
      <div className="relative h-full w-full overflow-hidden rounded-[2.4rem] bg-ink-900 p-2">
        {/* Pantalla */}
        <div
          className={`relative flex h-full w-full flex-col overflow-hidden rounded-[1.9rem] bg-gradient-to-b ${screen}`}
        >
          {/* Brillo de pantalla */}
          <div className="pointer-events-none absolute -left-1/4 -top-1/4 h-1/2 w-3/4 rotate-12 rounded-full bg-white/10 blur-2xl" />

          {/* Dynamic Island */}
          <div className="absolute left-1/2 top-3 z-20 h-[1.15rem] w-[34%] -translate-x-1/2 rounded-full bg-black/90">
            <span className="absolute right-2.5 top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-brand-400/70" />
          </div>

          {/* Contenido de pantalla */}
          <div className="relative z-10 flex h-full w-full flex-col">
            {children}
          </div>
        </div>

        {/* Botones laterales */}
        <span className="absolute -left-[3px] top-[22%] h-9 w-[3px] rounded-l bg-white/20" />
        <span className="absolute -left-[3px] top-[34%] h-9 w-[3px] rounded-l bg-white/20" />
        <span className="absolute -right-[3px] top-[28%] h-12 w-[3px] rounded-r bg-white/20" />
      </div>
    </div>
  );
}
