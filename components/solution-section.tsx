"use client"

import { useState, useEffect, useRef } from "react"
import { cn } from "@/lib/utils"

const layers = [
  {
    number: 1,
    title: "Data Cleanup & Organization",
    color: "bg-[oklch(0.55_0.12_180)]", // teal
    description:
      "We audit every system you use, find the mess, and fix it. Duplicates, inconsistencies, missing fields, scattered records across platforms - we clean it all and get your data into shape.",
  },
  {
    number: 2,
    title: "Database Architecture",
    color: "bg-[oklch(0.60_0.15_250)]", // blue
    description:
      "We build a proper structured database that becomes your single source of truth. No more wondering which spreadsheet has the right number. One place. One answer. Always accurate.",
  },
  {
    number: 3,
    title: "Custom Software",
    color: "bg-[oklch(0.58_0.18_280)]", // purple
    description:
      "We build the tools and interfaces your business actually needs on top of that clean foundation. Not off-the-shelf software you have to bend your workflow around. Software that fits how you already work.",
  },
  {
    number: 4,
    title: "AI Layer",
    color: "bg-[oklch(0.62_0.18_35)]", // coral/terracotta
    description:
      "Now we add AI. And it actually works. Because it's pulling from clean, structured, reliable data instead of the chaos most companies feed their models.",
  },
  {
    number: 5,
    title: "Agent Orchestration",
    color: "bg-[oklch(0.70_0.15_50)]", // warm orange
    description:
      "An AI operating system that manages your workflows, coordinates tasks across your business, and keeps getting smarter over time. This is the layer everyone wants to skip to. It only works when the four layers below it are solid.",
  },
]

export function SolutionSection() {
  const [activeLayer, setActiveLayer] = useState(0)
  const [scrollProgress, setScrollProgress] = useState(0)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return
      const rect = sectionRef.current.getBoundingClientRect()
      const sectionHeight = rect.height
      const viewportHeight = window.innerHeight
      const scrolled = -rect.top + viewportHeight * 0.5
      const progress = Math.min(Math.max(scrolled / sectionHeight, 0), 1)
      setScrollProgress(progress)
      
      // Update active layer based on scroll
      const newLayer = Math.min(Math.floor(progress * 5), 4)
      if (newLayer !== activeLayer && newLayer >= 0) {
        setActiveLayer(newLayer)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [activeLayer])

  return (
    <section id="solution" ref={sectionRef} className="py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <p className="text-accent font-medium mb-3 tracking-wide uppercase text-sm">Our Approach</p>
          <h2 className="font-serif text-3xl font-normal tracking-tight text-foreground sm:text-4xl lg:text-5xl leading-[1.15]">
            We Build From the Ground Up.{" "}
            <span className="text-muted-foreground">That&apos;s Why It Works.</span>
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Every other AI company starts at the top and hopes for the best. We start at the bottom and build each layer on a real foundation.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-start">
          {/* Interactive layer stack */}
          <div className="lg:sticky lg:top-24 order-2 lg:order-1">
            <div className="bg-card border border-border rounded-2xl p-8">
              {/* Visual layer stack */}
              <div className="flex flex-col-reverse gap-2 mb-8">
                {layers.map((layer, index) => (
                  <button
                    key={layer.number}
                    onClick={() => setActiveLayer(index)}
                    className={cn(
                      "h-12 rounded-lg transition-all duration-500 flex items-center justify-between px-4",
                      layer.color,
                      index <= activeLayer 
                        ? "opacity-100 scale-100" 
                        : "opacity-30 scale-95",
                      activeLayer === index && "ring-2 ring-foreground/20 ring-offset-2 ring-offset-background"
                    )}
                  >
                    <span className="text-white font-medium text-sm">
                      Layer {layer.number}
                    </span>
                    <span className="text-white/80 text-xs hidden sm:block">
                      {layer.title}
                    </span>
                  </button>
                ))}
              </div>

              {/* Layer detail */}
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className={cn("h-3 w-3 rounded-full", layers[activeLayer].color)} />
                  <p className="text-sm font-medium text-muted-foreground">
                    Layer {layers[activeLayer].number} of 5
                  </p>
                </div>
                <h3 className="text-xl font-semibold text-foreground">
                  {layers[activeLayer].title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {layers[activeLayer].description}
                </p>
              </div>

              {/* Progress indicator */}
              <div className="mt-8 pt-6 border-t border-border">
                <div className="flex justify-between items-center text-xs text-muted-foreground mb-2">
                  <span>Foundation</span>
                  <span>Full AI Capabilities</span>
                </div>
                <div className="h-2 bg-secondary rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-accent transition-all duration-300 rounded-full"
                    style={{ width: `${((activeLayer + 1) / 5) * 100}%` }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Layer list */}
          <div className="space-y-4 order-1 lg:order-2">
            {layers.map((layer, index) => (
              <button
                key={layer.number}
                onClick={() => setActiveLayer(index)}
                className={cn(
                  "w-full text-left p-6 rounded-xl border transition-all duration-300",
                  activeLayer === index
                    ? "bg-card border-accent/50 shadow-lg"
                    : "bg-transparent border-border hover:border-accent/30 hover:bg-card/50"
                )}
              >
                <div className="flex items-start gap-4">
                  <div
                    className={cn(
                      "flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-white font-bold text-sm transition-all",
                      layer.color,
                      activeLayer === index ? "scale-110" : ""
                    )}
                  >
                    {layer.number}
                  </div>
                  <div>
                    <h3 className={cn(
                      "font-semibold transition-colors",
                      activeLayer === index ? "text-foreground" : "text-muted-foreground"
                    )}>
                      {layer.title}
                    </h3>
                    {activeLayer === index && (
                      <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                        {layer.description}
                      </p>
                    )}
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Bottom callout */}
        <div className="mt-16 bg-accent/10 border border-accent/20 rounded-2xl p-8 text-center">
          <p className="font-serif text-xl lg:text-2xl text-foreground">
            Every other company starts at layer 4. <span className="text-accent">We start at layer 1.</span>
          </p>
          <p className="mt-3 text-muted-foreground">
            The result? AI that actually works. Because it&apos;s built on a foundation that actually exists.
          </p>
        </div>
      </div>
    </section>
  )
}
