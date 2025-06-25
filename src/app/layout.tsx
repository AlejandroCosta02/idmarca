import type { Metadata } from "next";
import { Inter, Merriweather_Sans, Roboto } from "next/font/google";
import "./globals.css";
import ClickSpark from "@/components/click-spark";

const inter = Inter({ subsets: ["latin"] });
const merriweatherSans = Merriweather_Sans({ subsets: ["latin"], variable: "--font-merriweather-sans" });
const roboto = Roboto({ subsets: ["latin"], weight: ["100","300","400","500","700","900"], variable: "--font-roboto" });

export const metadata: Metadata = {
  title: "IDmarca - Registro de Marcas en Argentina | INPI",
  description: "Especialistas en registro de marcas comerciales en Argentina. Servicios profesionales de registro ante INPI con asesoramiento legal completo.",
  keywords: "registro de marcas, INPI, Argentina, propiedad intelectual, marcas comerciales, patentes",
  authors: [{ name: "IDmarca" }],
  creator: "IDmarca",
  publisher: "IDmarca",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://idmarca.com'),
  openGraph: {
    title: "IDmarca - Registro de Marcas en Argentina",
    description: "Especialistas en registro de marcas comerciales en Argentina. Servicios profesionales ante INPI.",
    url: 'https://idmarca.com',
    siteName: 'IDmarca',
    locale: 'es_AR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "IDmarca - Registro de Marcas en Argentina",
    description: "Especialistas en registro de marcas comerciales en Argentina. Servicios profesionales ante INPI.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
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
      <body className={`${roboto.variable} ${merriweatherSans.variable} font-sans`}>
        <ClickSpark sparkColor="#F59E0C" duration={500}>
          {children}
        </ClickSpark>
      </body>
    </html>
  );
}
