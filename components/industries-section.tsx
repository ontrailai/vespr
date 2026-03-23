"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"
import { Stethoscope, Scale, Shield, Building2 } from "lucide-react"

const industries = [
  {
    id: "healthcare",
    icon: Stethoscope,
    title: "Dental and Healthcare",
    problem:
      "Your patient data lives in 6 different systems. Your AI scheduling tool can't find half your patients. Insurance verification flags errors because patient records don't match across platforms.",
    cause:
      "Every system migration, every new software tool, every front desk workaround created another layer of messy data. Nobody ever went back to clean it up.",
    solution:
      "We unify your patient data into one clean, structured system. Then we build AI tools on top that actually know who your patients are.",
    result:
      "Scheduling that works. Billing that's accurate. AI that helps your staff instead of creating more work.",
  },
  {
    id: "legal",
    icon: Scale,
    title: "Legal",
    problem:
      "Case files scattered across 5 platforms. AI document review that misses key clauses because the data is inconsistent. Associates spending hours cross-referencing systems that should talk to each other.",
    cause:
      "Every case management tool, every document storage platform, every email archive is its own silo. The data was never standardized.",
    solution:
      "We consolidate and structure your case data so every document, every clause, every precedent is findable and consistent.",
    result:
      "AI-powered review that catches what matters. Research that takes minutes instead of hours. Less risk, fewer missed details.",
  },
  {
    id: "insurance",
    icon: Shield,
    title: "Insurance",
    problem:
      "Claims processing AI that flags false positives because your policy data has duplicates from 3 system migrations. Underwriting models making decisions on outdated or conflicting customer records.",
    cause:
      "Every merger, every platform switch, every bulk import left behind duplicate and inconsistent records that nobody reconciled.",
    solution:
      "We deduplicate and standardize your policy and claims data, then build AI that processes claims accurately from day one.",
    result:
      "Fewer false flags. Faster processing. Underwriting models you can actually trust.",
  },
  {
    id: "realestate",
    icon: Building2,
    title: "Real Estate",
    problem:
      "Lead scoring that doesn't work because your CRM has 4 versions of every contact. Market analysis tools pulling from outdated listing data. Agents wasting time on leads that were already contacted by someone else on the team.",
    cause:
      "Leads come in from 10 different sources. Nobody deduplicates. Nobody standardizes. The CRM becomes a junk drawer.",
    solution:
      "We clean your contact and listing data, build a single source of truth, and layer AI on top that actually knows your pipeline.",
    result:
      "Lead scoring that reflects reality. No duplicate outreach. AI tools that help agents close instead of creating confusion.",
  },
]

export function IndustriesSection() {
  const [activeIndustry, setActiveIndustry] = useState(0)

  return (
    <section id="industries" className="py-20 lg:py-32 bg-card/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            This Might Sound Familiar
          </h2>
          <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground">
            See how we solve data problems across industries.
          </p>
        </div>

        {/* Industry tabs */}
        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {industries.map((industry, index) => (
            <button
              key={industry.id}
              onClick={() => setActiveIndustry(index)}
              className={cn(
                "flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-all",
                activeIndustry === index
                  ? "border-accent bg-accent text-accent-foreground"
                  : "border-border bg-card text-muted-foreground hover:border-accent/50 hover:text-foreground"
              )}
            >
              <industry.icon className="h-4 w-4" />
              {industry.title}
            </button>
          ))}
        </div>

        {/* Industry detail */}
        <div className="mt-12 rounded-xl border border-border bg-card p-8 lg:p-12">
          <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <div className="flex items-center gap-3">
                {(() => {
                  const Icon = industries[activeIndustry].icon
                  return (
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent text-accent-foreground">
                      <Icon className="h-6 w-6" />
                    </div>
                  )
                })()}
                <h3 className="text-2xl font-bold text-foreground">
                  {industries[activeIndustry].title}
                </h3>
              </div>

              <div className="mt-8 space-y-6">
                <div>
                  <p className="text-sm font-medium uppercase tracking-wider text-accent">
                    The Problem
                  </p>
                  <p className="mt-2 text-muted-foreground">
                    {industries[activeIndustry].problem}
                  </p>
                </div>

                <div>
                  <p className="text-sm font-medium uppercase tracking-wider text-accent">
                    Why It Happens
                  </p>
                  <p className="mt-2 text-muted-foreground">
                    {industries[activeIndustry].cause}
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:border-l lg:border-border lg:pl-8">
              <div className="space-y-6">
                <div>
                  <p className="text-sm font-medium uppercase tracking-wider text-accent">
                    What We Do
                  </p>
                  <p className="mt-2 text-muted-foreground">
                    {industries[activeIndustry].solution}
                  </p>
                </div>

                <div className="rounded-lg border border-accent/30 bg-accent/5 p-6">
                  <p className="text-sm font-medium uppercase tracking-wider text-accent">
                    The Result
                  </p>
                  <p className="mt-2 font-medium text-foreground">
                    {industries[activeIndustry].result}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
