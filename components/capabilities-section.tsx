"use client"

import { useEffect, useRef, useState } from "react"
import { CheckCircle, Workflow, BarChart3, Database, TrendingUp, DollarSign } from "lucide-react"

const capabilities = [
  {
    title: "Accurate AI Responses",
    description:
      "Your AI assistant answers customer questions correctly on the first try. Not because it's a better model. Because it has access to your real, clean, organized data.",
    icon: CheckCircle,
    color: "#4A9B94",
  },
  {
    title: "Workflows That Don't Break",
    description:
      "Your automations run end to end without failing at step 3 because a field was missing. Built on structured data, not spreadsheet chaos.",
    icon: Workflow,
    color: "#5B8FD9",
  },
  {
    title: "Decisions You Can Trust",
    description:
      "Reports that reflect reality. Forecasting that works. AI recommendations based on data that's actually accurate.",
    icon: BarChart3,
    color: "#8B6DB3",
  },
  {
    title: "One Source of Truth",
    description:
      "Every team, every tool, every system pulling from the same clean database. Sales, ops, support - everyone sees the same information.",
    icon: Database,
    color: "#D97756",
  },
  {
    title: "AI That Improves Over Time",
    description:
      "When your foundation is solid, your AI agents learn from real patterns in real data. Not noise. Actual signal.",
    icon: TrendingUp,
    color: "#E5A84B",
  },
  {
    title: "Cost Efficiency",
    description:
      "Without clean data, your $20K AI project balloons to $35K+ just dealing with data problems. With clean data, everything works the first time.",
    icon: DollarSign,
    color: "#4A9B94",
  },
]

export function CapabilitiesSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
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

  return (
    <section id="capabilities" ref={sectionRef} className="py-24 lg:py-32 bg-secondary/40 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
      
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 relative">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <span 
            className={`inline-block text-accent font-semibold mb-4 tracking-widest uppercase text-xs transition-all duration-500 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            What You Get
          </span>
          <h2 
            className={`font-serif text-4xl font-medium tracking-tight text-foreground sm:text-5xl lg:text-6xl leading-[1.1] transition-all duration-500 delay-100 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            What Becomes Possible{" "}
            <span className="text-muted-foreground">When Your Data Is Clean</span>
          </h2>
          <p 
            className={`mt-6 text-lg leading-relaxed text-muted-foreground transition-all duration-500 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Most AI tools underperform because they&apos;re built on garbage. When your data is clean, structured, and connected, everything changes.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((capability, index) => {
            const Icon = capability.icon
            const isHovered = hoveredIndex === index
            
            return (
              <div
                key={capability.title}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`group relative bg-card rounded-2xl border border-border p-6 transition-all duration-500 card-lift ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 75 + 300}ms` }}
              >
                {/* Gradient overlay on hover */}
                <div 
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: `linear-gradient(135deg, ${capability.color}10 0%, transparent 60%)` }}
                />
                
                {/* Glow effect */}
                <div 
                  className="absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: `linear-gradient(135deg, ${capability.color}30 0%, transparent 50%)` }}
                />
                
                <div className="relative">
                  <div 
                    className="flex h-14 w-14 items-center justify-center rounded-xl transition-all duration-500 group-hover:scale-110"
                    style={{ 
                      backgroundColor: `${capability.color}15`,
                      boxShadow: isHovered ? `0 8px 24px ${capability.color}30` : 'none'
                    }}
                  >
                    <Icon 
                      className="h-6 w-6 transition-all duration-300"
                      style={{ color: capability.color }}
                    />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold text-foreground">
                    {capability.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {capability.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
