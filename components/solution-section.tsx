"use client"

import { useState, useEffect, useRef } from "react"
import { cn } from "@/lib/utils"
import { Database, Server, Code, Brain, Bot } from "lucide-react"

const layers = [
  {
    number: 1,
    title: "Data Cleanup & Organization",
    color: "#4A9B94",
    icon: Database,
    description:
      "We audit every system you use, find the mess, and fix it. Duplicates, inconsistencies, missing fields, scattered records across platforms - we clean it all and get your data into shape.",
  },
  {
    number: 2,
    title: "Database Architecture",
    color: "#5B8FD9",
    icon: Server,
    description:
      "We build a proper structured database that becomes your single source of truth. No more wondering which spreadsheet has the right number. One place. One answer. Always accurate.",
  },
  {
    number: 3,
    title: "Custom Software",
    color: "#8B6DB3",
    icon: Code,
    description:
      "We build the tools and interfaces your business actually needs on top of that clean foundation. Not off-the-shelf software you have to bend your workflow around. Software that fits how you already work.",
  },
  {
    number: 4,
    title: "AI Layer",
    color: "#D97756",
    icon: Brain,
    description:
      "Now we add AI. And it actually works. Because it's pulling from clean, structured, reliable data instead of the chaos most companies feed their models.",
  },
  {
    number: 5,
    title: "Agent Orchestration",
    color: "#E5A84B",
    icon: Bot,
    description:
      "An AI operating system that manages your workflows, coordinates tasks across your business, and keeps getting smarter over time. This is the layer everyone wants to skip to. It only works when the four layers below it are solid.",
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
        <div className="mx-auto max-w-3xl text-center mb-16">
          <span 
            className={`inline-block text-accent font-semibold mb-4 tracking-widest uppercase text-xs transition-all duration-500 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            How vespr. Works
          </span>
          <h2 
            className={`font-serif text-4xl font-medium tracking-tight text-foreground sm:text-5xl lg:text-6xl leading-[1.1] transition-all duration-500 delay-100 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Five Layers.{" "}
            <span className="text-muted-foreground">One System That Works.</span>
          </h2>
          <p 
            className={`mt-6 text-lg leading-relaxed text-muted-foreground transition-all duration-500 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            We don&apos;t just add AI to your business. We build the complete infrastructure - from data foundation to autonomous agents - so every layer makes the next one smarter.
          </p>
        </div>

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
                      <span className="text-white/80 text-xs font-medium hidden sm:block relative">
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
                        backgroundColor: layer.color,
                        boxShadow: isActive ? `0 8px 24px ${layer.color}40` : 'none'
                      }}
                    >
                      <Icon className="h-5 w-5" />
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
          className={`mt-16 bg-gradient-to-r from-accent/10 via-accent/5 to-accent-secondary/10 border border-accent/20 rounded-3xl p-8 lg:p-10 text-center relative overflow-hidden transition-all duration-700 delay-600 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-accent/5 to-accent-secondary/5 animate-gradient" />
          <div className="relative">
            <p className="font-serif text-2xl lg:text-3xl text-foreground">
              Other companies sell you layer 4 or 5. <span className="gradient-text font-semibold">We build all five.</span>
            </p>
            <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
              That&apos;s why vespr. works when everything else you&apos;ve tried hasn&apos;t.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
