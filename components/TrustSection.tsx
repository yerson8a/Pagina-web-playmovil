import { site } from "@/lib/site";
import { Reveal } from "@/components/ui/Reveal";
import {
  BoltIcon,
  ClockIcon,
  InstagramIcon,
  ShieldCheckIcon,
  StoreIcon,
} from "@/components/ui/Icons";

type Trust = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

const items: Trust[] = [
  {
    icon: <ShieldCheckIcon className="h-6 w-6" />,
    title: "Play Móvil verificado",
    description: "Negocio real y confiable, con trayectoria comprobada.",
  },
  {
    icon: <StoreIcon className="h-6 w-6" />,
    title: "Atención en tienda física",
    description: "Te recibimos en persona en Pereira y Armenia.",
  },
  {
    icon: <BoltIcon className="h-6 w-6" />,
    title: "Financiación rápida",
    description: "Procesos ágiles para que estrenes sin esperas.",
  },
  {
    icon: <ClockIcon className="h-6 w-6" />,
    title: "Validación en minutos",
    description: "Conoce tu cupo casi al instante por WhatsApp.",
  },
  {
    icon: <InstagramIcon className="h-6 w-6" />,
    title: `+${site.followers} seguidores`,
    description: "Una comunidad que ya confía en Play Móvil.",
  },
];

export function TrustSection() {
  return (
    <section id="confianza" className="relative py-16 sm:py-20">
      {/* Línea divisoria con degradado */}
      <div className="container-px">
        <div className="mb-12 h-px w-full bg-gradient-to-r from-transparent via-brand-500/40 to-transparent" />

        <Reveal>
          <p className="mb-9 text-center text-xs font-semibold uppercase tracking-[0.22em] text-white/40">
            Una compra segura, de principio a fin
          </p>
        </Reveal>

        <div className="grid grid-cols-2 gap-3.5 sm:grid-cols-3 lg:grid-cols-5">
          {items.map((item, i) => (
            <Reveal
              key={item.title}
              delay={i * 0.08}
              className={i === 4 ? "col-span-2 sm:col-span-1" : ""}
            >
              <div className="group h-full rounded-3xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-brand-500/40 hover:bg-white/[0.07]">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-500/15 text-brand-300 transition-colors duration-300 group-hover:bg-brand-gradient group-hover:text-white">
                  {item.icon}
                </span>
                <h3 className="mt-4 font-display text-base font-semibold text-white">
                  {item.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-white/50">
                  {item.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
