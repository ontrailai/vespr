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
    question: "I do not know anything about AI. Is that a problem?",
    answer:
      "No. That is most of our clients. We handle everything. You tell us what problems you want solved and we build, manage, and optimize the system. You will never touch a line of code or manage a single workflow.",
  },
  {
    question: "How is this different from a freelancer or an AI chatbot tool?",
    answer:
      "A freelancer builds something and disappears. A chatbot tool is generic. We build custom autonomous systems connected to your specific tools and processes, and we manage them every month. You get a dedicated AI team with 6 years of engineering and 800+ businesses worth of experience. Not a one-time project.",
  },
  {
    question: "How fast will I see results?",
    answer:
      "Most systems go live in 2 to 6 weeks. You see results the day it launches. Most clients see full ROI within 30 to 90 days. That is also why we can offer a full money-back guarantee.",
  },
  {
    question: "Will the AI sound robotic?",
    answer:
      "No. Our agents are trained on your brand voice. On calls, they sound like a real person. In text and email, they sound like your best employee wrote every message.",
  },
  {
    question: "What industries do you work with?",
    answer:
      "Healthcare, legal, real estate, professional services, e-commerce, and any business that is spending $10,000 or more per month on staff doing repeatable work. If you are not sure whether AI is right for your business, book the audit. We will tell you in 30 minutes.",
  },
  {
    question: "What if I want to scale up later?",
    answer:
      "That is how most clients grow with us. They start with one or two systems. Once they see results, they expand. We have clients who started with a single $5,000 build and now run full AI departments at $15,000 a month because the ROI made it obvious.",
  },
  {
    question: "What happens if I cancel?",
    answer:
      "You own everything. The code, the systems, the automations. Cancel monthly management any time. No contracts. No lock-in. Everything stays on your infrastructure.",
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
    <section id="faq" ref={sectionRef} className="py-24 lg:py-32 bg-secondary/40 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent/20 to-transparent" />
      <div className="absolute top-20 -right-20 w-60 h-60 bg-accent-secondary/5 rounded-full blur-3xl" />
      
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-12">
          <span 
            className={`inline-block text-accent font-semibold mb-4 tracking-widest uppercase text-xs transition-all duration-500 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Questions
          </span>
          <h2 
            className={`font-serif text-4xl font-medium tracking-tight text-foreground sm:text-5xl leading-[1.1] transition-all duration-500 delay-100 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Before You Book.
          </h2>
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
      </div>
    </section>
  )
}
