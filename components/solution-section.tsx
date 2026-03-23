"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"
import { Database, Layers, Code, Brain, Cpu } from "lucide-react"

const layers = [
  {
    number: 1,
    title: "Data Cleanup and Organization",
    icon: Database,
    description:
      "We audit every system you use, find the mess, and fix it. Duplicates, inconsistencies, missing fields, scattered records across platforms - we clean it all and get your data into shape.",
  },
  {
    number: 2,
    title: "Database Architecture",
    icon: Layers,
    description:
      "We build a proper structured database that becomes your single source of truth. No more wondering which spreadsheet has the right number. One place. One answer. Always accurate.",
  },
  {
    number: 3,
    title: "Custom Software",
    icon: Code,
    description:
      "We build the tools and interfaces your business actually needs on top of that clean foundation. Not off-the-shelf software you have to bend your workflow around. Software that fits how you already work.",
  },
  {
    number: 4,
    title: "AI Layer",
    icon: Brain,
    description:
      "Now we add AI. And it actually works. Because it's pulling from clean, structured, reliable data instead of the chaos most companies feed their models.",
  },
  {
    number: 5,
    title: "Agent Orchestration (Scout)",
    icon: Cpu,
    description:
      "An AI operating system that manages your workflows, coordinates tasks across your business, and keeps getting smarter over time. This is the layer everyone wants to skip to. It only works when the four layers below it are solid.",
  },
]

export function SolutionSection() {
  const [activeLayer, setActiveLayer] = useState(0)

  return (
    <section id="solution" className="py-20 lg:py-32 bg-card/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            We Build From the Ground Up. {"That's"} Why It Actually Works.
          </h2>
          <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground">
            Every other AI company starts at the top and hopes for the best. We start at the bottom and build each layer on a real foundation. Skip a layer, and everything above it breaks.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          {/* Layer selector */}
          <div className="space-y-3">
            {layers.map((layer, index) => (
              <button
                key={layer.number}
                onClick={() => setActiveLayer(index)}
                className={cn(
                  "flex w-full items-center gap-4 rounded-xl border p-4 text-left transition-all",
                  activeLayer === index
                    ? "border-accent bg-accent/10"
                    : "border-border bg-card hover:border-accent/50"
                )}
              >
                <div
                  className={cn(
                    "flex h-10 w-10 shrink-0 items-center justify-center rounded-lg",
                    activeLayer === index
                      ? "bg-accent text-accent-foreground"
                      : "bg-secondary text-muted-foreground"
                  )}
                >
                  <layer.icon className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">
                    Layer {layer.number}
                  </p>
                  <p
                    className={cn(
                      "font-semibold",
                      activeLayer === index
                        ? "text-foreground"
                        : "text-muted-foreground"
                    )}
                  >
                    {layer.title}
                  </p>
                </div>
              </button>
            ))}
          </div>

          {/* Layer detail */}
          <div className="flex flex-col justify-center rounded-xl border border-border bg-card p-8 lg:p-12">
            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-accent text-accent-foreground">
              {(() => {
                const Icon = layers[activeLayer].icon
                return <Icon className="h-7 w-7" />
              })()}
            </div>
            <p className="text-sm font-medium text-accent">
              Layer {layers[activeLayer].number}
            </p>
            <h3 className="mt-2 text-2xl font-bold text-foreground">
              {layers[activeLayer].title}
            </h3>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              {layers[activeLayer].description}
            </p>

            {/* Visual layer stack */}
            <div className="mt-8 flex flex-col-reverse gap-1">
              {layers.map((layer, index) => (
                <div
                  key={layer.number}
                  className={cn(
                    "h-3 rounded transition-all",
                    index <= activeLayer
                      ? "bg-accent"
                      : "bg-secondary"
                  )}
                />
              ))}
            </div>
            <p className="mt-3 text-xs text-muted-foreground">
              {activeLayer === 4
                ? "All layers active - Full AI capabilities unlocked"
                : `${activeLayer + 1} of 5 layers - ${5 - activeLayer - 1} more needed for full AI`}
            </p>
          </div>
        </div>

        <div className="mt-16 rounded-xl border border-accent/30 bg-accent/5 p-8 text-center">
          <p className="text-lg font-medium text-foreground">
            Every other company starts at layer 4. We start at layer 1.
          </p>
          <p className="mt-2 text-muted-foreground">
            The result? AI that actually works. Because it's built on a foundation that actually exists.
          </p>
        </div>
      </div>
    </section>
  )
}
