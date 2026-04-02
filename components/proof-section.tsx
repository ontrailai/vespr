"use client"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

const caseStudies = [
  {
    industry: "Healthcare",
    metric: "+$43K/mo revenue",
    title: "Med Spa Adds $43,000 in Monthly Revenue with AI Follow-Up",
    color: "#4A9B94",
    before: "A med spa with 3 locations was losing 60% of their leads. Inquiries came in and nobody responded for 2 to 3 days. By then, those people had already booked with a competitor.",
    solution: "An AI system that responds to every inquiry in under 60 seconds. It answers questions about treatments and pricing, books consultations directly on the calendar, and follows up automatically.",
    stats: [
      { value: "100%", label: "Lead response rate (was 34%)" },
      { value: "$43K", label: "New monthly revenue" },
      { value: "3", label: "Staff roles automated" },
    ],
    quote: "It paid for itself in the first month. We were leaving so much money on the table.",
    author: "Dr. Sarah M., Owner",
  },
  {
    industry: "Real Estate",
    metric: "15 hrs/week saved",
    title: "Team Leader Gets 15 Hours a Week Back with AI Operations",
    color: "#D97756",
    before: "A 12-person real estate team was spending $11,000/month on a transaction coordinator, two VAs, and a part-time admin. The team leader spent 3 hours a day managing people instead of closing deals.",
    solution: "A complete AI operations system handling transaction coordination, document processing, lead nurturing, scheduling, and daily team briefings.",
    stats: [
      { value: "$11K", label: "Monthly overhead cut" },
      { value: "15hrs", label: "Per week saved for leader" },
      { value: "0", label: "Missed follow-ups since launch" },
    ],
    quote: "I automated three roles and the AI does a better job than all of them combined.",
    author: "Marcus T., Team Leader",
  },
  {
    industry: "Legal",
    metric: "+127 cases/quarter",
    title: "Law Firm Signs 127 More Cases Per Quarter with AI Intake",
    color: "#5B8FD9",
    before: "A personal injury firm was spending $23,000/month on intake staff and a call center. They answered only 40% of inbound calls during peak hours. After-hours calls went to voicemail.",
    solution: "An AI phone agent that answers every call instantly, 24 hours a day. It qualifies potential clients, collects case details, and books consultations.",
    stats: [
      { value: "98%", label: "Call answer rate (was 40%)" },
      { value: "127", label: "Additional cases per quarter" },
      { value: "$23K", label: "Monthly savings on staff" },
    ],
    quote: "Every missed call was a case worth $5,000 to $50,000. Now we do not miss any.",
    author: "James R., Managing Partner",
  },
]

const testimonials = [
  "\"It paid for itself in the first month.\" Dr. Sarah M.",
  "\"I automated three roles and the AI does a better job.\" Marcus T.",
  "\"The ROI is not even close.\" James R.",
  "\"I was skeptical. Then it paid for itself in 3 weeks.\" Rachel K.",
  "\"Vespr mapped everything out and now AI runs my intake.\" David L.",
  "\"I am saving over $9K in labor. I wish I did this a year ago.\" Michelle P.",
]

export function ProofSection() {
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
    <section id="proof" ref={sectionRef} className="py-24 lg:py-32 bg-secondary/40 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
      
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <span 
            className={`inline-block text-accent font-semibold mb-4 tracking-widest uppercase text-xs transition-all duration-500 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Proof
          </span>
          <h2 
            className={`font-serif text-4xl font-medium tracking-tight text-foreground sm:text-5xl lg:text-6xl leading-[1.1] transition-all duration-500 delay-100 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Do Not Take Our Word for It.{" "}
            <span className="text-muted-foreground">Look at What Happened.</span>
          </h2>
        </div>

        {/* Case Studies */}
        <div className="space-y-8">
          {caseStudies.map((study, index) => (
            <div
              key={study.title}
              className={`bg-card border border-border rounded-3xl p-8 lg:p-10 transition-all duration-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${200 + index * 100}ms` }}
            >
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <span 
                  className="px-3 py-1 rounded-full text-sm font-medium text-white"
                  style={{ backgroundColor: study.color }}
                >
                  {study.industry}
                </span>
                <span className="text-accent font-bold">{study.metric}</span>
              </div>
              
              <h3 className="font-serif text-2xl lg:text-3xl text-foreground mb-8">{study.title}</h3>
              
              <div className="grid lg:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">Before</h4>
                  <p className="text-muted-foreground leading-relaxed">{study.before}</p>
                  
                  <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3 mt-6">What We Built</h4>
                  <p className="text-muted-foreground leading-relaxed">{study.solution}</p>
                </div>
                
                <div>
                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    {study.stats.map((stat) => (
                      <div key={stat.label} className="text-center">
                        <p className="text-3xl font-bold text-foreground">{stat.value}</p>
                        <p className="text-xs text-muted-foreground mt-1">{stat.label}</p>
                      </div>
                    ))}
                  </div>
                  
                  {/* Quote */}
                  <blockquote 
                    className="border-l-4 pl-4 py-2"
                    style={{ borderColor: study.color }}
                  >
                    <p className="text-foreground italic">&ldquo;{study.quote}&rdquo;</p>
                    <cite className="text-sm text-muted-foreground mt-2 block not-italic">{study.author}</cite>
                  </blockquote>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div 
          className={`mt-12 text-center transition-all duration-700 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <p className="text-muted-foreground mb-6">Want to see what results like these would look like for your business?</p>
          <Button asChild size="lg" className="rounded-full px-8 h-14 text-base">
            <Link href="#pricing">
              Book Your Free AI Leverage Audit
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        {/* Scrolling testimonials */}
        <div 
          className={`mt-16 overflow-hidden transition-all duration-700 delay-600 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="flex animate-scroll">
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <div 
                key={index}
                className="flex-shrink-0 px-6 py-3 mx-2 bg-card border border-border rounded-full text-sm text-muted-foreground whitespace-nowrap"
              >
                {testimonial}
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
      `}</style>
    </section>
  )
}
