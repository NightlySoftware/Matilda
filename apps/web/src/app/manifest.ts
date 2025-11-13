import type { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Matilda Repostería Artesanal",
    short_name: "Matilda",
    description: "Repostería artesanal en Irapuato especializada en Tarta Vasca, cookies estilo Nueva York, roles brioche y bebidas de autor. Nos apasiona lo bueno.",
    start_url: "/",
    display: "standalone",
    background_color: "#f2f1ed",
    theme_color: "#223DFC",
    icons: [
      {
        src: "/matilda_blue.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/matilda_white.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  }
}
