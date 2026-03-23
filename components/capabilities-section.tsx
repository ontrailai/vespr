"use client"

import { useEffect, useRef, useState } from "react"
import { 
  Plug, 
  Zap, 
  Brain, 
  Users, 
  Clock, 
  Shield 
} from "lucide-react"

const capabilities = [
  {
    icon: Plug,
    title: "Connects to Your Entire Stack",
    description: "Plugs directly into GoHighLevel, HubSpot, Gmail, Slack, your CRM, and project tools. No switching platforms. It sits on top and connects everything.",
    color: "#4A9B94"
  },
  {
    icon: Zap,
    title: "Actually Does the Work",
    description: "Not a chatbot. vespr. runs your processes: sends follow-ups, updates your CRM, processes intake forms, generates reports, manages your pipeline. Real tasks, completed autonomously.",
    color: "#D97756"
  },
  {
    icon: Brain,
    title: "Learns Your Business Over Time",
    description: "Persistent memory that remembers your clients, preferences, workflows, and terminology. By month 3, it knows your business better than your newest hire.",
    color: "#8B6DB3"
  },
  {
    icon: Users,
    title: "Multi-Agent Orchestration",
    description: "Research agents gather intel. Writing agents draft communications. Operations agents manage your pipeline. They coordinate automatically. Team output without the headcount.",
    color: "#5B8FD9"
  },
  {
    icon: Clock,
    title: "24/7 Autonomous Operations",
    description: "vespr. monitors overnight, catches issues before you wake up, and sends morning briefings. Leads from 2 AM are qualified and in your pipeline by 8 AM.",
    color: "#E5A84B"
  },
  {
    icon: Shield,
    title: "Your Data Stays Yours",
    description: "Everything runs on your infrastructure. Your data never trains someone else's model. No shared databases, no multi-tenant risks. Private, secure, yours.",
    color: "#4A9B94"
  }
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
    <section id="capabilities" ref={sectionRef} className="py-24 lg:py-32 bg-secondary/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        <div className="absolute top-1/3 -right-32 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 -left-32 w-80 h-80 bg-[#4A9B94]/5 rounded-full blur-3xl" />
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
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
            Clean Data Is Just the Beginning.
          </h2>
          <p 
            className={`mt-4 font-serif text-2xl lg:text-3xl text-muted-foreground transition-all duration-500 delay-150 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Here&apos;s What Runs On Top of It.
          </p>
        </div>

        {/* Feature grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((capability, index) => {
            const Icon = capability.icon
            const isHovered = hoveredIndex === index
            
            return (
              <div
                key={capability.title}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`group relative bg-card rounded-2xl border border-border p-8 transition-all duration-500 hover:shadow-xl hover:-translate-y-1 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ 
                  transitionDelay: isVisible ? `${150 + index * 100}ms` : "0ms"
                }}
              >
                {/* Gradient overlay on hover */}
                <div 
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ background: `linear-gradient(135deg, ${capability.color}08 0%, transparent 60%)` }}
                />

                {/* Icon */}
                <div 
                  className="relative flex h-14 w-14 items-center justify-center rounded-xl mb-6 transition-all duration-300 group-hover:scale-110"
                  style={{ 
                    backgroundColor: `${capability.color}15`,
                    boxShadow: isHovered ? `0 8px 24px ${capability.color}25` : 'none'
                  }}
                >
                  <Icon 
                    className="h-7 w-7 transition-transform duration-300 group-hover:scale-110" 
                    style={{ color: capability.color }}
                  />
                </div>

                {/* Content */}
                <h3 className="relative text-xl font-semibold text-foreground mb-3 group-hover:text-accent transition-colors">
                  {capability.title}
                </h3>
                <p className="relative text-muted-foreground leading-relaxed text-sm">
                  {capability.description}
                </p>

                {/* Hover accent line */}
                <div 
                  className="relative h-1 w-0 rounded-full mt-6 transition-all duration-500 group-hover:w-16"
                  style={{ backgroundColor: capability.color }}
                />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
