"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"
import { ElectroOrb } from "@/components/electro-orb"

export function HeroSection() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section className="relative overflow-hidden min-h-[90vh] flex items-center justify-center">
      {/* Electro Orb - Full background centerpiece */}
      <div className="absolute inset-0 pointer-events-none">
        <ElectroOrb />
      </div>

      {/* Content - Clean and minimal */}
      <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
        <h1 
          className={`font-serif text-5xl font-medium tracking-tight text-foreground sm:text-6xl lg:text-7xl xl:text-8xl leading-[1.05] transition-all duration-700 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          We start where{" "}
          <br className="hidden sm:block" />
          <span className="gradient-text">nobody else will.</span>
        </h1>
        
        <p 
          className={`mt-8 text-lg leading-relaxed text-muted-foreground sm:text-xl max-w-2xl mx-auto transition-all duration-700 delay-200 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          AI systems that connect, automate, and operate your business.
        </p>

        <div 
          className={`mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row transition-all duration-700 delay-300 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <Button 
            size="lg" 
            asChild 
            className="group gap-2 bg-foreground hover:bg-foreground/90 text-background rounded-full px-8 h-12 text-base font-medium shadow-xl transition-all hover:scale-105"
          >
            <Link href="#pricing">
              Get Started
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
