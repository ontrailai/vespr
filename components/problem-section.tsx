"use client"

import { useEffect, useRef, useState } from "react"

export function ProblemSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="problem" ref={sectionRef} className="py-24 lg:py-32 bg-secondary/40 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
      <div className="absolute -top-20 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 relative">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <h2 
            className={`font-serif text-4xl font-medium tracking-tight text-foreground sm:text-5xl lg:text-6xl leading-[1.1] transition-all duration-500 delay-100 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            You Already Know Something{" "}
            <span className="gradient-text">Is Not Working.</span>
          </h2>
        </div>

        {/* Main content */}
        <div 
          className={`space-y-6 transition-all duration-700 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-lg leading-relaxed text-muted-foreground">
            Think about what you did yesterday. How much of it actually required your brain? How many hours went to follow-up, scheduling, data entry, CRM updates, and admin work that has nothing to do with why you started this business?
          </p>
          
          <p className="text-lg leading-relaxed text-muted-foreground">
            You are paying $10,000, $20,000, maybe $30,000 a month in salaries for work that does not require a human brain. And it still is not getting done consistently. People call in sick. They quit after six months. They forget to follow up. Things fall through the cracks.
          </p>
          
          <p className="text-lg leading-relaxed text-muted-foreground">
            You have played with ChatGPT. Maybe you tried a chatbot or hired someone on Upwork to &ldquo;set up AI.&rdquo; It felt like a toy, not a tool. You got burned, and now you think AI does not work.
          </p>
          
          <p className="text-lg leading-relaxed text-foreground font-medium">
            You are not behind because you are lazy or because AI does not work. You are behind because nobody has built it properly for your business.
          </p>
        </div>

        {/* Survey stats */}
        <div 
          className={`mt-12 bg-card rounded-3xl border border-border p-8 lg:p-10 transition-all duration-700 delay-400 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-muted-foreground leading-relaxed mb-6">
            We surveyed 242 business owners. <strong className="text-foreground">52% said their biggest challenge with AI is simply not knowing where to start.</strong> Not budget. Not skepticism. Just clarity.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Only 4% said money was the issue. The rest just need a clear roadmap and someone they trust to build it.
          </p>
        </div>
      </div>
    </section>
  )
}
