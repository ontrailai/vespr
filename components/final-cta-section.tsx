"use client"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Check, Sparkles } from "lucide-react"
import Link from "next/link"

const benefits = [
  "A map of every process AI can automate in your business",
  "Projected time savings and ROI for each one",
  "A clear recommendation, even if it is not with us",
]

export function FinalCtaSection() {
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
    <section ref={sectionRef} className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-60 h-60 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-accent-secondary/10 rounded-full blur-3xl" />
      </div>
      
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center">
          <div 
            className={`inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-2 text-sm text-accent mb-8 transition-all duration-500 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <Sparkles className="h-4 w-4" />
            <span>Limited spots for April 2026</span>
          </div>

          <h2 
            className={`font-serif text-4xl font-medium tracking-tight text-foreground sm:text-5xl lg:text-6xl leading-[1.1] transition-all duration-500 delay-100 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Every Month You Wait Is{" "}
            <span className="gradient-text">Another Month Your Competitors Pull Ahead.</span>
          </h2>

          <p 
            className={`mt-6 text-lg text-muted-foreground transition-all duration-500 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Book a free 30-minute AI Leverage Audit. You will walk away with:
          </p>

          {/* Benefits */}
          <div 
            className={`mt-8 flex flex-col items-center gap-3 transition-all duration-500 delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            {benefits.map((benefit) => (
              <div key={benefit} className="flex items-center gap-3">
                <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent/20">
                  <Check className="h-3 w-3 text-accent" />
                </div>
                <span className="text-foreground">{benefit}</span>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div 
            className={`mt-10 transition-all duration-500 delay-400 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <Button asChild size="lg" className="rounded-full px-10 h-16 text-lg font-semibold">
              <Link href="mailto:hello@vespr.io">
                Book Your Free AI Leverage Audit
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>

          {/* Trust elements */}
          <div 
            className={`mt-8 space-y-2 text-sm text-muted-foreground transition-all duration-500 delay-500 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <p>Every system is custom-built by our team. We take on a limited number of new clients each month to maintain quality.</p>
            <p className="font-medium text-foreground">Backed by our full money-back guarantee. You risk nothing.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
