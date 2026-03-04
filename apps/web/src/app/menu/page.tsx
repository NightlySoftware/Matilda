"use client";

import Link from "next/link";
import { useState } from "react";
import {
  ArrowLeft01Icon,
  CookieIcon,
  Coffee02Icon,
  FavouriteIcon,
  StarIcon,
  ChefHatIcon,
  Restaurant01Icon,
  IceCream01Icon,
  ArrowDown01Icon,
  ArrowUp01Icon,
  Download01Icon,
  Note01Icon,
} from "hugeicons-react";
import MenuItem from "../../components/menu-item";
import MenuTableOfContents from "../../components/menu-table-of-contents";

const menuData = {
  business: "Matilda Repostería Artesanal",
  currency: "MXN",
  menu: {
    tarta_vasca_completa: {
      notes: "22 cm · 8-10 porciones · ~1,200 g",
      items: [
        { name: "Tarta Vasca Clásica", price: 510 },
        { name: "Tarta Vasca Chocolate Semiamargo", price: 595 },
        { name: "Tarta Vasca Nutella & Kinder", price: 595 },
        { name: "Tarta Vasca Frutos Rojos", price: 610 },
        { name: "Tarta Vasca Lotus Biscoff", price: 630 },
        { name: "Tarta Vasca Cookies & Cream", price: 630 },
        { name: "Tarta Vasca Pistella", price: 660 },
      ],
      subsections: {
        de_temporada: {
          title: "Tartas de Temporada",
          items: [
            { name: "Tarta Vasca Donut Krispy Kreme", price: 630 },
            { name: "Tarta Vasca Dubai", price: 660 },
          ],
        },
      },
    },
    porciones_tarta_vasca: {
      items: [
        { name: "Rebanada Tarta Vasca Clásica", price: 90 },
        { name: "Rebanada Tarta Vasca Nutella & Kinder", price: 110 },
        { name: "Rebanada Tarta Vasca Chocolate Semiamargo", price: 110 },
        { name: "Rebanada Tarta Vasca Frutos Rojos", price: 110 },
        { name: "Rebanada Tarta Vasca Lotus Biscoff", price: 110 },
        { name: "Rebanada Tarta Vasca Matcha & Chocolate blanco", price: 110 },
        { name: "Rebanada Tarta Vasca Cookies & Cream Oreo", price: 120 },
        {
          name: "Rebanada Tarta Vasca Pistella",
          price: 120,
        },
      ],
      subsections: {
        especiales_mes: {
          title: "Especiales del Mes",
          items: [
            {
              name: "Rebanada Tarta Vasca Dona Krispy Kreme",
              price: 110,
            },
            {
              name: "Rebanada Tarta Vasca Dubai",
              price: 125,
            },
            {
              name: "Rebanada Tarta Vasca Matilda",
              price: 125,
            },
          ],
        },
      },
    },
    productos_de_temporada: {
      subsections: {
        roles_temporales: {
          title: "Roles de Temporada",
          items: [
            {
              name: "Rol Brioche Dubai",
              price: 105,
              notes: "Con crema de pistacho, chocolate y kataifi crujiente.",
            },
            {
              name: "Rol Brioche Tortuga",
              price: 95,
              notes: "Con caramelo, chocolate y nueces estilo 'Turtles'.",
            },
          ],
        },
      },
    },
    cookies_estilo_new_york: {
      notes:
        "Galletas estilo New York, 140 g, suaves por dentro y crujientes por fuera.",
      subsections: {
        galletas_clasicas: {
          title: "Galletas Clásicas",
          items: [
            {
              name: "Galletas estilo New York (sabores varios)",
              price_range: { min: 68, max: 75 },
            },
          ],
        },
      },
    },
    roles_brioche: {
      subsections: {
        roles_clasicos: {
          title: "Roles Clásicos",
          items: [
            { name: "Rol Brioche de Queso Crema & Lotus Biscoff", price: 95 },
            { name: "Rol Brioche de Queso Crema & Frutos rojos", price: 95 },
            { name: "Rol Brioche de Queso Crema & Nutella", price: 95 },
            { name: "Rol Brioche de Nutella Ferrero", price: 95 },
            { name: "Rol Brioche de Nutella & Pistella", price: 105 },
            { name: "Rol Brioche de Queso Crema & Pistella", price: 105 },
          ],
        },
      },
    },
    bebidas: {
      subsections: {
        cafe: {
          title: "Café",
          items: [
            {
              name: "Espresso doble",
              temperature: "caliente",
              size_ml: 30,
              price: 40,
            },
            {
              name: "Americano",
              temperature: "caliente",
              size_ml: 300,
              price: 50,
            },
            {
              name: "Flat White",
              temperature: "caliente",
              size_ml: 160,
              price: 55,
            },
            {
              name: "Cappuccino",
              temperature: "caliente",
              size_ml: 300,
              price: 68,
            },
            { name: "Latte", temperature: "caliente", size_ml: 355, price: 68 },
            { name: "Latte", temperature: "frío", size_ml: 470, price: 72 },
            {
              name: "Caramel Latte",
              temperature: "caliente",
              size_ml: 355,
              price: 75,
            },
            {
              name: "Caramel Latte",
              temperature: "frío",
              size_ml: 470,
              price: 79,
            },
            {
              name: "Shaken Espresso",
              temperature: "frío",
              size_ml: 295,
              price: 68,
            },
          ],
        },
        lattes_sabor: {
          title: "Lattes con Sabor",
          notes: "355 ml caliente · 470 ml frío · 470 ml frappe",
          items: [
            { name: "Mocha", temperature: "caliente", size_ml: 355, price: 70 },
            { name: "Mocha", temperature: "frío", size_ml: 470, price: 78 },
            {
              name: "Mocha Frappe",
              preparation: "frappe",
              size_ml: 470,
              price: 88,
            },
            { name: "Taro", temperature: "caliente", size_ml: 355, price: 70 },
            { name: "Taro", temperature: "frío", size_ml: 470, price: 78 },
            {
              name: "Taro Frappe",
              preparation: "frappe",
              size_ml: 470,
              price: 88,
            },
            { name: "Chai", temperature: "caliente", size_ml: 355, price: 70 },
            { name: "Chai", temperature: "frío", size_ml: 470, price: 78 },
            {
              name: "Chai Frappe",
              preparation: "frappe",
              size_ml: 470,
              price: 88,
            },
            {
              name: "Dirty Chai",
              temperature: "caliente",
              size_ml: 355,
              price: 78,
            },
            {
              name: "Dirty Chai",
              temperature: "frío",
              size_ml: 470,
              price: 89,
            },
          ],
        },
        leche_fria: {
          title: "Leche Fría",
          notes: "Leche fría",
          items: [
            { name: "Leche fría mediano", size_ml: 355, price: 32 },
            { name: "Leche fría grande", size_ml: 470, price: 39 },
          ],
        },
        tisanes: {
          title: "Tisanes",
          items: [
            {
              name: "Tisana",
              temperature: "caliente",
              size_ml: 355,
              price: 69,
              notes: "Pregunta por los sabores disponibles",
            },
            { name: "Tisana", temperature: "fría", size_ml: 470, price: 86 },
            {
              name: "Tisana Refresh",
              temperature: "fría",
              size_ml: 470,
              price: 98,
              notes: "Tisana de tu elección + limón Eureka + agua mineral",
            },
          ],
        },
        matcha: {
          title: "Matcha Lovers",
          items: [
            {
              name: "Matcha Latte Caliente",
              temperature: "caliente",
              price: 75,
            },
            { name: "Matcha Latte Frío", temperature: "frío", price: 79 },
            { name: "Matcha Berries Latte", temperature: "frío", price: 90 },
            { name: "Matcha Yuzu Latte", temperature: "frío", price: 96 },
            { name: "Matcha Frappe", preparation: "frappe", price: 88 },
            { name: "Matcha Lotus Biscoff", price: 98 },
            { name: "Matcha Island Vanilla", price: 96 },
          ],
        },
        frappes_helado: {
          title: "Frappe con Helado",
          notes: "Frappe con helado de vainilla, 470 ml",
          items: [
            { name: "Frappe de Nutella con Helado", price: 110 },
            { name: "Frappe de Caramel Lotus Biscoff con Helado", price: 110 },
          ],
        },
        bebidas_temporada: {
          title: "Bebidas de Temporada",
          items: [
            { name: "Matcha Yuzu", price: 96 },
            { name: "Brown Sugar Shaken Espresso", price: 68 },
            { name: "Chai + Foam Banana", price: 96 },
            { name: "Tisana Refresh", price: 98 },
          ],
        },
      },
    },
  },
};

