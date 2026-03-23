"use client"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

const industries = [
  {
    id: "healthcare",
    title: "Healthcare",
    color: "#4A9B94",
    description:
      "Patient records in 6 systems. Compliance documentation scattered across shared drives. Your EHR says one thing, your billing says another. We clean the data, connect the systems, and deploy AI that actually understands your patients.",
  },
  {
    id: "legal",
    title: "Legal",
    color: "#5B8FD9",
    description:
      "Case files in folders nobody can find. Billing disconnected from matter management. Associates spending hours on research that should take minutes. We build the data foundation, then put AI to work on intake, research, and document management.",
  },
  {
    id: "insurance",
    title: "Insurance",
    color: "#8B6DB3",
    description:
      "Claims data in silos. Underwriting running on outdated spreadsheets. Policy information that lives in 4 places and agrees in none of them. We unify your data, then deploy agents that process claims, flag fraud, and route renewals automatically.",
  },
  {
    id: "realestate",
    title: "Real Estate",
    color: "#D97756",
    description:
      "Leads in 3 CRMs. Transactions tracked in spreadsheets. Market data copy-pasted from Zillow. No single view of your pipeline. We centralize everything into one clean system, then let AI handle lead scoring, follow-ups, and market analysis.",
  },
]

const yourIndustry = {
  id: "your-industry",
  title: "Your Industry",
  description:
    "If your business runs on data and your data is a mess, we can help. The industries above are where we started. The approach works anywhere the same pattern exists: scattered data, disconnected tools, manual processes that should have been automated years ago.",
}

export function IndustriesSection() {
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
    <section id="industries" ref={sectionRef} className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
      
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 relative">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <span 
            className={`inline-block text-accent font-semibold mb-4 tracking-widest uppercase text-xs transition-all duration-500 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Where We Work
          </span>
          <h2 
            className={`font-serif text-4xl font-medium tracking-tight text-foreground sm:text-5xl lg:text-6xl leading-[1.1] transition-all duration-500 delay-100 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            This Might Sound Familiar
          </h2>
          <p 
            className={`mt-6 text-lg leading-relaxed text-muted-foreground transition-all duration-500 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            We work with businesses where messy data creates real operational pain.
          </p>
        </div>

        {/* Industry cards grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          {industries.map((industry, index) => (
            <div
              key={industry.id}
              className={`group bg-card rounded-2xl border border-border p-8 transition-all duration-500 hover:shadow-xl hover:-translate-y-1 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ 
                transitionDelay: `${300 + index * 100}ms`,
              }}
            >
              {/* Color accent bar */}
              <div 
                className="w-12 h-1 rounded-full mb-6 transition-all duration-300 group-hover:w-20"
                style={{ backgroundColor: industry.color }}
              />
              
              <h3 
                className="font-serif text-2xl font-medium text-foreground mb-4"
              >
                {industry.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {industry.description}
              </p>
            </div>
          ))}
        </div>

        {/* Your Industry card - special styling */}
        <div
          className={`bg-card/50 rounded-2xl border-2 border-dashed border-border p-8 text-center transition-all duration-500 hover:border-accent/50 hover:bg-card ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: "700ms" }}
        >
          <h3 className="font-serif text-2xl font-medium text-foreground mb-4">
            {yourIndustry.title}
          </h3>
          
          <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-8">
            {yourIndustry.description}
          </p>

          <Button 
            size="lg" 
            asChild 
            className="group gap-2 bg-accent hover:bg-accent/90 text-accent-foreground rounded-full px-8 h-12 text-base font-medium shadow-lg shadow-accent/20 transition-all hover:shadow-xl hover:shadow-accent/30 hover:-translate-y-0.5"
          >
            <Link href="#pricing">
              Let&apos;s Talk About Your Business
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
