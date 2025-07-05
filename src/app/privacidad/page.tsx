import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function PrivacidadPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1 flex items-center justify-center bg-muted/30">
        <div className="text-left p-10 rounded-2xl bg-background/90 shadow-xl max-w-2xl mx-auto">
          <h1 className="text-3xl font-bold mb-4 text-primary">Política de Privacidad</h1>
          <p className="mb-6 text-muted-foreground">
            En IDmarca, nos comprometemos a proteger la privacidad de nuestros usuarios y clientes. Esta política explica cómo recopilamos, utilizamos y protegemos tus datos personales.
          </p>

          <h2 className="text-xl font-semibold mt-6 mb-2">1. ¿Qué datos recopilamos?</h2>
          <p className="mb-4">Recopilamos los siguientes datos personales a través de nuestros formularios de contacto y formularios dinámicos:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Nombre</li>
            <li>Email</li>
            <li>Información sobre tu negocio</li>
          </ul>

          <h2 className="text-xl font-semibold mt-6 mb-2">2. ¿Cómo recopilamos los datos?</h2>
          <p className="mb-4">Los datos se recopilan cuando completas y envías nuestros formularios de contacto o formularios dinámicos en el sitio web.</p>

          <h2 className="text-xl font-semibold mt-6 mb-2">3. ¿Para qué utilizamos tus datos?</h2>
          <ul className="list-disc pl-6 mb-4">
            <li>Responder tus consultas y solicitudes</li>
            <li>Realizar análisis internos y mejorar nuestros servicios</li>
            <li>Contactar a posibles clientes interesados en nuestros servicios</li>
          </ul>

          <h2 className="text-xl font-semibold mt-6 mb-2">4. ¿Compartimos tus datos?</h2>
          <p className="mb-4">No compartimos tus datos personales con terceros. La información que nos proporcionas es utilizada únicamente por el equipo de IDmarca.</p>

          <h2 className="text-xl font-semibold mt-6 mb-2">5. Uso de cookies</h2>
          <p className="mb-4">Utilizamos cookies y tecnologías similares para mejorar la experiencia del usuario y optimizar nuestros servicios. Puedes configurar tu navegador para rechazar cookies, aunque esto podría afectar el funcionamiento del sitio.</p>

          <h2 className="text-xl font-semibold mt-6 mb-2">6. Derechos de los usuarios</h2>
          <p className="mb-4">Puedes solicitar el acceso, corrección o eliminación de tus datos personales en cualquier momento. Para ejercer estos derechos, contáctanos a <a href="mailto:contacto@idmarca.com" className="text-primary underline">contacto@idmarca.com</a>. Solo almacenamos los emails que nos envías para poder responderte.</p>

          <h2 className="text-xl font-semibold mt-6 mb-2">7. Jurisdicción</h2>
          <p className="mb-4">IDmarca opera bajo las leyes de la República Argentina.</p>

          <h2 className="text-xl font-semibold mt-6 mb-2">8. Cambios en la política</h2>
          <p className="mb-4">Nos reservamos el derecho de modificar esta política de privacidad en cualquier momento. Cualquier cambio será publicado en esta página.</p>
        </div>
      </main>
      <Footer />
    </div>
  )
} 