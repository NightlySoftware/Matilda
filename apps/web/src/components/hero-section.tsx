"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";

export default function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center bg-[#223DFC] overflow-hidden grainy-background"
    >
      {/* Wave effect at the bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          className="w-full h-auto"
          preserveAspectRatio="none"
        >
          <path
            fill="#0121D6"
            d="M0,32L48,37.3C96,43,192,53,288,58.7C384,64,480,64,576,58.7C672,53,768,43,864,48C960,53,1056,75,1152,80C1248,85,1344,75,1392,69.3L1440,64L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
          />
        </svg>
      </div>
      {/* Content Section */}
      <div className="container mx-10 text-center relative z-10 py-12">
        <div className="mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-12">
          {/* Text Content - Left side on desktop */}
          <div className="flex-1 text-center md:text-left">
            {/* Main Tagline */}
            <div className="mb-8 mt-32 md:mt-0">
              <h2
                className="text-3xl md:text-5xl lg:text-6xl text-white leading-tight font-normal"
                style={{ fontFamily: "var(--font-sarina)" }}
              >
                Nos apasiona
                <br />
                lo bueno!
              </h2>
            </div>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-white mb-12 max-w-2xl mx-auto md:mx-0 leading-relaxed">
              Repostería artesanal en Irapuato especializada en Tarta Vasca,
              cookies y bebidas únicas
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start items-stretch sm:items-center w-full sm:w-auto">
              <Link
                href={`https://wa.me/524621957429?text=${encodeURIComponent(
                  "Hola, vi su sitio web de Matilda y me gustaría hacer un pedido. ¿Me pueden ayudar?"
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#FFD200] hover:bg-[#E6BD00] text-[#00054B] px-6 py-3 rounded-md font-semibold text-base transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center gap-2 border border-[#00054B] shrink-0 whitespace-nowrap"
              >
                <svg
                  className="w-4 h-4 shrink-0"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                </svg>
                <span className="shrink-0">Ordenar por WhatsApp</span>
              </Link>
              <Link
                href="#menu"
                className="bg-transparent hover:bg-[#FFD200]/10 text-white border-2 border-white hover:border-[#FFD200] px-6 py-3 rounded-md font-medium text-base transition-all duration-300 hover:shadow-md shrink-0 whitespace-nowrap text-center"
              >
                Ver Nuestro Menú
              </Link>
            </div>
          </div>

          {/* Carousel - Right side on desktop, below on mobile */}
          <div className="flex-1 w-full md:w-auto">
            <HeroCarousel />
          </div>
        </div>
      </div>

      {/* Mascots */}
      <div className="absolute bottom-8 left-8 z-10 animate-float-slow">
        <Image
          src="/mascots/bread.png"
          alt="Bread mascot"
          width={200}
          height={200}
          className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 object-contain drop-shadow-lg"
        />
      </div>

      <div className="absolute bottom-8 right-8 z-10 animate-float-slow-delayed">
        <Image
          src="/mascots/roll.png"
          alt="Roll mascot"
          width={200}
          height={200}
          className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 object-contain drop-shadow-lg"
        />
      </div>

      {/* Scroll Indicator */}
      <div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        style={{ animation: "bounce 2s infinite" }}
      >
        <div className="w-6 h-10 border-2 border-[#00054B] rounded-full flex justify-center">
          <div className="w-1 h-3 bg-[#00054B] rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}

// Hero Carousel Component
function HeroCarousel() {
  const [api, setApi] = useState<CarouselApi>();
  const images = [
    { src: "/images/cake.jpg", alt: "Delicious Cake" },
    { src: "/images/cookies.jpg", alt: "Fresh Cookies" },
    { src: "/images/rolls.jpg", alt: "Artisan Rolls" },
    { src: "/images/tiramisu.jpg", alt: "Creamy Tiramisu" },
  ];

  // Auto-scroll functionality
  useEffect(() => {
    if (!api) return;

    const interval = setInterval(() => {
      api.scrollNext();
    }, 3000);

    return () => clearInterval(interval);
  }, [api]);

  return (
    <div className="relative w-full">
      <Carousel
        setApi={setApi}
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem key={index} className="basis-full">
              <div className="relative w-full aspect-square md:aspect-square rounded-xl overflow-hidden">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                  priority={index === 0}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        {/* Navigation arrows relative to carousel container */}
        <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 bg-[#FFD200] hover:bg-[#E6BD00] text-[#00054B] border-2 border-[#00054B] rounded-md shadow-lg z-10" />
        <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 bg-[#FFD200] hover:bg-[#E6BD00] text-[#00054B] border-2 border-[#00054B] rounded-md shadow-lg z-10" />
      </Carousel>
    </div>
  );
}
