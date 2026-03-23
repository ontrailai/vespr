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

const features = [
  {
    icon: Plug,
    title: "Connects to Your Entire Stack",
    description: "vespr. plugs directly into the tools you already use: GoHighLevel, HubSpot, Gmail, Outlook, Google Workspace, Slack, your CRM, your project management tools. No switching platforms. No ripping out what works. It sits on top and connects everything.",
    color: "#4A9B94"
  },
  {
    icon: Zap,
    title: "Actually Does the Work",
    description: "This is not a chatbot that answers questions. vespr. runs your processes: sends follow-ups, updates your CRM, processes intake forms, generates reports, manages your pipeline. Real tasks, completed autonomously, every single day.",
    color: "#D97756"
  },
  {
    icon: Brain,
    title: "Learns Your Business Over Time",
    description: "vespr. has persistent memory. It remembers your clients, your preferences, your workflows, your terminology. On day 1, it is useful. By month 3, it knows your business better than your newest hire. It gets smarter the longer it runs because it is learning from YOUR data, YOUR patterns, YOUR decisions.",
    color: "#8B6DB3"
  },
  {
    icon: Users,
    title: "Multi-Agent Orchestration",
    description: "One AI can answer a question. vespr. runs an entire department. Research agents gather intel. Writing agents draft communications. Operations agents manage your pipeline. Strategy agents analyze your data. They coordinate with each other automatically. You get the output of a team without the headcount.",
    color: "#5B8FD9"
  },
  {
    icon: Clock,
    title: "24/7 Autonomous Operations",
    description: "vespr. does not clock out. It monitors your systems overnight, catches issues before your team wakes up, sends morning briefings with what happened and what needs attention. Leads that came in at 2 AM are already qualified and in your pipeline by 8 AM.",
    color: "#E5A84B"
  },
  {
    icon: Shield,
    title: "Your Data Stays Yours",
    description: "Everything runs on your infrastructure. Your data never trains someone else's model. No shared databases, no multi-tenant risks. Private, secure, yours.",
    color: "#4A9B94"
  }
]

export function WhatYouGetSection() {
  const [isVisible, setIsVisible] = useState(false)
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
    <section ref={sectionRef} className="py-24 lg:py-32 bg-secondary/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 -right-32 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 -left-32 w-80 h-80 bg-accent-secondary/5 rounded-full blur-3xl" />
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
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={feature.title}
                className={`group bg-card border border-border rounded-2xl p-8 transition-all duration-500 hover:shadow-xl hover:-translate-y-1 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ 
                  transitionDelay: isVisible ? `${150 + index * 100}ms` : "0ms"
                }}
              >
                {/* Icon */}
                <div 
                  className="flex h-14 w-14 items-center justify-center rounded-xl mb-6 transition-all duration-300 group-hover:scale-110"
                  style={{ 
                    backgroundColor: `${feature.color}15`,
                    boxShadow: `0 0 0 0 ${feature.color}00`
                  }}
                >
                  <Icon 
                    className="h-7 w-7 transition-transform duration-300 group-hover:scale-110" 
                    style={{ color: feature.color }}
                  />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-accent transition-colors">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {feature.description}
                </p>

                {/* Hover accent line */}
                <div 
                  className="h-1 w-0 rounded-full mt-6 transition-all duration-500 group-hover:w-16"
                  style={{ backgroundColor: feature.color }}
                />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
