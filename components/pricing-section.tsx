import { Button } from "@/components/ui/button"
import { Check, ArrowRight } from "lucide-react"
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
    <section id="pricing" className="py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            One Team. One Stack. A Fraction of the Cost.
          </h2>
          <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground">
            Most businesses end up paying $75K to $600K across 5 different vendors. A data cleaner. A database engineer. A dev shop. An AI consultant. An automation agency. None of them talk to each other.
          </p>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            {"We do the entire stack. One team builds every layer, from data cleanup to AI deployment. One team owns the outcome."}
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          {/* AI Readiness Audit */}
          <div className="relative rounded-xl border border-border bg-card p-8">
            <div className="absolute -top-3 left-6">
              <span className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-muted-foreground">
                Start Here
              </span>
            </div>
            <div className="mt-4">
              <h3 className="text-2xl font-bold text-foreground">
                AI Readiness Audit
              </h3>
              <p className="mt-2 text-muted-foreground">
                The smartest first step
              </p>
            </div>
            <div className="mt-6">
              <p className="text-4xl font-bold text-foreground">
                $2,500 - $5,000
              </p>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              We look at your data across every system, identify the gaps, score your AI readiness, and give you a clear roadmap. You walk away knowing exactly where you stand.
            </p>
            <ul className="mt-6 space-y-3">
              {auditFeatures.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                  <span className="text-sm text-muted-foreground">{feature}</span>
                </li>
              ))}
            </ul>
            <Button className="mt-8 w-full gap-2" variant="outline" asChild>
              <Link href="mailto:hello@ai-operators.com">
                Book Your Audit
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>

          {/* Full Build */}
          <div className="relative rounded-xl border-2 border-accent bg-card p-8">
            <div className="absolute -top-3 left-6">
              <span className="rounded-full bg-accent px-3 py-1 text-xs font-medium text-accent-foreground">
                Full Solution
              </span>
            </div>
            <div className="mt-4">
              <h3 className="text-2xl font-bold text-foreground">Full Build</h3>
              <p className="mt-2 text-muted-foreground">
                Complete data-to-AI transformation
              </p>
            </div>
            <div className="mt-6">
              <p className="text-4xl font-bold text-foreground">Custom Scoped</p>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              After the audit, we scope the full engagement based on your data complexity and business goals. Every project includes all 5 layers.
            </p>
            <ul className="mt-6 space-y-3">
              {buildFeatures.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                  <span className="text-sm text-muted-foreground">{feature}</span>
                </li>
              ))}
            </ul>
            <Button className="mt-8 w-full gap-2" asChild>
              <Link href="mailto:hello@ai-operators.com">
                Start With Your Data
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>

        <div className="mt-12 rounded-xl border border-border bg-card/50 p-8 text-center">
          <p className="text-lg font-medium text-foreground">
            Why this beats the alternative
          </p>
          <p className="mt-2 text-muted-foreground">
            Five vendors means five timelines, five contracts, five points of failure, and nobody responsible for the end result. One team means one timeline, one relationship, and one group of people who won't ship layer 4 until layers 1 through 3 are rock solid.
          </p>
        </div>
      </div>
    </section>
  )
}
