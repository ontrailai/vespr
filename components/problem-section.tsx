"use client"

import { useEffect, useRef, useState } from "react"

const stats = [
  {
    stat: "70%",
    label: "of AI projects fail",
    description: "Not because of bad AI",
    color: "from-red-500/20 to-orange-500/20",
  },
  {
    stat: "3 in 4",
    label: "companies report data not AI-ready",
    description: "Before any model is trained",
    color: "from-amber-500/20 to-yellow-500/20",
  },
  {
    stat: "80%",
    label: "of time spent on data cleaning",
    description: "By data scientists",
    color: "from-teal-500/20 to-cyan-500/20",
  },
  {
    stat: "$881M",
    label: "lost by one company",
    description: "On bad AI data decisions",
    color: "from-purple-500/20 to-pink-500/20",
  },
]

function AnimatedCounter({ value, isVisible }: { value: string, isVisible: boolean }) {
  const [displayValue, setDisplayValue] = useState("0")
  
  useEffect(() => {
    if (!isVisible) return
    
    // Extract number from value
    const numMatch = value.match(/[\d.]+/)
    if (!numMatch) {
      setDisplayValue(value)
      return
    }
    
    const targetNum = parseFloat(numMatch[0])
    const prefix = value.slice(0, value.indexOf(numMatch[0]))
    const suffix = value.slice(value.indexOf(numMatch[0]) + numMatch[0].length)
    
    let current = 0
    const duration = 1500
    const steps = 40
    const increment = targetNum / steps
    const stepDuration = duration / steps
    
    const timer = setInterval(() => {
      current += increment
      if (current >= targetNum) {
        setDisplayValue(value)
        clearInterval(timer)
      } else {
        setDisplayValue(`${prefix}${Math.floor(current)}${suffix}`)
      }
    }, stepDuration)
    
    return () => clearInterval(timer)
  }, [isVisible, value])
  
  return <span>{displayValue}</span>
}

export function ProblemSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="problem" ref={sectionRef} className="py-24 lg:py-32 bg-secondary/40 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
      <div className="absolute -top-20 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 relative">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <span 
            className={`inline-block text-accent font-semibold mb-4 tracking-widest uppercase text-xs transition-all duration-500 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            The Real Problem
          </span>
          <h2 
            className={`font-serif text-4xl font-medium tracking-tight text-foreground sm:text-5xl lg:text-6xl leading-[1.1] transition-all duration-500 delay-100 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            You Bought the AI.{" "}
            <span className="text-muted-foreground">It Still Doesn&apos;t Work.</span>
          </h2>
          <p 
            className={`mt-6 text-lg leading-relaxed text-muted-foreground transition-all duration-500 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            70% of AI projects fail. Not because the AI is bad. <span className="text-foreground font-medium">Because the data underneath it is a disaster.</span>
          </p>
        </div>

        {/* Stats grid with animated counters */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-16">
          {stats.map((item, index) => (
            <div
              key={item.label}
              className={`relative overflow-hidden bg-card rounded-2xl p-6 border border-border card-lift group transition-all duration-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 100 + 300}ms` }}
            >
              {/* Gradient background on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="relative">
                <p className="text-5xl font-bold text-foreground font-serif">
                  <AnimatedCounter value={item.stat} isVisible={isVisible} />
                </p>
                <p className="mt-3 text-sm font-semibold text-foreground">{item.label}</p>
                <p className="mt-1 text-xs text-muted-foreground">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Story block with visual flair */}
        <div 
          className={`bg-card rounded-3xl border border-border p-8 lg:p-12 relative overflow-hidden transition-all duration-700 delay-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Corner accent */}
          <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-accent/10 to-transparent" />
          
          <div className="max-w-3xl mx-auto space-y-6 relative">
            <p className="text-lg leading-relaxed text-muted-foreground">
              You hired the agency. You bought the tools. You built the chatbot. And it gives wrong answers, misses context, and makes mistakes that embarrass your team in front of customers.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              <strong className="text-foreground">Why?</strong> Because every AI tool you plug in is reading from the same messy, duplicated, inconsistent data you&apos;ve been duct-taping together for years.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Your customer records live in 4 different systems and none of them agree. Your spreadsheets have 3 versions of the same contact. Your CRM hasn&apos;t been cleaned since the last system migration.
            </p>
            
            {/* Pull quote with accent styling */}
            <blockquote className="my-12 py-8 px-8 border-l-4 border-accent bg-accent/5 rounded-r-2xl relative">
              <div className="absolute -top-4 left-6 text-6xl text-accent/20 font-serif">&ldquo;</div>
              <p className="font-serif text-2xl lg:text-3xl text-foreground leading-snug relative">
                The AI industry has been selling you the roof before anyone poured the foundation.
              </p>
            </blockquote>

            <p className="text-lg leading-relaxed text-muted-foreground">
              Your AI is only as good as your data. And right now, <span className="inline-flex items-center gap-1 text-accent font-semibold">your data is probably terrible.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
