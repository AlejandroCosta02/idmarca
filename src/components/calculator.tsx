"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calculator as CalculatorIcon, DollarSign, CheckCircle, ArrowRight, Globe, Loader2, AlertCircle } from "lucide-react"
import Stepper, { Step } from "./Stepper"
import businessTypesData from "@/data/business-types.json"
import { MultiSelect } from "@/components/ui/multiselect"
import { motion, AnimatePresence } from "framer-motion"
import confetti from "canvas-confetti"
import emailjs from '@emailjs/browser'

// Additional services that can add to the price
const additionalServices = [
  {
    name: "Búsqueda de Antecedentes",
    price: 25,
    description: "Verificación de disponibilidad"
  },
  {
    name: "Múltiples Clases",
    price: 50,
    description: "Por cada clase adicional"
  },
  {
    name: "Urgencia",
    price: 75,
    description: "Tramitación prioritaria"
  }
]

// Step 2 options
const step2Options = [
  "Expandirme a nuevas provincias",
  "Franquiciar mi producto",
  "Tener presencia digital fuerte",
  "Lanzar una línea de productos propia"
]

// Step 3 options
const step3Options = [
  "Redes sociales",
  "Etiquetas o envases",
  "Local físico",
  "Página web",
  "Aún no, estoy en proceso"
]

// Step 4 options
const step4Options = [
  "Sí",
  "No",
  "Estoy evaluándolo"
]

