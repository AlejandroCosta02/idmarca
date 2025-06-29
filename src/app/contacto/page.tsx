import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { CTASection } from "@/components/cta-section"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock
} from "lucide-react"
import { ContactForm } from "@/components/contact-form"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contacto | Registro de Marcas | IDmarca",
  description: "Contacta con nuestros expertos en registro de marcas. Consulta gratuita, asesoramiento personalizado. Teléfono, email y formulario de contacto disponible 24/7.",
  keywords: "contacto registro marcas, consulta gratuita marcas, asesoramiento propiedad intelectual, contacto INPI Argentina",
  openGraph: {
    title: "Contacto | Registro de Marcas | IDmarca",
    description: "Contacta con nuestros expertos en registro de marcas. Consulta gratuita, asesoramiento personalizado.",
    url: "https://idmarca.com/contacto",
  },
  alternates: {
    canonical: "https://idmarca.com/contacto",
  },
}

// Structured Data for Contact
const structuredData = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "name": "Contacto IDmarca",
  "description": "Página de contacto para servicios de registro de marcas en Argentina",
  "url": "https://idmarca.com/contacto",
  "mainEntity": {
    "@type": "Organization",
    "name": "IDmarca",
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "contactType": "customer service",
        "telephone": "+54-11-1234-5678", // Add your actual phone
        "email": "info@idmarca.com", // Add your actual email
        "availableLanguage": "Spanish",
        "areaServed": "AR"
      }
    ],
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "AR",
      "addressLocality": "Buenos Aires",
      "addressRegion": "Buenos Aires"
    }
  }
}

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    value: "contacto@idmarca.com",
    description: "Envíanos un email"
  },
  {
    icon: Phone,
    title: "Teléfono",
    value: "+54 11 1234-5678",
    description: "Llámanos directamente"
  },
  {
    icon: MapPin,
    title: "Oficina",
    value: "Buenos Aires, Argentina",
    description: "Visítanos en persona"
  },
  {
    icon: Clock,
    title: "Horarios",
    value: "Lun - Vie: 9:00 - 18:00",
    description: "Horario de atención"
  }
]

export default function ContactoPage() {
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
              Contacto
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              ¿Necesitas{" "}
              <span className="text-primary">Ayuda?</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Nuestro equipo de expertos está listo para ayudarte a proteger tu marca comercial. 
              Contáctanos para obtener una consulta gratuita.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-20">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <ContactForm />
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-6">Información de Contacto</h2>
                <p className="text-muted-foreground mb-8">
                  Estamos aquí para ayudarte. Puedes contactarnos a través de cualquiera de estos medios.
                </p>
              </div>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <Card key={index}>
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <info.icon className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold mb-1">{info.title}</h3>
                          <p className="text-lg font-medium text-primary mb-1">{info.value}</p>
                          <p className="text-sm text-muted-foreground">{info.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Separator />

              <div>
                <h3 className="text-lg font-semibold mb-4">¿Por qué elegir IDmarca?</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-sm">Respuesta en menos de 24 horas</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-sm">Asesoramiento experto y personalizado</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-sm">Seguimiento completo del proceso</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-sm">Precios transparentes sin costos ocultos</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="¿Listo para proteger tu marca?"
        description="No esperes más. Contáctanos hoy mismo y comienza el proceso de registro de tu marca comercial."
        primaryAction={{
          text: "Consultar Gratis",
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