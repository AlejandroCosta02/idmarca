"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CheckCircle, Loader2, AlertCircle } from "lucide-react"
import { useState, useEffect } from "react"
import emailjs from '@emailjs/browser'
import { useSearchParams } from 'next/navigation'

// Updated services list to match the servicios page
const services = [
  "Búsqueda de Antecedentes",
  "Registro de Marcas, Patentes, Modelos de Utilidad y Diseños Industriales",
  "Renovación de Marca",
  "Oposición de Marca",
  "Transferencia de Titularidad",
  "Presentación de Escritos",
  "Declaración Jurada de Uso de Medio Término",
  "Dominio NIC.ar (.com.ar)",
  "PDF Inteligente (opcional)",
  "Presencia Digital (informativo)",
  "Otro"
]

export function ContactForm() {
  const searchParams = useSearchParams()
  
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

  // Handle URL parameter for pre-filling service
  useEffect(() => {
    const serviceParam = searchParams.get('service')
    if (serviceParam) {
      // Decode the service parameter and find the matching service
      const decodedService = decodeURIComponent(serviceParam)
      const matchingService = services.find(service => 
        service.toLowerCase().includes(decodedService.toLowerCase()) ||
        decodedService.toLowerCase().includes(service.toLowerCase())
      )
      
      if (matchingService) {
        setFormData(prev => ({
          ...prev,
          service: matchingService
        }))
      }
    }
  }, [searchParams])

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
              placeholder="Cuéntanos sobre tu proyecto o consulta..."
              rows={5}
              disabled={isSubmitting}
            />
          </div>

          <Button 
            type="submit" 
            className="w-full" 
            disabled={isSubmitting}
            size="lg"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Enviando...
              </>
            ) : (
              <>
                Enviar Consulta
              </>
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
} 