export function Calculator() {
  const [selectedBusiness, setSelectedBusiness] = useState<string>("")
  const [selectedBusinessValue, setSelectedBusinessValue] = useState<number | null>(null)
  const [selectedServices, setSelectedServices] = useState<string[]>([])
  const [totalPrice, setTotalPrice] = useState(0)
  const [isCompleted, setIsCompleted] = useState(false)
  const [selectedGoals, setSelectedGoals] = useState<string[]>([])
  const [customGoal, setCustomGoal] = useState("")
  const [selectedChannels, setSelectedChannels] = useState<string[]>([])
  const [selectedDomain, setSelectedDomain] = useState<string>("")
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [showModal, setShowModal] = useState(false)
  const [currentStep, setCurrentStep] = useState(1)
  const confettiFired = useRef(false)
  const [triedNext, setTriedNext] = useState<{ [step: number]: boolean }>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")
  const [submitMessage, setSubmitMessage] = useState("")

  useEffect(() => {
    if (showModal && !confettiFired.current) {
      confettiFired.current = true
      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.6 },
        zIndex: 10000
      })
    }
    if (!showModal) {
      confettiFired.current = false
    }
  }, [showModal])

  // Mark step as touched when user interacts
  useEffect(() => {
    setTriedNext((prev) => ({ ...prev, [currentStep]: false }))
    // eslint-disable-next-line
  }, [currentStep])

  // Validation logic for each step
  const isStepValid =
    (currentStep === 1 && !!selectedBusiness) ||
    (currentStep === 2 && (selectedGoals.length > 0 || customGoal.trim().length > 0)) ||
    (currentStep === 3 && selectedChannels.length > 0) ||
    (currentStep === 4 && !!selectedDomain) ||
    currentStep >= 5

  // Feedback messages for each step
  const stepFeedback: { [step: number]: string } = {
    1: "Por favor, selecciona un tipo de negocio para continuar.",
    2: "Selecciona al menos un objetivo o escribe uno propio para continuar.",
    3: "Selecciona al menos un canal para continuar.",
    4: "Selecciona una opción para continuar."
  }

  const calculatePrice = () => {
    let basePrice = 0
    
    // Get base price from selected business
    const business = businessTypesData.find(b => b.name === selectedBusiness)
    if (business) {
      basePrice = business.value
    }

    // Add additional services
    let additionalCost = 0
    selectedServices.forEach(serviceName => {
      const service = additionalServices.find(s => s.name === serviceName)
      if (service) {
        additionalCost += service.price
      }
    })

    return basePrice + additionalCost
  }

  const handleBusinessChange = (value: string) => {
    setSelectedBusiness(value)
    const found = (businessTypesData as { name: string; value: number }[]).find(b => b.name === value)
    setSelectedBusinessValue(found ? found.value : null)
  }

  // Step 2 handlers
  const handleGoalToggle = (goal: string) => {
    setSelectedGoals(prev =>
      prev.includes(goal)
        ? prev.filter(g => g !== goal)
        : [...prev, goal]
    )
  }
  const handleCustomGoalChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length <= 200) setCustomGoal(e.target.value)
  }

  // Step 5 submit handler
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")
    setSubmitMessage("")

    try {
      // Format the calculator responses
      const step1Response = selectedBusiness || "No seleccionado"
      
      const step2Responses = []
      if (selectedGoals.length > 0) {
        step2Responses.push(...selectedGoals)
      }
      if (customGoal.trim()) {
        step2Responses.push(customGoal)
      }
      const step2Response = step2Responses.length > 0 ? step2Responses.join(", ") : "No seleccionado"
      
      const step3Response = selectedChannels.length > 0 ? selectedChannels.join(", ") : "No seleccionado"
      const step4Response = selectedDomain || "No seleccionado"

      await emailjs.send(
        'service_uhjbshf',
        'template_43jyjbw',
        {
          name: name,
          email: email,
          phone: "",
          company: "",
          service: "Calculadora de Precios",
          message: `Calculadora de Precios - Respuestas:

1 - ¿Qué tipo de negocio tienes? - ${step1Response}
2 - ¿Qué te gustaría lograr con tu marca en los próximos meses? - ${step2Response}
3 - ¿Actualmente estás usando el nombre o logo de tu marca en algún canal? - ${step3Response}
4 - ¿Tenés un dominio web para tu marca o te gustaría registrarlo? - ${step4Response}

Precio estimado: $${selectedBusinessValue || 0} USD`,
          from_email: "contacto@idmarca.com"
        },
        '8BcOBBmrwvLQU_QLY'
      )
      
      setSubmitStatus("success")
      setSubmitMessage("¡Gracias por tu consulta! Te contactaremos en menos de 24 horas.")
      
      // Show the success modal
      setShowModal(true)
      
    } catch (error) {
      setSubmitStatus("error")
      setSubmitMessage("Hubo un error al enviar tu consulta. Por favor, inténtalo nuevamente.")
      console.error(error)
    } finally {
      setIsSubmitting(false)
    }
  }

  // Reset calculator
  const handleReset = () => {
    setCurrentStep(1)
    setSelectedBusiness("")
    setSelectedBusinessValue(null)
    setSelectedGoals([])
    setCustomGoal("")
    setSelectedChannels([])
    setSelectedDomain("")
    setName("")
    setEmail("")
    setShowModal(false)
  }

  return (
    <div className="max-w-4xl mx-auto">
      {!isCompleted ? (
        <Stepper
          currentStep={currentStep}
          setCurrentStep={setCurrentStep}
          onFinalStepCompleted={() => {}}
          backButtonText="Anterior"
          nextButtonText="Siguiente"
          stepCircleContainerClassName="bg-background"
          contentClassName="py-8"
          lastStepButtonText="Calcular nuevamente"
          onLastStepButtonClick={handleReset}
          nextButtonProps={{
            disabled: !isStepValid
          }}
          onInvalidNext={(step) => setTriedNext((prev) => ({ ...prev, [step]: true }))}
        >
          <Step>
            <div className="text-center space-y-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <CalculatorIcon className="h-8 w-8 text-primary" />
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-2">¿Qué tipo de negocio tienes?</h2>
                <p className="text-muted-foreground">
                  Selecciona el tipo de actividad que mejor describe tu negocio para obtener un precio más preciso.
                </p>
              </div>
              <div className="max-w-xs mx-auto">
                <Select value={selectedBusiness} onValueChange={handleBusinessChange}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Selecciona tu tipo de negocio" />
                  </SelectTrigger>
                  <SelectContent>
                    {(businessTypesData as { name: string; value: number }[]).map((business) => (
                      <SelectItem key={business.name} value={business.name}>
                        {business.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </Step>

          <Step>
            <div className="text-center space-y-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle className="h-8 w-8 text-primary" />
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-2">¿Qué te gustaría lograr con tu marca en los próximos meses?</h2>
                <p className="text-muted-foreground">
                  Selecciona una o más opciones y/o escribe tu propio objetivo.
                </p>
              </div>
              <div className="max-w-xs mx-auto space-y-4">
                <MultiSelect
                  options={step2Options}
                  selected={selectedGoals}
                  onChange={setSelectedGoals}
                  placeholder="Selecciona tus objetivos"
                />
                <input
                  type="text"
                  value={customGoal}
                  onChange={handleCustomGoalChange}
                  maxLength={200}
                  placeholder="Otro objetivo (máx. 200 caracteres)"
                  className="w-full border rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <div className="text-xs text-muted-foreground text-right mt-1">{customGoal.length}/200</div>
              </div>
            </div>
          </Step>

          <Step>
            <div className="text-center space-y-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <DollarSign className="h-8 w-8 text-primary" />
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-2">¿Actualmente estás usando el nombre o logo de tu marca en algún canal?</h2>
                <p className="text-muted-foreground">
                  Selecciona todos los canales que correspondan.
                </p>
              </div>
              <div className="max-w-xs mx-auto space-y-4">
                <MultiSelect
                  options={step3Options}
                  selected={selectedChannels}
                  onChange={setSelectedChannels}
                  placeholder="Selecciona los canales"
                />
              </div>
            </div>
          </Step>

          <Step>
            <div className="text-center space-y-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <Globe className="h-8 w-8 text-primary" />
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-2">¿Tenés un dominio web para tu marca o te gustaría registrarlo?</h2>
                <p className="text-muted-foreground">
                  Selecciona una opción.
                </p>
              </div>
              <div className="max-w-xs mx-auto space-y-4">
                {step4Options.map((option) => (
                  <label key={option} className={`flex items-center gap-3 p-3 rounded border cursor-pointer transition-all ${selectedDomain === option ? 'border-primary bg-primary/5 font-semibold' : 'border-border'}`}>
                    <input
                      type="radio"
                      name="domain"
                      value={option}
                      checked={selectedDomain === option}
                      onChange={() => setSelectedDomain(option)}
                      className="form-radio h-5 w-5 text-primary border-primary focus:ring-primary"
                    />
                    <span className="text-left">{option}</span>
                  </label>
                ))}
              </div>
            </div>
          </Step>

          <Step>
            <div className="text-center space-y-8">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <DollarSign className="h-8 w-8 text-primary" />
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-2">Precio Estimado</h2>
                <div className="text-4xl font-bold text-primary mb-2">
                  {selectedBusiness
                    ? `$${businessTypesData.find(b => b.name === selectedBusiness)?.value ?? 1} USD`
                    : <span className="text-base text-muted-foreground">Selecciona un tipo de negocio</span>
                  }
                </div>
                <p className="text-muted-foreground max-w-md mx-auto">
                  Este precio es solo estimativo. Necesitamos una consulta para darte un número exacto. Cada marca es diferente y tratamos a cada cliente de forma personalizada.
                </p>
              </div>
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

              <form onSubmit={handleSubmit} className="max-w-xs mx-auto space-y-4">
                <input
                  type="text"
                  value={name}
                  onChange={e => setName(e.target.value)}
                  required
                  placeholder="Nombre"
                  disabled={isSubmitting}
                  className="w-full border rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <input
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  required
                  placeholder="Email"
                  disabled={isSubmitting}
                  className="w-full border rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Enviando...
                    </>
                  ) : (
                    "Enviar Solicitud"
                  )}
                </Button>
                {currentStep < 5 && !isStepValid && triedNext[currentStep] && (
                  <div className="text-xs text-red-500 mt-2 text-center">{stepFeedback[currentStep]}</div>
                )}
              </form>
            </div>
            {showModal && (
              <AnimatePresence>
                <motion.div
                  className="fixed inset-0 bg-black/30 backdrop-blur-sm z-50 flex items-center justify-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <motion.div
                    className="bg-white rounded-xl shadow-lg p-8 max-w-sm w-full text-center"
                    initial={{ scale: 0.7, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.7, opacity: 0 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="h-8 w-8 text-green-600" />
                    </div>
                    <h2 className="text-2xl font-bold mb-2">¡Felicitaciones!</h2>
                    <p className="text-muted-foreground mb-4">{submitMessage}</p>
                    <Button onClick={() => setShowModal(false)} className="w-full mt-2">Cerrar</Button>
                  </motion.div>
                </motion.div>
              </AnimatePresence>
            )}
          </Step>
        </Stepper>
      ) : (
        <div className="text-center space-y-8">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto">
            <CheckCircle className="h-10 w-10 text-green-600" />
          </div>
          
          <div>
            <h2 className="text-3xl font-bold mb-4">¡Cotización Calculada!</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Tu precio estimado para el registro de marca
            </p>
          </div>
          
          <Card className="max-w-md mx-auto">
            <CardContent className="p-8">
              <div className="text-center space-y-4">
                <div className="text-4xl font-bold text-primary">
                  ${totalPrice} USD
                </div>
                <p className="text-muted-foreground">
                  Precio estimado incluyendo todos los servicios seleccionados
                </p>
              </div>
            </CardContent>
          </Card>
          
          <div className="space-y-4">
            <Button asChild size="lg" className="w-full sm:w-auto">
              <a href="/contacto">
                Consultar Gratis
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="w-full sm:w-auto"
              onClick={() => {
                setIsCompleted(false)
                setSelectedBusiness("")
                setSelectedServices([])
                setTotalPrice(0)
              }}
            >
              Calcular Nuevamente
            </Button>
          </div>
        </div>
      )}
    </div>
  )
} 