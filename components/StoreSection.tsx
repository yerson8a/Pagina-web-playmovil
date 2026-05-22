import { waLink } from "@/lib/site";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ArrowRightIcon, PinIcon, WhatsAppIcon } from "@/components/ui/Icons";

type Store = {
  city: string;
  region: string;
  status: "open" | "soon";
  description: string;
};

const stores: Store[] = [
  {
    city: "Pereira",
    region: "Risaralda",
    status: "open",
    description:
      "Nuestra tienda te espera con asesoría personalizada para que estrenes tu iPhone.",
  },
  {
    city: "Armenia",
    region: "Quindío",
    status: "open",
    description:
      "Acércate y déjate atender por nuestro equipo. Tu nuevo iPhone te espera.",
  },
  {
    city: "Manizales",
    region: "Caldas",
    status: "soon",
    description:
      "Muy pronto abriremos para estar aún más cerca de ti. ¡Estás en la lista!",
  },
];

export function StoreSection() {
  return (
    <section id="tiendas" className="relative py-20 sm:py-28">
      <div className="pointer-events-none absolute right-0 top-1/4 -z-10 h-80 w-80 rounded-full bg-radial-glow opacity-50" />

      <div className="container-px">
        <SectionHeading
          eyebrow="Tiendas físicas"
          title={
            <>
              Estamos <span className="text-gradient-brand">cerca de ti</span>
            </>
          }
          subtitle="Atención real, en persona. Visítanos en el Eje Cafetero y recoge tu iPhone con total confianza."
        />

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {stores.map((store, i) => {
            const open = store.status === "open";
            return (
              <Reveal key={store.city} delay={i * 0.12}>
                <article
                  className={`group relative flex h-full flex-col overflow-hidden rounded-4xl border p-7 transition-all duration-300 ${
                    open
                      ? "border-white/10 bg-white/[0.04] hover:-translate-y-1.5 hover:border-brand-500/40"
                      : "border-dashed border-white/12 bg-white/[0.02]"
                  }`}
                >
                  {/* Mapa decorativo */}
                  <div
                    className="pointer-events-none absolute inset-0 opacity-[0.06]"
                    style={{
                      backgroundImage:
                        "radial-gradient(circle, rgba(255,255,255,1) 1px, transparent 1px)",
                      backgroundSize: "22px 22px",
                    }}
                  />

                  <div className="relative flex items-center justify-between">
                    <span
                      className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl ${
                        open
                          ? "bg-brand-gradient text-white"
                          : "bg-white/[0.06] text-white/40"
                      }`}
                    >
                      <PinIcon className="h-6 w-6" />
                    </span>
                    <span
                      className={`rounded-full px-3 py-1 text-[0.65rem] font-bold uppercase tracking-wider ${
                        open
                          ? "bg-emerald-400/15 text-emerald-300"
                          : "bg-white/[0.06] text-white/45"
                      }`}
                    >
                      {open ? "● Abierta" : "Próximamente"}
                    </span>
                  </div>

                  <h3 className="relative mt-6 font-display text-2xl font-bold text-white">
                    {store.city}
                  </h3>
                  <p className="relative text-sm font-medium text-brand-300">
                    {store.region}
                  </p>
                  <p className="relative mt-3 flex-1 text-[0.95rem] leading-relaxed text-white/55">
                    {store.description}
                  </p>

                  <a
                    href={waLink(
                      open
                        ? `Hola Play Móvil 👋, quiero visitar la tienda de ${store.city}. ¿Me dan la dirección y el horario?`
                        : `Hola Play Móvil 👋, quiero que me avisen cuando abra la tienda de ${store.city}.`,
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative mt-6 inline-flex items-center gap-2 text-sm font-semibold text-white transition-colors hover:text-brand-200"
                  >
                    <WhatsAppIcon className="h-4 w-4 text-brand-300" />
                    {open ? "Dirección y horario" : "Avísame cuando abra"}
                    <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
