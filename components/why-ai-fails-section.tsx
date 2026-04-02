"use client"

import { useEffect, useRef, useState } from "react"

const reasons = [
  {
    number: "01",
    title: "You used it like a Google search",
    description: "You typed something in, got garbage back, and said \"this does not work.\" But you would not fire a new employee after their first task. AI needs training, context, and iteration. It needs to be taught your business the same way you would teach a person. Except it learns in days, not months.",
  },
  {
    number: "02",
    title: "Nobody built it properly",
    description: "Real AI systems need to be custom built, connected to your tools, and trained on your specific data and processes. You cannot get that from a $50/month subscription or a freelancer who watched a YouTube tutorial. It requires real engineering from people who have done it before.",
  },
  {
    number: "03",
    title: "It was built and abandoned",
    description: "Someone built it, handed it over, and disappeared. When it broke or gave wrong answers, nobody was there to fix it. AI systems need ongoing training, monitoring, and optimization. Without that, they degrade fast. This is not a set-it-and-forget-it game.",
  },
]

export function WhyAiFailsSection() {
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
    <section ref={sectionRef} className="py-24 lg:py-32 bg-secondary/40 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
      
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <span 
            className={`inline-block text-accent font-semibold mb-4 tracking-widest uppercase text-xs transition-all duration-500 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Why Most AI Fails
          </span>
          <h2 
            className={`font-serif text-4xl font-medium tracking-tight text-foreground sm:text-5xl lg:text-6xl leading-[1.1] transition-all duration-500 delay-100 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            You Have Probably Tried AI Before.{" "}
            <span className="text-muted-foreground">Here Is Why It Did Not Work.</span>
          </h2>
        </div>

        {/* Reasons grid */}
        <div className="grid gap-8 lg:grid-cols-3">
          {reasons.map((reason, index) => (
            <div
              key={reason.number}
              className={`bg-card border border-border rounded-2xl p-8 transition-all duration-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${200 + index * 100}ms` }}
            >
              <span className="text-accent font-bold text-sm">{reason.number}</span>
              <h3 className="mt-4 text-xl font-semibold text-foreground">{reason.title}</h3>
              <p className="mt-4 text-muted-foreground leading-relaxed">{reason.description}</p>
            </div>
          ))}
        </div>

        {/* Solution callout */}
        <div 
          className={`mt-16 bg-card border border-accent/30 rounded-3xl p-8 lg:p-12 transition-all duration-700 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h3 className="font-serif text-2xl lg:text-3xl text-foreground mb-6">
            We solve all three.
          </h3>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We build custom AI systems from scratch for your specific business. We connect them to every tool you use. We train them on your data. And we manage them every single month so they keep getting smarter. You never touch a line of code. You never manage the system. <strong className="text-foreground">You just get the results.</strong>
          </p>
        </div>
      </div>
    </section>
  )
}
