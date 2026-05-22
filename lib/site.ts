/**
 * Configuración central de Play Móvil.
 * Los valores se pueden sobrescribir con variables de entorno (.env.local).
 * Así el sitio es escalable sin tocar el código de los componentes.
 */
export const site = {
  name: "Play Móvil",
  tagline: "iPhone a crédito en Colombia",
  description:
    "Estrena tu iPhone a crédito en Play Móvil. Financiación rápida para reportados, poco historial o buen historial crediticio. Tiendas en Pereira y Armenia.",

  // Contacto
  whatsappNumber:
    process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "573113067000",
  whatsappDisplay: "311 306 7000",

  // Redes y web
  instagram:
    process.env.NEXT_PUBLIC_INSTAGRAM_URL ??
    "https://instagram.com/playmovil15",
  instagramHandle: "@playmovil15",
  website: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.playmovil.store",
  websiteDisplay: "www.playmovil.store",

  // Prueba social
  followers: "13.000+",
} as const;

/**
 * Genera un enlace de WhatsApp con mensaje prellenado.
 * @param message Texto que verá el cliente al abrir el chat.
 */
export function waLink(message: string): string {
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(
    message,
  )}`;
}

/** Secciones para el menú de navegación. */
export const navLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Perfiles", href: "#perfiles" },
  { label: "Modelos", href: "#modelos" },
  { label: "Proceso", href: "#proceso" },
  { label: "Tiendas", href: "#tiendas" },
] as const;
