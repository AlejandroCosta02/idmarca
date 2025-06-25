import Link from "next/link"
import { Separator } from "@/components/ui/separator"

const footerLinks = {
  servicios: [
    { name: "Registro de Marcas", href: "/servicios" },
    { name: "Búsqueda de Marcas", href: "/servicios" },
    { name: "Renovación de Marcas", href: "/servicios" },
    { name: "Oposición de Marcas", href: "/servicios" },
  ],
  empresa: [
    { name: "Nosotros", href: "/nosotros" },
    { name: "Equipo", href: "/nosotros" },
    { name: "Blog", href: "/blog" },
    { name: "Prensa", href: "/prensa" },
  ],
  legal: [
    { name: "Política de Privacidad", href: "/privacidad" },
    { name: "Términos de Servicio", href: "/terminos" },
    { name: "Cookies", href: "/cookies" },
  ],
  contacto: [
    { name: "Contacto", href: "/contacto" },
    { name: "Soporte", href: "/soporte" },
    { name: "WhatsApp", href: "https://wa.me/5491112345678" },
  ],
}

export function Footer() {
  return (
    <footer className="border-t bg-muted/50">
      <div className="container mx-auto py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-bold text-primary">IDmarca</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Especialistas en registro de marcas comerciales en Argentina.
                Servicios profesionales ante INPI.
              </p>
            </div>
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">
                📧 info@idmarca.com
              </p>
              <p className="text-sm text-muted-foreground">
                📞 +54 11 1234-5678
              </p>
              <p className="text-sm text-muted-foreground">
                📍 Buenos Aires, Argentina
              </p>
            </div>
          </div>

          {/* Servicios */}
          <div>
            <h4 className="font-semibold">Servicios</h4>
            <ul className="mt-4 space-y-2">
              {footerLinks.servicios.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Empresa */}
          <div>
            <h4 className="font-semibold">Empresa</h4>
            <ul className="mt-4 space-y-2">
              {footerLinks.empresa.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h4 className="font-semibold">Contacto</h4>
            <ul className="mt-4 space-y-2">
              {footerLinks.contacto.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Separator className="my-8" />

        {/* Bottom Section */}
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="text-center md:text-left">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} IDmarca. Todos los derechos reservados.
            </p>
          </div>
          
          <div className="flex space-x-6">
            <Link
              href="/privacidad"
              className="text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              Privacidad
            </Link>
            <Link
              href="/terminos"
              className="text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              Términos
            </Link>
            <Link
              href="/cookies"
              className="text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
} 