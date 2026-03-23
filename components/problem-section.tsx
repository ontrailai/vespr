"use client"

import { useEffect, useRef, useState } from "react"

const stats = [
  {
    stat: "70%",
    label: "of AI projects fail",
    description: "Not because of bad AI",
  },
  {
    stat: "3 in 4",
    label: "companies report data not AI-ready",
    description: "Before any model is trained",
  },
  {
    stat: "80%",
    label: "of time spent on data cleaning",
    description: "By data scientists",
  },
  {
    stat: "$881M",
    label: "lost by one company",
    description: "On bad AI data decisions",
  },
]

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
    <section id="problem" ref={sectionRef} className="py-20 lg:py-28 bg-secondary/30">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <p className="text-accent font-medium mb-3 tracking-wide uppercase text-sm">The Real Problem</p>
          <h2 className="font-serif text-3xl font-normal tracking-tight text-foreground sm:text-4xl lg:text-5xl leading-[1.15]">
            You Bought the AI.{" "}
            <span className="text-muted-foreground">It Still Doesn&apos;t Work.</span>
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            70% of AI projects fail. Not because the AI is bad. Because the data underneath it is a disaster.
          </p>
        </div>

        {/* Stats grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-16">
          {stats.map((item, index) => (
            <div
              key={item.label}
              className={`relative bg-card rounded-2xl p-6 border border-border hover:border-accent/30 transition-all duration-500 hover:shadow-lg ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <p className="text-4xl font-bold text-foreground font-serif">{item.stat}</p>
              <p className="mt-2 text-sm font-medium text-foreground">{item.label}</p>
              <p className="mt-1 text-xs text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Story block */}
        <div className="bg-card rounded-2xl border border-border p-8 lg:p-12">
          <div className="max-w-3xl mx-auto space-y-6">
            <p className="text-lg leading-relaxed text-muted-foreground">
              You hired the agency. You bought the tools. You built the chatbot. And it gives wrong answers, misses context, and makes mistakes that embarrass your team in front of customers.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              <strong className="text-foreground">Why?</strong> Because every AI tool you plug in is reading from the same messy, duplicated, inconsistent data you&apos;ve been duct-taping together for years.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Your customer records live in 4 different systems and none of them agree. Your spreadsheets have 3 versions of the same contact. Your CRM hasn&apos;t been cleaned since the last system migration.
            </p>
            
            {/* Pull quote */}
            <blockquote className="my-10 py-8 border-y border-border">
              <p className="font-serif text-2xl lg:text-3xl text-foreground leading-snug">
                &ldquo;The AI industry has been selling you the roof before anyone poured the foundation.&rdquo;
              </p>
            </blockquote>

            <p className="text-lg leading-relaxed text-muted-foreground">
              Your AI is only as good as your data. And right now, <span className="text-accent font-medium">your data is probably terrible.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
