import { Button } from "@/components/ui/button"
import { ArrowRight, Check } from "lucide-react"
import Link from "next/link"

const auditFeatures = [
  "Complete data audit across all systems",
  "AI readiness score",
  "Gap and risk identification",
  "Clear roadmap for next steps",
  "No commitment beyond the audit",
]

const buildFeatures = [
  "All 5 layers included",
  "Data cleanup and organization",
  "Database architecture",
  "Custom software development",
  "AI implementation",
  "Agent orchestration (Scout)",
  "One team, one timeline",
]

export function PricingSection() {
  return (
    <section id="pricing" className="py-20 lg:py-28 bg-secondary/30">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <p className="text-accent font-medium mb-3 tracking-wide uppercase text-sm">Pricing</p>
          <h2 className="font-serif text-3xl font-normal tracking-tight text-foreground sm:text-4xl lg:text-5xl leading-[1.15]">
            One Team. One Stack.{" "}
            <span className="text-muted-foreground">A Fraction of the Cost.</span>
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Most businesses end up paying $75K to $600K across 5 different vendors. A data cleaner. A database engineer. A dev shop. An AI consultant. An automation agency. None of them talk to each other.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2 max-w-4xl mx-auto">
          {/* AI Readiness Audit */}
          <div className="relative bg-card rounded-2xl border border-border p-8 flex flex-col">
            <div className="absolute -top-3 left-6">
              <span className="rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-muted-foreground border border-border">
                Start Here
              </span>
            </div>
            <div className="mt-2">
              <h3 className="font-serif text-2xl text-foreground">
                AI Readiness Audit
              </h3>
              <p className="mt-1 text-muted-foreground text-sm">
                The smartest first step
              </p>
            </div>
            <div className="mt-6">
              <span className="font-serif text-4xl text-foreground">$2,500</span>
              <span className="text-muted-foreground"> - $5,000</span>
            </div>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
              We look at your data across every system, identify the gaps, score your AI readiness, and give you a clear roadmap. You walk away knowing exactly where you stand.
            </p>
            <ul className="mt-6 space-y-3 flex-grow">
              {auditFeatures.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                  <span className="text-sm text-muted-foreground">{feature}</span>
                </li>
              ))}
            </ul>
            <Button className="mt-8 w-full gap-2 rounded-full h-11" variant="outline" asChild>
              <Link href="mailto:hello@ai-operators.com">
                Book Your Audit
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>

          {/* Full Build */}
          <div className="relative bg-card rounded-2xl border-2 border-accent p-8 flex flex-col shadow-xl shadow-accent/10">
            <div className="absolute -top-3 left-6">
              <span className="rounded-full bg-accent px-3 py-1 text-xs font-semibold text-accent-foreground">
                Most Popular
              </span>
            </div>
            <div className="mt-2">
              <h3 className="font-serif text-2xl text-foreground">Full Build</h3>
              <p className="mt-1 text-muted-foreground text-sm">
                Complete data-to-AI transformation
              </p>
            </div>
            <div className="mt-6">
              <span className="font-serif text-4xl text-foreground">Custom</span>
              <span className="text-muted-foreground"> scoped</span>
            </div>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
              After the audit, we scope the full engagement based on your data complexity and business goals. Every project includes all 5 layers.
            </p>
            <ul className="mt-6 space-y-3 flex-grow">
              {buildFeatures.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                  <span className="text-sm text-muted-foreground">{feature}</span>
                </li>
              ))}
            </ul>
            <Button className="mt-8 w-full gap-2 rounded-full h-11 bg-accent hover:bg-accent/90 text-accent-foreground" asChild>
              <Link href="mailto:hello@ai-operators.com">
                Start With Your Data
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>

        {/* Why this beats the alternative */}
        <div className="mt-16 max-w-3xl mx-auto text-center">
          <h3 className="font-serif text-xl text-foreground mb-4">
            Why this beats the alternative
          </h3>
          <p className="text-muted-foreground leading-relaxed">
            Five vendors means five timelines, five contracts, five points of failure, and nobody responsible for the end result. One team means one timeline, one relationship, and one group of people who won&apos;t ship layer 4 until layers 1 through 3 are rock solid.
          </p>
        </div>
      </div>
    </section>
  )
}
