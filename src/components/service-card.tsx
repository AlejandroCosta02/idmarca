import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, CheckCircle } from "lucide-react"

interface ServiceCardProps {
  title: string
  description: string
  features: string[]
  price?: string
  badge?: string
  href: string
  popular?: boolean
}

export function ServiceCard({
  title,
  description,
  features,
  price,
  badge,
  href,
  popular = false,
}: ServiceCardProps) {
  return (
    <Card className={`relative ${popular ? 'border-primary shadow-lg' : ''}`}>
      {popular && (
        <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground">
          Más Popular
        </Badge>
      )}
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl">{title}</CardTitle>
          {badge && (
            <Badge variant="secondary">{badge}</Badge>
          )}
        </div>
        <CardDescription className="text-base">{description}</CardDescription>
        {price && (
          <div className="pt-2">
            <span className="text-3xl font-bold text-primary">{price}</span>
            <span className="text-muted-foreground">/servicio</span>
          </div>
        )}
      </CardHeader>
      <CardContent className="space-y-4">
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center space-x-2">
              <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
              <span className="text-sm">{feature}</span>
            </li>
          ))}
        </ul>
        <Button asChild className="w-full">
          <Link href={href} className="inline-block w-full">
            Consultar
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  )
} 