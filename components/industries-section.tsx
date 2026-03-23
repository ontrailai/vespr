"use client"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Stethoscope, Scale, Shield, Building2, Sparkles } from "lucide-react"
import Link from "next/link"

const industries = [
  {
    id: "healthcare",
    title: "Healthcare",
    icon: Stethoscope,
    color: "#4A9B94",
    description: "Patient records in 6 systems. Compliance documentation scattered across shared drives. Your EHR says one thing, your billing says another. We clean the data, connect the systems, and deploy AI that actually understands your patients.",
  },
  {
    id: "legal",
    title: "Legal",
    icon: Scale,
    color: "#5B8FD9",
    description: "Case files in folders nobody can find. Billing disconnected from matter management. Associates spending hours on research that should take minutes. We build the data foundation, then put AI to work on intake, research, and document management.",
  },
  {
    id: "insurance",
    title: "Insurance",
    icon: Shield,
    color: "#8B6DB3",
    description: "Claims data in silos. Underwriting running on outdated spreadsheets. Policy information that lives in 4 places and agrees in none of them. We unify your data, then deploy agents that process claims, flag fraud, and route renewals automatically.",
  },
  {
    id: "realestate",
    title: "Real Estate",
    icon: Building2,
    color: "#D97756",
    description: "Leads in 3 CRMs. Transactions tracked in spreadsheets. Market data copy-pasted from Zillow. No single view of your pipeline. We centralize everything into one clean system, then let AI handle lead scoring, follow-ups, and market analysis.",
  },
]

export function IndustriesSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeIndustry, setActiveIndustry] = useState(0)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  // Auto-rotate industries
  useEffect(() => {
    if (!isVisible) return
    const interval = setInterval(() => {
      setActiveIndustry((prev) => (prev + 1) % industries.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [isVisible])

  const currentIndustry = industries[activeIndustry]
  const CurrentIcon = currentIndustry.icon

  return (
    <section 
      id="industries" 
      ref={sectionRef} 
      className="py-24 lg:py-32 relative overflow-hidden bg-background"
    >
      {/* Animated background gradient */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute inset-0 opacity-20 transition-all duration-1000"
          style={{ 
            background: `radial-gradient(ellipse at 70% 50%, ${currentIndustry.color}30 0%, transparent 50%)` 
          }}
        />
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <span 
            className={`inline-block text-accent font-semibold mb-4 tracking-widest uppercase text-xs transition-all duration-500 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Where We Work
          </span>
          <h2 
            className={`font-serif text-4xl font-medium tracking-tight text-foreground sm:text-5xl lg:text-6xl leading-[1.1] transition-all duration-500 delay-100 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            This Might Sound Familiar
          </h2>
          <p 
            className={`mt-6 text-lg leading-relaxed text-muted-foreground max-w-xl mx-auto transition-all duration-500 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            We work with businesses where messy data creates real operational pain.
          </p>
        </div>

        {/* Industry selector and content */}
        <div 
          className={`grid lg:grid-cols-2 gap-12 items-center transition-all duration-700 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Left side - Industry selector */}
          <div className="space-y-3">
            {industries.map((industry, index) => {
              const Icon = industry.icon
              const isActive = index === activeIndustry
              
              return (
                <button
                  key={industry.id}
                  onClick={() => setActiveIndustry(index)}
                  className={`w-full flex items-center gap-4 p-5 rounded-2xl text-left transition-all duration-300 ${
                    isActive 
                      ? 'bg-card border border-border shadow-lg' 
                      : 'bg-transparent border border-transparent hover:bg-secondary/50'
                  }`}
                >
                  <div 
                    className={`flex h-12 w-12 items-center justify-center rounded-xl transition-all duration-300 ${
                      isActive ? 'scale-110' : ''
                    }`}
                    style={{ 
                      backgroundColor: isActive ? `${industry.color}20` : 'var(--secondary)',
                    }}
                  >
                    <Icon 
                      className="h-6 w-6 transition-colors duration-300" 
                      style={{ color: isActive ? industry.color : 'var(--muted-foreground)' }}
                    />
                  </div>
                  <div className="flex-1">
                    <span 
                      className={`font-semibold text-lg transition-colors duration-300 ${
                        isActive ? 'text-foreground' : 'text-muted-foreground'
                      }`}
                    >
                      {industry.title}
                    </span>
                  </div>
                  {/* Progress bar for active */}
                  {isActive && (
                    <div className="w-16 h-1 rounded-full bg-secondary overflow-hidden">
                      <div 
                        className="h-full rounded-full animate-[progress_5s_linear]"
                        style={{ backgroundColor: industry.color }}
                      />
                    </div>
                  )}
                </button>
              )
            })}
          </div>

          {/* Right side - Active industry content */}
          <div className="relative">
            <div 
              className="relative p-8 lg:p-10 rounded-3xl border border-border bg-card shadow-lg overflow-hidden"
            >
              {/* Background icon */}
              <CurrentIcon 
                className="absolute -bottom-8 -right-8 h-48 w-48 transition-all duration-500"
                style={{ color: `${currentIndustry.color}15` }}
              />
              
              {/* Content */}
              <div className="relative">
                <div 
                  className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium mb-6"
                  style={{ 
                    backgroundColor: `${currentIndustry.color}15`,
                    color: currentIndustry.color
                  }}
                >
                  <CurrentIcon className="h-4 w-4" />
                  {currentIndustry.title}
                </div>
                
                <p className="text-muted-foreground text-lg leading-relaxed">
                  {currentIndustry.description}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Your Industry CTA */}
        <div 
          className={`mt-16 text-center transition-all duration-700 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="relative inline-block">
            {/* Glowing border effect */}
            <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-accent via-accent-secondary to-[#8B6DB3] opacity-40 blur-sm" />
            
            <div className="relative bg-card rounded-2xl p-8 lg:p-10 border border-border">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Sparkles className="h-5 w-5 text-accent" />
                <span className="text-muted-foreground text-sm font-medium uppercase tracking-wider">Your Industry</span>
                <Sparkles className="h-5 w-5 text-accent-secondary" />
              </div>
              
              <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-8">
                If your business runs on data and your data is a mess, we can help. The industries above are where we started. The approach works anywhere the same pattern exists: scattered data, disconnected tools, manual processes that should have been automated years ago.
              </p>

              <Button 
                size="lg" 
                asChild 
                className="group gap-2 bg-accent hover:bg-accent/90 text-accent-foreground rounded-full px-8 h-12 text-base font-semibold transition-all hover:-translate-y-0.5"
              >
                <Link href="#pricing">
                  Let&apos;s Talk About Your Business
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes progress {
          from { width: 0%; }
          to { width: 100%; }
        }
      `}</style>
    </section>
  )
}
