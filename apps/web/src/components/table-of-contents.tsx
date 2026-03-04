"use client";

import { useState, useEffect, useCallback } from "react";
import { createPortal } from "react-dom";
import { Menu01Icon, Cancel01Icon } from "hugeicons-react";
import { cn } from "@/lib/utils";

const sections = [
    { id: "inicio", label: "Inicio" },
    { id: "menu", label: "Nuestros Favoritos" },
    { id: "porque-matilda", label: "¿Por qué Matilda?" },
    { id: "instagram", label: "Instagram" },
    { id: "testimonios", label: "Testimonios" },
    { id: "ordena", label: "Pedidos a Domicilio" },
];

export default function TableOfContents() {
    const [activeSection, setActiveSection] = useState("inicio");
    const [isOpen, setIsOpen] = useState(false);
    const [mounted, setMounted] = useState(false);
    const [hideFloating, setHideFloating] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        if (!mounted) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { rootMargin: "-20% 0px -80% 0px" }
        );

        sections.forEach(({ id }) => {
            const element = document.getElementById(id);
            if (element) observer.observe(element);
        });

        return () => observer.disconnect();
    }, [mounted]);

    // Hide floating pill when footer is visible
    useEffect(() => {
        if (!mounted) return;

        const footer = document.querySelector("footer");
        if (!footer) return;

        const footerObserver = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    setHideFloating(entry.isIntersecting);
                });
            },
            { threshold: 0.1 }
        );

        footerObserver.observe(footer);
        return () => footerObserver.disconnect();
    }, [mounted]);

    const scrollToSection = useCallback((id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
            setIsOpen(false);
        }
    }, []);

    const activeLabel =
        sections.find((s) => s.id === activeSection)?.label || "Inicio";

    if (!mounted) return null;

    return createPortal(
        <>
            {/* Desktop Sidebar — RIGHT side */}
            <div
                className="fixed top-1/2"
                style={{
                    right: "2rem",
                    zIndex: 999,
                    transform: "translateY(-50%)",
                }}
            >
                <style>{`
          .toc-desktop { display: none !important; }
          @media (min-width: 1024px) {
            .toc-desktop { display: flex !important; }
          }
          .toc-mobile { display: block; }
          @media (min-width: 1024px) {
            .toc-mobile { display: none !important; }
          }
        `}</style>
                <div className="toc-desktop" style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                    {sections.map(({ id, label }) => (
                        <button
                            key={id}
                            onClick={() => scrollToSection(id)}
                            className={cn(
                                "group relative flex items-center text-sm font-medium transition-all duration-300 w-6 h-6 justify-center",
                                activeSection === id
                                    ? "text-[#223DFC]"
                                    : "text-gray-400 hover:text-gray-900"
                            )}
                        >
                            <div
                                className={cn(
                                    "rounded-full transition-all duration-300",
                                    activeSection === id
                                        ? "w-3 h-3 bg-[#223DFC] shadow-[0_0_0_4px_rgba(34,61,252,0.1)]"
                                        : "w-2 h-2 bg-gray-300 group-hover:bg-gray-400 group-hover:scale-150"
                                )}
                                style={{ zIndex: 10 }}
                            />

                            {/* Tooltip — now appears to the LEFT of the dot */}
                            <span
                                className={cn(
                                    "absolute right-8 whitespace-nowrap transition-all duration-300 pointer-events-none px-3 py-1.5 rounded-md bg-white/80 backdrop-blur-sm shadow-sm",
                                    activeSection === id
                                        ? "opacity-100 font-semibold text-[#223DFC]"
                                        : "opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:text-gray-900"
                                )}
                            >
                                {label}
                            </span>
                        </button>
                    ))}
                    {/* Decorative connecting line */}
                    <div
                        className="absolute left-1/2 top-3 bottom-3 w-[2px] bg-gray-200/50"
                        style={{ transform: "translateX(-50%)", zIndex: -1 }}
                    />
                </div>
            </div>

            {/* Mobile Floating Button — hides near footer */}
            <div
                className="toc-mobile fixed"
                style={{
                    bottom: "1.5rem",
                    left: "50%",
                    transform: "translateX(-50%)",
                    zIndex: 999,
                    opacity: hideFloating ? 0 : 1,
                    pointerEvents: hideFloating ? "none" : "auto",
                    transition: "opacity 0.3s ease",
                }}
            >
                <button
                    onClick={() => setIsOpen(true)}
                    className="bg-white/95 backdrop-blur-md shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-gray-100 px-6 py-3.5 rounded-full flex items-center gap-3 text-sm font-medium text-gray-900 transition-transform active:scale-95"
                >
                    <div className="w-2 h-2 rounded-full bg-[#223DFC] animate-pulse" />
                    <span className="max-w-[150px] truncate">{activeLabel}</span>
                    <Menu01Icon className="w-4 h-4 text-gray-500 ml-1" />
                </button>
            </div>

            {/* Mobile Full Screen Menu */}
            <div
                className={cn(
                    "toc-mobile fixed inset-0 bg-[#f2f1ed] transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] flex flex-col overflow-hidden",
                    isOpen ? "translate-y-0" : "translate-y-[100%]"
                )}
                style={{ zIndex: 9999 }}
            >
                {/* Header bar */}
                <div className="flex items-center justify-between px-6 pt-6 pb-4">
                    <h3 className="text-gray-400 font-semibold tracking-widest uppercase text-[10px]">
                        Índice
                    </h3>
                    <button
                        onClick={() => setIsOpen(false)}
                        className="w-10 h-10 rounded-full bg-white shadow-sm border border-gray-200 hover:bg-gray-50 transition-colors flex items-center justify-center"
                    >
                        <Cancel01Icon className="w-5 h-5 text-gray-700" />
                    </button>
                </div>

                {/* Section list — vertically centered */}
                <div className="flex-1 flex flex-col justify-center px-8 pb-16">
                    <div className="flex flex-col gap-1">
                        {sections.map(({ id, label }, index) => (
                            <button
                                key={id}
                                onClick={() => scrollToSection(id)}
                                className={cn(
                                    "w-full flex items-center gap-4 py-3.5 px-4 rounded-2xl transition-all duration-300 text-left",
                                    activeSection === id
                                        ? "bg-white shadow-[0_2px_12px_rgba(0,0,0,0.06)]"
                                        : "hover:bg-white/40"
                                )}
                            >
                                <div
                                    className={cn(
                                        "w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold shrink-0 transition-all duration-300",
                                        activeSection === id
                                            ? "bg-[#223DFC] text-white shadow-[0_0_0_4px_rgba(34,61,252,0.12)]"
                                            : "bg-gray-200 text-gray-500"
                                    )}
                                >
                                    {String(index + 1).padStart(2, "0")}
                                </div>
                                <span
                                    className={cn(
                                        "text-lg font-medium transition-colors duration-300",
                                        activeSection === id
                                            ? "text-[#223DFC]"
                                            : "text-gray-600"
                                    )}
                                >
                                    {label}
                                </span>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Subtle bottom branding */}
                <div className="pb-8 text-center">
                    <p className="text-[10px] text-gray-300 tracking-widest uppercase font-medium">
                        Matilda Repostería
                    </p>
                </div>
            </div>
        </>,
        document.body
    );
}
