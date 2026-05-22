import { products, type Product } from "@/lib/products";
import { waLink } from "@/lib/site";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PhoneMockup } from "@/components/ui/PhoneMockup";
import { ArrowRightIcon, SparkIcon, WhatsAppIcon } from "@/components/ui/Icons";

/** Pantalla del equipo dentro de la tarjeta de producto. */
function ProductScreen({ product }: { product: Product }) {
  return (
    <div className="flex h-full flex-col items-center justify-center px-4 pt-10 text-center">
      <SparkIcon className="h-5 w-5 text-white/70" />
      <p className="mt-4 font-display text-lg font-bold leading-tight text-white">
        {product.name}
      </p>
      <p className="mt-1 text-[0.7rem] text-white/55">{product.tagline}</p>
      <div className="mt-5 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[0.65rem] font-semibold text-white">
        Desde {product.monthlyFrom} / mes
      </div>
    </div>
  );
}

function ProductCard({ product, delay }: { product: Product; delay: number }) {
  return (
    <Reveal delay={delay}>
      <article
        className={`group relative flex h-full flex-col overflow-hidden rounded-4xl p-6 transition-all duration-300 hover:-translate-y-2 ${
          product.featured
            ? "border border-brand-500/40 bg-gradient-to-b from-brand-600/15 to-white/[0.03] shadow-glow"
            : "border border-white/10 bg-white/[0.04] hover:border-brand-500/30"
        }`}
      >
        {/* Brillo al pasar el cursor */}
        <div className="pointer-events-none absolute inset-x-0 -top-24 h-48 bg-radial-glow opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

        {product.badge && (
          <span className="absolute right-5 top-5 z-20 rounded-full bg-brand-gradient px-3 py-1 text-[0.65rem] font-bold uppercase tracking-wider text-white shadow-glow">
            {product.badge}
          </span>
        )}

        {/* Equipo */}
        <div className="relative mx-auto w-40 transition-transform duration-500 group-hover:scale-[1.04] sm:w-44">
          <div className="absolute inset-0 -z-10 scale-110 rounded-full bg-radial-glow opacity-70" />
          <PhoneMockup screen={product.screen}>
            <ProductScreen product={product} />
          </PhoneMockup>
        </div>

        {/* Info */}
        <div className="mt-7 flex flex-1 flex-col">
          <h3 className="font-display text-xl font-bold text-white">
            {product.name}
          </h3>
          <p className="mt-1 text-sm text-white/50">{product.tagline}</p>

          <div className="mt-4 flex items-end gap-1.5">
            <span className="text-xs font-medium uppercase tracking-wider text-white/40">
              Cuota desde
            </span>
          </div>
          <p className="font-display text-3xl font-extrabold text-white">
            {product.monthlyFrom}
            <span className="ml-1 text-base font-medium text-white/45">
              / mes
            </span>
          </p>

          <a
            href={waLink(
              `Hola Play Móvil 👋, me interesa el ${product.name}. ¿Me cuentan cómo estrenarlo a crédito?`,
            )}
            target="_blank"
            rel="noopener noreferrer"
            className={`mt-6 inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition-all duration-300 ${
              product.featured
                ? "bg-brand-gradient text-white shadow-glow hover:-translate-y-0.5 hover:shadow-glow-lg"
                : "border border-white/15 bg-white/[0.05] text-white hover:border-brand-500/50 hover:bg-brand-500/15"
            }`}
          >
            <WhatsAppIcon className="h-4 w-4" />
            Lo quiero
            <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </article>
    </Reveal>
  );
}

export function ProductCards() {
  return (
    <section id="modelos" className="relative py-20 sm:py-28">
      <div className="container-px">
        <SectionHeading
          eyebrow="Modelos destacados"
          title={
            <>
              Elige tu <span className="text-gradient-brand">iPhone</span>
            </>
          }
          subtitle="Los modelos más buscados, listos para estrenar con cuotas pensadas para tu bolsillo."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product, i) => (
            <ProductCard key={product.id} product={product} delay={(i % 3) * 0.1} />
          ))}

          {/* Tarjeta de cierre: ¿no ves tu modelo? */}
          <Reveal delay={0.2}>
            <article className="flex h-full flex-col items-center justify-center rounded-4xl border border-dashed border-white/15 bg-white/[0.02] p-8 text-center">
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-500/15 text-brand-300">
                <SparkIcon className="h-6 w-6" />
              </span>
              <h3 className="mt-5 font-display text-lg font-bold text-white">
                ¿Buscas otro modelo?
              </h3>
              <p className="mt-2 text-sm text-white/50">
                Tenemos más iPhone disponibles. Escríbenos y te ayudamos.
              </p>
              <a
                href={waLink(
                  "Hola Play Móvil 👋, busco un modelo de iPhone que no veo en la web. ¿Me ayudan?",
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary mt-6"
              >
                <WhatsAppIcon className="h-4 w-4" />
                Preguntar por WhatsApp
              </a>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
