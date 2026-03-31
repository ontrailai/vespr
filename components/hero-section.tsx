"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"
import { FluidSwirl } from "@/components/fluid-swirl"

export function HeroSection() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section className="relative min-h-screen overflow-hidden flex items-center justify-center">
      {/* Fluid Swirl Background - THE CENTERPIECE */}
      <div className="absolute inset-0 pointer-events-none">
        <FluidSwirl />
      </div>

      {/* Subtle overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background/60 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="mx-auto max-w-4xl text-center">
          {/* Eyebrow */}
          <div 
            className={`mb-8 inline-flex items-center gap-2 rounded-full border border-foreground/10 bg-background/80 backdrop-blur-sm px-5 py-2.5 transition-all duration-700 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <Sparkles className="h-4 w-4 text-accent" />
            <span className="text-sm font-medium text-foreground">
              For businesses ready to run on AI
            </span>
          </div>

          <h1 
            className={`font-serif text-5xl font-medium tracking-tight text-foreground sm:text-6xl lg:text-7xl xl:text-8xl leading-[1.05] transition-all duration-700 delay-100 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            We start where{" "}
            <br className="hidden sm:block" />
            <span className="relative inline-block">
              <span className="gradient-text">nobody else will.</span>
            </span>
          </h1>
          
          <p 
            className={`mt-8 text-lg leading-relaxed text-muted-foreground sm:text-xl max-w-2xl mx-auto transition-all duration-700 delay-200 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Your data is your most valuable asset. We fix the mess, then implement AI systems that 
            <span className="text-foreground font-medium"> connect, automate, and operate</span> your business autonomously.
          </p>

          <div 
            className={`mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row transition-all duration-700 delay-300 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <Button 
              size="lg" 
              asChild 
              className="group gap-2 bg-foreground hover:bg-foreground/90 text-background rounded-full px-10 h-14 text-base font-medium shadow-2xl transition-all hover:scale-105"
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
              className="rounded-full px-10 h-14 text-base font-medium border-2 border-foreground/20 bg-background/50 backdrop-blur-sm hover:bg-background/80 transition-all hover:scale-105"
            >
              <Link href="#pricing">Book a Call</Link>
            </Button>
          </div>

          {/* Stats row */}
          <div 
            className={`mt-24 grid grid-cols-3 gap-8 max-w-2xl mx-auto transition-all duration-700 delay-500 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            {[
              { value: "70%", label: "AI projects fail" },
              { value: "20+", label: "Hours saved weekly" },
              { value: "26%", label: "Avg revenue lift" },
            ].map((stat, i) => (
              <div key={i} className="text-center p-4 rounded-2xl bg-background/60 backdrop-blur-sm border border-foreground/5">
                <p className="font-serif text-3xl lg:text-4xl font-medium text-foreground">{stat.value}</p>
                <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  )
}
