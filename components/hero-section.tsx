"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"

export function HeroSection() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section className="relative overflow-hidden pt-28 pb-20 lg:pt-40 lg:pb-32">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large gradient orb */}
        <div 
          className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full opacity-30 blur-3xl animate-float"
          style={{ background: "radial-gradient(circle, #D97756 0%, transparent 70%)" }}
        />
        <div 
          className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full opacity-20 blur-3xl animate-float"
          style={{ background: "radial-gradient(circle, #4A9B94 0%, transparent 70%)", animationDelay: "3s" }}
        />
        
        {/* Floating geometric shapes */}
        <div className="absolute top-1/4 left-[10%] w-4 h-4 bg-accent/30 rounded-full animate-float" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/3 right-[15%] w-6 h-6 bg-accent-secondary/30 rounded-lg rotate-45 animate-float" style={{ animationDelay: "2s" }} />
        <div className="absolute bottom-1/4 left-[20%] w-3 h-3 bg-accent/40 rounded-full animate-float" style={{ animationDelay: "1.5s" }} />
        <div className="absolute top-1/2 right-[10%] w-5 h-5 border-2 border-accent/30 rounded-full animate-float" style={{ animationDelay: "0.5s" }} />
        
        {/* Grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(#2D2A26 1px, transparent 1px), linear-gradient(90deg, #2D2A26 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}
        />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          {/* Eyebrow with animation */}
          <div 
            className={`mb-8 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/5 px-5 py-2 transition-all duration-700 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <Sparkles className="h-4 w-4 text-accent animate-pulse" />
            <span className="text-sm font-medium text-foreground">
              For businesses ready to run on AI
            </span>
          </div>

          <h1 
            className={`font-serif text-5xl font-medium tracking-tight text-foreground sm:text-6xl lg:text-7xl leading-[1.05] transition-all duration-700 delay-100 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            AI That Actually{" "}
            <span className="relative">
              <span className="gradient-text">Does the Work.</span>
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 12" fill="none">
                <path 
                  d="M2 8C50 2 100 2 150 6C200 10 250 10 298 4" 
                  stroke="#D97756" 
                  strokeWidth="3" 
                  strokeLinecap="round"
                  className="opacity-60"
                />
              </svg>
            </span>
          </h1>
          
          <p 
            className={`mt-8 text-lg leading-relaxed text-muted-foreground sm:text-xl max-w-2xl mx-auto transition-all duration-700 delay-200 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Most AI tools answer questions. <span className="text-foreground font-medium">vespr. does the work</span> - connects your tools, learns your business, and runs your operations autonomously. We handle the data, the software, the AI, and the agents. You get the results.
          </p>

          <div 
            className={`mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row transition-all duration-700 delay-300 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <Button 
              size="lg" 
              asChild 
              className="group gap-2 bg-accent hover:bg-accent/90 text-accent-foreground rounded-full px-8 h-14 text-base font-medium shadow-xl shadow-accent/25 transition-all hover:shadow-2xl hover:shadow-accent/30 hover:-translate-y-1 animate-pulse-glow"
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
              className="rounded-full px-8 h-14 text-base font-medium border-2 border-border hover:border-accent/50 hover:bg-accent/5 transition-all hover:-translate-y-1"
            >
              <Link href="#solution">See How It Works</Link>
            </Button>
          </div>

          {/* Stats row */}
          <div 
            className={`mt-20 grid grid-cols-3 gap-8 max-w-xl mx-auto transition-all duration-700 delay-500 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            {[
              { value: "70%", label: "AI projects fail" },
              { value: "20+", label: "Hours saved per week" },
              { value: "26%", label: "Avg revenue lift" },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <p className="font-serif text-3xl lg:text-4xl font-medium text-foreground">{stat.value}</p>
                <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Qualifying statement */}
        <div 
          className={`mt-20 border-t border-border pt-12 transition-all duration-700 delay-700 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <p className="text-center text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Built for healthcare, legal, insurance, and real estate teams who are tired of AI that doesn&apos;t work.
          </p>
        </div>
      </div>
    </section>
  )
}
