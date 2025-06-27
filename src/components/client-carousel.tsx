"use client"

import * as React from "react"
import { Card } from "@/components/ui/card"

interface ClientLogo {
  id: number
  name: string
  logo: string
  website: string
}

interface ClientCarouselProps {
  clients: ClientLogo[]
}

export function ClientCarousel({ clients }: ClientCarouselProps) {
  const [isHovered, setIsHovered] = React.useState(false)
  const containerRef = React.useRef<HTMLDivElement>(null)
  const pausedScrollRef = React.useRef(0)
  const intervalRef = React.useRef<NodeJS.Timeout | null>(null)

  // Create a longer array for infinite scroll effect
  const infiniteClients = React.useMemo(() => {
    // Repeat the array 3 times to ensure smooth infinite scroll
    return [...clients, ...clients, ...clients]
  }, [clients])

  React.useEffect(() => {
    if (!isHovered) {
      // Resume animation smoothly
      intervalRef.current = setInterval(() => {
        if (!containerRef.current) return

        const container = containerRef.current
        const scrollWidth = container.scrollWidth
        const clientWidth = scrollWidth / infiniteClients.length
        
        pausedScrollRef.current += 1
        
        // Reset scroll position when we reach the end of the first set
        if (pausedScrollRef.current >= clientWidth * clients.length) {
          pausedScrollRef.current = 0
          container.scrollLeft = 0
        } else {
          container.scrollLeft = pausedScrollRef.current
        }
      }, 30)
    } else {
      // Pause animation
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [isHovered, clients.length, infiniteClients.length])

  return (
    <div 
      className="relative overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div 
        ref={containerRef}
        className="flex overflow-x-hidden scrollbar-hide"
        style={{ scrollBehavior: isHovered ? 'smooth' : 'auto' }}
      >
        {infiniteClients.map((client, index) => (
          <div
            key={`${client.id}-${index}`}
            className="flex-shrink-0 px-6"
            style={{ minWidth: `${100 / clients.length}%` }}
          >
            <Card className="h-24 bg-background/50 backdrop-blur-sm border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:scale-105 group">
              <div className="h-full flex items-center justify-center p-4">
                <div className="relative w-20 h-12 flex items-center justify-center">
                  <img
                    src={client.logo}
                    alt={`${client.name} logo`}
                    className="object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300 opacity-70 group-hover:opacity-100 max-w-full max-h-full w-full h-full"
                    onError={(e) => {
                      console.error(`Failed to load image: ${client.logo}`)
                      const target = e.target as HTMLImageElement
                      target.style.display = 'none'
                    }}
                  />
                </div>
              </div>
            </Card>
          </div>
        ))}
      </div>

      {/* Gradient overlays for smooth edges */}
      <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-background via-background/80 to-transparent pointer-events-none z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-background via-background/80 to-transparent pointer-events-none z-10" />
    </div>
  )
} 