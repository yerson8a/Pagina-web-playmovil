import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StarIcon } from "@/components/ui/Icons";

type Testimonial = {
  name: string;
  city: string;
  rating: number;
  text: string;
};

/**
 * ✏️ EDITABLE — Reseñas temporales.
 * Reemplaza estos textos por testimonios reales de tus clientes.
 */
const testimonials: Testimonial[] = [
  {
    name: "Valentina Ríos",
    city: "Pereira",
    rating: 5,
    text: "Estaba reportada y pensé que no iba a poder. Play Móvil me ayudó a estrenar mi iPhone 13 sin tanto problema. ¡Quedé feliz!",
  },
  {
    name: "Andrés Gómez",
    city: "Armenia",
    rating: 5,
    text: "Súper rápida la validación. En menos de un día ya tenía mi iPhone 15 Pro Max en la mano. Atención de primera.",
  },
  {
    name: "Daniela Cardona",
    city: "Pereira",
    rating: 5,
    text: "Era mi primer crédito y me lo aprobaron. El equipo me explicó todo con paciencia. 100% recomendados.",
  },
  {
    name: "Juan Manuel Toro",
    city: "Armenia",
    rating: 5,
    text: "Cuotas cómodas y trato honesto. Estrené el iPhone 14 Pro Max y la experiencia fue excelente de principio a fin.",
  },
  {
    name: "Camila Restrepo",
    city: "Pereira",
    rating: 5,
    text: "Me dio mucha confianza que tuvieran tienda física y gente real. Salí feliz con mi iPhone nuevo.",
  },
  {
    name: "Sebastián Ospina",
    city: "Armenia",
    rating: 5,
    text: "Tenía poco historial crediticio y aun así me ayudaron. Proceso claro, rápido y sin letra pequeña.",
  },
];

function initials(name: string) {
  return name
    .split(" ")
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();
}

export function Testimonials() {
  return (
    <section id="testimonios" className="relative py-20 sm:py-28">
      <div className="pointer-events-none absolute left-1/2 top-10 -z-10 h-96 w-[40rem] -translate-x-1/2 rounded-full bg-radial-glow opacity-50" />

      <div className="container-px">
        <SectionHeading
          eyebrow="Testimonios"
          title={
            <>
              Clientes que ya{" "}
              <span className="text-gradient-brand">estrenaron</span>
            </>
          }
          subtitle="Historias reales de personas que confiaron en Play Móvil para estrenar su iPhone."
        />

        {/* Calificación global */}
        <Reveal delay={0.1}>
          <div className="mx-auto mt-9 flex w-fit items-center gap-4 rounded-full border border-white/10 bg-white/[0.04] px-6 py-3 backdrop-blur-xl">
            <div className="flex">
              {[0, 1, 2, 3, 4].map((i) => (
                <StarIcon key={i} className="h-5 w-5 text-brand-300" />
              ))}
            </div>
            <div className="h-5 w-px bg-white/15" />
            <p className="text-sm text-white/70">
              <span className="font-display font-bold text-white">4.9</span> de
              valoración promedio
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={(i % 3) * 0.1}>
              <figure className="group flex h-full flex-col rounded-4xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-500/30 hover:bg-white/[0.06]">
                <div className="flex gap-0.5">
                  {Array.from({ length: t.rating }).map((_, s) => (
                    <StarIcon key={s} className="h-4 w-4 text-brand-300" />
                  ))}
                </div>

                <blockquote className="mt-4 flex-1 text-[0.95rem] leading-relaxed text-white/75">
                  “{t.text}”
                </blockquote>

                <figcaption className="mt-6 flex items-center gap-3 border-t border-white/10 pt-5">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-gradient font-display text-sm font-bold text-white">
                    {initials(t.name)}
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-white">{t.name}</p>
                    <p className="text-xs text-white/45">Cliente en {t.city}</p>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
