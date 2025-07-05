import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { CTASection } from "@/components/cta-section"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { 
  ArrowRight, 
  FileText, 
  Search, 
  RefreshCw, 
  AlertTriangle,
  CheckCircle, 
  Users, 
  Clock, 
  Zap,
  Pencil,
  FileCheck,
  Calculator,
  Globe,
  Shield,
  DollarSign,
  ExternalLink,
  ChevronRight,
  Star
} from "lucide-react"
import { Separator } from "@/components/ui/separator"
import AnimatedContent from "@/components/AnimatedContent"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Servicios de Registro de Marcas | INPI | IDmarca",
  description: "Servicios completos de propiedad intelectual: registro de marcas, búsqueda, renovación, oposición y transferencias. Precios desde $25 USD. Asesoramiento experto ante INPI.",
  keywords: "servicios registro marcas, búsqueda marcas, renovación marcas, oposición marcas, transferencia titularidad, declaración jurada uso, INPI Argentina",
  openGraph: {
    title: "Servicios de Registro de Marcas | INPI | IDmarca",
    description: "Servicios completos de propiedad intelectual: registro de marcas, búsqueda, renovación, oposición y transferencias.",
    url: "https://idmarca.com/servicios",
  },
  alternates: {
    canonical: "https://idmarca.com/servicios",
  },
}

