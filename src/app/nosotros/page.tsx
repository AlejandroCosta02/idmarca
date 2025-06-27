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
  Shield, 
  Clock, 
  Users, 
  CheckCircle, 
  Award, 
  Target, 
  Heart, 
  Star
} from "lucide-react"

const values = [
  {
    icon: Shield,
    title: "Confianza",
    description: "Construimos relaciones duraderas basadas en la transparencia y la confianza mutua"
  },
  {
    icon: Users,
    title: "Experiencia",
    description: "Más de 10 años de experiencia en propiedad intelectual y registro de marcas"
  },
  {
    icon: Award,
    title: "Excelencia",
    description: "Nos esforzamos por la excelencia en cada servicio que ofrecemos"
  },
  {
    icon: Target,
    title: "Resultados",
    description: "Enfocados en obtener resultados concretos para nuestros clientes"
  }
]

const team = [
  {
    name: "Dr. María González",
    role: "Directora General",
    description: "Especialista en propiedad intelectual con más de 15 años de experiencia",
    expertise: ["Derecho Comercial", "Propiedad Intelectual", "Gestión de Marcas"]
  },
  {
    name: "Lic. Carlos Rodríguez",
    role: "Asesor Legal Senior",
    description: "Experto en registro de marcas y procedimientos ante INPI",
    expertise: ["Registro de Marcas", "Oposiciones", "Renovaciones"]
  },
  {
    name: "Dra. Ana Martínez",
    role: "Especialista en Patentes",
    description: "Especializada en patentes y modelos de utilidad",
    expertise: ["Patentes", "Modelos de Utilidad", "Diseños Industriales"]
  }
]

const stats = [
  { number: "500+", label: "Marcas Registradas", icon: Clock },
  { number: "98%", label: "Tasa de Éxito", icon: CheckCircle },
  { number: "10+", label: "Años de Experiencia", icon: Award },
  { number: "1000+", label: "Clientes Satisfechos", icon: Users }
]

const timeline = [
  {
    year: "2014",
    title: "Fundación",
    description: "Nacimos con la misión de democratizar el acceso a la protección de marcas comerciales"
  },
  {
    year: "2016",
    title: "Primeros 100 registros",
    description: "Alcanzamos nuestro primer hito con 100 marcas registradas exitosamente"
  },
  {
    year: "2019",
    title: "Expansión de servicios",
    description: "Incorporamos servicios de patentes y modelos de utilidad"
  },
  {
    year: "2022",
    title: "Plataforma digital",
    description: "Lanzamos nuestra plataforma online para mayor accesibilidad"
  },
  {
    year: "2024",
    title: "Líderes del sector",
    description: "Nos consolidamos como una de las empresas líderes en propiedad intelectual"
  }
]

export default function NosotrosPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <Badge variant="secondary" className="text-sm">
                Sobre Nosotros
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Protegiendo{" "}
                <span className="text-primary">Tu Marca</span>{" "}
                desde 2014
              </h1>
              <p className="text-xl text-muted-foreground">
                Somos especialistas en propiedad intelectual con más de 10 años de experiencia 
                ayudando a empresas y emprendedores a proteger sus marcas comerciales en Argentina.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg">
                  <Link href="/contacto">
                    Conoce Nuestro Equipo
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" asChild size="lg">
                  <Link href="/servicios">Ver Servicios</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl p-8">
                <div className="space-y-6">
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-primary mb-2">Nuestra Misión</h3>
                    <p className="text-muted-foreground">
                      Facilitar el acceso a la protección de marcas comerciales para que 
                      cada emprendedor pueda proteger su identidad de marca.
                    </p>
                  </div>
                  <Separator />
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-primary mb-2">Nuestra Visión</h3>
                    <p className="text-muted-foreground">
                      Ser la empresa líder en servicios de propiedad intelectual, 
                      reconocida por la excelencia y la innovación.
                    </p>
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
                <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <stat.icon className="h-8 w-8 text-primary" />
                </div>
                <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Nuestros Valores
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Los principios que guían nuestro trabajo y nuestra relación con los clientes
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <value.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {value.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Nuestra Historia
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Una década de crecimiento y compromiso con nuestros clientes
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {timeline.map((item, index) => (
                <div key={index} className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg">
                      {item.year}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              ¿Por qué elegir IDmarca?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Descubre las ventajas de trabajar con especialistas en propiedad intelectual
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Transparencia Total</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Te mantenemos informado en cada paso del proceso con actualizaciones regulares.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Heart className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Atención Personalizada</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Cada cliente recibe atención personalizada y asesoramiento específico para su caso.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Star className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Proceso Eficiente</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Optimizamos cada trámite para obtener resultados en el menor tiempo posible.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="¿Listo para trabajar con expertos?"
        description="Nuestro equipo está listo para ayudarte a proteger tu marca comercial. Contáctanos para una consulta gratuita."
        primaryAction={{
          text: "Contactar Equipo",
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