"use client";

import { useState, useEffect, useCallback } from "react";
import { createPortal } from "react-dom";
import { Menu01Icon, Cancel01Icon } from "hugeicons-react";
import { cn } from "@/lib/utils";

interface SubSection {
    id: string;
    label: string;
}

interface Section {
    id: string;
    label: string;
    subsections: SubSection[];
}

const sections: Section[] = [
    {
        id: "tarta_vasca_completa",
        label: "Tarta Vasca Completa",
        subsections: [
            { id: "tarta_vasca_completa-de_temporada", label: "De Temporada" },
        ],
    },
    {
        id: "porciones_tarta_vasca",
        label: "Porciones de Tarta Vasca",
        subsections: [
            { id: "porciones_tarta_vasca-especiales_mes", label: "Especiales del Mes" },
        ],
    },
    {
        id: "productos_de_temporada",
        label: "Productos de Temporada",
        subsections: [
            { id: "productos_de_temporada-roles_temporales", label: "Roles de Temporada" },
        ],
    },
    {
        id: "cookies_estilo_new_york",
        label: "Cookies New York",
        subsections: [
            { id: "cookies_estilo_new_york-galletas_clasicas", label: "Galletas Clásicas" },
        ],
    },
    {
        id: "roles_brioche",
        label: "Roles Brioche",
        subsections: [
            { id: "roles_brioche-roles_clasicos", label: "Roles Clásicos" },
        ],
    },
    {
        id: "bebidas",
        label: "Bebidas",
        subsections: [
            { id: "bebidas-cafe", label: "Café" },
            { id: "bebidas-lattes_sabor", label: "Lattes con Sabor" },
            { id: "bebidas-leche_fria", label: "Leche Fría" },
            { id: "bebidas-tisanes", label: "Tisanes" },
            { id: "bebidas-matcha", label: "Matcha Lovers" },
            { id: "bebidas-frappes_helado", label: "Frappe con Helado" },
            { id: "bebidas-bebidas_temporada", label: "Bebidas de Temporada" },
        ],
    },
];

