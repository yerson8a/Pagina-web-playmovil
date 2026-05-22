# Play Móvil — Sitio Web

Sitio web premium para **Play Móvil**, tienda de celulares iPhone a crédito en
Colombia. Diseño moderno tipo Apple, animaciones fluidas y enfoque mobile-first.

> Estrena tu iPhone a crédito · Para reportados, poco historial o buen
> historial crediticio · Tiendas en Pereira y Armenia.

---

## ✨ Stack tecnológico

| Tecnología        | Uso                                    |
| ----------------- | --------------------------------------- |
| **Next.js 15**    | Framework React (App Router)            |
| **TypeScript**    | Tipado estático                         |
| **Tailwind CSS**  | Estilos utilitarios y sistema de diseño |
| **Framer Motion** | Animaciones e interacciones fluidas     |
| **Vercel**        | Despliegue y hosting                    |

---

## 📁 Estructura del proyecto

```
pagina-web/
├── app/
│   ├── globals.css        # Estilos base + utilidades de marca
│   ├── icon.svg           # Favicon de marca
│   ├── layout.tsx         # Layout raíz, fuentes y metadatos SEO
│   └── page.tsx           # Composición de la página principal
├── components/
│   ├── ui/                # Componentes reutilizables base
│   │   ├── Icons.tsx      # Set de iconos SVG
│   │   ├── PhoneMockup.tsx# Maqueta de iPhone en CSS
│   │   ├── Reveal.tsx     # Animación "reveal on scroll"
│   │   └── SectionHeading.tsx
│   ├── Header.tsx         # Menú sticky con navegación responsive
│   ├── Hero.tsx           # Sección principal
│   ├── TrustSection.tsx   # Bloque de confianza
│   ├── CreditProfiles.tsx # Perfiles crediticios
│   ├── ProductCards.tsx   # Modelos de iPhone destacados
│   ├── ProcessSection.tsx # Proceso en 4 pasos
│   ├── StoreSection.tsx   # Tiendas físicas
│   ├── Testimonials.tsx   # Reseñas de clientes
│   ├── Footer.tsx         # Pie de página + CTA final
│   └── WhatsAppButton.tsx # Botón flotante de WhatsApp
├── lib/
│   ├── site.ts            # Configuración central (contacto, redes)
│   └── products.ts        # Catálogo de modelos
├── public/images/         # Carpeta para fotos reales
├── .env.example           # Plantilla de variables de entorno
└── vercel.json            # Configuración de despliegue
```

---

## 🚀 Instalación

Requisitos: **Node.js 18.18+** y **npm**.

```bash
# 1. Instalar dependencias
npm install

# 2. (Opcional) Crear archivo de variables de entorno
cp .env.example .env.local
```

---

## 💻 Desarrollo

```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.
La página se recarga automáticamente al guardar cambios.

---

## 🏗️ Build de producción

```bash
npm run build   # Compila el proyecto
npm run start   # Sirve la versión de producción localmente
```

---

## ⚙️ Personalización rápida

| Quiero cambiar...        | Edita este archivo                      |
| ------------------------ | --------------------------------------- |
| WhatsApp, Instagram, web | `lib/site.ts` o variables de entorno    |
| Modelos y cuotas         | `lib/products.ts`                       |
| Testimonios              | `components/Testimonials.tsx`           |
| Tiendas                  | `components/StoreSection.tsx`           |
| Colores de marca         | `tailwind.config.ts`                    |

Las **cuotas** (`monthlyFrom`) y los **testimonios** son valores de referencia:
actualízalos con la información real del negocio.

---

## ☁️ Despliegue en Vercel

1. Sube el repositorio a GitHub (ver instrucciones más abajo).
2. Entra a [vercel.com/new](https://vercel.com/new) e importa el repositorio.
3. Vercel detecta Next.js automáticamente — no se requiere configuración.
4. (Opcional) Añade las variables de `.env.example` en
   **Settings → Environment Variables**.
5. Pulsa **Deploy**. Cada `git push` generará un nuevo despliegue.

### Conectar el repositorio con GitHub

```bash
# Crea el repositorio en https://github.com/new (sin README)
git remote add origin https://github.com/TU-USUARIO/pagina-web.git
git branch -M main
git push -u origin main
```

---

## 📄 Licencia

Proyecto privado de **Play Móvil**. Todos los derechos reservados.
