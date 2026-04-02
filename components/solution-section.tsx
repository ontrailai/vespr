"use client"

import { useState, useEffect, useRef } from "react"
import { cn } from "@/lib/utils"
import { Database, Layers, Code, Cpu, Workflow } from "lucide-react"

const layers = [
  {
    number: 1,
    title: "We Clean Your Data",
    color: "#4A9B94",
    icon: Database,
    description:
      "Every system you use gets audited. Duplicates, inconsistencies, missing information, records scattered across platforms. We fix all of it. Because AI built on messy data gives messy results.",
  },
  {
    number: 2,
    title: "We Build Your Foundation",
    color: "#5B8FD9",
    icon: Layers,
    description:
      "We create a structured system that becomes your single source of truth. One place for accurate information. Your team and your AI operate from the same reality.",
  },
  {
    number: 3,
    title: "We Build the Tools You Need",
    color: "#8B6DB3",
    icon: Code,
    description:
      "Custom dashboards, portals, and interfaces designed around how your business actually works. Not off-the-shelf software you have to bend your workflow around.",
  },
  {
    number: 4,
    title: "We Add AI That Works",
    color: "#D97756",
    icon: Cpu,
    description:
      "Now the AI goes in. And it actually works because it is pulling from clean, structured, reliable data. This is the step every other company tries to do first. We do it fourth. That is the difference.",
  },
  {
    number: 5,
    title: "We Orchestrate Everything",
    color: "#E5A84B",
    icon: Workflow,
    description:
      "Multiple AI agents working together across your business. Research, operations, communications, fulfillment. All coordinated, all learning, all getting smarter over time. Running 24/7 on your infrastructure.",
  },
]

