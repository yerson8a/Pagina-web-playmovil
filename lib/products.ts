/**
 * Catálogo de modelos destacados de Play Móvil.
 *
 * ⚙️  EDITABLE: las cuotas ("monthlyFrom") son valores de referencia.
 *     Actualízalas con los precios reales de la tienda.
 */
export type Product = {
  id: string;
  name: string;
  /** Frase corta de venta. */
  tagline: string;
  /** Cuota mensual desde (texto editable). */
  monthlyFrom: string;
  /** Etiqueta opcional: "Nuevo", "Más vendido"... */
  badge?: string;
  /** Si es true, la tarjeta se muestra destacada. */
  featured?: boolean;
  /** Clases Tailwind para el degradado de la pantalla del equipo. */
  screen: string;
};

export const products: Product[] = [
  {
    id: "iphone-13",
    name: "iPhone 13",
    tagline: "El clásico que nunca falla",
    monthlyFrom: "$89.900",
    screen: "from-sky-500/40 via-brand-600/40 to-ink-800",
  },
  {
    id: "iphone-14-pro-max",
    name: "iPhone 14 Pro Max",
    tagline: "Pantalla enorme, cámara pro",
    monthlyFrom: "$149.900",
    screen: "from-violet-500/45 via-brand-700/45 to-ink-800",
  },
  {
    id: "iphone-15-pro-max",
    name: "iPhone 15 Pro Max",
    tagline: "Titanio y potencia A17 Pro",
    monthlyFrom: "$179.900",
    badge: "Más vendido",
    featured: true,
    screen: "from-brand-400/55 via-brand-600/50 to-ink-800",
  },
  {
    id: "iphone-16-pro-max",
    name: "iPhone 16 Pro Max",
    tagline: "Inteligencia y velocidad extrema",
    monthlyFrom: "$219.900",
    screen: "from-fuchsia-500/45 via-brand-600/45 to-ink-800",
  },
  {
    id: "iphone-17-pro-max",
    name: "iPhone 17 Pro Max",
    tagline: "Lo último de Apple, ya disponible",
    monthlyFrom: "$259.900",
    badge: "Nuevo",
    screen: "from-brand-300/55 via-fuchsia-600/45 to-ink-800",
  },
];
