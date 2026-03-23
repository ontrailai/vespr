"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"

const industries = [
  {
    id: "healthcare",
    title: "Healthcare",
    emoji: "🏥",
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
    title: "Legal",
    emoji: "⚖️",
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
    title: "Insurance",
    emoji: "🛡️",
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
    title: "Real Estate",
    emoji: "🏢",
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
    <section id="industries" className="py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center mb-12">
          <p className="text-accent font-medium mb-3 tracking-wide uppercase text-sm">Industry Focus</p>
          <h2 className="font-serif text-3xl font-normal tracking-tight text-foreground sm:text-4xl lg:text-5xl leading-[1.15]">
            This Might Sound Familiar
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            We work with data-heavy businesses where messy data creates real operational pain.
          </p>
        </div>

        {/* Industry tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {industries.map((industry, index) => (
            <button
              key={industry.id}
              onClick={() => setActiveIndustry(index)}
              className={cn(
                "flex items-center gap-2 rounded-full border px-5 py-2.5 text-sm font-medium transition-all",
                activeIndustry === index
                  ? "border-accent bg-accent text-accent-foreground shadow-lg shadow-accent/20"
                  : "border-border bg-card text-muted-foreground hover:border-accent/30 hover:text-foreground"
              )}
            >
              <span>{industry.emoji}</span>
              {industry.title}
            </button>
          ))}
        </div>

        {/* Industry detail card */}
        <div className="bg-card rounded-2xl border border-border overflow-hidden">
          <div className="grid lg:grid-cols-2">
            {/* Left column - Problem */}
            <div className="p-8 lg:p-10">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-3xl">{industries[activeIndustry].emoji}</span>
                <h3 className="font-serif text-2xl text-foreground">
                  {industries[activeIndustry].title}
                </h3>
              </div>

              <div className="space-y-6">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-accent mb-2">
                    The Problem
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    {industries[activeIndustry].problem}
                  </p>
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-accent mb-2">
                    Why It Happens
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    {industries[activeIndustry].cause}
                  </p>
                </div>
              </div>
            </div>

            {/* Right column - Solution */}
            <div className="bg-secondary/30 p-8 lg:p-10 border-t lg:border-t-0 lg:border-l border-border">
              <div className="space-y-6">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-accent mb-2">
                    What We Do
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    {industries[activeIndustry].solution}
                  </p>
                </div>

                <div className="bg-card rounded-xl border border-accent/20 p-6">
                  <p className="text-xs font-semibold uppercase tracking-wider text-accent mb-2">
                    The Result
                  </p>
                  <p className="font-medium text-foreground leading-relaxed">
                    {industries[activeIndustry].result}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonial placeholder */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-4 bg-card border border-border rounded-full px-6 py-3">
            <div className="flex -space-x-2">
              {[1, 2, 3].map((i) => (
                <div key={i} className="h-8 w-8 rounded-full bg-secondary border-2 border-card flex items-center justify-center text-xs font-medium text-muted-foreground">
                  {String.fromCharCode(64 + i)}
                </div>
              ))}
            </div>
            <p className="text-sm text-muted-foreground">
              <span className="font-semibold text-foreground">50+</span> businesses transformed their data foundation
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
