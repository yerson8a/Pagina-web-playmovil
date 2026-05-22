import { navLinks, site, waLink } from "@/lib/site";
import { Reveal } from "@/components/ui/Reveal";
import {
  ArrowRightIcon,
  InstagramIcon,
  SparkIcon,
  WhatsAppIcon,
} from "@/components/ui/Icons";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden pt-20">
      {/* ---- Banda de CTA final ---- */}
      <div className="container-px">
        <Reveal>
          <div className="relative overflow-hidden rounded-5xl border border-brand-500/30 bg-gradient-to-br from-brand-700/40 via-brand-900/30 to-ink-800 p-8 text-center sm:p-14">
            <div className="pointer-events-none absolute -left-20 -top-20 h-72 w-72 rounded-full bg-radial-glow" />
            <div className="pointer-events-none absolute -bottom-24 -right-16 h-72 w-72 rounded-full bg-radial-glow" />

            <span className="eyebrow">
              <SparkIcon className="h-3.5 w-3.5" />
              Tu iPhone te espera
            </span>
            <h2 className="relative mx-auto mt-5 max-w-2xl font-display text-3xl font-extrabold leading-[1.1] tracking-tightest text-white sm:text-5xl">
              ¿Listo para{" "}
              <span className="text-gradient-brand">estrenar</span>?
            </h2>
            <p className="relative mx-auto mt-4 max-w-xl text-base text-white/60 sm:text-lg">
              Escríbenos por WhatsApp y conoce tu cupo en minutos. Sin
              compromiso.
            </p>
            <div className="relative mt-8 flex justify-center">
              <a
                href={waLink(
                  "Hola Play Móvil 👋, quiero estrenar mi iPhone a crédito. ¿Me ayudan?",
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary group"
              >
                <WhatsAppIcon className="h-5 w-5" />
                Quiero estrenar mi iPhone
                <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </Reveal>
      </div>

      {/* ---- Cuerpo del footer ---- */}
      <div className="container-px mt-20">
        <div className="grid gap-10 border-t border-white/10 py-14 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          {/* Marca */}
          <div>
            <div className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-gradient shadow-glow">
                <SparkIcon className="h-4 w-4 text-white" />
              </span>
              <span className="font-display text-lg font-bold text-white">
                Play<span className="text-gradient-brand"> Móvil</span>
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/50">
              Estrena tu iPhone a crédito en Colombia. Financiación para
              reportados, poco historial o buen historial crediticio.
            </p>
          </div>

          {/* Navegación */}
          <nav>
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-white/40">
              Navegación
            </h3>
            <ul className="mt-4 space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-white/60 transition-colors hover:text-brand-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Tiendas */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-white/40">
              Tiendas
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm text-white/60">
              <li>Pereira, Risaralda</li>
              <li>Armenia, Quindío</li>
              <li className="text-white/40">Manizales (próximamente)</li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-white/40">
              Contacto
            </h3>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href={waLink("Hola Play Móvil 👋, quiero más información.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2.5 text-sm text-white/65 transition-colors hover:text-brand-200"
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/[0.06] text-brand-300 transition-colors group-hover:bg-brand-500/20">
                    <WhatsAppIcon className="h-4 w-4" />
                  </span>
                  WhatsApp {site.whatsappDisplay}
                </a>
              </li>
              <li>
                <a
                  href={site.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2.5 text-sm text-white/65 transition-colors hover:text-brand-200"
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/[0.06] text-brand-300 transition-colors group-hover:bg-brand-500/20">
                    <InstagramIcon className="h-4 w-4" />
                  </span>
                  {site.instagramHandle}
                </a>
              </li>
              <li>
                <a
                  href={site.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2.5 text-sm text-white/65 transition-colors hover:text-brand-200"
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/[0.06] text-brand-300 transition-colors group-hover:bg-brand-500/20">
                    <SparkIcon className="h-4 w-4" />
                  </span>
                  {site.websiteDisplay}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Barra inferior */}
        <div className="flex flex-col gap-3 border-t border-white/10 py-7 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
          <p className="text-xs text-white/40">
            © {year} {site.name}. Todos los derechos reservados.
          </p>
          <p className="text-xs text-white/30">
            Las cuotas mostradas son de referencia y están sujetas a estudio de
            crédito.
          </p>
        </div>
      </div>
    </footer>
  );
}
