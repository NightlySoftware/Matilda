"use client";

import Link from "next/link";
import { ArrowRight01Icon } from "hugeicons-react";
import MenuItem from "./menu-item";

// Menu Section Component - streamlined featured menu
export default function MenuSection() {
  // Featured products - curated selection from real menu with full item data
  const featuredProducts = [
    {
      name: "Tarta Vasca Clásica",
      price: 510,
      category: "tarta_vasca_whole",
      notes:
        "22cm · 8-10 porciones · ~1,200g. Nuestra especialidad tradicional.",
    },
    {
      name: "Galletas estilo New York (sabores varios)",
      price_range: { min: 68, max: 75 },
      category: "cookies_new_york_style",
      notes: "140g. Suaves por dentro, crujientes por fuera.",
    },
    {
      name: "Matcha Yuzu Latte",
      price: 96,
      category: "matcha_lovers",
      notes: "Té verde matcha premium con cítricos frescos.",
    },
    {
      name: "Lotus Biscoff",
      price: 630,
      category: "tarta_vasca_whole",
      notes: "22cm · 8-10 porciones. Caramelo Lotus irresistible.",
    },
  ];

  return (
    <section
      id="menu"
      className="py-16 md:py-20 bg-white relative overflow-hidden grainy-background"
    >
      {/* Wave effect at the top */}
      <div className="absolute top-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          className="w-full h-auto"
          preserveAspectRatio="none"
        >
          <path
            fill="#0121D6"
            d="M0,80L48,85.3C96,91,192,101,288,96C384,91,480,69,576,58.7C672,48,768,48,864,58.7C960,69,1056,91,1152,96C1248,101,1344,91,1392,85.3L1440,80L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          />
        </svg>
      </div>

      {/* Background decoration */}
      <div className="absolute top-10 right-10 w-32 h-32 bg-[#FFD200]/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-10 left-10 w-40 h-40 bg-[#223DFC]/5 rounded-full blur-2xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center my-12">
          <h2
            className="text-3xl md:text-5xl lg:text-6xl text-gray-900 leading-tight font-normal mb-4"
            style={{ fontFamily: "var(--font-sarina)" }}
          >
            Nuestro Menú
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed mb-6">
            Artesanal • Fresco • Hecho con amor diariamente
          </p>
        </div>

        {/* Featured Products */}
        <div className="mb-10">
          <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 text-center mb-6">
            Productos Destacados
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 max-w-6xl mx-auto">
            {featuredProducts.map((product, index) => (
              <MenuItem
                key={index}
                item={product}
                isCompact={true}
                showWhatsApp={true}
              />
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-linear-to-r from-[#223DFC] to-[#0121D6] rounded-2xl md:rounded-3xl p-6 md:p-8 text-white grainy-background">
            <h3 className="text-lg md:text-xl lg:text-2xl font-bold mb-2 md:mb-3">
              ¿Quieres ver nuestro menú completo?
            </h3>
            <p className="text-sm md:text-base mb-4 md:mb-6 opacity-90 max-w-2xl mx-auto">
              Explora todas nuestras opciones: tartas personalizadas, bebidas de
              temporada, galletas artesanales y mucho más.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
              <Link
                href="/menu"
                className="bg-[#FFD200] hover:bg-[#E6BD00] text-[#00054B] px-4 md:px-6 py-2.5 md:py-3 rounded-md md:rounded-lg transition-all duration-300 font-bold text-sm md:text-base flex items-center justify-center gap-1.5 md:gap-2 border-2 border-[#00054B] w-full sm:w-auto"
              >
                <span>Ver Menú Completo</span>
                <ArrowRight01Icon className="w-3.5 h-3.5 md:w-4 md:h-4" />
              </Link>
              <Link
                href={`https://wa.me/524621957429?text=${encodeURIComponent(
                  "Hola, vi su sitio web de Matilda y me gustaría hacer un pedido. ¿Me pueden ayudar?"
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-white/20 text-white px-4 md:px-6 py-2.5 md:py-3 rounded-md md:rounded-lg font-semibold text-sm md:text-base transition-all duration-300 border-2 border-white/30 hover:border-white/50 flex items-center justify-center gap-1.5 md:gap-2 w-full sm:w-auto"
              >
                <span>Hacer Pedido</span>
                <svg
                  className="w-3.5 h-3.5 md:w-4 md:h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
