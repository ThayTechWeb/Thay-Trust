import Image from "next/image"
import type { ReactNode } from "react"

interface CoverImageProps {
  src: string
  alt: string
  title: string
  subtitle?: string
  children?: ReactNode
}

export function CoverImage({ src, alt, title, subtitle, children }: CoverImageProps) {
  return (
    <div className="relative w-full min-h-[500px] md:min-h-[600px] lg:min-h-screen flex items-center">
    {/* Image with reduced opacity */}
    <Image 
      src={src || "/placeholder.svg"} 
      alt={alt} 
      fill 
      style={{ objectFit: "cover" }} 
      priority 
    />
  
    <div className="absolute inset-0 bg-black opacity-50"></div>
    
    {/* Content with normal visibility */}
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-24 lg:py-32">
        <div className="max-w-3xl mx-auto text-center text-white space-y-8">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3">{title}</h1>
          {subtitle && <p className="text-lg md:text-xl lg:text-2xl">{subtitle}</p>}
          {children}
        </div>
      </div>
    </div>
  </div>
  
  )
}

