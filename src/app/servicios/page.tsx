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
  Award,
  Zap
} from "lucide-react"
import { Separator } from "@/components/ui/separator"
import TiltedCard from "@/components/tilted-card"

const services = [
  {
    title: "Registro de Marcas",
    description: "Registro completo de marcas comerciales ante INPI",
    features: [
      "Búsqueda previa de disponibilidad",
      "Preparación de documentación completa",
      "Presentación ante INPI",
      "Seguimiento del trámite",
      "Respuesta a observaciones",
      "Certificado de registro",
      "Asesoramiento legal completo"
    ],
    price: "$45.000",
    badge: "Principal",
    href: "/contacto",
    popular: true,
    icon: FileText,
    details: [
      "Análisis de viabilidad de la marca",
      "Búsqueda en bases de datos oficiales",
      "Preparación de formularios y documentación",
      "Presentación electrónica ante INPI",
      "Seguimiento del estado del trámite",
      "Gestión de observaciones y respuestas",
      "Obtención del certificado de registro"
    ]
  },
  {
    title: "Búsqueda de Marcas",
    description: "Verificación de disponibilidad de marcas",
    features: [
      "Búsqueda en base de datos INPI",
      "Análisis de conflictos",
      "Informe detallado",
      "Recomendaciones estratégicas"
    ],
    price: "$15.000",
    badge: "Básico",
    href: "/contacto",
    icon: Search,
    details: [
      "Búsqueda fonética y visual",
      "Análisis de marcas similares",
      "Evaluación de riesgo de conflicto",
      "Informe con recomendaciones",
      "Asesoramiento sobre modificaciones"
    ]
  },
  {
    title: "Renovación de Marcas",
    description: "Renovación de registros existentes",
    features: [
      "Verificación de vencimiento",
      "Preparación de documentación",
      "Pago de tasas",
      "Seguimiento del proceso"
    ],
    price: "$25.000",
    badge: "Mantenimiento",
    href: "/contacto",
    icon: RefreshCw,
    details: [
      "Control de fechas de vencimiento",
      "Verificación de uso de la marca",
      "Preparación de declaración de uso",
      "Pago de tasas de renovación",
      "Seguimiento hasta la confirmación"
    ]
  },
  {
    title: "Oposición de Marcas",
    description: "Defensa de derechos de marca",
    features: [
      "Análisis de la oposición",
      "Preparación de defensa",
      "Presentación de argumentos",
      "Seguimiento del proceso"
    ],
    price: "$35.000",
    badge: "Defensa",
    href: "/contacto",
    icon: AlertTriangle,
    details: [
      "Evaluación de la viabilidad",
      "Preparación de argumentos legales",
      "Presentación de pruebas",
      "Representación en audiencias",
      "Seguimiento hasta resolución"
    ]
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
    description: "Presentamos tu solicitud ante INPI",
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
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 lg:py-32">
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
              Desde la búsqueda inicial hasta el registro y mantenimiento.
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

      {/* Services Grid */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Servicios Disponibles
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Selecciona el servicio que mejor se adapte a tus necesidades
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="relative">
                {service.popular && (
                  <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground">
                    Más Popular
                  </Badge>
                )}
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <service.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-xl">{service.title}</CardTitle>
                        {service.badge && (
                          <Badge variant="secondary" className="mt-1">
                            {service.badge}
                          </Badge>
                        )}
                      </div>
                    </div>
                    {service.price && (
                      <div className="text-right">
                        <div className="text-2xl font-bold text-primary">
                          {service.price}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          /servicio
                        </div>
                      </div>
                    )}
                  </div>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-3">Incluye:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Separator />
                  
                  <div>
                    <h4 className="font-semibold mb-3">Detalles del servicio:</h4>
                    <ul className="space-y-2">
                      {service.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="text-sm text-muted-foreground">
                          • {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Button asChild className="w-full">
                    <Link href={service.href} className="inline-block w-full">
                      Consultar {service.title}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Nuestro Proceso
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Un proceso simple y transparente para registrar tu marca
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <TiltedCard key={index} containerHeight="260px" className="bg-transparent">
                <Card className="text-center bg-transparent border border-border shadow-lg h-full">
                  <CardHeader>
                    <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                      <step.icon className="h-8 w-8 text-primary" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                      {step.step}
                    </div>
                    <CardTitle className="text-lg">{step.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{step.description}</CardDescription>
                  </CardContent>
                </Card>
              </TiltedCard>
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