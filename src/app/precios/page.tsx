import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { CTASection } from "@/components/cta-section"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { 
  Search,
  FileText,
  Shield,
  RefreshCw,
  AlertTriangle,
  Pencil,
  FileCheck,
  Globe
} from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Precios de Registro de Marcas | Planes y Tarifas | IDmarca",
  description: "Precios transparentes para registro de marcas en Argentina. Planes desde $35.500 ARS. Básico, Estándar y Premium. Sin costos ocultos, asesoramiento experto ante INPI.",
  keywords: "precios registro marcas, tarifas INPI, planes registro marcas, costo registro marca Argentina, precios propiedad intelectual",
  openGraph: {
    title: "Precios de Registro de Marcas | Planes y Tarifas | IDmarca",
    description: "Precios transparentes para registro de marcas en Argentina. Planes desde $35.500 ARS.",
    url: "https://idmarca.com/precios",
  },
  alternates: {
    canonical: "https://idmarca.com/precios",
  },
}

// Structured Data for Pricing
const structuredData = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Planes de Registro de Marcas",
  "description": "Precios y planes para registro de marcas comerciales en Argentina",
  "url": "https://idmarca.com/precios",
  "itemListElement": [
    {
      "@type": "Product",
      "position": 1,
      "name": "Plan Básico - Búsqueda de Marcas",
      "description": "Para verificar la disponibilidad de tu marca",
      "brand": {
        "@type": "Brand",
        "name": "IDmarca"
      },
      "offers": {
        "@type": "Offer",
        "price": "35500",
        "priceCurrency": "ARS",
        "availability": "https://schema.org/InStock",
        "priceSpecification": {
          "@type": "UnitPriceSpecification",
          "price": "35500",
          "priceCurrency": "ARS",
          "unitText": "por servicio"
        }
      }
    },
    {
      "@type": "Product",
      "position": 2,
      "name": "Plan Estándar - Registro Completo",
      "description": "Registro completo de marca comercial",
      "brand": {
        "@type": "Brand",
        "name": "IDmarca"
      },
      "offers": {
        "@type": "Offer",
        "price": "205000",
        "priceCurrency": "ARS",
        "availability": "https://schema.org/InStock",
        "priceSpecification": {
          "@type": "UnitPriceSpecification",
          "price": "205000",
          "priceCurrency": "ARS",
          "unitText": "por servicio"
        }
      }
    },
    {
      "@type": "Product",
      "position": 3,
      "name": "Plan Premium - Servicio Integral",
      "description": "Servicio integral con monitoreo continuo",
      "brand": {
        "@type": "Brand",
        "name": "IDmarca"
      },
      "offers": {
        "@type": "Offer",
        "price": "250000",
        "priceCurrency": "ARS",
        "availability": "https://schema.org/InStock",
        "priceSpecification": {
          "@type": "UnitPriceSpecification",
          "price": "250000",
          "priceCurrency": "ARS",
          "unitText": "por servicio"
        }
      }
    }
  ]
}

const services = [
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
  },
  {
    title: "Declaración Jurada de Uso de Medio Término",
    description: "Preparación + presentación + confirmación",
    price: "99",
    priceNote: "USD",
    badge: "Legal",
    href: "/contacto",
    icon: FileCheck,
    popular: false,
    action: "Consultar"
  },
  {
    title: "Dominio NIC.ar (.com.ar)",
    description: "Registro anual en NIC.ar",
    price: "30",
    priceNote: "USD",
    badge: "Dominio",
    href: "/contacto",
    icon: Globe,
    popular: false,
    action: "Registrar"
  },
  {
    title: "PDF Inteligente (opcional)",
    description: "Comprobante profesional en tiempo real con tu branding",
    price: "8",
    priceNote: "USD",
    badge: "Opcional",
    href: "/contacto",
    icon: FileText,
    popular: false,
    action: "Agregar"
  },
  {
    title: "Presencia Digital (informativo)",
    description: "Servicios web ofrecidos por nuestro equipo especializado: página básica, portal institucional y tienda online",
    price: "Consultar",
    priceNote: "",
    badge: "Digital",
    href: "/contacto",
    icon: Globe,
    popular: false,
    action: "Consultar"
  }
]

const faqs = [
  {
    question: "¿Cuánto tiempo toma el registro de una marca?",
    answer: "El proceso completo toma entre 12 a 18 meses, dependiendo de la complejidad y si hay observaciones del INPI."
  },
  {
    question: "¿Qué incluye el precio del servicio?",
    answer: "Incluye la búsqueda previa, preparación de documentación, presentación ante INPI, seguimiento del trámite y certificado de registro."
  },
  {
    question: "¿Puedo pagar en cuotas?",
    answer: "No, actualmente no ofrecemos pagos en cuotas, pero contamos con opciones de pago accesibles para todos nuestros clientes."
  },
  {
    question: "¿Qué pasa si mi marca es rechazada?",
    answer: "Si tu marca es rechazada, te asesoramos sobre las opciones disponibles y te ayudamos a presentar una nueva solicitud si es necesario."
  },
  {
    question: "¿Ofrecen garantía de éxito?",
    answer: "Aunque no podemos garantizar el 100% de éxito, nuestro equipo experto maximiza las posibilidades de aprobación."
  },
  {
    question: "¿Pueden ayudarme con marcas internacionales?",
    answer: "Sí, ofrecemos servicios para registro de marcas en otros países a través de nuestros socios internacionales."
  }
]

export default function PreciosPage() {
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
      <section className="py-20 lg:py-32">
        <div className="container mx-auto">
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="secondary" className="mb-4">
              Nuestros valores
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Valores para <span className="text-primary">proteger tu marca</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Valores claros y transparentes para proteger tu marca comercial. Sin costos ocultos, sin sorpresas.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto divide-y divide-border/50 bg-background/80 rounded-xl shadow-sm">
            {services.map((service, index) => (
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
                        {service.title === "Registro de Marcas, Patentes, Modelos de Utilidad y Diseños Industriales" || service.title === "Presencia Digital (informativo)" ? "Calcular" : service.action}
                      </span>
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Preguntas Frecuentes
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Resolvemos las dudas más comunes sobre nuestros servicios
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {faqs.map((faq, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg">{faq.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {faq.answer}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="¿Necesitas un presupuesto personalizado?"
        description="Contáctanos para obtener un presupuesto adaptado a tus necesidades específicas."
        primaryAction={{
          text: "Solicitar Presupuesto",
          href: "/contacto"
        }}
        secondaryAction={{
          text: "Ver Servicios",
          href: "/servicios"
        }}
        variant="primary"
      />

      <Footer />
    </div>
  )
} 