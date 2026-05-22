import { waLink } from "@/lib/site";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ArrowRightIcon, WhatsAppIcon } from "@/components/ui/Icons";

type Step = {
  title: string;
  description: string;
};

const steps: Step[] = [
  {
    title: "Elige tu iPhone",
    description: "Mira los modelos disponibles y dinos cuál quieres estrenar.",
  },
  {
    title: "Validamos tu cupo",
    description: "Con unos pocos datos revisamos tu caso de forma personalizada.",
  },
  {
    title: "Te damos respuesta rápida",
    description: "En minutos sabrás si tu crédito quedó aprobado.",
  },
  {
    title: "Recoges en tienda",
    description: "Pasas por nuestra tienda física y te llevas tu nuevo iPhone.",
  },
];

export function ProcessSection() {
  return (
    <section id="proceso" className="relative overflow-hidden py-20 sm:py-28">
      {/* Fondo */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-brand-900/20 to-transparent" />

      <div className="container-px">
        <SectionHeading
          eyebrow="Así de fácil"
          title={
            <>
              Estrenar es cuestión de{" "}
              <span className="text-gradient-brand">4 pasos</span>
            </>
          }
          subtitle="Un proceso simple, rápido y sin vueltas. Desde tu celular hasta nuestra tienda."
        />

        <div className="relative mt-16">
          {/* Línea conectora (escritorio) */}
          <div className="absolute left-0 right-0 top-7 hidden h-px bg-gradient-to-r from-transparent via-brand-500/50 to-transparent lg:block" />

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {steps.map((step, i) => (
              <Reveal key={step.title} delay={i * 0.12}>
                <div className="group relative flex flex-col items-start lg:items-center lg:text-center">
                  {/* Número */}
                  <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-2xl bg-ink-800 ring-1 ring-white/10 transition-all duration-300 group-hover:ring-brand-500/50">
                    <span className="font-display text-xl font-extrabold text-gradient-brand">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <h3 className="mt-5 font-display text-lg font-bold text-white">
                    {step.title}
                  </h3>
                  <p className="mt-2 max-w-xs text-sm leading-relaxed text-white/55">
                    {step.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* CTA de cierre */}
        <Reveal delay={0.2}>
          <div className="mt-14 flex justify-center">
            <a
              href={waLink(
                "Hola Play Móvil 👋, quiero empezar el proceso para estrenar mi iPhone a crédito.",
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary group"
            >
              <WhatsAppIcon className="h-5 w-5" />
              Empezar ahora
              <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
