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
      <main className="flex-1 flex items-center justify-center bg-muted/30">
        <div className="max-w-2xl w-full mx-auto p-8">
          <Card className="bg-background/95 shadow-xl">
            <CardHeader>
              <CardTitle className="text-3xl text-primary mb-2">Política de Cookies</CardTitle>
              <CardDescription className="text-lg text-muted-foreground">
                Información clara y transparente sobre el uso de cookies en nuestro sitio web.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6 text-left">
              <section>
                <h2 className="text-xl font-semibold mb-2">¿Qué son las cookies?</h2>
                <p>
                  Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo cuando visitas un sitio web. Permiten que el sitio recuerde tus preferencias y mejoran tu experiencia de navegación.
                </p>
              </section>
              <section>
                <h2 className="text-xl font-semibold mb-2">¿Qué tipos de cookies utilizamos?</h2>
                <ul className="list-disc pl-6">
                  <li><b>Cookies esenciales:</b> necesarias para el funcionamiento básico del sitio.</li>
                  <li><b>Cookies de preferencias:</b> recuerdan tus configuraciones y preferencias.</li>
                  <li><b>Cookies de análisis:</b> nos ayudan a entender cómo los usuarios interactúan con el sitio para mejorar nuestros servicios (por ejemplo, Google Analytics).</li>
                </ul>
              </section>
              <section>
                <h2 className="text-xl font-semibold mb-2">¿Por qué usamos cookies?</h2>
                <ul className="list-disc pl-6">
                  <li>Para mejorar la funcionalidad y seguridad del sitio.</li>
                  <li>Para analizar el uso y rendimiento de nuestras páginas.</li>
                  <li>Para recordar tus preferencias y personalizar tu experiencia.</li>
                </ul>
              </section>
              <section>
                <h2 className="text-xl font-semibold mb-2">¿Cómo puedes gestionar las cookies?</h2>
                <p>
                  Puedes configurar tu navegador para aceptar o rechazar cookies, así como para eliminarlas en cualquier momento. Ten en cuenta que deshabilitar cookies puede afectar el funcionamiento de algunas partes del sitio.
                </p>
              </section>
              <section>
                <h2 className="text-xl font-semibold mb-2">Contacto</h2>
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