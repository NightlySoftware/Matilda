"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function NotFoundPage() {
  return (
    <div className="relative min-h-screen bg-[#F7E6D5] grainy-background">
      <div className="flex min-h-screen w-full flex-col items-center justify-center p-4 text-center">
        <div className="mb-8">
          <Image
            src="/matilda_blue.png"
            alt="Matilda Repostería Artesanal"
            width={200}
            height={80}
            className="h-20 w-auto mx-auto"
          />
        </div>

        <div className="relative">
          <h1 className="text-[#00054B] text-8xl font-extrabold tracking-tighter mb-4 mr-8">
            404
          </h1>
          <div className="absolute -top-8 -right-20 md:-right-28">
            <Image
              src="/mascots/bread.png"
              alt="Mascota de Matilda"
              width={120}
              height={120}
              className="w-24 h-24 md:w-32 md:h-32"
            />
          </div>
        </div>

        <p className="text-[#00054B] mt-4 text-2xl font-bold">
          ¡Oops! Página no encontrada
        </p>

        <p className="text-[#00054B] mt-4 text-lg max-w-md">
          La página que buscas no existe o ha sido movida. ¡No te preocupes, te
          ayudamos a volver al camino correcto!
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-4">
          <Button
            asChild
            className="bg-[#FFD200] hover:bg-[#E6BD00] text-[#00054B] px-6 py-3 rounded-md font-semibold text-base transition-all duration-300 hover:shadow-lg border border-[#00054B] shrink-0 whitespace-nowrap"
          >
            <Link href="/">Volver al Inicio</Link>
          </Button>

          <Button
            asChild
            variant="ghost"
            className="border-[#00054B] hover:bg-transparent text-[#00054B] px-6 py-3 rounded-md font-semibold text-base transition-all duration-300"
          >
            <Link href="/menu">Ver Nuestro Menú</Link>
          </Button>
        </div>

        <div className="mt-12 text-[#00054B] text-sm">
          <p>¿Necesitas ayuda? ¡Contáctanos por WhatsApp!</p>
        </div>
      </div>
    </div>
  );
}
