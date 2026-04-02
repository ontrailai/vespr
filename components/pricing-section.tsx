"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Check, Sparkles, Shield } from "lucide-react"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"

const offerFeatures = [
  { title: "Custom AI Agents Built for Your Business", value: "$25,000 value", description: "Fully autonomous agents designed around your workflows, trained on your processes, and connected to your tools. Built from scratch by our team. Not templates. Not off-the-shelf." },
  { title: "Full Integration with Your Existing Stack", value: "$10,000 value", description: "CRM, email, calendar, phone, project management. Your AI plugs into what you already use. No new software to learn. No migration headaches." },
  { title: "Monthly Management, Training, and Expansion", value: "$5,000/mo value", description: "We monitor, optimize, train on new scenarios, and add automations every month. Your system gets smarter because we make it smarter." },
  { title: "Dedicated Team and Single Point of Contact", value: "Priceless", description: "One team. One person to talk to. Strategy and engineering in every conversation. We own the result from start to finish." },
  { title: "Full Ownership of Everything We Build", value: "Included", description: "Code, systems, automations. All on your infrastructure. Your data never leaves your control. Cancel anytime and keep everything." },
]

const bonuses = [
  { title: "AI Opportunity Audit", value: "$5,000 value", description: "Full audit of every process AI can automate in your business, with estimated time savings and projected ROI for each one." },
  { title: "90-Day Optimization Sprint", value: "$7,500 value", description: "Accelerated weekly reviews and rapid iterations for the first 90 days after launch. We treat your system like a product and ship improvements constantly." },
  { title: "AI Expansion Roadmap", value: "$2,500 value", description: "Every additional AI opportunity in your business mapped out with projected ROI. Your blueprint for scaling AI across every department." },
]

const comparison = [
  { feature: "Monthly cost", team: "$15,000 - $30,000+", vespr: "$2,000 - $15,000" },
  { feature: "Works 24/7", team: "No", vespr: "Yes" },
  { feature: "Calls in sick", team: "Yes", vespr: "Never" },
  { feature: "Needs months of training", team: "Yes", vespr: "Ready in weeks" },
  { feature: "Quits after 6 months", team: "Sometimes", vespr: "Never" },
  { feature: "Gets better every month", team: "Plateaus", vespr: "Compounds" },
]

export function PricingSection() {
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
    <section id="pricing" ref={sectionRef} className="py-24 lg:py-32 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 -left-20 w-60 h-60 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 -right-20 w-80 h-80 bg-accent-secondary/5 rounded-full blur-3xl" />
      
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 relative">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <span 
            className={`inline-block text-accent font-semibold mb-4 tracking-widest uppercase text-xs transition-all duration-500 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            The Offer
          </span>
          <h2 
            className={`font-serif text-4xl font-medium tracking-tight text-foreground sm:text-5xl lg:text-6xl leading-[1.1] transition-all duration-500 delay-100 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Here Is What You Get{" "}
            <span className="text-muted-foreground">When You Work With Vespr.</span>
          </h2>
        </div>

        {/* Main offer card */}
        <div 
          className={`bg-card border-2 border-accent rounded-3xl p-8 lg:p-12 relative transition-all duration-500 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ boxShadow: '0 20px 60px rgba(217, 119, 86, 0.15)' }}
        >
          <span className="rounded-full bg-accent px-4 py-1.5 text-xs font-bold text-accent-foreground inline-flex items-center gap-1.5 mb-6">
            <Sparkles className="h-3 w-3" />
            The AI Department
          </span>

          <p className="text-muted-foreground mb-8">Custom built. Fully managed. Guaranteed to deliver or your money back.</p>

          {/* Features */}
          <div className="space-y-6 mb-10">
            {offerFeatures.map((feature) => (
              <div key={feature.title} className="flex items-start gap-4">
                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent/20 mt-0.5">
                  <Check className="h-4 w-4 text-accent" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-baseline gap-2">
                    <h4 className="font-semibold text-foreground">{feature.title}</h4>
                    <span className="text-accent text-sm font-medium">{feature.value}</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Bonuses */}
          <div className="border-t border-border pt-8">
            <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-6">Also Included</h4>
            <div className="grid gap-4 sm:grid-cols-3">
              {bonuses.map((bonus) => (
                <div key={bonus.title} className="bg-secondary/50 rounded-xl p-4">
                  <span className="text-xs text-accent font-semibold">Bonus</span>
                  <h5 className="font-semibold text-foreground mt-1">{bonus.title}</h5>
                  <span className="text-sm text-accent">{bonus.value}</span>
                  <p className="text-xs text-muted-foreground mt-2">{bonus.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-border text-center">
            <p className="text-2xl font-serif text-foreground">Total First-Year Value <span className="text-accent font-bold">$110,000+</span></p>
          </div>
        </div>

        {/* Comparison table */}
        <div 
          className={`mt-12 bg-card border border-border rounded-3xl p-8 transition-all duration-500 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h3 className="font-serif text-xl text-foreground mb-6 text-center">The Cost of Doing It the Old Way</h3>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 text-sm font-medium text-muted-foreground"></th>
                  <th className="text-center py-3 text-sm font-medium text-muted-foreground">Your Current Team</th>
                  <th className="text-center py-3 text-sm font-medium text-accent">Vespr AI</th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row) => (
                  <tr key={row.feature} className="border-b border-border/50">
                    <td className="py-3 text-sm text-foreground">{row.feature}</td>
                    <td className="py-3 text-sm text-muted-foreground text-center">{row.team}</td>
                    <td className="py-3 text-sm text-accent font-medium text-center">{row.vespr}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Investment */}
        <div 
          className={`mt-12 text-center transition-all duration-500 delay-400 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h3 className="font-serif text-xl text-foreground mb-4">Your Investment</h3>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Single system builds start at <strong className="text-foreground">$5,000</strong> with <strong className="text-foreground">$2,000/month</strong> for ongoing management. Full department AI retainers run up to <strong className="text-foreground">$15,000/month</strong>, replacing $30,000+ in labor costs. The scope scales based on how many workflows you want AI handling. We figure that out together on the audit call.
          </p>
        </div>

        {/* Guarantee */}
        <div 
          className={`mt-12 bg-gradient-to-r from-accent/10 via-accent/5 to-accent-secondary/10 border border-accent/20 rounded-3xl p-8 lg:p-10 transition-all duration-500 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex items-center gap-3 mb-4">
            <Shield className="h-8 w-8 text-accent" />
            <h3 className="font-serif text-2xl text-foreground">The &ldquo;Prove It Or It&apos;s Free&rdquo; Guarantee</h3>
          </div>
          <p className="text-muted-foreground leading-relaxed mb-4">
            You should not carry the risk. We should. So we do.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Before we build anything, we agree on specific, measurable time savings. Hours saved per week. Tasks automated. Response times. Real numbers we both sign off on.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            We track everything the AI does. You see the data. Full transparency.
          </p>
          <p className="text-foreground font-medium">
            If your AI system does not deliver the agreed time savings within 90 days, you get a full refund. Not &ldquo;we will keep working.&rdquo; Not &ldquo;we will try harder.&rdquo; Your money back.
          </p>
        </div>
      </div>
    </section>
  )
}
