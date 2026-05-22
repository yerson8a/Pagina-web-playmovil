import { waLink } from "@/lib/site";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  ArrowRightIcon,
  HeartIcon,
  SproutIcon,
  StarIcon,
  WhatsAppIcon,
} from "@/components/ui/Icons";

type Profile = {
  icon: React.ReactNode;
  title: string;
  highlight: string;
  description: string;
  message: string;
  featured?: boolean;
};

const profiles: Profile[] = [
  {
    icon: <StarIcon className="h-6 w-6" />,
    title: "Buen historial crediticio",
    highlight: "Los mejores cupos para ti",
    description:
      "Tu buen comportamiento financiero te abre todas las puertas. Accede a cupos amplios y estrena el iPhone que quieras con la cuota más cómoda.",
    message:
      "Hola Play Móvil 👋, tengo buen historial crediticio y quiero estrenar un iPhone.",
  },
  {
    icon: <SproutIcon className="h-6 w-6" />,
    title: "Poco historial",
    highlight: "Tu primer crédito empieza aquí",
    description:
      "¿Apenas empiezas tu vida crediticia? Es el momento perfecto. Estrena tu primer iPhone y construye un historial sólido desde hoy.",
    message:
      "Hola Play Móvil 👋, tengo poco historial crediticio y quiero estrenar un iPhone.",
  },
  {
    icon: <HeartIcon className="h-6 w-6" />,
    title: "Reportados",
    highlight: "Aquí sí te decimos que sí",
    description:
      "Estar reportado no te detiene. Analizamos tu caso de forma diferente y miles de personas ya estrenaron su iPhone con nosotros.",
    message:
      "Hola Play Móvil 👋, estoy reportado y quiero saber cómo estrenar un iPhone a crédito.",
    featured: true,
  },
];

export function CreditProfiles() {
  return (
    <section id="perfiles" className="relative py-20 sm:py-28">
      {/* Glow de fondo */}
      <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-96 w-96 -translate-x-1/2 rounded-full bg-radial-glow opacity-60" />

      <div className="container-px">
        <SectionHeading
          eyebrow="Para todos los perfiles"
          title={
            <>
              Sea cual sea tu historial,{" "}
              <span className="text-gradient-brand">tienes opción</span>
            </>
          }
          subtitle="No importa cómo esté tu vida crediticia hoy. En Play Móvil estudiamos cada caso para ayudarte a estrenar."
        />

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {profiles.map((profile, i) => (
            <Reveal key={profile.title} delay={i * 0.12}>
              <article
                className={`group relative flex h-full flex-col overflow-hidden rounded-4xl p-7 transition-all duration-300 hover:-translate-y-1.5 ${
                  profile.featured
                    ? "border border-brand-500/40 bg-gradient-to-b from-brand-600/20 via-brand-800/10 to-white/[0.03] shadow-glow"
                    : "border border-white/10 bg-white/[0.04] hover:border-white/20"
                }`}
              >
                {profile.featured && (
                  <span className="absolute right-5 top-5 rounded-full bg-brand-gradient px-3 py-1 text-[0.65rem] font-bold uppercase tracking-wider text-white">
                    Tu caso es bienvenido
                  </span>
                )}

                <span
                  className={`inline-flex h-14 w-14 items-center justify-center rounded-2xl transition-colors duration-300 ${
                    profile.featured
                      ? "bg-brand-gradient text-white"
                      : "bg-brand-500/15 text-brand-300 group-hover:bg-brand-gradient group-hover:text-white"
                  }`}
                >
                  {profile.icon}
                </span>

                <h3 className="mt-6 font-display text-xl font-bold text-white">
                  {profile.title}
                </h3>
                <p className="mt-1 text-sm font-semibold text-brand-300">
                  {profile.highlight}
                </p>
                <p className="mt-3 flex-1 text-[0.95rem] leading-relaxed text-white/55">
                  {profile.description}
                </p>

                <a
                  href={waLink(profile.message)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-white transition-colors hover:text-brand-200"
                >
                  <WhatsAppIcon className="h-4 w-4 text-brand-300" />
                  Consultar mi caso
                  <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
