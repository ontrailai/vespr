"use client"

import { useState, useEffect, useRef } from "react"
import { cn } from "@/lib/utils"
import { Stethoscope, Scale, Shield, Building2, ArrowRight } from "lucide-react"

const industries = [
  {
    id: "healthcare",
    title: "Healthcare",
    icon: Stethoscope,
    color: "#4A9B94",
    problem:
      "Your patient data lives in 6 different systems. Your AI scheduling tool can't find half your patients. Insurance verification flags errors because patient records don't match across platforms.",
    cause:
      "Every system migration, every new software tool, every front desk workaround created another layer of messy data. Nobody ever went back to clean it up.",
    solution:
      "We unify your patient data into one clean, structured system. Then we build AI tools on top that actually know who your patients are.",
    result:
      "Scheduling that works. Billing that's accurate. AI that helps your staff instead of creating more work.",
  },
  {
    id: "legal",
    title: "Legal",
    icon: Scale,
    color: "#5B8FD9",
    problem:
      "Case files scattered across 5 platforms. AI document review that misses key clauses because the data is inconsistent. Associates spending hours cross-referencing systems.",
    cause:
      "Every case management tool, every document storage platform, every email archive is its own silo. The data was never standardized.",
    solution:
      "We consolidate and structure your case data so every document, every clause, every precedent is findable and consistent.",
    result:
      "AI-powered review that catches what matters. Research that takes minutes instead of hours. Less risk, fewer missed details.",
  },
  {
    id: "insurance",
    title: "Insurance",
    icon: Shield,
    color: "#8B6DB3",
    problem:
      "Claims processing AI that flags false positives because your policy data has duplicates from 3 system migrations. Underwriting models making decisions on conflicting records.",
    cause:
      "Every merger, every platform switch, every bulk import left behind duplicate and inconsistent records that nobody reconciled.",
    solution:
      "We deduplicate and standardize your policy and claims data, then build AI that processes claims accurately from day one.",
    result:
      "Fewer false flags. Faster processing. Underwriting models you can actually trust.",
  },
  {
    id: "realestate",
    title: "Real Estate",
    icon: Building2,
    color: "#D97756",
    problem:
      "Lead scoring that doesn't work because your CRM has 4 versions of every contact. Agents wasting time on leads that were already contacted by someone else.",
    cause:
      "Leads come in from 10 different sources. Nobody deduplicates. Nobody standardizes. The CRM becomes a junk drawer.",
    solution:
      "We clean your contact and listing data, build a single source of truth, and layer AI on top that actually knows your pipeline.",
    result:
      "Lead scoring that reflects reality. No duplicate outreach. AI tools that help agents close instead of creating confusion.",
  },
]

