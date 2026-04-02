"use client"

import Link from "next/link"
import { useEffect, useRef, useState } from "react"

export function Footer() {
  const [isVisible, setIsVisible] = useState(false)
  const footerRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (footerRef.current) {
      observer.observe(footerRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <footer ref={footerRef} className="border-t border-border bg-card relative overflow-hidden">
      {/* Footer links */}
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-8 lg:flex-row">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-serif font-semibold text-foreground tracking-tight">vespr.</span>
            </div>
            <nav className="flex flex-wrap items-center justify-center gap-8">
              {[
                { href: "#problem", label: "The Problem" },
                { href: "#solution", label: "How It Works" },
                { href: "#capabilities", label: "Capabilities" },
                { href: "#industries", label: "Industries" },
                { href: "#pricing", label: "Pricing" },
                { href: "#faq", label: "FAQ" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-muted-foreground transition-all hover:text-foreground hover:-translate-y-0.5"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
          <div className="mt-10 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              {new Date().getFullYear()} vespr. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground">
              Built for businesses that take their data seriously.
            </p>
          </div>
        </div>
    </footer>
  )
}
