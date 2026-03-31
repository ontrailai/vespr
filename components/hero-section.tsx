"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"
import { ElectroOrb } from "@/components/electro-orb"

export function HeroSection() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section className="relative overflow-hidden pt-24 pb-20">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] opacity-20 blur-3xl"
          style={{ background: "radial-gradient(ellipse, rgba(74, 155, 148, 0.3) 0%, transparent 70%)" }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Electro Orb - THE CENTERPIECE */}
        <div 
          className={`relative mx-auto w-full max-w-md h-[300px] sm:h-[350px] lg:h-[400px] mb-8 transition-all duration-1000 ${
            mounted ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
        >
          <ElectroOrb />
        </div>

        {/* Content below the orb */}
        <div className="mx-auto max-w-3xl text-center">
          {/* Eyebrow */}
          <div 
            className={`mb-6 inline-flex items-center gap-2 rounded-full border border-foreground/10 bg-background/80 backdrop-blur-sm px-4 py-2 transition-all duration-700 delay-200 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <Sparkles className="h-4 w-4 text-accent" />
            <span className="text-sm font-medium text-foreground">
              For businesses ready to run on AI
            </span>
          </div>

          <h1 
            className={`font-serif text-4xl font-medium tracking-tight text-foreground sm:text-5xl lg:text-6xl xl:text-7xl leading-[1.1] transition-all duration-700 delay-300 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            We start where{" "}
            <span className="gradient-text">nobody else will.</span>
          </h1>
          
          <p 
            className={`mt-6 text-lg leading-relaxed text-muted-foreground sm:text-xl max-w-2xl mx-auto transition-all duration-700 delay-400 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Your data is your most valuable asset. We fix the mess, then implement AI systems that 
            <span className="text-foreground font-medium"> connect, automate, and operate</span> your business autonomously.
          </p>

          <div 
            className={`mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row transition-all duration-700 delay-500 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <Button 
              size="lg" 
              asChild 
              className="group gap-2 bg-foreground hover:bg-foreground/90 text-background rounded-full px-8 h-12 text-base font-medium shadow-xl transition-all hover:scale-105"
            >
              <Link href="#pricing">
                See How It Works
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              asChild 
              className="rounded-full px-8 h-12 text-base font-medium border-2 border-foreground/20 bg-background/50 backdrop-blur-sm hover:bg-background/80 transition-all hover:scale-105"
            >
              <Link href="#pricing">Book a Call</Link>
            </Button>
          </div>

          {/* Stats row */}
          <div 
            className={`mt-16 grid grid-cols-3 gap-6 max-w-xl mx-auto transition-all duration-700 delay-700 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            {[
              { value: "70%", label: "AI projects fail" },
              { value: "20+", label: "Hours saved weekly" },
              { value: "26%", label: "Avg revenue lift" },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <p className="font-serif text-2xl lg:text-3xl font-medium text-foreground">{stat.value}</p>
                <p className="mt-1 text-xs sm:text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
