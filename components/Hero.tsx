"use client";

import { motion } from "framer-motion";
import { site, waLink } from "@/lib/site";
import { PhoneMockup } from "@/components/ui/PhoneMockup";
import {
  ArrowRightIcon,
  ShieldCheckIcon,
  SparkIcon,
  StarIcon,
  WhatsAppIcon,
} from "@/components/ui/Icons";

const ease = [0.21, 0.47, 0.32, 0.98] as const;

/** Variantes para la entrada escalonada del texto. */
const item = {
  hidden: { opacity: 0, y: 26 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: 0.15 + i * 0.12, ease },
  }),
};

export function Hero() {
  return (
    <section
      id="inicio"
      className="noise relative flex min-h-[100svh] items-center overflow-hidden pb-20 pt-32 sm:pt-36"
    >
      {/* ---- Fondo: degradados y orbes morados ---- */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-ink-900 via-ink to-ink" />
        <div className="absolute -left-32 top-10 h-[34rem] w-[34rem] rounded-full bg-radial-glow opacity-80 animate-float-slow" />
        <div className="absolute -right-24 top-1/3 h-[40rem] w-[40rem] rounded-full bg-radial-glow opacity-70 animate-float" />
        <div className="absolute bottom-0 left-1/2 h-72 w-[42rem] -translate-x-1/2 rounded-full bg-radial-glow opacity-50" />
        {/* Rejilla sutil */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
      </div>

      <div className="container-px grid w-full items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
        {/* ---- Columna de texto ---- */}
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
          <motion.div custom={0} variants={item} initial="hidden" animate="visible">
            <span className="eyebrow">
              <SparkIcon className="h-3.5 w-3.5" />
              Financiación de iPhone en Colombia
            </span>
          </motion.div>

          <motion.h1
            custom={1}
            variants={item}
            initial="hidden"
            animate="visible"
            className="mt-6 font-display text-[2.6rem] font-extrabold leading-[1.04] tracking-tightest text-white sm:text-6xl lg:text-[4.2rem]"
          >
            Estrena tu <span className="text-gradient-brand">iPhone</span>
            <br className="hidden sm:block" /> a crédito
          </motion.h1>

          <motion.p
            custom={2}
            variants={item}
            initial="hidden"
            animate="visible"
            className="mt-6 max-w-xl text-lg leading-relaxed text-white/60 sm:text-xl"
          >
            Aplica para{" "}
            <span className="font-semibold text-white/90">reportados</span>,{" "}
            <span className="font-semibold text-white/90">poco historial</span>{" "}
            o{" "}
            <span className="font-semibold text-white/90">
              buen historial crediticio
            </span>
            .
          </motion.p>

          <motion.div
            custom={3}
            variants={item}
            initial="hidden"
            animate="visible"
            className="mt-9 flex w-full flex-col gap-3.5 sm:w-auto sm:flex-row"
          >
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
            <a href="#modelos" className="btn-secondary">
              Ver modelos disponibles
            </a>
          </motion.div>

          {/* Línea de confianza */}
          <motion.div
            custom={4}
            variants={item}
            initial="hidden"
            animate="visible"
            className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:gap-6"
          >
            <div className="flex items-center gap-1.5">
              <div className="flex">
                {[0, 1, 2, 3, 4].map((i) => (
                  <StarIcon key={i} className="h-4 w-4 text-brand-300" />
                ))}
              </div>
              <span className="text-sm text-white/55">
                +{site.followers} seguidores
              </span>
            </div>
            <span className="hidden h-4 w-px bg-white/15 sm:block" />
            <div className="flex items-center gap-2 text-sm text-white/55">
              <ShieldCheckIcon className="h-4 w-4 text-brand-300" />
              Play Móvil verificado
            </div>
          </motion.div>
        </div>

        {/* ---- Columna visual: iPhone ---- */}
        <motion.div
          initial={{ opacity: 0, y: 50, rotateX: 12 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 1, delay: 0.35, ease }}
          className="relative mx-auto w-full max-w-[19rem] sm:max-w-[21rem]"
        >
          {/* Halo detrás del equipo */}
          <div className="absolute inset-0 -z-10 scale-125 rounded-full bg-radial-glow" />

          <motion.div
            animate={{ y: [0, -16, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            <PhoneMockup screen="from-brand-500/50 via-brand-800/60 to-ink-900">
              <HeroPhoneScreen />
            </PhoneMockup>
          </motion.div>

          {/* Tarjeta flotante: cuota (oculta en móvil para no tapar la pantalla) */}
          <motion.div
            initial={{ opacity: 0, x: -30, y: 10 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9, ease }}
            className="absolute bottom-[18%] hidden sm:-left-16 sm:block"
          >
            <div className="glass-strong rounded-2xl px-4 py-3 shadow-card">
              <p className="text-[0.65rem] uppercase tracking-widest text-white/45">
                Cuota desde
              </p>
              <p className="font-display text-lg font-bold text-white">
                $89.900<span className="text-sm text-white/50"> /mes</span>
              </p>
            </div>
          </motion.div>

          {/* Tarjeta flotante: aprobación (oculta en móvil para no tapar la pantalla) */}
          <motion.div
            initial={{ opacity: 0, x: 30, y: -10 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.8, delay: 1.05, ease }}
            className="absolute top-[22%] hidden sm:-right-14 sm:block"
          >
            <div className="glass-strong flex items-center gap-2.5 rounded-2xl px-4 py-3 shadow-card">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-gradient">
                <ShieldCheckIcon className="h-4 w-4 text-white" />
              </span>
              <div>
                <p className="text-[0.65rem] uppercase tracking-widest text-white/45">
                  Validación
                </p>
                <p className="text-sm font-semibold text-white">
                  En minutos
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

/** Mini-interfaz que se muestra dentro del iPhone del hero. */
function HeroPhoneScreen() {
  return (
    <div className="flex h-full flex-col px-5 pb-6 pt-12">
      <div className="flex items-center gap-2">
        <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-white/15">
          <SparkIcon className="h-3.5 w-3.5 text-white" />
        </span>
        <span className="text-sm font-semibold text-white">Play Móvil</span>
      </div>

      <p className="mt-7 text-xs font-medium uppercase tracking-widest text-white/45">
        Tu cupo
      </p>
      <p className="mt-1 font-display text-2xl font-bold text-white">
        ¡Aprobado! 🎉
      </p>

      <div className="mt-5 space-y-2.5">
        {[
          { k: "Modelo", v: "iPhone 15 Pro Max" },
          { k: "Cuota", v: "$179.900 / mes" },
          { k: "Entrega", v: "Tienda física" },
        ].map((row) => (
          <div
            key={row.k}
            className="flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.06] px-3 py-2.5"
          >
            <span className="text-[0.7rem] text-white/50">{row.k}</span>
            <span className="text-xs font-semibold text-white">{row.v}</span>
          </div>
        ))}
      </div>

      <div className="mt-auto rounded-xl bg-white py-2.5 text-center text-xs font-bold text-ink">
        Continuar por WhatsApp
      </div>
    </div>
  );
}
