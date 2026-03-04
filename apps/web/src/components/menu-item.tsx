import Link from "next/link";
import Image from "next/image";
import { StarIcon } from "hugeicons-react";

interface MenuItemProps {
  item: any;
  categoryKey?: string;
  isCompact?: boolean;
  showWhatsApp?: boolean;
}

const getProductImage = (categoryKey?: string, itemName?: string): string => {
  // Cake-related categories
  if (categoryKey?.includes("tarta_vasca")) {
    return "/images/cake.jpg";
  }

  // Cookies
  if (
    categoryKey?.includes("cookies") ||
    itemName?.toLowerCase().includes("cookie")
  ) {
    return "/images/cookies.jpg";
  }

  // Rolls/brioche
  if (
    categoryKey?.includes("brioche") ||
    categoryKey?.includes("rolls") ||
    itemName?.toLowerCase().includes("roll")
  ) {
    return "/images/rolls.jpg";
  }

  // Default to tiramisu for drinks and other items
  return "/images/tiramisu.jpg";
};

const getSpanishArticle = (productName: string): string => {
  const name = productName.toLowerCase();

  // Common feminine food items
  const feminineWords = [
    "tarta",
    "pizza",
    "pasta",
    "ensalada",
    "sopa",
    "bebida",
    "cerveza",
    "vino",
    "manzana",
    "pera",
    "naranja",
    "uva",
    "fresa",
    "fruta",
    "leche",
    "agua",
    "tisana",
    "infusión",
    "limonada",
    "naranja",
    "uva",
  ];

  // Check if it starts with a vowel but is actually masculine
  const masculineExceptions = [
    "espresso",
    "americano",
    "flat white",
    "cappuccino",
    "latte",
    "mocha",
    "taro",
    "chai",
    "dirty chai",
    "matcha",
    "caramel",
    "shaken espresso",
    "caramel latte",
    "matcha latte",
    "matcha yuzu",
    "brown sugar",
    "foam banana",
  ];

  // If it's in the masculine exceptions list, use "el"
  if (masculineExceptions.some((word) => name.includes(word))) {
    return "el";
  }

  // If it contains feminine words, use "la"
  if (feminineWords.some((word) => name.includes(word))) {
    return "la";
  }

  // Default to "el" for most food items
  return "el";
};

