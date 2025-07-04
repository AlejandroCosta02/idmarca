"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Menu } from "lucide-react"
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
  const [mounted, setMounted] = React.useState(false)
  const pathname = usePathname()
  const { theme, resolvedTheme } = useTheme()

  React.useEffect(() => {
    setMounted(true)
  }, [])

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/"
    }
    return pathname.startsWith(href)
  }

  // Determine which logo to use based on theme, with fallback
  const logoSrc = mounted && (resolvedTheme === "dark" || theme === "dark") 
    ? "/logos/logo-darkmode.svg" 
    : "/logos/logo.svg"

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container mx-auto flex h-16 items-center justify-between">
        {/* Logo (always left) */}
        <div className="flex items-center md:mr-12">
          <Link href="/" className="flex items-center space-x-2">
            {mounted && (
              <Image 
                src={logoSrc}
                alt="IDmarca Logo" 
                width={180} 
                height={48} 
                className="h-12 w-auto"
              />
            )}
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

        {/* Mobile Navigation (burger icon right) */}
        <div className="flex md:hidden items-center">
          <div className="flex-1" /> {/* Spacer to push burger icon right */}
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden p-0 w-14 h-14 flex items-center justify-center">
                <Menu className="h-12 w-12" />
                <span className="sr-only">Abrir menú</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <SheetHeader>
                <SheetTitle>
                  {mounted && (
                    <Image 
                      src={logoSrc}
                      alt="IDmarca Logo" 
                      width={140} 
                      height={36} 
                      className="h-9 w-auto mx-auto"
                    />
                  )}
                </SheetTitle>
              </SheetHeader>
              <div className="mt-8 flex flex-col items-center justify-center space-y-6 min-h-[60vh]">
                {navigation.map((item) => {
                  const active = isActive(item.href)
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={`relative text-2xl font-semibold transition-all duration-300 ease-in-out text-center w-full py-2 ${
                        active 
                          ? "text-primary" 
                          : "text-muted-foreground hover:text-primary"
                      }`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                      {/* Active indicator for mobile */}
                      {active && (
                        <div className="absolute left-1/2 -translate-x-1/2 bottom-0 w-8 h-1 bg-primary rounded-full animate-in slide-in-from-bottom-1 duration-300" />
                      )}
                    </Link>
                  )
                })}
                <div className="flex items-center justify-center pt-6 space-x-4">
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