export default function MenuTableOfContents() {
    const [activeSection, setActiveSection] = useState("tarta_vasca_completa");
    const [isOpen, setIsOpen] = useState(false);
    const [mounted, setMounted] = useState(false);
    const [hideFloating, setHideFloating] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        if (!mounted) return;

        const allIds: string[] = [];
        sections.forEach(({ id, subsections }) => {
            allIds.push(id);
            subsections.forEach((sub) => allIds.push(sub.id));
        });

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { rootMargin: "-20% 0px -70% 0px" }
        );

        allIds.forEach((id) => {
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

    const getActiveLabel = () => {
        for (const section of sections) {
            if (section.id === activeSection) return section.label;
            for (const sub of section.subsections) {
                if (sub.id === activeSection) return sub.label;
            }
        }
        return sections[0].label;
    };

    const getActiveParent = () => {
        for (const section of sections) {
            if (section.id === activeSection) return section.id;
            for (const sub of section.subsections) {
                if (sub.id === activeSection) return section.id;
            }
        }
        return sections[0].id;
    };

    if (!mounted) return null;

    const activeParent = getActiveParent();

    return createPortal(
        <>
            <style>{`
        .menu-toc-desktop { display: none !important; }
        @media (min-width: 1024px) {
          .menu-toc-desktop { display: flex !important; }
        }
        .menu-toc-mobile { display: block; }
        @media (min-width: 1024px) {
          .menu-toc-mobile { display: none !important; }
        }
      `}</style>

            {/* Desktop Sidebar — RIGHT side */}
            <div
                className="fixed top-1/2"
                style={{ right: "1.5rem", zIndex: 999, transform: "translateY(-50%)" }}
            >
                <div
                    className="menu-toc-desktop"
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "0.25rem",
                        maxHeight: "70vh",
                        overflowY: "auto",
                        padding: "1rem 0.75rem",
                        background: "rgba(255,255,255,0.9)",
                        backdropFilter: "blur(12px)",
                        borderRadius: "1rem",
                        boxShadow: "0 4px 30px rgba(0,0,0,0.08)",
                        border: "1px solid rgba(0,0,0,0.06)",
                        width: "220px",
                    }}
                >
                    <div className="text-[10px] font-semibold tracking-widest uppercase text-gray-400 px-2 mb-1">
                        Menú
                    </div>
                    {sections.map(({ id, label, subsections }) => (
                        <div key={id}>
                            <button
                                onClick={() => scrollToSection(id)}
                                className={cn(
                                    "w-full text-left px-2 py-1.5 rounded-md text-xs font-semibold transition-all duration-200 truncate",
                                    activeSection === id || activeParent === id
                                        ? "text-[#223DFC] bg-[#223DFC]/8"
                                        : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                                )}
                            >
                                {label}
                            </button>
                            {activeParent === id && subsections.length > 0 && (
                                <div className="ml-3 mt-0.5 mb-1 border-l-2 border-[#223DFC]/20 pl-2 space-y-0.5">
                                    {subsections.map((sub) => (
                                        <button
                                            key={sub.id}
                                            onClick={() => scrollToSection(sub.id)}
                                            className={cn(
                                                "w-full text-left px-2 py-1 rounded text-[11px] transition-all duration-200 truncate",
                                                activeSection === sub.id
                                                    ? "text-[#223DFC] font-semibold bg-[#223DFC]/5"
                                                    : "text-gray-500 hover:text-gray-800 hover:bg-gray-50"
                                            )}
                                        >
                                            {sub.label}
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {/* Mobile Floating Button — hides near footer */}
            <div
                className="menu-toc-mobile fixed"
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
                    <span className="max-w-[180px] truncate">{getActiveLabel()}</span>
                    <Menu01Icon className="w-4 h-4 text-gray-500 ml-1" />
                </button>
            </div>

            {/* Mobile Full Screen Menu */}
            <div
                className={cn(
                    "menu-toc-mobile fixed inset-0 bg-[#f2f1ed] transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] flex flex-col overflow-y-auto",
                    isOpen ? "translate-y-0" : "translate-y-[100%]"
                )}
                style={{ zIndex: 9999 }}
            >
                <div className="flex items-center justify-between p-6 pb-2">
                    <h3 className="text-gray-400 font-semibold tracking-widest uppercase text-[10px]">
                        Índice del Menú
                    </h3>
                    <button
                        onClick={() => setIsOpen(false)}
                        className="w-10 h-10 rounded-full bg-white shadow-sm border border-gray-200 hover:bg-gray-50 transition-colors flex items-center justify-center"
                    >
                        <Cancel01Icon className="w-5 h-5 text-gray-900" />
                    </button>
                </div>

                <div className="flex flex-col gap-2 px-6 pb-8 pt-4">
                    {sections.map(({ id, label, subsections }) => (
                        <div key={id}>
                            <button
                                onClick={() => scrollToSection(id)}
                                className={cn(
                                    "w-full text-left py-3 px-4 text-lg font-semibold transition-all rounded-xl",
                                    activeSection === id || activeParent === id
                                        ? "text-[#223DFC] bg-white shadow-sm"
                                        : "text-gray-700 hover:bg-white/50"
                                )}
                            >
                                {label}
                            </button>
                            {subsections.length > 0 && (
                                <div className="ml-4 mt-1 mb-2 border-l-2 border-[#223DFC]/20 pl-3 space-y-1">
                                    {subsections.map((sub) => (
                                        <button
                                            key={sub.id}
                                            onClick={() => scrollToSection(sub.id)}
                                            className={cn(
                                                "w-full text-left py-2 px-3 text-sm transition-all rounded-lg",
                                                activeSection === sub.id
                                                    ? "text-[#223DFC] font-semibold bg-white/70"
                                                    : "text-gray-500 hover:text-gray-700 hover:bg-white/30"
                                            )}
                                        >
                                            {sub.label}
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </>,
        document.body
    );
}
