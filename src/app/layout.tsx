import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import ClickSpark from "@/components/click-spark";
import { ThemeProvider } from "@/components/theme-provider";

const geist = Geist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "IDmarca - Registro de Marcas en Argentina | INPI | Propiedad Intelectual",
    template: "%s | IDmarca"
  },
  description: "Registro profesional de marcas comerciales en Argentina. Servicios completos de propiedad intelectual ante INPI. Búsqueda, registro, renovación y defensa de marcas. Asesoramiento experto y seguimiento integral.",
  keywords: [
    "registro de marcas",
    "INPI Argentina", 
    "propiedad intelectual",
    "marcas comerciales",
    "Argentina",
    "registro de marca",
    "patentes",
    "diseños industriales",
    "modelos de utilidad",
    "búsqueda de marcas",
    "renovación de marcas",
    "oposición de marcas",
    "transferencia de titularidad",
    "declaración jurada de uso",
    "asesoramiento legal",
    "propiedad industrial"
  ].join(", "),
  authors: [{ name: "IDmarca", url: "https://idmarca.com" }],
  creator: "IDmarca",
  publisher: "IDmarca",
  category: "Legal Services",
  classification: "Business",
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
    title: "IDmarca - Registro de Marcas en Argentina | INPI | Propiedad Intelectual",
    description: "Registro profesional de marcas comerciales en Argentina. Servicios completos de propiedad intelectual ante INPI. Búsqueda, registro, renovación y defensa de marcas.",
    url: "https://idmarca.com",
    siteName: "IDmarca",
    locale: "es_AR",
    type: "website",
    images: [
      {
        url: "/logos/logo.svg",
        width: 1200,
        height: 630,
        alt: "IDmarca - Registro de Marcas en Argentina",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "IDmarca - Registro de Marcas en Argentina",
    description: "Registro profesional de marcas comerciales en Argentina. Servicios completos de propiedad intelectual ante INPI.",
    images: ["/logos/logo.svg"],
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
  verification: {
    google: "your-google-verification-code", // Add your Google Search Console verification code
  },
  other: {
    "geo.region": "AR",
    "geo.placename": "Argentina",
    "geo.position": "-34.6118;-58.3960", // Buenos Aires coordinates
    "ICBM": "-34.6118, -58.3960",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#F59E0C" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="IDmarca" />
        <meta name="application-name" content="IDmarca" />
        <meta name="msapplication-TileColor" content="#F59E0C" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
      </head>
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
