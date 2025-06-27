import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { CTASection } from "@/components/cta-section"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import Link from "next/link"
import { 
  ArrowRight, 
  Check, 
  X,
  FileText, 
  Search, 
  RefreshCw, 
  AlertTriangle,
  Shield,
  Users
} from "lucide-react"
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button"

const pricingPlans = [
  {
    name: "Básico",
    description: "Para verificar la disponibilidad de tu marca",
    price: "$35.500 ARS",
    period: "por servicio",
    features: [
      "Búsqueda en base de datos INPI",
      "Análisis de conflictos básico",
      "Informe de disponibilidad",
      "Recomendaciones iniciales",
      "Soporte por email"
    ],
    notIncluded: [
      "Preparación y presentación de documentación",
      "Seguimiento del trámite",
      "Asesoramiento legal completo"
    ],
    popular: false,
    href: "/contacto",
    icon: Search
  },
  {
    name: "Estándar",
    description: "Registro completo de marca comercial",
    price: "$205.000 ARS",
    period: "por servicio",
    features: [
      "Búsqueda previa de disponibilidad",
      "Preparación de documentación completa",
      "Presentación de la documentación correspondiente",
      "Seguimiento del trámite",
      "Respuesta a observaciones",
      "Certificado de registro",
      "Asesoramiento legal completo",
      "Soporte prioritario"
    ],
    notIncluded: [
      "Renovación de marca",
      "Defensa en oposiciones",
      "Monitoreo continuo"
    ],
    popular: true,
    href: "/contacto",
    icon: FileText
  },
  {
    name: "Premium",
    description: "Servicio integral con monitoreo continuo",
    price: "$250.000 ARS",
    period: "por servicio",
    features: [
      "Todo lo del plan Estándar",
      "Renovación de marca incluida",
      "Monitoreo de marcas similares",
      "Defensa en oposiciones",
      "Asesoramiento estratégico",
      "Soporte telefónico 24/7",
      "Informes periódicos",
      "Gestión de conflictos"
    ],
    notIncluded: [
      "Litigios complejos",
      "Servicios internacionales"
    ],
    popular: false,
    href: "/contacto",
    icon: Shield
  }
]

const additionalServices = [
  {
    name: "Renovación de Marca",
    description: "Renovación de registros existentes",
    price: "$25.000",
    icon: RefreshCw
  },
  {
    name: "Oposición de Marca",
    description: "Defensa de derechos de marca",
    price: "$35.000",
    icon: AlertTriangle
  },
  {
    name: "Búsqueda Internacional",
    description: "Búsqueda en bases de datos internacionales",
    price: "$30.000",
    icon: Search
  },
  {
    name: "Asesoramiento Legal",
    description: "Consulta legal especializada",
    price: "$20.000",
    icon: Users
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
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto">
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="secondary" className="mb-4">
              Precios Transparentes
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Planes y{" "}
              <span className="text-primary">Precios</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Precios claros y transparentes para proteger tu marca comercial. 
              Sin costos ocultos, sin sorpresas.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Planes de Servicio
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Elige el plan que mejor se adapte a tus necesidades
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <Card key={index} className={`relative ${plan.popular ? 'border-primary shadow-lg scale-105' : ''}`}>
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground">
                    Más Popular
                  </Badge>
                )}
                <CardHeader className="text-center">
                  <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <plan.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <CardDescription className="text-base">
                    {plan.description}
                  </CardDescription>
                  <div className="pt-4">
                    <div className="text-4xl font-bold text-primary">
                      {plan.price}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {plan.period}
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-3">Incluye:</h4>
                    <ul className="space-y-2">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center space-x-2">
                          <Check className="h-4 w-4 text-primary flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {plan.notIncluded.length > 0 && (
                    <>
                      <Separator />
                      <div>
                        <h4 className="font-semibold mb-3 text-muted-foreground">No incluye:</h4>
                        <ul className="space-y-2">
                          {plan.notIncluded.map((item, itemIndex) => (
                            <li key={itemIndex} className="flex items-center space-x-2">
                              <X className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                              <span className="text-sm text-muted-foreground">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </>
                  )}
                  
                  <Button asChild className="w-full" variant={plan.popular ? "default" : "outline"}>
                    <Link href={plan.href}>
                      Elegir {plan.name}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      {/* <section className="py-20">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Servicios Adicionales
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Servicios complementarios para necesidades específicas
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalServices.map((service, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{service.name}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-primary mb-4">
                    {service.price}
                  </div>
                  <Button asChild variant="outline" className="w-full">
                    <Link href="/contacto" className="inline-block w-full">
                      <InteractiveHoverButton className="w-full">
                        Consultar
                      </InteractiveHoverButton>
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section> */}

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