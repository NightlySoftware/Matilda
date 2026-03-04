import type { Metadata } from "next";
import { Inter, Sarina } from "next/font/google";
import "../index.css";
import Providers from "@/components/providers";
import Header from "@/components/header";
import FooterSection from "@/components/footer";
import ScrollToTop from "@/components/scroll-to-top";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const sarina = Sarina({
  variable: "--font-sarina",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Matilda Repostería Artesanal - Pastelería y Café en Irapuato",
  description:
    "Repostería artesanal en Irapuato especializada en Tarta Vasca, cookies estilo Nueva York, roles brioche y bebidas de autor. Nos apasiona lo bueno.",
  keywords:
    "pastelería, repostería artesanal, tarta vasca, cookies, café, Irapuato, Guanajuato, Matilda",
  authors: [{ name: "Matilda Repostería Artesanal" }],
  creator: "Matilda Repostería Artesanal",
  openGraph: {
    title: "Matilda Repostería Artesanal",
    description:
      "Repostería artesanal en Irapuato especializada en Tarta Vasca, cookies y bebidas únicas.",
    type: "website",
    locale: "es_MX",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${sarina.variable} antialiased`}
      >
        <Providers>
          <div className="min-h-screen">
            <Header />
            <main>{children}</main>
            <FooterSection />
            <ScrollToTop />
          </div>
        </Providers>
      </body>
    </html>
  );
}
