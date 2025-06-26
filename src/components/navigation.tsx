"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button"
import { ThemeToggle } from "@/components/theme-toggle"

const navigation = [
  { name: "Inicio", href: "/" },
  { name: "Servicios", href: "/servicios" },
  { name: "Precios", href: "/precios" },
  { name: "Nosotros", href: "/nosotros" },
  { name: "Contacto", href: "/contacto" },
]

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)
  const pathname = usePathname()
  const { theme } = useTheme()

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/"
    }
    return pathname.startsWith(href)
  }

  // Determine which logo to use based on theme
  const logoSrc = theme === "dark" ? "/logos/logo-darkmode.svg" : "/logos/logo.svg"

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container mx-auto flex h-16 items-center">
        <div className="mr-8">
          <Link href="/" className="flex items-center space-x-2">
            <Image 
              src={logoSrc}
              alt="IDmarca Logo" 
              width={120} 
              height={32} 
              className="h-8 w-auto"
            />
          </Link>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex md:flex-1 md:items-center md:justify-between">
          <div className="flex space-x-6">
            {navigation.map((item) => {
              const active = isActive(item.href)
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`relative text-sm font-medium transition-all duration-300 ease-in-out ${
                    active 
                      ? "text-primary" 
                      : "text-muted-foreground hover:text-primary"
                  }`}
                >
                  {item.name}
                  {/* Active indicator */}
                  {active && (
                    <div className="absolute -bottom-2 left-0 right-0 h-0.5 bg-primary rounded-full animate-in slide-in-from-bottom-1 duration-300" />
                  )}
                  {/* Hover indicator */}
                  <div className="absolute -bottom-2 left-0 right-0 h-0.5 bg-primary/20 rounded-full scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
                </Link>
              )
            })}
          </div>
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <Link href="/contacto" className="inline-block">
              <InteractiveHoverButton>
                Consultar
              </InteractiveHoverButton>
            </Link>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="flex md:hidden">
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Abrir menú</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <SheetHeader>
                <SheetTitle>
                  <Image 
                    src={logoSrc}
                    alt="IDmarca Logo" 
                    width={100} 
                    height={26} 
                    className="h-6 w-auto"
                  />
                </SheetTitle>
              </SheetHeader>
              <div className="mt-8 flex flex-col space-y-4">
                {navigation.map((item) => {
                  const active = isActive(item.href)
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={`relative text-lg font-medium transition-all duration-300 ease-in-out ${
                        active 
                          ? "text-primary" 
                          : "text-muted-foreground hover:text-primary"
                      }`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                      {/* Active indicator for mobile */}
                      {active && (
                        <div className="absolute -left-4 top-1/2 w-1 h-6 bg-primary rounded-full -translate-y-1/2 animate-in slide-in-from-left-1 duration-300" />
                      )}
                    </Link>
                  )
                })}
                <div className="flex items-center justify-between pt-4">
                  <ThemeToggle />
                  <Link href="/contacto" className="inline-block">
                    <InteractiveHoverButton>
                      Consultar
                    </InteractiveHoverButton>
                  </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  )
} 