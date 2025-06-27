import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ClickSpark from "@/components/click-spark";
import { ThemeProvider } from "@/components/theme-provider";

const geist = Geist({ subsets: ["latin"] });
const geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "IDmarca - Registro de Marcas en Argentina",
  description: "Protege tu marca comercial con nuestro servicio de registro profesional ante INPI. Asesoramiento experto y seguimiento completo.",
  keywords: "registro de marcas, INPI, propiedad intelectual, marcas comerciales, Argentina",
  authors: [{ name: "IDmarca" }],
  creator: "IDmarca",
  publisher: "IDmarca",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://idmarca.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "IDmarca - Registro de Marcas en Argentina",
    description: "Protege tu marca comercial con nuestro servicio de registro profesional ante INPI.",
    url: "https://idmarca.com",
    siteName: "IDmarca",
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "IDmarca - Registro de Marcas en Argentina",
    description: "Protege tu marca comercial con nuestro servicio de registro profesional ante INPI.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={`${geist.className} font-sans`}>
        <ThemeProvider>
          <ClickSpark sparkColor="#F59E0C" duration={500}>
            {children}
          </ClickSpark>
        </ThemeProvider>
      </body>
    </html>
  );
}
