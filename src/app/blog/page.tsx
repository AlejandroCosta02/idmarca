import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Hammer, Construction } from "lucide-react"

export default function BlogPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1 flex items-center justify-center bg-gradient-to-br from-yellow-50 via-orange-50 to-primary/10">
        <div className="text-center p-12 rounded-3xl bg-background/95 shadow-2xl border-2 border-transparent bg-clip-padding max-w-lg mx-auto transition-all duration-300 hover:shadow-yellow-200 hover:border-yellow-300 hover:bg-background/100" style={{ borderImage: 'linear-gradient(135deg, #fde68a 0%, #fbbf24 100%) 1' }}>
          <div className="flex flex-col items-center mb-4">
            <span className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-yellow-200 mb-2 shadow-lg">
              <Construction className="h-10 w-10 text-yellow-600" />
            </span>
            <Hammer className="h-10 w-10 text-yellow-500 mb-2 animate-bounce" />
          </div>
          <h1 className="text-4xl font-bold mb-3 text-primary">Blog</h1>
          <p className="text-lg text-muted-foreground mb-2">
            <span className="font-semibold">Sección en construcción</span>. Muy pronto estará disponible.<br />
            Nuestro equipo de desarrollo está preparando esta sección con mucho entusiasmo.
          </p>
          <p className="text-sm text-muted-foreground mt-4">¡Vuelve pronto para novedades y artículos sobre marcas, innovación y más!</p>
        </div>
      </main>
      <Footer />
    </div>
  )
} 