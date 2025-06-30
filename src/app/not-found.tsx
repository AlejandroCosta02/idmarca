import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Image from "next/image"
import Link from "next/link"

export default function NotFoundPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1 flex flex-col items-center justify-center py-16 px-4">
        <div className="flex flex-col items-center space-y-8">
          <Image
            src="/logos/signature.svg"
            alt="IDmarca Signature"
            width={400}
            height={100}
            className="w-auto h-32 md:h-40 lg:h-48"
            priority
          />
          <h1 className="text-4xl md:text-5xl font-bold text-center">Página no encontrada</h1>
          <p className="text-lg text-muted-foreground text-center max-w-xl">
            Lo sentimos, la página que buscas no existe o ha sido movida.<br />
            Puedes volver al inicio o explorar otras secciones de nuestro sitio.
          </p>
          <Link href="/" className="inline-block mt-4 px-6 py-3 bg-primary text-primary-foreground rounded-md font-semibold shadow hover:bg-primary/90 transition-colors">
            Volver al inicio
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  )
} 