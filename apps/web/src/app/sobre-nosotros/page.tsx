import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function SobreNosotrosPage() {
  return (
    <div className="min-h-screen bg-[#f2f1ed]">
      {/* Header */}
      <div className="bg-[#223DFC] grainy-background text-white py-12 pt-40 md:pt-32">
        <div className="container mx-auto px-4">
          {/* Back arrow button */}
          <div className="mb-6">
            <Link
              href="/"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg transition-all duration-200 hover:shadow-sm border border-white/20"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Volver</span>
            </Link>
          </div>

          <h1
            className="text-4xl md:text-6xl font-normal mb-4"
            style={{ fontFamily: "var(--font-sarina)" }}
          >
            Sobre Nosotros
          </h1>
          <p className="text-xl opacity-90 max-w-2xl">
            Conoce más sobre Matilda Repostería Artesanal y nuestra historia
            detrás de esta deliciosa repostería.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-8 md:p-12">
            <div className="text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Nuestra Historia
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Próximamente encontrarás aquí la historia de Matilda Repostería
                Artesanal, nuestros valores, y todo lo que nos hace únicos en
                Irapuato.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
