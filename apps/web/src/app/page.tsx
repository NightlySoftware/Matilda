"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Message02Icon,
  ChefHatIcon,
  SparklesIcon,
  TruckIcon,
  ArrowRight01Icon,
  PlayIcon,
  StarIcon,
  InstagramIcon,
  Menu01Icon,
  FavouriteIcon,
  CalculatorIcon,
  CreditCardIcon,
  CheckmarkCircle01Icon,
  Time02Icon,
  Facebook01Icon,
} from "hugeicons-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import HeroSection from "@/components/hero-section";
import MenuSection from "@/components/menu-section";
import TableOfContents from "@/components/table-of-contents";

// Digital Design First Section
function DigitalDesignSection() {
  return (
    <section className="py-20 bg-[#FAF9F6] grainy-background overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <h2
              className="text-4xl md:text-5xl font-normal text-gray-900 mb-6"
              style={{ fontFamily: "var(--font-sarina)" }}
            >
              Diseño Digital Proactivo
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              Este proyecto fue concebido con un enfoque <span className="font-semibold text-[#223DFC]">Digital Design First</span> desde sus cimientos.
              No es solo una web; es una experiencia moderna, elegante y humana, diseñada para ser intuitiva y hermosa de navegar.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="mt-1 bg-blue-100 p-2 rounded-full">
                  <FavouriteIcon className="w-5 h-5 text-[#223DFC]" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Atmósfera "Cozy" y Familiar</h3>
                  <p className="text-gray-600">Integración total con la identidad de marca, colores y vibras de Matilda para que te sientas como en casa.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="mt-1 bg-blue-100 p-2 rounded-full">
                  <CheckmarkCircle01Icon className="w-5 h-5 text-[#223DFC]" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Venta Streamlined</h3>
                  <p className="text-gray-600">Navegación fluida por el menú completo con botones de WhatsApp directos para una compra rápida, agradable y sin fricciones.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500">
              <Image
                src="/matilda_blue.png"
                alt="Matilda Design Focus"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-[#FFD200] rounded-full blur-3xl opacity-50 -z-10"></div>
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-[#223DFC] rounded-full blur-3xl opacity-30 -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Why Choose Us Section Component
function WhyChooseUsSection() {
  const advantages = [
    {
      icon: ChefHatIcon,
      title: "Artesanal Premium",
      description:
        "Cada pieza elaborada con pasión y dedicación por manos expertas en repostería tradicional vasca y contemporánea",
    },
    {
      icon: SparklesIcon,
      title: "Sabores Exclusivos",
      description:
        "Creaciones únicas que combinan técnicas tradicionales con innovaciones modernas, incluyendo ediciones limitadas de temporada",
    },
    {
      icon: TruckIcon,
      title: "Servicio Personalizado",
      description:
        "Atención individualizada para cada cliente, desde la selección de sabores hasta la entrega fresca en tu puerta",
    },
    {
      icon: Time02Icon,
      title: "Frescura Diaria",
      description:
        "Productos elaborados diariamente para garantizar la máxima frescura y calidad en cada bocado",
    },
  ];

  const stats = [
    { number: "500+", label: "Clientes felices" },
    { number: "15+", label: "Productos diarios" },
    { number: "5★", label: "Calificación promedio" },
    { number: "100%", label: "Artesanal" },
  ];

  return (
    <section id="porque-matilda" className="py-12 md:py-20 bg-white relative grainy-background">
      {/* Top wave */}
      {/* <div
        className="wave-divider wave-divider--light wave-divider--top"
        aria-hidden="true"
      /> */}
      <div className="container relative mx-auto px-4">
        <div className="text-center mb-8 md:mb-16">
          <h2
            className="text-3xl md:text-5xl font-normal text-gray-900 mb-4 md:mb-6"
            style={{ fontFamily: "var(--font-sarina)" }}
          >
            ¿Por qué Matilda?
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Descubre lo que nos hace únicos en Irapuato y por qué miles de
            personas eligen nuestros productos artesanales
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-8">
          {advantages.map((advantage, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl p-4 md:p-6 text-center border border-gray-100"
            >
              <div className="w-10 h-10 md:w-12 md:h-12 bg-[#223DFC] rounded-lg flex items-center justify-center mx-auto mb-3 md:mb-4">
                <advantage.icon className="w-5 h-5 md:w-6 md:h-6 text-[#FFFFFF]" />
              </div>

              <h3 className="font-semibold text-sm md:text-lg text-gray-900 mb-2 md:mb-3">
                {advantage.title}
              </h3>

              <p className="text-gray-600 text-xs md:text-sm leading-relaxed">
                {advantage.description}
              </p>
            </div>
          ))}
        </div>

        {/* Trust indicators */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl font-bold text-[#223DFC] mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
      {/* Bottom wave */}
      {/* <div className="wave-divider wave-divider--light" aria-hidden="true" /> */}
    </section>
  );
}

// Instagram Posts Section Component
function InstagramPostsSection() {
  const instagramPosts = [
    "https://www.instagram.com/p/DPCoqSUDR4v/",
    "https://www.instagram.com/p/DPc4eOykWjO/",
    "https://www.instagram.com/p/DNhFUJnAYmq/",
    "https://www.instagram.com/p/DNEalL5BqQ0/",
  ];

  return (
    <section id="instagram" className="py-20 bg-white grainy-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2
            className="text-4xl md:text-5xl font-normal text-gray-900 mb-6"
            style={{ fontFamily: "var(--font-sarina)" }}
          >
            Síguenos en Instagram
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Descubre nuestros procesos creativos, nuevos productos y momentos
            especiales a través de nuestros reels y stories
          </p>
          <a
            href="https://www.instagram.com/matilda_reposteriaartesanal/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#223DFC] hover:bg-[#0121D6] text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200"
          >
            <InstagramIcon className="w-6 h-6" />
            <span>@matilda_reposteriaartesanal</span>
          </a>
        </div>

        <div className="max-w-4xl mx-auto">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {instagramPosts.map((postUrl, index) => (
                <CarouselItem
                  key={index}
                  className="pl-2 md:pl-4 basis-full md:basis-1/2"
                >
                  <div className="rounded-2xl overflow-hidden border border-gray-200">
                    <iframe
                      src={`${postUrl}embed`}
                      width="100%"
                      height="600"
                      frameBorder="0"
                      scrolling="no"
                      className="w-full"
                      title={`Instagram post ${index + 1}`}
                    ></iframe>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 bg-[#FFD200] hover:bg-[#E6BD00] text-[#00054B] border-2 border-[#00054B] rounded-md shadow-lg z-10" />
            <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 bg-[#FFD200] hover:bg-[#E6BD00] text-[#00054B] border-2 border-[#00054B] rounded-md shadow-lg z-10" />
          </Carousel>
        </div>
      </div>
    </section>
  );
}

// Testimonials Section Component
function TestimonialsSection() {
  const testimonials = [
    {
      id: 1,
      name: "Lucian Rios",
      rating: 5,
      comment:
        "Todo lo que he probado es delicioso; el lugar está en una plaza nueva de fácil acceso y en excelentes condiciones; el ambiente es agradable y el servicio es rápido y muy amable. 10/10.",
      date: "Reciente",
      verified: true,
    },
    {
      id: 2,
      name: "Carlos Atilano",
      rating: 5,
      comment:
        "El cheesecake vasco es la estrella del menú, con textura perfecta. Las galletas estilo Nueva York no son demasiado dulces y la variedad de postres y bebidas es excelente. Ideal para desayunar.",
      date: "Reciente",
      verified: true,
    },
    {
      id: 3,
      name: "Itzel Maya",
      rating: 5,
      comment:
        "Los postres son súper deliciosos y el lugar es hermoso, ideal para ir en pareja, familia o con amigos. Me encanta la variedad y los productos de temporada; la atención es excelente y hay suficiente estacionamiento.",
      date: "Reciente",
      verified: true,
    },
    {
      id: 4,
      name: "Dr. Luis Urra Lámbarri",
      rating: 5,
      comment:
        "Una joya de lugar: la repostería es de primera. Recomiendo pedir el rollo de canela con Lotus y el latte frío de caramelo. Hay suficiente estacionamiento y no hay espera.",
      date: "Reciente",
      verified: true,
    },
  ];

  return (
    <section id="testimonios" className="py-20 bg-white grainy-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2
            className="text-4xl md:text-5xl font-normal text-gray-900 mb-6"
            style={{ fontFamily: "var(--font-sarina)" }}
          >
            Lo que dicen nuestros clientes
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Las opiniones de quienes ya han disfrutado de nuestros productos
            artesanales
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-12">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-linear-to-br from-gray-50 to-white rounded-2xl p-6 shadow-lg border border-gray-100 flex flex-col h-full"
            >
              {/* Rating */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <StarIcon
                    key={i}
                    className="w-5 h-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
                {testimonial.verified && (
                  <span className="ml-2 text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full font-medium">
                    ✓ Verificado
                  </span>
                )}
              </div>

              {/* Comment */}
              <blockquote className="text-gray-700 mb-4 leading-relaxed italic grow">
                "{testimonial.comment}"
              </blockquote>

              {/* Author - Always at bottom */}
              <div className="flex items-center justify-between mt-auto">
                <div>
                  <div className="font-semibold text-gray-900">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-500">
                    {testimonial.date}
                  </div>
                </div>
                <div className="text-xs text-gray-400">Google Maps</div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center">
          <a
            href="https://maps.google.com/?q=Matilda+Repostería+Artesanal+Irapuato"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#223DFC] hover:bg-[#0121D6] text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200"
          >
            <StarIcon className="w-6 h-6" />
            <span>Ver más reseñas en Google Maps</span>
          </a>
        </div>
      </div>
    </section>
  );
}

// Delivery Section Component
function DeliverySection() {
  const steps = [
    {
      step: "1",
      icon: Message02Icon,
      title: "Cotizar",
      description: "Contacta por WhatsApp para cotizar tu pedido personalizado",
    },
    {
      step: "2",
      icon: Menu01Icon,
      title: "Explorar Menú",
      description: "Revisa nuestro menú completo de opciones artesanales",
    },
    {
      step: "3",
      icon: FavouriteIcon,
      title: "Seleccionar",
      description:
        "Elige tus sabores y cantidades preferidas con atención personalizada",
    },
    {
      step: "4",
      icon: CalculatorIcon,
      title: "Cotización",
      description: "Recibe el total con costos de entrega incluidos",
    },
    {
      step: "5",
      icon: CreditCardIcon,
      title: "Pago Seguro",
      description: "Realiza el pago de forma segura y conveniente",
    },
    {
      step: "6",
      icon: CheckmarkCircle01Icon,
      title: "Confirmación",
      description: "Recibe confirmación inmediata y tiempo estimado de entrega",
    },
    {
      step: "7",
      icon: TruckIcon,
      title: "Disfruta",
      description:
        "Recibe tu pedido fresco y artesanal en la puerta de tu casa",
    },
  ];

  return (
    <section id="ordena" className="py-20 bg-white grainy-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2
            className="text-4xl md:text-5xl font-normal text-gray-900 mb-6"
            style={{ fontFamily: "var(--font-sarina)" }}
          >
            Pedidos a Domicilio
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Proceso simple y personalizado para recibir nuestros productos
            artesanales frescos en la comodidad de tu hogar
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8 mb-12">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-2xl p-6 md:p-8 text-center border border-gray-100 hover:shadow-lg transition-all duration-300 group"
            >
              <div className="w-12 h-12 md:w-16 md:h-16 bg-[#223DFC] rounded-xl flex items-center justify-center mx-auto mb-4 md:mb-6 group-hover:bg-[#0121D6] transition-colors duration-300">
                <step.icon className="w-6 h-6 md:w-8 md:h-8 text-[#FFFFFF]" />
              </div>

              <h3 className="font-semibold text-lg md:text-xl text-gray-900 mb-3 md:mb-4">
                {step.title}
              </h3>

              <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center w-full flex justify-center">
          <Link
            href={`https://wa.me/524621957429?text=${encodeURIComponent(
              "Hola, vi su sitio web de Matilda y me gustaría hacer un pedido. ¿Me pueden ayudar?"
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-fit bg-[#FFD200] hover:bg-[#E6BD00] text-[#00054B] px-6 py-3 rounded-md font-semibold text-base transition-all duration-300 hover:shadow-lg flex items-center justify-center gap-2 border border-[#00054B] shrink-0 whitespace-nowrap"
          >
            <svg
              className="w-6 h-6"
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
            </svg>
            <span>Ordenar por WhatsApp</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f2f1ed]">
      <TableOfContents />
      <HeroSection />
      {/* <DigitalDesignSection /> */}
      <MenuSection />
      <WhyChooseUsSection />
      <InstagramPostsSection />
      <TestimonialsSection />
      <DeliverySection />
    </div>
  );
}
