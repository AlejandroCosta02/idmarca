"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send,
  CheckCircle,
  Loader2,
  AlertCircle
} from "lucide-react"
import { useState } from "react"
import emailjs from '@emailjs/browser'

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

const services = [
  "Registro de Marcas",
  "Búsqueda de Marcas",
  "Renovación de Marcas",
  "Oposición de Marcas",
  "Transferencias de Titularidad",
  "Presentación de Escritos",
  "Declaración Jurada de Uso",
  "Asesoramiento Legal",
  "Otro"
]

export default function ContactoPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: ""
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")
  const [submitMessage, setSubmitMessage] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")
    setSubmitMessage("")

    try {
      await emailjs.send(
        'service_uhjbshf',
        'template_43jyjbw',
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          company: formData.company,
          service: formData.service,
          message: formData.message,
          from_email: "contacto@idmarca.com"
        },
        '8BcOBBmrwvLQU_QLY'
      )
      
      setSubmitStatus("success")
      setSubmitMessage("¡Gracias por tu consulta! Te contactaremos en menos de 24 horas.")
      
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        service: "",
        message: ""
      })
      
    } catch (error) {
      setSubmitStatus("error")
      setSubmitMessage("Hubo un error al enviar tu consulta. Por favor, inténtalo nuevamente.")
      console.error(error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  return (
    <div className="min-h-screen">
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
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Envíanos tu Consulta</CardTitle>
                  <CardDescription>
                    Completa el formulario y te contactaremos en menos de 24 horas
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {/* Success/Error Messages */}
                  {submitStatus === "success" && (
                    <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                      <p className="text-green-800">{submitMessage}</p>
                    </div>
                  )}
                  
                  {submitStatus === "error" && (
                    <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center space-x-3">
                      <AlertCircle className="h-5 w-5 text-red-600 flex-shrink-0" />
                      <p className="text-red-800">{submitMessage}</p>
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-medium mb-2 block">
                          Nombre completo *
                        </label>
                        <Input
                          required
                          value={formData.name}
                          onChange={(e) => handleChange("name", e.target.value)}
                          placeholder="Tu nombre completo"
                          disabled={isSubmitting}
                        />
                      </div>
                      <div>
                        <label className="text-sm font-medium mb-2 block">
                          Email *
                        </label>
                        <Input
                          required
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleChange("email", e.target.value)}
                          placeholder="tu@email.com"
                          disabled={isSubmitting}
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-medium mb-2 block">
                          Teléfono
                        </label>
                        <Input
                          value={formData.phone}
                          onChange={(e) => handleChange("phone", e.target.value)}
                          placeholder="+54 11 1234-5678"
                          disabled={isSubmitting}
                        />
                      </div>
                      <div>
                        <label className="text-sm font-medium mb-2 block">
                          Empresa
                        </label>
                        <Input
                          value={formData.company}
                          onChange={(e) => handleChange("company", e.target.value)}
                          placeholder="Nombre de tu empresa"
                          disabled={isSubmitting}
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-sm font-medium mb-2 block">
                        Servicio de interés *
                      </label>
                      <Select
                        value={formData.service}
                        onValueChange={(value) => handleChange("service", value)}
                        required
                        disabled={isSubmitting}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Selecciona un servicio" />
                        </SelectTrigger>
                        <SelectContent>
                          {services.map((service) => (
                            <SelectItem key={service} value={service}>
                              {service}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <label className="text-sm font-medium mb-2 block">
                        Mensaje *
                      </label>
                      <Textarea
                        required
                        value={formData.message}
                        onChange={(e) => handleChange("message", e.target.value)}
                        placeholder="Cuéntanos sobre tu marca y necesidades..."
                        rows={5}
                        disabled={isSubmitting}
                      />
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full" 
                      size="lg"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Enviando...
                        </>
                      ) : (
                        <>
                          <Send className="mr-2 h-4 w-4" />
                          Enviar Consulta
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-6">Información de Contacto</h2>
                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <info.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold">{info.title}</h3>
                        <p className="text-primary font-medium">{info.value}</p>
                        <p className="text-sm text-muted-foreground">{info.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <Separator />

              <div>
                <h3 className="text-xl font-bold mb-4">¿Por qué elegirnos?</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-sm">Consulta gratuita sin compromiso</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-sm">Respuesta en menos de 24 horas</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-sm">Asesoramiento personalizado</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-sm">Seguimiento completo del proceso</span>
                  </div>
                </div>
              </div>
            </div>
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
              Resolvemos las dudas más comunes sobre el proceso de contacto
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">¿Cuánto tiempo tardan en responder?</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Nos comprometemos a responder todas las consultas en menos de 24 horas hábiles.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">¿La consulta inicial tiene costo?</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  No, la consulta inicial es completamente gratuita y sin compromiso.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">¿Puedo agendar una videollamada?</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Sí, podemos coordinar una videollamada para discutir tu caso en detalle.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">¿Atienden en todo el país?</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Sí, ofrecemos servicios en todo el territorio argentino de forma remota.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
} 