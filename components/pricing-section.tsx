"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Check, Sparkles } from "lucide-react"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"

const auditFeatures = [
  "Full data audit across every system you use",
  "AI opportunity scorecard (where automation saves you the most)",
  "Data quality report with specific issues identified",
  "Competitive gap analysis (what AI can do for your industry)",
  "Custom roadmap with timeline and ROI projections",
  "60-minute strategy call to walk through findings",
  "No commitment beyond the audit - the roadmap is yours to keep",
]

const buildFeatures = [
  "Clean, structured data across all your systems",
  "Custom employee portal and dashboards your team actually uses",
  "AI workflows running your follow-ups, scheduling, reporting, and intake",
  "Scout instance configured for your business operations",
  "Integrations with your CRM, email, calendar, and existing tools",
  "Multi-agent AI team (research, writing, ops, communications)",
  "10+ hours of manual work automated per week",
  "Ongoing optimization - Scout gets smarter every month",
  "Dedicated team, single point of contact, one timeline",
]

export function PricingSection() {
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
    <section id="pricing" ref={sectionRef} className="py-24 lg:py-32 bg-secondary/40 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
      <div className="absolute top-20 -left-20 w-60 h-60 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 -right-20 w-80 h-80 bg-accent-secondary/5 rounded-full blur-3xl" />
      
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 relative">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <span 
            className={`inline-block text-accent font-semibold mb-4 tracking-widest uppercase text-xs transition-all duration-500 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Pricing
          </span>
          <h2 
            className={`font-serif text-4xl font-medium tracking-tight text-foreground sm:text-5xl lg:text-6xl leading-[1.1] transition-all duration-500 delay-100 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            One Team. One Stack.{" "}
            <span className="text-muted-foreground">A Fraction of the Cost.</span>
          </h2>
          <p 
            className={`mt-6 text-lg leading-relaxed text-muted-foreground transition-all duration-500 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Most businesses end up paying $75K to $600K across 5 different vendors. A data cleaner. A database engineer. A dev shop. An AI consultant. An automation agency. <span className="text-foreground font-medium">None of them talk to each other.</span>
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2 max-w-4xl mx-auto">
          {/* AI Readiness Audit */}
          <div 
            className={`relative bg-card rounded-3xl border border-border p-8 flex flex-col transition-all duration-500 delay-300 card-lift ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="absolute -top-3 left-6">
              <span className="rounded-full bg-secondary px-4 py-1.5 text-xs font-bold text-muted-foreground border border-border">
                Start Here
              </span>
            </div>
            <div className="mt-2">
              <h3 className="font-serif text-2xl text-foreground">
                AI Readiness Audit
              </h3>
              <p className="mt-1 text-muted-foreground text-sm">
                The smartest first step
              </p>
            </div>
            <div className="mt-6 flex items-baseline gap-1">
              <span className="font-serif text-5xl text-foreground">$2,500</span>
              <span className="text-muted-foreground text-lg"> - $5,000</span>
            </div>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
              We look at your data across every system, identify the gaps, score your AI readiness, and give you a clear roadmap. You walk away knowing exactly where you stand.
            </p>
            <ul className="mt-6 space-y-3 flex-grow">
              {auditFeatures.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent/10 mt-0.5">
                    <Check className="h-3 w-3 text-accent" />
                  </div>
                  <span className="text-sm text-muted-foreground">{feature}</span>
                </li>
              ))}
            </ul>
            <Button 
              className="mt-8 w-full gap-2 rounded-full h-12 text-base font-medium" 
              variant="outline" 
              asChild
            >
              <Link href="mailto:hello@vespr.io">
                Book Your Audit
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>

          {/* Full Build */}
          <div 
            className={`relative bg-card rounded-3xl p-8 flex flex-col transition-all duration-500 delay-400 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{
              border: '2px solid #D97756',
              boxShadow: '0 20px 60px rgba(217, 119, 86, 0.2)'
            }}
          >
            {/* Gradient background */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-accent/5 via-transparent to-accent-secondary/5" />
            
            <div className="absolute -top-3 left-6 z-10">
              <span className="rounded-full bg-accent px-4 py-1.5 text-xs font-bold text-accent-foreground inline-flex items-center gap-1.5">
                <Sparkles className="h-3 w-3" />
                Most Popular
              </span>
            </div>
            
            <div className="relative mt-2">
              <h3 className="font-serif text-2xl text-foreground">Full Build</h3>
              <p className="mt-1 text-muted-foreground text-sm">
                Complete data-to-AI transformation
              </p>
            </div>
            <div className="relative mt-6">
              <span className="font-serif text-5xl text-foreground">Custom</span>
              <span className="text-muted-foreground text-lg"> scoped</span>
            </div>
            <p className="relative mt-4 text-sm text-muted-foreground leading-relaxed">
              After the audit, we scope the full engagement based on your data complexity and business goals. Every project includes all 5 layers.
            </p>
            <ul className="relative mt-6 space-y-3 flex-grow">
              {buildFeatures.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent/20 mt-0.5">
                    <Check className="h-3 w-3 text-accent" />
                  </div>
                  <span className="text-sm text-foreground">{feature}</span>
                </li>
              ))}
            </ul>
            <Button 
              className="relative mt-8 w-full gap-2 rounded-full h-12 text-base font-medium bg-accent hover:bg-accent/90 text-accent-foreground shadow-lg shadow-accent/25 hover:shadow-xl hover:shadow-accent/30 transition-all hover:-translate-y-0.5" 
              asChild
            >
              <Link href="mailto:hello@vespr.io">
                Start With Your Data
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>

        {/* Why this beats the alternative */}
        <div 
          className={`mt-16 max-w-3xl mx-auto text-center transition-all duration-500 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <div className="bg-card border border-border rounded-2xl p-8">
            <h3 className="font-serif text-xl text-foreground mb-4">
              Why this beats the alternative
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Five vendors means five timelines, five contracts, five points of failure, and nobody responsible for the end result. <span className="text-foreground font-medium">One team means one timeline, one relationship, and one group of people who won&apos;t ship layer 4 until layers 1 through 3 are rock solid.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
