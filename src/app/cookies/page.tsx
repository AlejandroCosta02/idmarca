import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Política de Cookies | IDmarca - Especialistas en Registro de Marcas",
  description: "Lee nuestra política de cookies para entender cómo utilizamos cookies y tecnologías similares en IDmarca.",
  keywords: "cookies, política de cookies, privacidad, IDmarca, datos personales",
  alternates: {
    canonical: "https://idmarca.com/cookies",
  },
}

export default function CookiesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1 py-16">
        <div className="container mx-auto max-w-3xl px-4">
          <Card>
            <CardHeader>
              <CardTitle>Política de Cookies</CardTitle>
              <CardDescription>
                Última actualización: Mayo 2024
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6 text-base text-muted-foreground">
              <section>
                <h2 className="text-lg font-semibold mb-2">¿Qué son las cookies?</h2>
                <p>
                  Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo cuando visitas un sitio web. Sirven para recordar tus preferencias, mejorar tu experiencia de navegación y recopilar información estadística anónima.
                </p>
              </section>
              <section>
                <h2 className="text-lg font-semibold mb-2">¿Qué tipos de cookies utilizamos?</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Cookies esenciales:</strong> Necesarias para el funcionamiento básico del sitio web.</li>
                  <li><strong>Cookies de análisis:</strong> Nos ayudan a entender cómo los usuarios interactúan con nuestro sitio para mejorar nuestros servicios.</li>
                  <li><strong>Cookies de preferencia:</strong> Permiten recordar tus preferencias, como el idioma o la región.</li>
                </ul>
              </section>
              <section>
                <h2 className="text-lg font-semibold mb-2">¿Cómo puedes gestionar las cookies?</h2>
                <p>
                  Puedes configurar tu navegador para aceptar o rechazar cookies, así como para eliminarlas en cualquier momento. Ten en cuenta que deshabilitar cookies puede afectar el funcionamiento de algunas partes del sitio.
                </p>
              </section>
              <section>
                <h2 className="text-lg font-semibold mb-2">Cookies de terceros</h2>
                <p>
                  Utilizamos servicios de terceros, como Google Analytics, que pueden instalar sus propias cookies para recopilar información anónima sobre el uso del sitio.
                </p>
              </section>
              <section>
                <h2 className="text-lg font-semibold mb-2">Contacto</h2>
                <p>
                  Si tienes dudas sobre nuestra política de cookies, puedes contactarnos en <a href="mailto:contacto@idmarca.com" className="text-primary underline">contacto@idmarca.com</a>.
                </p>
              </section>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  )
} 