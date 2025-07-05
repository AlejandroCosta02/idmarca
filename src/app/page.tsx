import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { CTASection } from "@/components/cta-section"
import { ClientCarousel } from "@/components/client-carousel"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { 
  ArrowRight, 
  Shield, 
  Clock, 
  Users, 
  CheckCircle, 
  FileText, 
  Search,
  RefreshCw,
  Star,
  AlertTriangle,
  Pencil
} from "lucide-react"
import TiltedCard from "@/components/tilted-card"
import CountUp from "@/components/count-up"
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button"
import FadeContent from "@/components/FadeContent"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Registro de Marcas en Argentina | INPI | IDmarca",
  description: "Registro profesional de marcas comerciales en Argentina. Servicios completos ante INPI: búsqueda, registro, renovación y defensa. Más de 50 marcas registradas con 98% de éxito.",
  keywords: "registro de marcas Argentina, INPI, propiedad intelectual, marcas comerciales, búsqueda de marcas, renovación de marcas",
  openGraph: {
    title: "Registro de Marcas en Argentina | INPI | IDmarca",
    description: "Registro profesional de marcas comerciales en Argentina. Servicios completos ante INPI: búsqueda, registro, renovación y defensa.",
    url: "https://idmarca.com",
  },
  alternates: {
    canonical: "https://idmarca.com",
  },
}

// Structured Data for Local Business
const structuredData = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  "name": "IDmarca",
  "description": "Registro profesional de marcas comerciales en Argentina. Servicios completos de propiedad intelectual ante INPI.",
  "url": "https://idmarca.com",
  "logo": "https://idmarca.com/logos/logo.svg",
  "image": "https://idmarca.com/logos/logo.svg",
  "telephone": "+54-11-1234-5678", // Add your actual phone number
  "email": "contacto@idmarca.com", // Only use contacto@idmarca.com
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "AR",
    "addressLocality": "Buenos Aires",
    "addressRegion": "Buenos Aires"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": -34.6118,
    "longitude": -58.3960
  },
  "areaServed": {
    "@type": "Country",
    "name": "Argentina"
  },
  "serviceType": [
    "Registro de Marcas",
    "Búsqueda de Marcas", 
    "Renovación de Marcas",
    "Oposición de Marcas",
    "Transferencias de Titularidad",
    "Declaración Jurada de Uso"
  ],
  "priceRange": "$$",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "50"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Servicios de Propiedad Intelectual",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Registro de Marcas",
          "description": "Registro completo de marcas comerciales ante INPI",
          "price": "205000",
          "priceCurrency": "ARS"
        }
      },
      {
        "@type": "Offer", 
        "itemOffered": {
          "@type": "Service",
          "name": "Búsqueda de Marcas",
          "description": "Verificación de disponibilidad de marcas",
          "price": "30500",
          "priceCurrency": "ARS"
        }
      }
    ]
  }
}

const updatedServices = [
  {
    title: "Búsqueda de Antecedentes",
    description: "Búsqueda fonética y visual + análisis de conflictos + informe estratégico + asesoramiento",
    price: "90",
    priceNote: "USD",
    badge: "Básico",
    href: "/contacto",
    icon: Search,
    popular: false,
    action: "Consultar"
  },
  {
    title: "Registro de Marcas, Patentes, Modelos de Utilidad y Diseños Industriales",
    description: "Presentación electrónica + seguimiento + respuesta a vistas + certificado + asesoramiento legal",
    price: "Consultar",
    priceNote: "",
    badge: "Principal",
    href: "/calculadora",
    icon: FileText,
    popular: true,
    action: "Calcular"
  },
  {
    title: "Renovación de Marca",
    description: "Declaración de uso + pago de tasas + gestión completa",
    price: "120",
    priceNote: "USD (por clase)",
    badge: "Mantenimiento",
    href: "/contacto",
    icon: RefreshCw,
    popular: false,
    action: "Consultar"
  },
  {
    title: "Oposición de Marca",
    description: "Defensa legal + presentación de argumentos + seguimiento",
    price: "90",
    priceNote: "USD (por clase)",
    badge: "Defensa",
    href: "/contacto",
    icon: AlertTriangle,
    popular: false,
    action: "Consultar"
  },
  {
    title: "Transferencia de Titularidad",
    description: "Contrato de cesión + presentación + confirmación",
    price: "140",
    priceNote: "USD",
    badge: "Gestión",
    href: "/contacto",
    icon: Shield,
    popular: false,
    action: "Consultar"
  },
  {
    title: "Presentación de Escritos",
    description: "Redacción legal + presentación ante INPI + seguimiento",
    price: "63",
    priceNote: "USD",
    badge: "Escritos",
    href: "/contacto",
    icon: Pencil,
    popular: false,
    action: "Consultar"
  }
]

