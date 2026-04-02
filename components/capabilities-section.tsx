"use client"

import { useEffect, useRef, useState } from "react"
import {
  Target,
  Settings,
  Package,
  PenTool,
  Headphones,
  Sparkles
} from "lucide-react"

const capabilities = [
  {
    icon: Target,
    title: "Acquisition Systems",
    description: "AI runs your entire lead generation and sales pipeline. Lead capture, instant follow-up, nurturing, objection handling, and appointment booking. From first touch to booked call, fully automated.",
    automates: "lead capture, follow-up, nurture, booking",
    color: "#D97756"
  },
  {
    icon: Settings,
    title: "Operations + Workflow",
    description: "AI manages your CRM, processes forms, assigns tasks, generates reports, runs daily briefings, and keeps your entire team organized. Your operations run without you babysitting them.",
    automates: "CRM updates, task routing, reporting, briefings",
    color: "#4A9B94"
  },
  {
    icon: Package,
    title: "Fulfillment Management",
    description: "AI handles client onboarding, project tracking, deliverable management, status updates, and internal communication. Nothing gets missed. Nothing gets delayed.",
    automates: "onboarding, tracking, status updates, comms",
    color: "#5B8FD9"
  },
  {
    icon: PenTool,
    title: "Marketing + Content",
    description: "AI creates social posts, email campaigns, blog content, and marketing materials in your voice, on your schedule. Consistent output across every channel without hiring a marketing team.",
    automates: "content creation, email, social, scheduling",
    color: "#8B6DB3"
  },
  {
    icon: Headphones,
    title: "Customer Support",
    description: "AI handles tickets, live chat, email, and phone calls. Trained on your products, policies, and brand voice. Instant, accurate answers any time of day or night.",
    automates: "tickets, live chat, email, phone",
    color: "#E5A84B"
  },
  {
    icon: Sparkles,
    title: "Custom AI Systems",
    description: "Need something specific? We build custom autonomous agents for anything your business needs. Data analysis, document processing, research, compliance, reporting. If it can be automated, we build it.",
    automates: "any repeatable process or workflow",
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
    <section id="capabilities" ref={sectionRef} className="py-24 lg:py-32 relative overflow-hidden">
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
            What We Automate
          </span>
          <h2 
            className={`font-serif text-4xl font-medium tracking-tight text-foreground sm:text-5xl lg:text-6xl leading-[1.1] transition-all duration-500 delay-100 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            AI Systems That Do{" "}
            <span className="gradient-text">Real Work</span> in Your Business.
          </h2>
          <p 
            className={`mt-6 text-lg text-muted-foreground transition-all duration-500 delay-150 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Every system is custom built around your workflows, your tools, and your goals.
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
                    background: `linear-gradient(135deg, ${capability.color}22 0%, ${capability.color}0A 100%)`,
                    border: `1.5px solid ${capability.color}20`,
                    boxShadow: isHovered
                      ? `0 8px 24px ${capability.color}25, inset 0 1px 1px ${capability.color}15`
                      : `inset 0 1px 1px ${capability.color}10`
                  }}
                >
                  <Icon
                    className="h-7 w-7 transition-transform duration-300 group-hover:scale-110"
                    style={{ color: capability.color }}
                    strokeWidth={1.5}
                  />
                </div>

                {/* Content */}
                <h3 className="relative text-xl font-semibold text-foreground mb-3 group-hover:text-accent transition-colors">
                  {capability.title}
                </h3>
                <p className="relative text-muted-foreground leading-relaxed text-sm mb-4">
                  {capability.description}
                </p>
                
                {/* Automates tag */}
                <p className="relative text-xs text-muted-foreground">
                  <span className="font-semibold text-foreground">Automates:</span> {capability.automates}
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
