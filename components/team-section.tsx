"use client"

import { useEffect, useRef, useState } from "react"

const team = [
  {
    name: "Luke Fontaine",
    role: "Business Strategy + AI Application",
    bio: "Built and scaled an agency serving 800+ clients across legal, healthcare, dental, e-commerce, and professional services. Worked directly with Jay Abraham and Tony Robbins' team. Built and scaled five companies, the most recent reaching eight figures per year. Has spent the last year going all-in on AI application in business operations.",
    tagline: "Luke knows what breaks when businesses scale, and he knows exactly where AI fixes it.",
    color: "#D97756",
  },
  {
    name: "Ryan",
    role: "Full-Stack Engineer + AI Architect",
    bio: "Six years dedicated exclusively to AI, from foundational models to production deployment. Full-stack engineer who commands the entire modern AI stack: databases, APIs, cloud infrastructure, front-end. Already building AI systems for businesses across multiple industries. Ships in days what most agencies take quarters to scope and plan.",
    tagline: "If it can be built, Ryan builds it. Fast, clean, and production-ready.",
    color: "#4A9B94",
  },
]

export function TeamSection() {
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
            Who We Are
          </span>
          <h2 
            className={`font-serif text-4xl font-medium tracking-tight text-foreground sm:text-5xl lg:text-6xl leading-[1.1] transition-all duration-500 delay-100 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Strategy and Engineering{" "}
            <span className="text-muted-foreground">Under One Roof.</span>
          </h2>
        </div>

        {/* Team cards */}
        <div className="grid gap-8 lg:grid-cols-2">
          {team.map((member, index) => (
            <div
              key={member.name}
              className={`bg-card border border-border rounded-3xl p-8 transition-all duration-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${200 + index * 100}ms` }}
            >
              {/* Avatar placeholder */}
              <div 
                className="w-16 h-16 rounded-full mb-6 flex items-center justify-center text-white text-2xl font-bold"
                style={{ backgroundColor: member.color }}
              >
                {member.name.charAt(0)}
              </div>
              
              <h3 className="text-2xl font-semibold text-foreground">{member.name}</h3>
              <p className="text-accent font-medium mt-1">{member.role}</p>
              
              <p className="mt-4 text-muted-foreground leading-relaxed">{member.bio}</p>
              
              <p className="mt-4 text-foreground font-medium italic">{member.tagline}</p>
            </div>
          ))}
        </div>

        {/* Bottom callout */}
        <div 
          className={`mt-12 text-center transition-all duration-700 delay-400 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Most AI companies are either all strategy with no engineering, or all engineering with no business understanding. <strong className="text-foreground">We are one team that covers both.</strong> No outsourcing. No middlemen. No &ldquo;we will get back to you.&rdquo; We build it, we run it, we own the result.
          </p>
        </div>
      </div>
    </section>
  )
}