export function IndustriesSection() {
  const [activeIndustry, setActiveIndustry] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const [isTransitioning, setIsTransitioning] = useState(false)
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

  const handleIndustryChange = (index: number) => {
    if (index === activeIndustry) return
    setIsTransitioning(true)
    setTimeout(() => {
      setActiveIndustry(index)
      setIsTransitioning(false)
    }, 200)
  }

  const currentIndustry = industries[activeIndustry]
  const Icon = currentIndustry.icon

  return (
    <section id="industries" ref={sectionRef} className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
      
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 relative">
        <div className="mx-auto max-w-3xl text-center mb-12">
          <span 
            className={`inline-block text-accent font-semibold mb-4 tracking-widest uppercase text-xs transition-all duration-500 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Industry Focus
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
            We work with data-heavy businesses where messy data creates real operational pain.
          </p>
        </div>

        {/* Industry tabs */}
        <div 
          className={`flex flex-wrap justify-center gap-3 mb-10 transition-all duration-500 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          {industries.map((industry, index) => {
            const TabIcon = industry.icon
            const isActive = activeIndustry === index
            
            return (
              <button
                key={industry.id}
                onClick={() => handleIndustryChange(index)}
                className={cn(
                  "flex items-center gap-2.5 rounded-full border px-5 py-3 text-sm font-medium transition-all duration-300",
                  isActive
                    ? "border-transparent text-white shadow-lg"
                    : "border-border bg-card text-muted-foreground hover:border-accent/30 hover:text-foreground hover:-translate-y-0.5"
                )}
                style={isActive ? { 
                  backgroundColor: industry.color,
                  boxShadow: `0 8px 24px ${industry.color}40`
                } : {}}
              >
                <TabIcon className="h-4 w-4" />
                {industry.title}
              </button>
            )
          })}
        </div>

        {/* Industry detail card */}
        <div 
          className={`bg-card rounded-3xl border border-border overflow-hidden shadow-xl transition-all duration-500 delay-400 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Top accent bar */}
          <div 
            className="h-1 transition-all duration-500"
            style={{ backgroundColor: currentIndustry.color }}
          />
          
          <div className={cn(
            "transition-all duration-200",
            isTransitioning ? "opacity-0 scale-98" : "opacity-100 scale-100"
          )}>
            <div className="grid lg:grid-cols-2">
              {/* Left column - Problem */}
              <div className="p-8 lg:p-10">
                <div className="flex items-center gap-4 mb-8">
                  <div 
                    className="flex h-14 w-14 items-center justify-center rounded-2xl text-white"
                    style={{ backgroundColor: currentIndustry.color }}
                  >
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-serif text-2xl lg:text-3xl text-foreground">
                    {currentIndustry.title}
                  </h3>
                </div>

                <div className="space-y-6">
                  <div className="group">
                    <p 
                      className="text-xs font-bold uppercase tracking-widest mb-3 flex items-center gap-2"
                      style={{ color: currentIndustry.color }}
                    >
                      <span className="w-8 h-px" style={{ backgroundColor: currentIndustry.color }} />
                      The Problem
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      {currentIndustry.problem}
                    </p>
                  </div>

                  <div className="group">
                    <p 
                      className="text-xs font-bold uppercase tracking-widest mb-3 flex items-center gap-2"
                      style={{ color: currentIndustry.color }}
                    >
                      <span className="w-8 h-px" style={{ backgroundColor: currentIndustry.color }} />
                      Why It Happens
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      {currentIndustry.cause}
                    </p>
                  </div>
                </div>
              </div>

              {/* Right column - Solution */}
              <div className="bg-secondary/30 p-8 lg:p-10 border-t lg:border-t-0 lg:border-l border-border relative">
                <div className="absolute top-0 right-0 w-40 h-40 opacity-10 rounded-bl-full" style={{ backgroundColor: currentIndustry.color }} />
                
                <div className="space-y-6 relative">
                  <div>
                    <p 
                      className="text-xs font-bold uppercase tracking-widest mb-3 flex items-center gap-2"
                      style={{ color: currentIndustry.color }}
                    >
                      <span className="w-8 h-px" style={{ backgroundColor: currentIndustry.color }} />
                      What We Do
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      {currentIndustry.solution}
                    </p>
                  </div>

                  <div 
                    className="rounded-2xl p-6 border"
                    style={{ 
                      backgroundColor: `${currentIndustry.color}08`,
                      borderColor: `${currentIndustry.color}30`
                    }}
                  >
                    <p 
                      className="text-xs font-bold uppercase tracking-widest mb-3 flex items-center gap-2"
                      style={{ color: currentIndustry.color }}
                    >
                      <ArrowRight className="h-3 w-3" />
                      The Result
                    </p>
                    <p className="font-medium text-foreground leading-relaxed">
                      {currentIndustry.result}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Social proof */}
        <div 
          className={`mt-12 text-center transition-all duration-500 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <div className="inline-flex items-center gap-5 bg-card border border-border rounded-full px-8 py-4 shadow-sm">
            <div className="flex -space-x-3">
              {["#D97756", "#4A9B94", "#5B8FD9", "#8B6DB3"].map((color, i) => (
                <div 
                  key={i} 
                  className="h-10 w-10 rounded-full border-2 border-card flex items-center justify-center text-xs font-bold text-white"
                  style={{ backgroundColor: color }}
                >
                  {String.fromCharCode(65 + i)}
                </div>
              ))}
            </div>
            <p className="text-sm text-muted-foreground">
              <span className="font-bold text-foreground text-lg">50+</span> businesses transformed their data foundation
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