// Structured Data for Services
const structuredData = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Servicios de Propiedad Intelectual",
  "description": "Servicios completos de registro de marcas y propiedad intelectual en Argentina",
  "url": "https://idmarca.com/servicios",
  "itemListElement": [
    {
      "@type": "Service",
      "position": 1,
      "name": "Búsqueda de Antecedentes",
      "description": "Búsqueda fonética y visual + análisis de conflictos + informe estratégico + asesoramiento",
      "provider": {
        "@type": "Organization",
        "name": "IDmarca"
      },
      "offers": {
        "@type": "Offer",
        "price": "90",
        "priceCurrency": "USD",
        "availability": "https://schema.org/InStock"
      }
    },
    {
      "@type": "Service",
      "position": 2,
      "name": "Registro de Marcas, Patentes, Modelos de Utilidad y Diseños Industriales",
      "description": "Presentación electrónica + seguimiento + respuesta a vistas + certificado + asesoramiento legal",
      "provider": {
        "@type": "Organization",
        "name": "IDmarca"
      },
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD",
        "availability": "https://schema.org/InStock"
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

const processSteps = [
  {
    step: "01",
    title: "Consulta Inicial",
    description: "Evaluamos tu marca y te asesoramos sobre el proceso",
    icon: Users
  },
  {
    step: "02",
    title: "Búsqueda Previo",
    description: "Verificamos la disponibilidad de tu marca",
    icon: Search
  },
  {
    step: "03",
    title: "Preparación",
    description: "Preparamos toda la documentación necesaria",
    icon: FileText
  },
  {
    step: "04",
    title: "Presentación",
    description: "Presentamos tu solicitud.",
    icon: Zap
  },
  {
    step: "05",
    title: "Seguimiento",
    description: "Monitoreamos el proceso hasta su resolución",
    icon: Clock
  },
  {
    step: "06",
    title: "Certificado",
    description: "Obtienes tu certificado de registro",
    icon: CheckCircle
  }
]

export default function ServiciosPage() {
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
      <section className="py-16 lg:py-24">
        <div className="container mx-auto">
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="secondary" className="mb-4">
              Nuestros Servicios
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Servicios de{" "}
              <span className="text-primary">Registro de Marcas</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Ofrecemos servicios integrales para proteger tu marca comercial en Argentina. 
              Precios transparentes en USD desde $30.
            </p>
            <Button asChild size="lg">
              <Link href="/contacto">
                Consultar Gratis
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Table - Modern Design */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-primary">
              Registra y gestiona tu marca fácil 🌟✨
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              🚀 Rápido y <span className="text-primary font-semibold">100% online</span> 🌐
            </p>
          </div>
          
          {/* Modern Services Table */}
          <div className="max-w-6xl mx-auto">
            {/* Desktop Table - Hidden on Mobile */}
            <div className="hidden md:block bg-background rounded-xl shadow-lg overflow-hidden">
              {/* Table Header */}
              <div className="bg-primary/5 border-b border-border/50">
                <div className="grid grid-cols-12 gap-4 p-6 text-sm font-semibold text-muted-foreground">
                  <div className="col-span-5">Servicio</div>
                  <div className="col-span-4">¿Qué incluye?</div>
                  <div className="col-span-2 text-center">Precio</div>
                  <div className="col-span-1"></div>
                </div>
              </div>
              
              {/* Table Body */}
              <div className="divide-y divide-border/50">
                {services.map((service, index) => (
                  <AnimatedContent
                    key={index}
                    distance={30}
                    direction="vertical"
                    duration={0.5}
                    delay={0.05 * index}
                  >
                    <div className={`group hover:bg-primary/10 transition-all duration-200 ${service.popular ? 'bg-primary/5' : ''}`}>
                      <div className="grid grid-cols-12 gap-4 p-6 items-center">
                        {/* Service Info */}
                        <div className="col-span-5">
                          <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                              <service.icon className="h-4 w-4 text-primary" />
                            </div>
                            <div className="min-w-0 flex-1">
                              <div className="flex items-center space-x-2">
                                <h3 className="font-semibold text-sm leading-tight group-hover:text-primary transition-colors">
                                  {service.title}
                                </h3>
                                {service.popular && (
                                  <Star className="h-3 w-3 text-yellow-500 fill-current" />
                                )}
                              </div>
                              {service.badge && (
                                <Badge variant="secondary" className="mt-1 text-xs">
                                  {service.badge}
                                </Badge>
                              )}
                            </div>
                          </div>
                        </div>
                        
                        {/* Description */}
                        <div className="col-span-4">
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {service.description}
                          </p>
                        </div>
                        
                        {/* Price */}
                        <div className="col-span-2 text-center">
                          <div className="flex flex-col lg:flex-row items-center justify-center lg:space-x-1 space-y-1 lg:space-y-0">
                            {service.price !== "Consultar" && service.price !== "Calcular" && service.price !== "Registrar" && service.price !== "Agregar" ? (
                              <>
                                <span className="font-semibold text-primary">$</span>
                                <span className="font-semibold text-primary">{service.price}</span>
                                {service.priceNote && (
                                  <span className="text-xs text-muted-foreground lg:ml-1">{service.priceNote}</span>
                                )}
                              </>
                            ) : (
                              <span className="font-semibold text-primary">{service.price}</span>
                            )}
                          </div>
                        </div>
                        
                        {/* Action Button */}
                        <div className="col-span-1 flex justify-end">
                          {service.title === "Registro de Marcas, Patentes, Modelos de Utilidad y Diseños Industriales" || service.title === "Presencia Digital (informativo)" ? (
                            <Button asChild size="sm" variant="ghost" className="group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                              <Link href={`${service.href}?service=${encodeURIComponent(service.title)}`} className="flex items-center">
                                <Calculator className="h-4 w-4" />
                              </Link>
                            </Button>
                          ) : (
                            <Button asChild size="sm" variant="ghost" className="group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                              <Link href={`${service.href}?service=${encodeURIComponent(service.title)}`} className="flex items-center space-x-1">
                                <span className="text-xs">Consultar</span>
                                <ChevronRight className="h-3 w-3" />
                              </Link>
                            </Button>
                          )}
                        </div>
                      </div>
                    </div>
                  </AnimatedContent>
                ))}
              </div>
            </div>

            {/* Mobile Cards - Hidden on Desktop */}
            <div className="md:hidden space-y-4">
              {services.map((service, index) => (
                <AnimatedContent
                  key={index}
                  distance={30}
                  direction="vertical"
                  duration={0.5}
                  delay={0.05 * index}
                >
                  <Card className={`relative ${service.popular ? 'border-primary/20 bg-primary/5' : ''}`}>
                    {service.popular && (
                      <Badge className="absolute -top-2 left-4 bg-primary text-primary-foreground z-10">
                        <Star className="h-3 w-3 mr-1" />
                        Popular
                      </Badge>
                    )}
                    <CardHeader className="pb-3">
                      <div className="flex items-start justify-between">
                        <div className="flex items-start space-x-3 flex-1">
                          <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                            <service.icon className="h-5 w-5 text-primary" />
                          </div>
                          <div className="min-w-0 flex-1">
                            <CardTitle className="text-base font-semibold leading-tight mb-2">
                              {service.title}
                            </CardTitle>
                            {service.badge && (
                              <Badge variant="secondary" className="text-xs">
                                {service.badge}
                              </Badge>
                            )}
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    
                    <CardContent className="pt-0 space-y-4">
                      {/* Description */}
                      <div>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {service.description}
                        </p>
                      </div>
                      
                                              {/* Price and Action Row */}
                        <div className="flex items-center justify-between pt-2 border-t border-border/50">
                          <div className="flex items-center space-x-2">
                            {service.price !== "Consultar" && service.price !== "Calcular" && service.price !== "Registrar" && service.price !== "Agregar" ? (
                              <>
                                <span className="font-semibold text-primary">$</span>
                                <span className="font-semibold text-primary">{service.price}</span>
                                {service.priceNote && (
                                  <span className="text-xs text-muted-foreground lg:ml-1">{service.priceNote}</span>
                                )}
                              </>
                            ) : (
                              <span className="font-semibold text-primary">{service.price}</span>
                            )}
                          </div>
                          {service.title === "Registro de Marcas, Patentes, Modelos de Utilidad y Diseños Industriales" || service.title === "Presencia Digital (informativo)" ? (
                            <Button asChild size="sm" className="flex-shrink-0">
                              <Link href={`${service.href}?service=${encodeURIComponent(service.title)}`} className="flex items-center">
                                <Calculator className="h-4 w-4" />
                              </Link>
                            </Button>
                          ) : (
                            <Button asChild size="sm" className="flex-shrink-0">
                              <Link href={`${service.href}?service=${encodeURIComponent(service.title)}`} className="flex items-center space-x-1">
                                <span className="text-xs">Consultar</span>
                                <ChevronRight className="h-3 w-3" />
                              </Link>
                            </Button>
                          )}
                        </div>
                    </CardContent>
                  </Card>
                </AnimatedContent>
              ))}
            </div>
            
            {/* Quick Stats */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
              <div className="bg-background rounded-lg p-4 md:p-6 text-center border border-border/50">
                <div className="text-xl md:text-2xl font-bold text-primary mb-2">10+</div>
                <div className="text-xs md:text-sm text-muted-foreground">Servicios Disponibles</div>
              </div>
              <div className="bg-background rounded-lg p-4 md:p-6 text-center border border-border/50">
                <div className="text-xl md:text-2xl font-bold text-primary mb-2">$30</div>
                <div className="text-xs md:text-sm text-muted-foreground">Precio Mínimo USD</div>
              </div>
              <div className="bg-background rounded-lg p-4 md:p-6 text-center border border-border/50">
                <div className="text-xl md:text-2xl font-bold text-primary mb-2">100%</div>
                <div className="text-xs md:text-sm text-muted-foreground">Online</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Steps Section */}
      <section className="py-16">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Nuestro Proceso
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Un proceso simple y transparente para registrar tu marca
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {processSteps.map((step, index) => (
              <AnimatedContent
                key={index}
                distance={130}
                direction="horizontal"
                reverse={false}
                duration={1.1}
                ease="bounce.out"
                initialOpacity={0}
                animateOpacity
                scale={1}
                threshold={0.1}
                delay={0.1 * index}
              >
                <Card className="relative w-full max-w-xs mx-auto p-6">
                  <div className="absolute -right-4 top-1/2 -translate-y-1/2 bg-primary text-primary-foreground rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg z-10">
                    {step.step}
                  </div>
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-2">
                      <step.icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-lg font-bold mb-1">{step.title}</h3>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </div>
                </Card>
              </AnimatedContent>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="¿Necesitas asesoramiento personalizado?"
        description="Nuestros expertos están listos para ayudarte a proteger tu marca comercial. Obtén una consulta gratuita."
        primaryAction={{
          text: "Consultar Gratis",
          href: "/contacto"
        }}
        secondaryAction={{
          text: "Ver Precios",
          href: "/precios"
        }}
      />

      <Footer />
    </div>
  )
} 