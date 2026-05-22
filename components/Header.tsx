"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { navLinks, site, waLink } from "@/lib/site";
import {
  ArrowRightIcon,
  CloseIcon,
  MenuIcon,
  WhatsAppIcon,
} from "@/components/ui/Icons";

/** Logotipo de Play Móvil — usa el logo oficial en /public/images/logo.jpeg. */
function Logo() {
  return (
    <a
      href="#inicio"
      aria-label="Play Móvil — inicio"
      className="group inline-flex items-center"
    >
      <Image
        src="/images/logo.jpeg"
        alt="Play Móvil"
        width={172}
        height={52}
        priority
        className="h-9 w-auto mix-blend-screen transition-transform duration-300 group-hover:scale-[1.03] sm:h-10"
      />
    </a>
  );
}

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  // Header se vuelve más sólido al hacer scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Bloquea el scroll del body cuando el menú móvil está abierto
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <motion.header
      initial={{ y: -90, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
      className="fixed inset-x-0 top-0 z-50"
    >
      <div className="container-px">
        <div
          className={`mt-3 flex items-center justify-between rounded-2xl px-4 py-2.5 transition-all duration-500 sm:px-5 ${
            scrolled
              ? "glass-strong shadow-card"
              : "border border-transparent bg-transparent"
          }`}
        >
          <Logo />

          {/* Navegación de escritorio */}
          <nav className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-full px-4 py-2 text-sm font-medium text-white/65 transition-colors hover:bg-white/5 hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA escritorio */}
          <div className="hidden lg:block">
            <a
              href={waLink(
                "Hola Play Móvil 👋, quiero información para estrenar mi iPhone a crédito.",
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full bg-brand-gradient px-5 py-2.5 text-sm font-semibold text-white shadow-glow transition-all duration-300 hover:-translate-y-0.5 hover:shadow-glow-lg"
            >
              <WhatsAppIcon className="h-4 w-4" />
              Escríbenos
              <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>

          {/* Botón de menú móvil */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={open}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white lg:hidden"
          >
            {open ? <CloseIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Menú móvil */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 top-0 z-40 lg:hidden"
          >
            <div
              className="absolute inset-0 bg-ink/80 backdrop-blur-sm"
              onClick={() => setOpen(false)}
            />
            <motion.nav
              initial={{ y: -24, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -24, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="container-px relative pt-24"
            >
              <div className="glass-strong flex flex-col gap-1 rounded-3xl p-4 shadow-card">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.08 + i * 0.06 }}
                    className="flex items-center justify-between rounded-2xl px-4 py-3.5 text-base font-medium text-white/80 transition-colors hover:bg-white/5 hover:text-white"
                  >
                    {link.label}
                    <ArrowRightIcon className="h-4 w-4 text-brand-300" />
                  </motion.a>
                ))}
                <a
                  href={waLink(
                    "Hola Play Móvil 👋, quiero información para estrenar mi iPhone a crédito.",
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                  className="btn-primary mt-2 w-full"
                >
                  <WhatsAppIcon className="h-5 w-5" />
                  Escríbenos por WhatsApp
                </a>
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