export default function MenuItem({
  item,
  categoryKey,
  isCompact = false,
  showWhatsApp = true,
}: MenuItemProps) {
  const formatPrice = (price: number) => `$${price.toLocaleString()}`;

  const getWhatsAppMessage = (productName: string) => {
    let fullProductName = productName;
    let context = "";
    let sizeInfo = "";
    let temperatureInfo = "";
    let specialInfo = "";

    // Add category context to make the product name more specific
    if (categoryKey?.includes("tarta_vasca_completa")) {
      if (productName.includes("Rebanada Tarta Vasca")) {
        fullProductName = productName; // Already has the full name
      } else {
        fullProductName = `Tarta Vasca ${productName}`;
      }
      context = "completa (22cm · 8-10 porciones)";
      sizeInfo = " · ~1,200g";
    } else if (categoryKey?.includes("porciones_tarta_vasca")) {
      fullProductName = productName; // Already includes "Rebanada Tarta Vasca"
      context = "individual";
    } else if (categoryKey?.includes("cookies")) {
      fullProductName = productName; // Already includes "Galleta" if needed
      context = "estilo New York · 140g";
    } else if (
      categoryKey?.includes("roles_brioche") ||
      categoryKey?.includes("productos_de_temporada")
    ) {
      fullProductName = productName; // Already includes "Rol Brioche"
      context = "artesanal";
    } else if (categoryKey?.includes("cafe")) {
      fullProductName = productName;
      context = "de especialidad";
    } else if (categoryKey?.includes("lattes_sabor")) {
      fullProductName = productName;
      context = "con leche";
    } else if (categoryKey?.includes("tisanes")) {
      fullProductName = productName;
      context = "artesanal";
    } else if (categoryKey?.includes("matcha")) {
      fullProductName = productName;
      context = "premium";
    } else if (categoryKey?.includes("frappes")) {
      fullProductName = productName; // Already includes full description
      context = "con helado de vainilla";
    }

    // Add temperature info
    if (item.temperature) {
      temperatureInfo = ` · ${item.temperature}`;
    }

    // Add size info
    if (item.size_ml) {
      sizeInfo = ` · ${item.size_ml}ml`;
    }

    // Add special information
    if (item.seasonal) {
      specialInfo = " (Producto de temporada)";
    } else if (item.special_of_month) {
      specialInfo = " (Especial del mes)";
    }

    const article = getSpanishArticle(fullProductName);

    const detailedMessage = `Hola! Vi ${article} ${fullProductName}${context ? ` ${context}` : ""
      }${temperatureInfo}${sizeInfo}${specialInfo} en su sitio web de Matilda y me encantaría ordenarlo. ¿Me pueden ayudar con el pedido? ¡Muchas gracias!`;

    return encodeURIComponent(detailedMessage);
  };

  const displayName = item.short_name || item.name;
  const fullName =
    item.short_name && item.name !== item.short_name ? item.name : displayName;

  const productImage = getProductImage(categoryKey, item.name);

  return (
    <div
      className={`bg-white rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 ${isCompact ? "p-3" : "p-4"
        }`}
    >
      <div className="flex gap-3">
        {/* Product Image */}
        <div className={`shrink-0 ${isCompact ? "w-20 h-20" : "w-24 h-24"}`}>
          <Image
            src={productImage}
            alt={item.name}
            width={isCompact ? 80 : 96}
            height={isCompact ? 80 : 96}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Product Content */}
        <div className="flex-1 min-w-0 flex flex-col">
          <div className="flex-1">
            {/* Header with name and badges */}
            <div className="flex flex-wrap items-center gap-2 mb-1">
              <h3
                className={`font-semibold text-gray-900 leading-tight ${isCompact ? "text-sm" : "text-base"
                  }`}
              >
                {displayName}
              </h3>
              {item.seasonal && (
                <span className="bg-orange-100 text-orange-800 text-xs px-2 py-0.5 rounded-full font-medium whitespace-nowrap">
                  Estacional
                </span>
              )}
              {item.special_of_month && (
                <span className="bg-purple-100 text-purple-800 text-xs px-2 py-0.5 rounded-full font-medium flex items-center gap-1 whitespace-nowrap">
                  <StarIcon className="w-3 h-3" />
                  Especial
                </span>
              )}
            </div>

            {/* Full name if different */}
            {fullName !== displayName && (
              <p className="text-gray-600 text-xs mb-1">{fullName}</p>
            )}

            {/* Product details */}
            <div className="space-y-0.5 mb-2">
              {item.temperature && (
                <p className="text-gray-500 text-xs capitalize">
                  {item.temperature}
                  {item.size_ml && ` · ${item.size_ml}ml`}
                </p>
              )}

              {item.preparation && (
                <p className="text-gray-500 text-xs capitalize">
                  {item.preparation}
                  {item.size_ml && ` · ${item.size_ml}ml`}
                </p>
              )}

              {item.size_ml && !item.temperature && !item.preparation && (
                <p className="text-gray-500 text-xs">{item.size_ml}ml</p>
              )}

              {item.notes && (
                <p className="text-gray-500 text-xs italic">{item.notes}</p>
              )}
            </div>
          </div>

          {/* Price and WhatsApp button row */}
          <div className="flex justify-between items-center mt-auto">
            {/* WhatsApp button */}
            {showWhatsApp && (
              <Link
                href={`https://wa.me/524621957429?text=${getWhatsAppMessage(
                  displayName
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 bg-[#25D366] hover:bg-[#22C55E] text-white px-2 py-1.5 rounded text-xs font-medium transition-all duration-200 hover:shadow-sm"
              >
                <svg
                  className="w-3 h-3"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                </svg>
                <span>Pedir por WhatsApp</span>
              </Link>
            )}

            {/* Price */}
            <div className="text-right shrink-0">
              {item.price_range ? (
                <span
                  className={`font-bold text-[#223DFC] ${isCompact ? "text-base" : "text-lg"
                    }`}
                >
                  ${item.price_range.min} - ${item.price_range.max}
                </span>
              ) : item.extra_price ? (
                <span
                  className={`font-bold text-[#223DFC] ${isCompact ? "text-base" : "text-lg"
                    }`}
                >
                  +${item.extra_price}
                </span>
              ) : (
                <span
                  className={`font-bold text-[#223DFC] ${isCompact ? "text-base" : "text-lg"
                    }`}
                >
                  {formatPrice(item.price)}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
