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
  FileCheck
} from "lucide-react"
import { Separator } from "@/components/ui/separator"
import TiltedCard from "@/components/tilted-card"
import AnimatedContent from "@/components/AnimatedContent"

// Icon mapping for string icon names
const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  ArrowPathIcon: RefreshCw, // or another suitable icon
  PencilSquareIcon: Pencil,
  DocumentCheckIcon: FileCheck,
}

const services = [
  {
    title: "Búsqueda de Marcas",
    description: "Verificación de disponibilidad de marcas",
    features: [
      "Búsqueda en base de datos",
      "Análisis de conflictos",
      "Informe detallado",
      "Recomendaciones estratégicas"
    ],
    price: "$30.500 ARS",
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
    title: "Registro de Marcas, Patentes, Modelos de Utilidad y Diseños Industriales",
    description: "Registro completo de marcas comerciales con asesoramiento experto y seguimiento integral.",
    features: [
      "Búsqueda previa de disponibilidad",
      "Preparación de documentación completa",
      "Presentación de la documentación correspondiente",
      "Seguimiento del trámite",
      "Respuesta a observaciones",
      "Certificado de registro",
      "Asesoramiento legal completo"
    ],
    price: "$205.000 ARS",
    badge: "Principal",
    href: "/contacto",
    popular: true,
    icon: FileText,
    details: [
      "Análisis de viabilidad de la marca",
      "Búsqueda en bases de datos oficiales",
      "Preparación de formularios y documentación",
      "Presentación electrónica",
      "Seguimiento del estado del trámite",
      "Gestión de observaciones y respuestas",
      "Obtención del certificado de registro"
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
    price: "$155.000 ARS",
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
    price: "$89.000 ARS",
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
  },
  {
    "title": "Transferencias de Titularidad",
    "description": "Cambia la titularidad de tu marca de manera rápida y segura.",
    "features": [
      "Análisis de requisitos",
      "Preparación de documentación",
      "Presentación del trámite",
      "Seguimiento hasta la aprobación"
    ],
    "price": "$150.500 ARS",
    "badge": "Gestión",
    "href": "/contacto",
    "popular": false,
    "icon": iconMap["ArrowPathIcon"],
    "details": [
      "Verificación de documentos legales",
      "Preparación de contrato de cesión",
      "Pago de tasas de transferencia",
      "Confirmación de cambio de titularidad"
    ]
  },
  {
    "title": "Presentación de Escritos",
    "description": "Presenta escritos legales relacionados con tu marca de manera profesional.",
    "features": [
      "Redacción de escritos",
      "Revisión de requisitos legales",
      "Presentación ante las autoridades",
      "Seguimiento del trámite"
    ],
    "price": "$60.000 ARS",
    "badge": "Escritos",
    "href": "/contacto",
    "popular": false,
    "icon": iconMap["PencilSquareIcon"],
    "details": [
      "Análisis del caso",
      "Preparación de argumentos legales",
      "Pago de tasas correspondientes",
      "Confirmación de recepción del escrito"
    ]
  },
  {
    "title": "Declaración Jurada de Uso de Medio Término",
    "description": "Cumple con los requisitos legales presentando la declaración jurada de uso de tu marca.",
    "features": [
      "Preparación de la declaración",
      "Revisión de requisitos legales",
      "Presentación ante las autoridades correspondientes",
      "Seguimiento del trámite"
    ],
    "price": "$89.000 ARS",
    "badge": "Legal",
    "href": "/contacto",
    "popular": false,
    "icon": iconMap["DocumentCheckIcon"],
    "details": [
      "Verificación de plazos legales",
      "Preparación de documentación requerida",
      "Pago de tasas correspondientes",
      "Confirmación de presentación exitosa"
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
  <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-primary">
    Registra y gestiona tu marca fácil 🌟✨
  </h2>
  <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
    🚀 Rápido y <span className="text-primary font-semibold">100% online</span> 🌐
  </p>
</div>

          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl mx-auto">
            {services.map((service, index) => (
              <Card key={index} className="relative w-full max-w-lg mx-auto p-2 sm:p-6 md:p-8 text-base sm:text-sm md:text-base">
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
                        <CardTitle className="text-lg sm:text-lg md:text-xl">{service.title}</CardTitle>
                        {service.badge && (
                          <Badge variant="secondary" className="mt-1">
                            {service.badge}
                          </Badge>
                        )}
                        <div className="block sm:hidden mt-2">
                          {service.price && (
                            <div className="text-left">
                              <div className="text-xl font-bold text-primary">
                                {service.price}
                              </div>
                              <div className="text-xs text-muted-foreground">
                                /servicio
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                    {service.price && (
                      <div className="hidden sm:block text-right">
                        <div className="text-2xl sm:text-xl md:text-2xl font-bold text-primary">
                          {service.price}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          /servicio
                        </div>
                      </div>
                    )}
                  </div>
                  <CardDescription className="text-sm sm:text-sm md:text-base mt-2 mb-2">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4 sm:space-y-6">
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
                      Consultar
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Steps Section */}
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
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
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
                <Card className="relative w-full max-w-xs mx-auto p-2 sm:p-6 md:p-8 text-base sm:text-sm md:text-base">
                  <div className="absolute -right-4 top-1/2 -translate-y-1/2 bg-primary text-primary-foreground rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg z-10">
                    {step.step}
                  </div>
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-2">
                      <step.icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-lg sm:text-lg md:text-xl font-bold mb-1">{step.title}</h3>
                    <p className="text-sm sm:text-sm md:text-base text-muted-foreground">{step.description}</p>
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