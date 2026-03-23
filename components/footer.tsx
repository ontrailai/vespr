import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      {/* CTA Section */}
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="rounded-xl border border-accent/30 bg-accent/5 p-8 text-center lg:p-12">
          <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
            Ready to Fix Your Data Foundation?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Start with the AI Readiness Audit. Get clarity on where you stand and a roadmap to AI that actually works.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" asChild className="gap-2">
              <Link href="mailto:hello@ai-operators.com">
                Book Your Audit
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="#solution">Learn More</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Footer links */}
      <div className="border-t border-border">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary">
                <span className="text-sm font-bold text-primary-foreground">S</span>
              </div>
              <span className="text-lg font-semibold text-foreground">Scout</span>
              <span className="text-sm text-muted-foreground">by AI Operators</span>
            </div>
            <nav className="flex flex-wrap items-center justify-center gap-6">
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
          <div className="mt-8 border-t border-border pt-8 text-center">
            <p className="text-sm text-muted-foreground">
              {new Date().getFullYear()} AI Operators. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
