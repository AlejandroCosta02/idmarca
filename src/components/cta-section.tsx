"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Phone, Mail } from "lucide-react"
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button"
import Image from "next/image"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

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
  const { theme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Determine which logo to use based on theme
  const logoSrc = mounted && (resolvedTheme === "dark" || theme === "dark") 
    ? "/logos/logo-darkmode.svg" 
    : "/logos/logo.svg"

  return (
    <section className={`py-16 ${variant === "primary" ? "bg-primary text-primary-foreground" : "bg-muted/50"}`}>
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Left Column - Content */}
          <div className="text-center lg:text-left p-8">
            <h2 className={`text-3xl lg:text-4xl font-bold mb-4 ${titleClassName}`}>{title}</h2>
            <p className={`text-lg mb-8 max-w-2xl mx-auto lg:mx-0 ${descriptionClassName} ${variant !== "primary" ? "text-muted-foreground" : ""}`}>
              {description}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
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

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center text-sm text-foreground">
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

          {/* Right Column - Company Logo */}
          <div className="flex justify-center lg:justify-end p-8">
            <div className="relative">
              {mounted && (
                <div className="relative w-56 h-40 lg:w-80 lg:h-52">
                  <Image
                    src={logoSrc}
                    alt="IDmarca Logo"
                    fill
                    className="object-contain filter drop-shadow-lg"
                    sizes="(max-width: 768px) 224px, 320px"
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 