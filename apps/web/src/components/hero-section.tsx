"use client";
import Link from "next/link";
import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
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
      <div className="container mx-8 text-center relative z-10 py-12">
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
          <div className="flex-1 w-full md:w-auto relative">
            {/* Left mascot — bottom-left corner of the carousel */}
            <div className="absolute bottom-14 -left-6 z-20 animate-float-slow pointer-events-none">
              <Image
                src="/mascots/bread.png"
                alt="Bread mascot"
                width={200}
                height={200}
                className="w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 lg:w-44 lg:h-44 object-contain drop-shadow-lg"
              />
            </div>
            {/* Right mascot — bottom-right corner of the carousel */}
            <div className="absolute bottom-14 -right-6 z-20 animate-float-slow-delayed pointer-events-none">
              <Image
                src="/mascots/roll.png"
                alt="Roll mascot"
                width={200}
                height={200}
                className="w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 lg:w-44 lg:h-44 object-contain drop-shadow-lg"
              />
            </div>
            <HeroCarousel />
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
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
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [progressKey, setProgressKey] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const INTERVAL_MS = 3000;

  const images = [
    { src: "/images/cake.jpg", alt: "Delicious Cake" },
    { src: "/images/cookies.jpg", alt: "Fresh Cookies" },
    { src: "/images/rolls.jpg", alt: "Artisan Rolls" },
    { src: "/images/tiramisu.jpg", alt: "Creamy Tiramisu" },
  ];

  // Start/restart the auto-scroll interval
  const startInterval = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      api?.scrollNext();
    }, INTERVAL_MS);
  }, [api]);

  // Stop the auto-scroll interval
  const stopInterval = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, []);

  // Reset progress bar animation by changing the key
  const resetProgress = useCallback(() => {
    setProgressKey((k) => k + 1);
  }, []);

  // Setup the carousel listener and auto-scroll
  useEffect(() => {
    if (!api) return;

    const onSelect = () => {
      setCurrent(api.selectedScrollSnap());
    };

    api.on("select", onSelect);

    if (!isPaused) {
      startInterval();
    }

    return () => {
      stopInterval();
      api.off("select", onSelect);
    };
  }, [api, isPaused, startInterval, stopInterval]);

  // Manual navigation — resets timer + progress bar
  const handlePrev = useCallback(() => {
    api?.scrollPrev();
    resetProgress();
    if (!isPaused) startInterval();
  }, [api, isPaused, resetProgress, startInterval]);

  const handleNext = useCallback(() => {
    api?.scrollNext();
    resetProgress();
    if (!isPaused) startInterval();
  }, [api, isPaused, resetProgress, startInterval]);

  const togglePause = useCallback(() => {
    setIsPaused((prev) => {
      const next = !prev;
      if (next) {
        stopInterval();
      } else {
        resetProgress();
        startInterval();
      }
      return next;
    });
  }, [stopInterval, resetProgress, startInterval]);

  return (
    <div className="relative w-full flex flex-col gap-4">
      <Carousel
        setApi={setApi}
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full shadow-2xl rounded-xl"
      >
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem key={index} className="basis-full">
              <div className="relative w-full aspect-[4/3] md:aspect-square rounded-xl overflow-hidden shadow-inner">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 hover:scale-110"
                  priority={index === 0}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      {/* Controls Container outside the carousel */}
      <div className="flex items-center justify-between w-full mt-2">
        {/* Loading Progress Bar */}
        <div className="flex-1 mr-4 h-2 bg-white/20 rounded-full overflow-hidden relative">
          {!isPaused && (
            <div
              key={`${current}-${progressKey}`}
              className="absolute top-0 left-0 h-full w-full bg-[#FFD200] animate-carousel-progress rounded-full"
            />
          )}
          {isPaused && (
            <div
              className="absolute top-0 left-0 h-full bg-[#FFD200]/50 rounded-full"
              style={{ width: "100%" }}
            />
          )}
        </div>

        {/* Navigation buttons */}
        <div className="flex gap-2 shrink-0">
          {/* Pause / Play */}
          <button
            onClick={togglePause}
            className="w-10 h-10 flex items-center justify-center bg-white/20 hover:bg-white/30 text-white border-2 border-white/40 rounded-full shadow-lg transition-all hover:scale-105"
            aria-label={isPaused ? "Play slideshow" : "Pause slideshow"}
          >
            {isPaused ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M8 5v14l11-7z" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <rect x="6" y="4" width="4" height="16" rx="1" />
                <rect x="14" y="4" width="4" height="16" rx="1" />
              </svg>
            )}
          </button>

          {/* Previous */}
          <button
            onClick={handlePrev}
            className="w-10 h-10 flex items-center justify-center bg-[#FFD200] hover:bg-[#E6BD00] text-[#00054B] border-2 border-[#00054B] rounded-full shadow-lg transition-transform hover:scale-105"
            aria-label="Previous image"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m15 18-6-6 6-6" />
            </svg>
          </button>

          {/* Next */}
          <button
            onClick={handleNext}
            className="w-10 h-10 flex items-center justify-center bg-[#FFD200] hover:bg-[#E6BD00] text-[#00054B] border-2 border-[#00054B] rounded-full shadow-lg transition-transform hover:scale-105"
            aria-label="Next image"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