const features = [
  {
    icon: Shield,
    title: "Protección Legal",
    description: "Tu marca protegida legalmente en todo el territorio argentino"
  },
  {
    icon: Clock,
    title: "Proceso Rápido",
    description: "Tramitación eficiente con seguimiento en tiempo real"
  },
  {
    icon: Users,
    title: "Asesoramiento Experto",
    description: "Equipo de profesionales especializados en propiedad intelectual"
  },
  {
    icon: CheckCircle,
    title: "Garantía de Calidad",
    description: "Servicio completo con garantía de satisfacción"
  }
]

const stats = [
  { number: "50+", label: "Marcas Registradas" },
  { number: "98%", label: "Tasa de Éxito" },
  { number: "24/7", label: "Soporte Disponible" },
  { number: "10+", label: "Años de Experiencia" }
]

// Sample client data - you can replace these with actual client logos
const clientLogos = [
  {
    id: 1,
    name: "Cliente 1",
    logo: "/clients/marca-1.png",
    website: "#"
  },
  {
    id: 2,
    name: "Cliente 2", 
    logo: "/clients/marca-2.png",
    website: "#"
  },
  {
    id: 3,
    name: "Cliente 3",
    logo: "/clients/marca-3.png",
    website: "#"
  },
  {
    id: 4,
    name: "Cliente 4",
    logo: "/clients/marca-4.png",
    website: "#"
  },
  {
    id: 5,
    name: "Cliente 5",
    logo: "/clients/marca-5.png",
    website: "#"
  },
  {
    id: 6,
    name: "Cliente 6",
    logo: "/clients/marca-6.png",
    website: "#"
  },
  {
    id: 7,
    name: "Cliente 7",
    logo: "/clients/marca-7.png",
    website: "#"
  },
  {
    id: 8,
    name: "Cliente 8",
    logo: "/clients/marca-8.png",
    website: "#"
  },
  {
    id: 9,
    name: "Cliente 9",
    logo: "/clients/marca-9.jpeg",
    website: "#"
  },
  {
    id: 10,
    name: "Cliente 10",
    logo: "/clients/marca-10.png",
    website: "#"
  },
  {
    id: 11,
    name: "Cliente 11",
    logo: "/clients/marca-11.jpg.webp",
    website: "#"
  },
  {
    id: 12,
    name: "Cliente 12",
    logo: "/clients/marca-12.png",
    website: "#"
  },
  {
    id: 13,
    name: "Cliente 13",
    logo: "/clients/marca-13.webp",
    website: "#"
  },
  {
    id: 14,
    name: "Cliente 14",
    logo: "/clients/marca-14.jpg",
    website: "#"
  },
  {
    id: 15,
    name: "Cliente 15",
    logo: "/clients/marca-15.png",
    website: "#"
  },
  {
    id: 16,
    name: "Cliente 16",
    logo: "/clients/marca-16.png",
    website: "#"
  },
  {
    id: 17,
    name: "Cliente 17",
    logo: "/clients/marca-17.webp",
    website: "#"
  }
]

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="container mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <Badge variant="secondary" className="text-sm">
                Especialistas en Propiedad Intelectual
              </Badge>
              <FadeContent blur={true} duration={1100} threshold={0.1} initialOpacity={0}>
                <h1 className="text-4xl lg:text-6xl font-bold leading-tight font-hero-title">
                  IDmarca.{" "}
                  <span className="text-primary">Identidad protegida. Valor Asegurado</span>
                </h1>
              </FadeContent>
              <FadeContent blur={true} duration={1100} threshold={0.1} initialOpacity={0}>
                <p className="text-xl text-muted-foreground max-w-2xl">
                  Protege tu marca comercial con nuestro servicio de registro profesional. Te ofrecemos asesoramiento experto y un seguimiento completo para garantizar tu tranquilidad.
                </p>
              </FadeContent>
              <div className="flex flex-col sm:flex-row gap-4 items-stretch">
                <Link href="/contacto" className="inline-block h-full">
                  <InteractiveHoverButton
                    className="h-12 px-6 rounded-md text-base font-semibold shadow-xs flex items-center"
                  >
                    Consultar Gratis
                  </InteractiveHoverButton>
                </Link>
                <Button variant="outline" asChild size="lg" className="h-12 px-6 rounded-md text-base font-semibold shadow-xs flex items-center">
                  <Link href="/servicios">Ver Servicios</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl p-8">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <FileText className="h-8 w-8 text-primary" />
                    <div>
                      <h3 className="font-semibold">Registro Completo</h3>
                      <p className="text-sm text-muted-foreground">Incluye búsqueda y documentación</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Search className="h-8 w-8 text-primary" />
                    <div>
                      <h3 className="font-semibold">Búsqueda Previo</h3>
                      <p className="text-sm text-muted-foreground">Verificación de disponibilidad</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <RefreshCw className="h-8 w-8 text-primary" />
                    <div>
                      <h3 className="font-semibold">Seguimiento</h3>
                      <p className="text-sm text-muted-foreground">Estado del trámite en tiempo real</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">
                  {stat.number === "50+" && <CountUp from={0} to={50} duration={1.2} className="inline" />} 
                  {stat.number === "98%" && <CountUp from={0} to={98} duration={1.2} className="inline" />} 
                  {stat.number === "24/7" && <span>24/7</span>} 
                  {stat.number === "10+" && <CountUp from={0} to={10} duration={1.2} className="inline" />} 
                  {stat.number === "50+" && <span>+</span>}
                  {stat.number === "98%" && <span>%</span>}
                  {stat.number === "10+" && <span>+</span>}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <FadeContent blur={true} duration={1100} threshold={0.1} initialOpacity={0}>
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                ¿Por qué elegir IDmarca?
              </h2>
            </FadeContent>
            <FadeContent blur={true} duration={1100} threshold={0.1} initialOpacity={0}>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Ofrecemos servicios integrales de registro de marcas con la experiencia 
                y profesionalismo que tu negocio necesita.
              </p>
            </FadeContent>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <TiltedCard key={index} containerHeight="220px" className="bg-transparent">
                <Card className="text-center bg-transparent border border-border shadow-lg h-full">
                  <CardHeader>
                    <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <feature.icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{feature.description}</CardDescription>
                  </CardContent>
                </Card>
              </TiltedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Client Carousel Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <FadeContent blur={true} duration={1100} threshold={0.1} initialOpacity={0}>
              <div className="flex items-center justify-center mb-4">
                <Star className="h-8 w-8 text-primary mr-3" />
                <h2 className="text-3xl lg:text-4xl font-bold">
                  Nuestros Clientes
                </h2>
                <Star className="h-8 w-8 text-primary ml-3" />
              </div>
            </FadeContent>
            <FadeContent blur={true} duration={1100} threshold={0.1} initialOpacity={0}>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Empresas que confían en nosotros para proteger su identidad de marca. 
                Más de 50 marcas registradas exitosamente con una tasa de satisfacción del 98%.
              </p>
            </FadeContent>
          </div>
          
          <div className="max-w-6xl mx-auto">
            <ClientCarousel clients={clientLogos} />
          </div>
          
          {/* <div className="text-center mt-12">
            <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full">
              <CheckCircle className="h-4 w-4" />
              <span className="text-sm font-medium">98% de clientes satisfechos</span>
            </div>
          </div> */}
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <FadeContent blur={true} duration={1100} threshold={0.1} initialOpacity={0}>
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                Nuestros Servicios
              </h2>
            </FadeContent>
            <FadeContent blur={true} duration={1100} threshold={0.1} initialOpacity={0}>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Servicios destacados para proteger tu marca y tu negocio.
              </p>
            </FadeContent>
          </div>
          <div className="max-w-4xl mx-auto divide-y divide-border/50 bg-background/80 rounded-xl shadow-sm">
            {updatedServices.map((service, index) => (
              <div
                key={index}
                className="group flex flex-col md:flex-row items-start md:items-center justify-between px-6 py-6 transition-all duration-200 hover:bg-primary/10"
              >
                {/* Left: Icon, Title, Description */}
                <div className="flex items-start space-x-4 flex-1 min-w-0">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center space-x-2 mb-1">
                      <span className="font-semibold text-lg leading-tight group-hover:text-primary transition-colors">
                        {service.title}
                      </span>
                      {service.badge && (
                        <Badge variant="secondary" className="text-xs">{service.badge}</Badge>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed truncate md:whitespace-normal max-w-md">
                      {service.description}
                    </p>
                  </div>
                </div>
                {/* Right: Price, Action */}
                <div className="flex flex-col md:items-end items-start mt-4 md:mt-0 min-w-[160px]">
                  <div className="flex items-center space-x-1 mb-2 md:mb-3">
                    {service.price !== "Consultar" && service.price !== "Calcular" && service.price !== "Registrar" && service.price !== "Agregar" ? (
                      <>
                        <span className="font-semibold text-primary text-lg">$</span>
                        <span className="font-semibold text-primary text-lg">{service.price}</span>
                        {service.priceNote && (
                          <span className="text-xs text-muted-foreground ml-1">{service.priceNote}</span>
                        )}
                      </>
                    ) : (
                      <span className="font-semibold text-primary text-lg">{service.price}</span>
                    )}
                  </div>
                  <Button asChild size="sm" variant="outline">
                    <Link href={`${service.href}?service=${encodeURIComponent(service.title)}`} className="flex items-center space-x-1">
                      <span className="text-xs font-medium">
                        {service.title === "Registro de Marcas, Patentes, Modelos de Utilidad y Diseños Industriales" ? "Calcular" : service.action}
                      </span>
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button asChild variant="outline" size="lg">
              <Link href="/servicios">
                Ver Todos los Servicios
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="¿Listo para proteger tu marca?"
        description="Obtén una consulta gratuita y descubre cómo podemos ayudarte a registrar tu marca comercial en Argentina."
        primaryAction={{
          text: "Consultar Gratis",
          href: "/contacto"
        }}
        secondaryAction={{
          text: "Ver Precios",
          href: "/precios"
        }}
        variant="primary"
        descriptionClassName="text-white"
        titleClassName="text-white"
      />

      <Footer />
    </div>
  )
}
