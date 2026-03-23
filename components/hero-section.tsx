"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

const trustedLogos = [
  { name: "Healthcare Plus", initials: "H+" },
  { name: "LegalTech Co", initials: "LT" },
  { name: "InsureRight", initials: "IR" },
  { name: "PropertyFlow", initials: "PF" },
  { name: "DataFirst", initials: "DF" },
]

export function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-28 pb-16 lg:pt-36 lg:pb-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          {/* Eyebrow */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-4 py-1.5">
            <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
            <span className="text-sm font-medium text-muted-foreground">
              For data-heavy businesses ready to get AI right
            </span>
          </div>

          <h1 className="font-serif text-4xl font-normal tracking-tight text-foreground sm:text-5xl lg:text-6xl leading-[1.1]">
            Your AI Doesn&apos;t Have an AI Problem.{" "}
            <span className="text-accent">It Has a Data Problem.</span>
          </h1>
          
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground sm:text-xl max-w-2xl mx-auto">
            Every AI agency skips the foundation. They hand you a chatbot built on messy, scattered, duplicate-filled data and wonder why it doesn&apos;t work. We start where the real problem is.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button 
              size="lg" 
              asChild 
              className="gap-2 bg-accent hover:bg-accent/90 text-accent-foreground rounded-full px-8 h-12 text-base shadow-lg shadow-accent/20 transition-all hover:shadow-xl hover:shadow-accent/30 hover:-translate-y-0.5"
            >
              <Link href="#pricing">
                Start With Your Data
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              asChild 
              className="rounded-full px-8 h-12 text-base border-border hover:bg-secondary/50"
            >
              <Link href="#solution">See How It Works</Link>
            </Button>
          </div>
        </div>

        {/* Social proof bar */}
        <div className="mt-20 border-t border-border pt-10">
          <p className="text-center text-sm font-medium text-muted-foreground mb-8">
            Trusted by data-driven teams at
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
            {trustedLogos.map((logo) => (
              <div
                key={logo.name}
                className="flex items-center gap-2 text-muted-foreground/60 hover:text-muted-foreground transition-colors"
              >
                <div className="flex h-8 w-8 items-center justify-center rounded bg-secondary text-xs font-bold">
                  {logo.initials}
                </div>
                <span className="text-sm font-medium">{logo.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
