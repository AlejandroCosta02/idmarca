import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { ArrowRight, Phone, Mail } from "lucide-react"
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button"

interface CTASectionProps {
  title: string
  description: string
  primaryAction: {
    text: string
    href: string
  }
  secondaryAction?: {
    text: string
    href: string
  }
  variant?: "default" | "primary"
  descriptionClassName?: string
  titleClassName?: string
}

export function CTASection({
  title,
  description,
  primaryAction,
  secondaryAction,
  variant = "default",
  descriptionClassName = "",
  titleClassName = "",
}: CTASectionProps) {
  return (
    <section className={`py-16 ${variant === "primary" ? "bg-primary text-primary-foreground" : "bg-muted/50"}`}>
      <div className="container mx-auto">
        <div className={`mx-auto max-w-4xl text-center p-8`}>
          <h2 className={`text-3xl font-bold mb-4 ${titleClassName}`}>{title}</h2>
          <p className={`text-lg mb-8 max-w-2xl mx-auto ${descriptionClassName} ${variant !== "primary" ? "text-muted-foreground" : ""}`}>
            {description}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href={primaryAction.href} className="inline-block">
              <InteractiveHoverButton
                className={variant === "primary" ? "bg-white text-primary hover:bg-gray-100 h-12 px-6 rounded-md text-base font-semibold shadow-xs flex items-center" : "h-12 px-6 rounded-md text-base font-semibold shadow-xs flex items-center"}
              >
                {primaryAction.text}
              </InteractiveHoverButton>
            </Link>
            
            {secondaryAction && (
              <Button variant="outline" asChild size="lg">
                <Link href={secondaryAction.href}>
                  {secondaryAction.text}
                </Link>
              </Button>
            )}
          </div>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center text-sm text-muted-foreground">
            <div className="flex items-center space-x-2">
              <Phone className="h-4 w-4" />
              <span>+54 11 1234-5678</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="h-4 w-4" />
              <span>info@idmarca.com</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 