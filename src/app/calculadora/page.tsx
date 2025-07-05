import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { CTASection } from "@/components/cta-section"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Calculator as CalculatorIcon, ArrowRight } from "lucide-react"
import type { Metadata } from "next"
import { Calculator } from "@/components/calculator"

export const metadata: Metadata = {
  title: "Calculadora de Precios | Registro de Marcas | IDmarca",
  description: "Calcula el precio estimado para tu registro de marca, patente, modelo de utilidad o diseño industrial. Herramienta gratuita para obtener un presupuesto personalizado.",
  keywords: "calculadora precios marcas, presupuesto registro marcas, precio patentes, calculadora propiedad intelectual, presupuesto INPI Argentina",
  openGraph: {
    title: "Calculadora de Precios | Registro de Marcas | IDmarca",
    description: "Calcula el precio estimado para tu registro de marca, patente, modelo de utilidad o diseño industrial.",
    url: "https://idmarca.com/calculadora",
  },
  alternates: {
    canonical: "https://idmarca.com/calculadora",
  },
}

// Structured Data for Calculator
const structuredData = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Calculadora de Precios IDmarca",
  "description": "Calculadora para estimar precios de servicios de propiedad intelectual",
  "url": "https://idmarca.com/calculadora",
  "applicationCategory": "BusinessApplication",
  "operatingSystem": "Web Browser",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD",
    "availability": "https://schema.org/InStock"
  }
}

export default function CalculadoraPage() {
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
              Calculadora de Precios
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Calcula el{" "}
              <span className="text-primary">Precio Estimado</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Obtén un presupuesto personalizado para tu registro de marca, patente, modelo de utilidad o diseño industrial. 
              Calculadora gratuita y sin compromiso.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="#calculadora">
                  Calcular Precio
                  <CalculatorIcon className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/contacto">
                  Consultar Gratis
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section id="calculadora" className="py-16 bg-muted/30">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-primary">
                Calculadora de Precios 💰
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Selecciona el tipo de servicio y obtén un presupuesto personalizado
              </p>
            </div>
            
            {/* Calculator Component */}
            <Calculator />
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Servicios de Propiedad Intelectual
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Ofrecemos servicios completos para proteger tu marca e innovación
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <Card className="text-center p-6">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <FileText className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Registro de Marcas</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Protege tu marca comercial en Argentina
              </p>
              <Badge variant="secondary">Desde $25 USD</Badge>
            </Card>
            
            <Card className="text-center p-6">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Search className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Búsqueda de Antecedentes</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Verifica la disponibilidad de tu marca
              </p>
              <Badge variant="secondary">$25 USD</Badge>
            </Card>
            
            <Card className="text-center p-6">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <RefreshCw className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Renovación de Marca</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Mantén tu marca vigente
              </p>
              <Badge variant="secondary">$78 USD</Badge>
            </Card>
            
            <Card className="text-center p-6">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <AlertTriangle className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Oposición de Marca</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Defiende tus derechos de marca
              </p>
              <Badge variant="secondary">$86 USD</Badge>
            </Card>
            
            <Card className="text-center p-6">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Transferencia de Titularidad</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Cambia la titularidad de tu marca
              </p>
              <Badge variant="secondary">$136 USD</Badge>
            </Card>
            
            <Card className="text-center p-6">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Pencil className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Presentación de Escritos</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Escritos legales profesionales
              </p>
              <Badge variant="secondary">$63 USD</Badge>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="¿Necesitas un presupuesto personalizado?"
        description="Nuestros expertos están listos para ayudarte a calcular el precio exacto para tu proyecto. Consulta gratuita sin compromiso."
        primaryAction={{
          text: "Consultar Gratis",
          href: "/contacto"
        }}
        secondaryAction={{
          text: "Ver Servicios",
          href: "/servicios"
        }}
      />

      <Footer />
    </div>
  )
} 