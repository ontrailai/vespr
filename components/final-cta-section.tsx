"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"

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

  const benefits = [
    "A map of every process AI can automate in your business",
    "Projected time savings and ROI for each one",
    "A clear recommendation, even if it is not with us"
  ]

  return (
    <section 
      ref={sectionRef}
      className="relative py-24 lg:py-32 overflow-hidden bg-background"
    >
      {/* Subtle background accents */}
      <div 
        className="absolute top-0 right-0 w-[500px] h-[500px] opacity-20 blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, #D97756 0%, transparent 70%)" }}
      />
      <div 
        className="absolute bottom-0 left-0 w-[400px] h-[400px] opacity-15 blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, #4A9B94 0%, transparent 70%)" }}
      />

      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div 
          className={`inline-flex items-center gap-2 mb-8 transition-all duration-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <span className="w-2 h-2 rounded-full bg-accent-secondary animate-pulse" />
          <span className="text-xs font-semibold tracking-widest text-muted-foreground uppercase">
            Limited spots for April 2026
          </span>
        </div>

        {/* Headline */}
        <h2 
          className={`font-serif text-4xl sm:text-5xl lg:text-6xl font-medium text-foreground leading-tight transition-all duration-700 delay-100 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          Every Month You Wait Is Another Month Your{" "}
          <span className="gradient-text">Competitors Pull Ahead.</span>
        </h2>

        {/* Subtext */}
        <p 
          className={`mt-8 text-lg text-muted-foreground transition-all duration-700 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          Book a free 30-minute AI Leverage Audit. You will walk away with:
        </p>

        {/* Benefits list */}
        <ul 
          className={`mt-8 space-y-4 text-left max-w-lg mx-auto transition-all duration-700 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          {benefits.map((benefit, index) => (
            <li key={index} className="flex items-start gap-3">
              <span className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
              <span className="text-foreground">{benefit}</span>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <div 
          className={`mt-12 transition-all duration-700 delay-400 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <Button 
            asChild 
            size="lg" 
            className="rounded-full px-10 py-7 text-lg font-semibold shadow-xl transition-all hover:-translate-y-1 hover:shadow-2xl"
          >
            <Link href="#pricing">
              Book Your Free AI Leverage Audit
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>

        {/* Fine print */}
        <p 
          className={`mt-8 text-sm text-muted-foreground transition-all duration-700 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          Every system is custom-built by our team. We take on a limited number of new clients each month to maintain quality.
        </p>

        {/* Guarantee */}
        <p 
          className={`mt-4 text-sm font-medium text-accent-secondary transition-all duration-700 delay-600 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          Backed by our full money-back guarantee. You risk nothing.
        </p>
      </div>
    </section>
  )
}