export function SolutionSection() {
  const [activeLayer, setActiveLayer] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.15 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  // Auto-advance layers
  useEffect(() => {
    if (!isVisible) return
    const timer = setInterval(() => {
      setActiveLayer((prev) => (prev + 1) % 5)
    }, 5000)
    return () => clearInterval(timer)
  }, [isVisible])

  return (
    <section id="solution" ref={sectionRef} className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-60 h-60 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-accent-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 relative">
        <div className="mx-auto max-w-3xl text-center mb-8">
          <span 
            className={`inline-block text-accent font-semibold mb-4 tracking-widest uppercase text-xs transition-all duration-500 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            The Vespr Stack
          </span>
          <h2 
            className={`font-serif text-4xl font-medium tracking-tight text-foreground sm:text-5xl lg:text-6xl leading-[1.1] transition-all duration-500 delay-100 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Everyone Else Sells You the Roof.{" "}
            <span className="gradient-text">We Pour the Foundation First.</span>
          </h2>
        </div>

        <p 
          className={`max-w-3xl mx-auto text-center text-lg leading-relaxed text-muted-foreground mb-16 transition-all duration-500 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          Most AI companies skip straight to the shiny part. They bolt a chatbot onto your existing systems and hope for the best. That is why it breaks. That is why it gives wrong answers. That is why you are reading this page right now.
        </p>

        <p 
          className={`max-w-3xl mx-auto text-center text-muted-foreground mb-16 transition-all duration-500 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          We build AI through five integrated layers. Each one makes the next one work. Skip a layer and the whole thing falls apart.
        </p>

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Interactive layer stack visualization */}
          <div 
            className={`order-2 lg:order-1 transition-all duration-700 delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="bg-card border border-border rounded-3xl p-8 lg:p-10 relative overflow-hidden">
              {/* Animated background glow based on active layer */}
              <div 
                className="absolute inset-0 opacity-10 transition-all duration-700"
                style={{ background: `radial-gradient(circle at 50% 100%, ${layers[activeLayer].color} 0%, transparent 60%)` }}
              />
              
              {/* Layer stack - Layer 1 at top, waterfall down */}
              <div className="relative flex flex-col items-center gap-2 mb-8">
                {layers.map((layer, index) => {
                  const isActive = index <= activeLayer
                  const isCurrent = index === activeLayer
                  const Icon = layer.icon
                  // Calculate width - Layer 1 is narrowest at top, expands as we go down
                  const widthPercent = 70 + (index * 6)
                  
                  return (
                    <button
                      key={layer.number}
                      onClick={() => setActiveLayer(index)}
                      className={cn(
                        "h-14 rounded-xl transition-all duration-500 flex items-center justify-between px-5 relative overflow-hidden",
                        isCurrent && "ring-2 ring-offset-2 ring-offset-card",
                        !isActive && "opacity-40"
                      )}
                      style={{ 
                        backgroundColor: layer.color,
                        width: `${widthPercent}%`,
                        boxShadow: isCurrent ? `0 10px 40px ${layer.color}50` : '0 4px 12px rgba(0,0,0,0.1)'
                      }}
                    >
                      {/* Shimmer effect on active */}
                      {isCurrent && (
                        <div className="absolute inset-0 animate-shimmer" />
                      )}
                      
                      <div className="flex items-center gap-3 relative">
                        <Icon className="h-5 w-5 text-white" />
                        <span className="text-white font-semibold text-sm">
                          Layer {layer.number}
                        </span>
                      </div>
                      <span className="text-white/80 text-xs font-medium hidden sm:block relative truncate max-w-[120px]">
                        {layer.title}
                      </span>
                    </button>
                  )
                })}
              </div>

              {/* Layer detail */}
              <div className="space-y-4 relative">
                <div className="flex items-center gap-3">
                  <div 
                    className="h-3 w-3 rounded-full animate-pulse"
                    style={{ backgroundColor: layers[activeLayer].color }}
                  />
                  <p className="text-sm font-medium text-muted-foreground">
                    Layer {layers[activeLayer].number} of 5
                  </p>
                </div>
                <h3 className="text-2xl font-semibold text-foreground">
                  {layers[activeLayer].title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {layers[activeLayer].description}
                </p>
              </div>

              {/* Progress bar */}
              <div className="mt-8 pt-6 border-t border-border">
                <div className="flex justify-between items-center text-xs text-muted-foreground mb-3">
                  <span>Foundation</span>
                  <span>Full AI Capabilities</span>
                </div>
                <div className="h-2 bg-secondary rounded-full overflow-hidden">
                  <div 
                    className="h-full rounded-full transition-all duration-500"
                    style={{ 
                      width: `${((activeLayer + 1) / 5) * 100}%`,
                      backgroundColor: layers[activeLayer].color
                    }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Layer list */}
          <div 
            className={`space-y-3 order-1 lg:order-2 transition-all duration-700 delay-400 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {layers.map((layer, index) => {
              const Icon = layer.icon
              const isActive = activeLayer === index
              
              return (
                <button
                  key={layer.number}
                  onClick={() => setActiveLayer(index)}
                  className={cn(
                    "w-full text-left p-5 rounded-2xl border transition-all duration-300 group",
                    isActive
                      ? "bg-card border-accent/50 shadow-xl"
                      : "bg-transparent border-border hover:border-accent/30 hover:bg-card/50"
                  )}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={cn(
                        "flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-white transition-all duration-300",
                        isActive ? "scale-110 shadow-lg" : "opacity-70 group-hover:opacity-100"
                      )}
                      style={{
                        background: `linear-gradient(135deg, ${layer.color} 0%, ${layer.color}CC 100%)`,
                        boxShadow: isActive
                          ? `0 8px 24px ${layer.color}40, inset 0 1px 1px rgba(255,255,255,0.2)`
                          : 'inset 0 1px 1px rgba(255,255,255,0.15)'
                      }}
                    >
                      <Icon className="h-5 w-5" strokeWidth={1.5} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-semibold text-muted-foreground">0{layer.number}</span>
                        <h3 className={cn(
                          "font-semibold transition-colors truncate",
                          isActive ? "text-foreground" : "text-muted-foreground group-hover:text-foreground"
                        )}>
                          {layer.title}
                        </h3>
                      </div>
                      <div className={cn(
                        "overflow-hidden transition-all duration-300",
                        isActive ? "max-h-40 opacity-100 mt-2" : "max-h-0 opacity-0"
                      )}>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {layer.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </button>
              )
            })}
          </div>
        </div>

        {/* Bottom callout */}
        <div 
          className={`mt-16 bg-card border border-border rounded-3xl p-8 lg:p-10 text-center relative overflow-hidden transition-all duration-700 delay-600 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            Other companies use five different vendors to attempt this. One for data, one for engineering, one for software, one for AI, one for automation. None of them talk to each other.
          </p>
          <p className="mt-4 font-serif text-2xl lg:text-3xl text-foreground">
            We are one team. One system. Every layer. <span className="gradient-text font-semibold">That is why it works.</span>
          </p>
        </div>
      </div>
    </section>
  )
}
