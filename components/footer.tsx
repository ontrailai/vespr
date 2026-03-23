import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      {/* CTA Section */}
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="bg-accent rounded-2xl p-8 lg:p-12 text-center relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-32 h-32 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-48 h-48 bg-white/10 rounded-full translate-x-1/3 translate-y-1/3" />
          
          <div className="relative">
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-accent-foreground">
              Ready to Fix Your Data Foundation?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-accent-foreground/80">
              Start with the AI Readiness Audit. Get clarity on where you stand and a roadmap to AI that actually works.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button 
                size="lg" 
                asChild 
                className="gap-2 bg-white text-accent hover:bg-white/90 rounded-full px-8 h-12"
              >
                <Link href="mailto:hello@ai-operators.com">
                  Book Your Audit
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                asChild 
                className="rounded-full px-8 h-12 border-white/30 text-accent-foreground hover:bg-white/10"
              >
                <Link href="#solution">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer links */}
      <div className="border-t border-border">
        <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
            <div className="flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent">
                <span className="text-base font-bold text-accent-foreground">S</span>
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-semibold text-foreground tracking-tight">Scout</span>
                <span className="text-xs text-muted-foreground">by AI Operators</span>
              </div>
            </div>
            <nav className="flex flex-wrap items-center justify-center gap-8">
              <Link
                href="#problem"
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                The Problem
              </Link>
              <Link
                href="#solution"
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                How It Works
              </Link>
              <Link
                href="#pricing"
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                Pricing
              </Link>
              <Link
                href="#faq"
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                FAQ
              </Link>
            </nav>
          </div>
          <div className="mt-8 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
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
