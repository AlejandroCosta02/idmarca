import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function TerminosPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1 flex items-center justify-center bg-muted/30">
        <div className="text-left p-10 rounded-2xl bg-background/90 shadow-xl max-w-2xl mx-auto">
          <h1 className="text-3xl font-bold mb-4 text-primary">Términos y Condiciones</h1>
          <p className="mb-6 text-muted-foreground">
            Bienvenido a IDmarca. Al utilizar nuestro sitio web y servicios, aceptas los siguientes términos y condiciones. Te recomendamos leerlos atentamente.
          </p>

          <h2 className="text-xl font-semibold mt-6 mb-2">1. Aceptación de los términos</h2>
          <p className="mb-4">El acceso y uso de este sitio web implica la aceptación de estos términos y condiciones. Si no estás de acuerdo, por favor no utilices nuestros servicios.</p>

          <h2 className="text-xl font-semibold mt-6 mb-2">2. Descripción del servicio</h2>
          <p className="mb-4">IDmarca ofrece servicios de registro de marcas, asesoramiento en propiedad intelectual y otros servicios relacionados, dirigidos a personas y empresas en Argentina.</p>

          <h2 className="text-xl font-semibold mt-6 mb-2">3. Responsabilidad del usuario</h2>
          <ul className="list-disc pl-6 mb-4">
            <li>Proporcionar información veraz y actualizada en los formularios de contacto.</li>
            <li>No utilizar el sitio para fines ilícitos o no autorizados.</li>
            <li>Respetar los derechos de propiedad intelectual de IDmarca y de terceros.</li>
          </ul>

          <h2 className="text-xl font-semibold mt-6 mb-2">4. Propiedad intelectual</h2>
          <p className="mb-4">Todos los contenidos, marcas, logotipos, textos e imágenes presentes en este sitio son propiedad de IDmarca o de sus respectivos titulares. Queda prohibida su reproducción total o parcial sin autorización expresa.</p>

          <h2 className="text-xl font-semibold mt-6 mb-2">5. Limitación de responsabilidad</h2>
          <p className="mb-4">IDmarca no se responsabiliza por daños directos o indirectos derivados del uso o imposibilidad de uso del sitio o de los servicios ofrecidos.</p>

          <h2 className="text-xl font-semibold mt-6 mb-2">6. Modificaciones de los términos</h2>
          <p className="mb-4">Nos reservamos el derecho de modificar estos términos y condiciones en cualquier momento. Los cambios serán publicados en esta página y entrarán en vigor desde su publicación.</p>

          <h2 className="text-xl font-semibold mt-6 mb-2">7. Contacto</h2>
          <p className="mb-4">Si tienes dudas sobre estos términos y condiciones, puedes contactarnos en <a href="mailto:contacto@idmarca.com" className="text-primary underline">contacto@idmarca.com</a>.</p>
        </div>
      </main>
      <Footer />
    </div>
  )
} 