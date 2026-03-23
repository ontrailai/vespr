"use client"

import { useEffect, useRef, useState } from "react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "We already have AI tools. Why do we need you?",
    answer:
      "Your tools are only as good as the data they read. If your data is messy, duplicated, or scattered across systems, your AI tools will underperform no matter how good they are. We fix the foundation so your existing tools (and any new ones) actually work.",
  },
  {
    question: "How long does this take?",
    answer:
      "The AI Readiness Audit takes 1 to 2 weeks. A full build typically runs 8 to 16 weeks depending on how complex your data situation is. Compare that to 6 to 18 months when you're coordinating 5 separate vendors who don't talk to each other.",
  },
  {
    question: "What if our data is really bad?",
    answer:
      "That's literally why we exist. We've seen it all. Spreadsheets with 10,000 duplicate records. Customer databases that haven't been cleaned in 5 years. Data spread across 8 platforms with no connection between them. The worse your data, the more value we deliver.",
  },
  {
    question: "Do you replace our existing software?",
    answer:
      "No. We integrate with your existing systems. We clean and structure the data inside them, build a central database that connects everything, and layer AI on top. You keep using the tools your team already knows.",
  },
  {
    question: "What industries do you work with?",
    answer:
      "We work with data-heavy businesses where messy data creates real operational pain. That includes dental and healthcare, legal, insurance, real estate, financial services, and professional services. If your business runs on data and your data is a mess, we're built for you.",
  },
  {
    question: "What's the first step?",
    answer:
      "Start with the AI Readiness Audit. We assess your data across every system, identify gaps and risks, and deliver a clear roadmap. It's low-risk, high-insight, and gives you everything you need to make an informed decision about next steps.",
  },
  {
    question: "Can't we just clean our data ourselves?",
    answer:
      "You can try. Most companies have tried. The problem is that data cleanup without proper architecture just creates a temporarily clean mess that gets dirty again in weeks. We don't just clean your data. We build the structure that keeps it clean and makes everything above it work.",
  },
  {
    question: "What makes you different from other AI companies?",
    answer:
      "Every other AI company starts at the AI layer and ignores everything underneath it. That's why 70% of AI projects fail. We build in 5 layers, starting with your data and working up to AI and automation. Each layer depends on the one below it. Skip a layer and everything above it breaks. We don't skip layers.",
  },
]

export function FaqSection() {
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
    <section id="faq" ref={sectionRef} className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent/20 to-transparent" />
      <div className="absolute top-20 -right-20 w-60 h-60 bg-accent-secondary/5 rounded-full blur-3xl" />
      
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-12">
          <span 
            className={`inline-block text-accent font-semibold mb-4 tracking-widest uppercase text-xs transition-all duration-500 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            FAQ
          </span>
          <h2 
            className={`font-serif text-4xl font-medium tracking-tight text-foreground sm:text-5xl leading-[1.1] transition-all duration-500 delay-100 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Common Questions
          </h2>
          <p 
            className={`mt-6 text-lg leading-relaxed text-muted-foreground transition-all duration-500 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Everything you need to know about how we work.
          </p>
        </div>

        <Accordion 
          type="single" 
          collapsible 
          className={`space-y-3 transition-all duration-500 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="bg-card border border-border rounded-2xl px-6 overflow-hidden transition-all duration-300 hover:border-accent/30 data-[state=open]:border-accent/50 data-[state=open]:shadow-lg data-[state=open]:bg-card"
            >
              <AccordionTrigger className="text-left text-foreground hover:text-accent py-5 text-base font-semibold hover:no-underline [&[data-state=open]]:text-accent transition-colors">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {/* Bottom CTA */}
        <div 
          className={`mt-12 text-center transition-all duration-500 delay-400 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <p className="text-muted-foreground">
            Still have questions?{" "}
            <a 
              href="mailto:hello@vespr.io" 
              className="text-accent font-semibold hover:underline underline-offset-4 transition-colors"
            >
              Get in touch
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
