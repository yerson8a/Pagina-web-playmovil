"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { waLink } from "@/lib/site";
import { WhatsAppIcon } from "@/components/ui/Icons";

/**
 * Botón flotante de WhatsApp.
 * Aparece tras un pequeño scroll para no competir con el hero.
 */
export function WhatsAppButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 520);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.a
          href={waLink(
            "Hola Play Móvil 👋, quiero estrenar mi iPhone a crédito.",
          )}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Escríbenos por WhatsApp"
          initial={{ opacity: 0, scale: 0.6, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.6, y: 20 }}
          transition={{ duration: 0.35, ease: [0.21, 0.47, 0.32, 0.98] }}
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.94 }}
          className="group fixed bottom-5 right-5 z-50 flex items-center sm:bottom-7 sm:right-7"
        >
          {/* Anillo de pulso */}
          <span className="absolute inset-0 -z-10 rounded-full bg-brand-500/50 animate-pulse-ring" />

          <span className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-gradient shadow-glow-lg ring-1 ring-white/15">
            <WhatsAppIcon className="h-7 w-7 text-white" />
          </span>

          {/* Etiqueta que se despliega al pasar el cursor */}
          <span className="pointer-events-none absolute right-16 hidden whitespace-nowrap rounded-full glass-strong px-4 py-2 text-sm font-semibold text-white opacity-0 shadow-card transition-all duration-300 group-hover:opacity-100 sm:block">
            Escríbenos por WhatsApp
          </span>
        </motion.a>
      )}
    </AnimatePresence>
  );
}
