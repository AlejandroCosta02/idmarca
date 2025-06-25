import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { CTASection } from "@/components/cta-section"
import { ServiceCard } from "@/components/service-card"
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
  AlertTriangle
} from "lucide-react"
import TiltedCard from "@/components/tilted-card"
import CountUp from "@/components/count-up"
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button"

const services = [
  {
    title: "Registro de Marcas",
    description: "Registro completo de marcas comerciales ante INPI",
    features: [
      "Búsqueda previa de disponibilidad",
      "Preparación de documentación",
      "Seguimiento del trámite",
      "Certificado de registro"
    ],
    price: "$45.000",
    badge: "Principal",
    href: "/servicios",
    popular: true
  },
  {
    title: "Búsqueda de Marcas",
    description: "Verificación de disponibilidad de marcas",
    features: [
      "Búsqueda en base de datos INPI",
      "Análisis de conflictos",
      "Informe detallado",
      "Recomendaciones"
    ],
    price: "$15.000",
    badge: "Básico",
    href: "/servicios"
  },
  {
    title: "Renovación de Marcas",
    description: "Renovación de registros existentes",
    features: [
      "Verificación de vencimiento",
      "Preparación de documentación",
      "Pago de tasas",
      "Seguimiento"
    ],
    price: "$25.000",
    badge: "Mantenimiento",
    href: "/servicios"
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

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="container mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <Badge variant="secondary" className="text-sm">
                Especialistas en Propiedad Intelectual
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight font-hero-title">
                Registro de Marcas en{" "}
                <span className="text-primary">Argentina</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl">
                Protege tu marca comercial con nuestros servicios profesionales de registro ante INPI. 
                Asesoramiento experto y seguimiento completo de tu trámite.
              </p>
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
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              ¿Por qué elegir IDmarca?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Ofrecemos servicios integrales de registro de marcas con la experiencia 
              y profesionalismo que tu negocio necesita.
            </p>
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

      {/* Services Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Nuestros Servicios
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Servicios completos de registro y gestión de marcas comerciales 
              para proteger tu propiedad intelectual.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
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
