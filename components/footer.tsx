"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"
import { useEffect, useRef, useState } from "react"

export function Footer() {
  const [isVisible, setIsVisible] = useState(false)
  const footerRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (footerRef.current) {
      observer.observe(footerRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <footer ref={footerRef} className="border-t border-border bg-card relative overflow-hidden">
      {/* CTA Section */}
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
        <div 
          className={`relative rounded-3xl p-10 lg:p-16 text-center overflow-hidden transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{
            background: "linear-gradient(135deg, #D97756 0%, #E08B6C 50%, #D97756 100%)"
          }}
        >
          {/* Animated decorative elements */}
          <div className="absolute top-0 left-0 w-40 h-40 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2 animate-float" />
          <div className="absolute bottom-0 right-0 w-60 h-60 bg-white/10 rounded-full translate-x-1/3 translate-y-1/3 animate-float" style={{ animationDelay: "2s" }} />
          <div className="absolute top-1/2 left-1/4 w-20 h-20 bg-white/5 rounded-full animate-float" style={{ animationDelay: "1s" }} />
          
          {/* Shimmer overlay */}
          <div className="absolute inset-0 animate-shimmer opacity-30" />
          
          <div className="relative">
            <div className="inline-flex items-center gap-2 bg-white/20 rounded-full px-4 py-2 mb-6">
              <Sparkles className="h-4 w-4 text-white" />
              <span className="text-sm font-medium text-white">Start your transformation</span>
            </div>
            
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white leading-tight">
              Ready to Fix Your<br className="hidden sm:block" /> Data Foundation?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-white/90 text-lg">
              Start with the AI Readiness Audit. Get clarity on where you stand and a roadmap to AI that actually works.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button 
                size="lg" 
                asChild 
                className="group gap-2 bg-white text-accent hover:bg-white/95 rounded-full px-8 h-14 text-base font-medium shadow-xl shadow-black/10 transition-all hover:-translate-y-1"
              >
                <Link href="mailto:hello@ai-operators.com">
                  Book Your Audit
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                asChild 
                className="rounded-full px-8 h-14 text-base font-medium border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50 transition-all hover:-translate-y-1"
              >
                <Link href="#solution">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer links */}
      <div className="border-t border-border">
        <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-8 lg:flex-row">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent shadow-lg shadow-accent/20">
                <span className="text-lg font-bold text-accent-foreground">S</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-semibold text-foreground tracking-tight">Scout</span>
                <span className="text-xs text-muted-foreground">by AI Operators</span>
              </div>
            </div>
            <nav className="flex flex-wrap items-center justify-center gap-8">
              {[
                { href: "#problem", label: "The Problem" },
                { href: "#solution", label: "How It Works" },
                { href: "#capabilities", label: "Capabilities" },
                { href: "#industries", label: "Industries" },
                { href: "#pricing", label: "Pricing" },
                { href: "#faq", label: "FAQ" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-muted-foreground transition-all hover:text-foreground hover:-translate-y-0.5"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
          <div className="mt-10 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              {new Date().getFullYear()} AI Operators. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground">
              Built for businesses that take their data seriously.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