// Category Icon Component
function CategoryIcon({ categoryKey }: { categoryKey: string }) {
  const iconProps = { className: "w-5 h-5 text-white" };

  switch (categoryKey) {
    case "tarta_vasca_completa":
      return <ChefHatIcon {...iconProps} />;
    case "porciones_tarta_vasca":
      return <ChefHatIcon {...iconProps} />;
    case "productos_de_temporada":
      return <StarIcon {...iconProps} />;
    case "cookies_estilo_new_york":
      return <CookieIcon {...iconProps} />;
    case "bebidas":
      return <Coffee02Icon {...iconProps} />;
    case "roles_brioche":
      return <ChefHatIcon {...iconProps} />;
    default:
      return <ChefHatIcon {...iconProps} />;
  }
}

export default function MenuPage() {
  const [expandedCategories, setExpandedCategories] = useState<Set<string>>(
    new Set()
  );

  const getCategoryTitle = (key: string) => {
    const titles: Record<string, string> = {
      tarta_vasca_completa: "Tarta Vasca Completa",
      porciones_tarta_vasca: "Porciones de Tarta Vasca",
      productos_de_temporada: "Productos de Temporada",
      cookies_estilo_new_york: "Cookies Estilo New York",
      roles_brioche: "Roles Brioche",
      bebidas: "Bebidas",
    };
    return titles[key] || key;
  };

  const toggleCategory = (categoryKey: string) => {
    setExpandedCategories((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(categoryKey)) {
        newSet.delete(categoryKey);
      } else {
        newSet.add(categoryKey);
      }
      return newSet;
    });
  };

  return (
    <div className="min-h-screen bg-white grainy-background">
      <MenuTableOfContents />
      {/* Header */}
      <div className="bg-[#223DFC] grainy-background text-white py-12 pt-40 md:pt-32">
        <div className="container mx-auto px-4">
          {/* Back arrow button */}
          <div className="mb-6">
            <Link
              href="/"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg transition-all duration-200 hover:shadow-sm border border-white/20"
            >
              <ArrowLeft01Icon className="w-4 h-4" />
              <span>Volver</span>
            </Link>
          </div>

          <h1
            className="text-4xl md:text-6xl font-normal mb-4"
            style={{ fontFamily: "var(--font-sarina)" }}
          >
            Nuestro Menú Completo
          </h1>
          <p className="text-xl opacity-90 max-w-2xl">
            Descubre todas nuestras delicias artesanales, desde tartas
            tradicionales hasta bebidas innovadoras
          </p>
        </div>
      </div>

      {/* Category Index Section */}
      <section className="py-8 md:py-12 bg-white">
        <div className="container mx-auto px-4">
          {/* <div className="text-center mb-8">
            <h2
              className="text-3xl md:text-4xl font-normal text-gray-900 mb-3"
              style={{ fontFamily: "var(--font-sarina)" }}
            >
              Nuestro Catálogo Completo
            </h2>
            <p className="text-base text-gray-600 max-w-2xl mx-auto mb-6">
              Explora nuestras categorías artesanales
            </p>
          </div> */}

          {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
            {Object.entries(menuData.menu).map(
              ([categoryKey, category], index) => (
                <div key={categoryKey} className="space-y-1">
                  <button
                    onClick={() => toggleCategory(categoryKey)}
                    className="group flex items-center justify-between w-full px-3 py-2 bg-white rounded-lg border border-gray-200 hover:border-[#223DFC] hover:bg-[#223DFC]/5 transition-all duration-200"
                  >
                    <div className="flex items-center gap-2">
                      <div className="size-8 bg-[#223DFC] rounded-lg flex items-center justify-center group-hover:bg-[#0121D6] transition-colors duration-200">
                        <CategoryIcon categoryKey={categoryKey} />
                      </div>
                      <span className="text-sm font-medium text-gray-700 group-hover:text-[#223DFC] transition-colors duration-200">
                        {getCategoryTitle(categoryKey)}
                      </span>
                    </div>
                    <div className="text-[#223DFC] group-hover:text-[#0121D6] transition-colors duration-200">
                      {expandedCategories.has(categoryKey) ? (
                        <ArrowUp01Icon className="w-4 h-4" />
                      ) : (
                        <ArrowDown01Icon className="w-4 h-4" />
                      )}
                    </div>
                  </button>

                  <div
                    className={`ml-6 space-y-1 overflow-hidden transition-all duration-300 ease-in-out ${
                      expandedCategories.has(categoryKey)
                        ? "max-h-96 opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    {Object.entries((category as any).subsections || {}).map(
                      ([subsectionKey, subsection]: [string, any]) => (
                        <a
                          key={subsectionKey}
                          href={`#${categoryKey}-${subsectionKey}`}
                          className="group flex items-center justify-between w-full px-3 py-2 bg-gray-50 rounded-md border border-gray-100 hover:border-[#223DFC] hover:bg-[#223DFC]/5 transition-all duration-200"
                        >
                          <span className="text-xs md:text-sm font-medium text-gray-600 group-hover:text-[#223DFC] transition-colors duration-200">
                            {subsection.title}
                          </span>
                          <svg
                            className="w-3 h-3 text-gray-400 group-hover:text-[#223DFC] transition-colors duration-200"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                        </a>
                      )
                    )}
                  </div>
                </div>
              )
            )}
          </div> */}

          {/* PDF Download Button */}
          <div className="mt-6 w-full flex justify-center">
            <a
              href="/menu.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#FFD200] hover:bg-[#E6BD00] text-[#00054B] px-6 py-3 rounded-md font-semibold text-base transition-all duration-300 hover:shadow-lg flex items-center justify-center gap-2 border border-[#00054B] shrink-0 whitespace-nowrap group"
            >
              <Note01Icon className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
              <span className="font-medium">Ver y Descargar Menú PDF</span>
              <Download01Icon className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-200" />
            </a>
          </div>
        </div>
      </section>

      {/* Menu Content */}
      <div className="container mx-auto px-4 py-16">
        {Object.entries(menuData.menu).map(
          ([categoryKey, category], categoryIndex) => (
            <div
              key={categoryKey}
              id={categoryKey}
              className="mb-16 scroll-mt-40"
            >
              {/* Main Category Section with Integrated Subsections */}
              <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-100 shadow-sm mb-8">
                <div className="mb-6">
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                    {getCategoryTitle(categoryKey)}
                  </h2>
                  {(category as any).notes && (
                    <p className="text-gray-600 italic">
                      {(category as any).notes}
                    </p>
                  )}
                </div>

                {/* Main category items */}
                {(category as any).items &&
                  (category as any).items.length > 0 && (
                    <div className="mb-8">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                        {(category as any).items.map(
                          (item: any, itemIndex: number) => (
                            <MenuItem
                              key={itemIndex}
                              item={item}
                              categoryKey={categoryKey}
                              isCompact={true}
                              showWhatsApp={true}
                            />
                          )
                        )}
                      </div>
                    </div>
                  )}

                {/* Integrated Subsections */}
                {(category as any).subsections && (
                  <div className="space-y-8">
                    {Object.entries((category as any).subsections).map(
                      (
                        [subsectionKey, subsection]: [string, any],
                        subsectionIndex: number
                      ) => (
                        <div
                          key={subsectionKey}
                          id={`${categoryKey}-${subsectionKey}`}
                          className="scroll-mt-40"
                        >
                          <div className="border-t border-gray-200 pt-6">
                            <div className="mb-4">
                              <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-2 border-l-4 border-[#223DFC] pl-3">
                                {subsection.title}
                              </h3>
                              {subsection.notes && (
                                <p className="text-gray-600 italic text-sm ml-3">
                                  {subsection.notes}
                                </p>
                              )}
                            </div>

                            <div
                              className={`grid gap-3 md:gap-4 ${subsectionKey === "galletas_clasicas"
                                ? "grid-cols-1"
                                : "grid-cols-1 md:grid-cols-2"
                                }`}
                            >
                              {subsection.items.map(
                                (item: any, itemIndex: number) => (
                                  <MenuItem
                                    key={itemIndex}
                                    item={item}
                                    categoryKey={`${categoryKey}-${subsectionKey}`}
                                    isCompact={true}
                                    showWhatsApp={true}
                                  />
                                )
                              )}
                            </div>
                          </div>
                        </div>
                      )
                    )}
                  </div>
                )}
              </div>
            </div>
          )
        )}

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-linear-to-r from-[#223DFC] to-[#0121D6] rounded-2xl md:rounded-3xl p-6 md:p-8 text-white grainy-background">
            <h3 className="text-lg md:text-xl lg:text-2xl font-bold mb-2 md:mb-3">
              ¿Listo para ordenar?
            </h3>
            <p className="text-sm md:text-base mb-4 md:mb-6 opacity-90 max-w-2xl mx-auto">
              Contáctanos por WhatsApp para hacer tu pedido o resolver cualquier
              duda sobre nuestro menú
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
              <Link
                href={`https://wa.me/524621957429?text=${encodeURIComponent(
                  "Hola, vi su sitio web de Matilda y me gustaría hacer un pedido. ¿Me pueden ayudar?"
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#FFD200] hover:bg-[#E6BD00] text-[#00054B] px-4 md:px-6 py-2.5 md:py-3 rounded-md md:rounded-lg transition-all duration-300 font-bold text-sm md:text-base flex items-center justify-center gap-1.5 md:gap-2 border-2 border-[#00054B] w-full sm:w-auto"
              >
                <svg
                  className="w-3.5 h-3.5 md:w-4 md:h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                </svg>
                <span>Hacer Pedido por WhatsApp</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
