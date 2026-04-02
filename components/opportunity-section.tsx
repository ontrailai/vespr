"use client"

import { useEffect, useRef, useState } from "react"

const stats = [
  { value: "87", suffix: "%", label: "of business owners have already tried AI" },
  { value: "76", suffix: "%", label: "want to save time and automate processes" },
  { value: "61", suffix: "%", label: "tried AI and it did not work. We fix that." },
]

function AnimatedCounter({ value, suffix, isVisible }: { value: string; suffix: string; isVisible: boolean }) {
  const [displayValue, setDisplayValue] = useState("0")
  
  useEffect(() => {
    if (!isVisible) return
    
    const targetNum = parseInt(value)
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
        setDisplayValue(Math.floor(current).toString())
      }
    }, stepDuration)
    
    return () => clearInterval(timer)
  }, [isVisible, value])
  
  return <span>{displayValue}{suffix}</span>
}

export function OpportunitySection() {
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
    <section ref={sectionRef} className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-60 h-60 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-accent-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-12">
          <span 
            className={`inline-block text-accent font-semibold mb-4 tracking-widest uppercase text-xs transition-all duration-500 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            The Opportunity
          </span>
          <h2 
            className={`font-serif text-4xl font-medium tracking-tight text-foreground sm:text-5xl lg:text-6xl leading-[1.1] transition-all duration-500 delay-100 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            AI Will Never Be Worse{" "}
            <span className="gradient-text">Than It Is Right Now.</span>
          </h2>
        </div>

        {/* Main content */}
        <div 
          className={`space-y-6 text-center transition-all duration-700 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-lg leading-relaxed text-muted-foreground">
            That means every month you wait, the businesses that already adopted AI pull further ahead. And the gap compounds. They are getting faster, cheaper, and more efficient every single day while you are still paying humans to do work a machine could do at 2am on a Sunday.
          </p>
          
          <p className="text-lg leading-relaxed text-muted-foreground">
            Right now, AI can run your entire lead acquisition process from ad to booked call. It can manage your operations, process your intake, handle customer support, create your content, and run your sales follow-up. All at the same time. 24 hours a day.
          </p>
          
          <p className="text-lg leading-relaxed text-foreground font-medium">
            This is not a chatbot. These are fully autonomous AI systems trained on your business, connected to your tools, doing real work across every department.
          </p>
          
          <p className="text-lg leading-relaxed text-muted-foreground">
            Businesses are used to paying $30,000 a month for a team to produce certain outputs. AI delivers the same outputs for a fraction of that cost. The businesses that move first capture that margin. The ones that wait pay the price.
          </p>
        </div>

        {/* Stats */}
        <div 
          className={`mt-16 grid gap-6 sm:grid-cols-3 transition-all duration-700 delay-400 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {stats.map((stat, index) => (
            <div 
              key={stat.label}
              className="bg-card border border-border rounded-2xl p-6 text-center"
              style={{ transitionDelay: `${400 + index * 100}ms` }}
            >
              <p className="text-5xl font-bold text-accent font-serif">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} isVisible={isVisible} />
              </p>
              <p className="mt-3 text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
