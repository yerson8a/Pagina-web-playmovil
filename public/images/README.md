# Imágenes de Play Móvil

Esta carpeta está lista para tus fotos reales (productos, tienda, etc.).

El sitio funciona **sin imágenes externas**: los iPhone se renderizan con
maquetas en CSS (`components/ui/PhoneMockup.tsx`), por lo que carga rápido y
se ve premium desde el primer despliegue.

## Cómo usar fotos reales

1. Guarda aquí tus imágenes optimizadas (`.webp` o `.jpg`), por ejemplo
   `iphone-15-pro-max.webp`.
2. En el componente correspondiente reemplaza la maqueta por el componente
   `Image` de Next.js:

   ```tsx
   import Image from "next/image";

   <Image
     src="/images/iphone-15-pro-max.webp"
     alt="iPhone 15 Pro Max"
     width={800}
     height={1000}
   />
   ```

3. Recomendado: imágenes con fondo transparente o oscuro para que combinen
   con la estética morado/negro de la marca.
