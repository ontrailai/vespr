import Link from "next/link"

// Footer component
export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-8 lg:flex-row">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-serif font-semibold text-foreground tracking-tight">
              vespr<span className="text-accent">.</span>
            </span>
          </div>
          <nav className="flex flex-wrap items-center justify-center gap-6 text-sm">
            <Link href="#problem" className="text-muted-foreground hover:text-foreground transition-colors">
              The Problem
            </Link>
            <Link href="#solution" className="text-muted-foreground hover:text-foreground transition-colors">
              How It Works
            </Link>
            <Link href="#capabilities" className="text-muted-foreground hover:text-foreground transition-colors">
              Capabilities
            </Link>
            <Link href="#pricing" className="text-muted-foreground hover:text-foreground transition-colors">
              Pricing
            </Link>
            <Link href="#faq" className="text-muted-foreground hover:text-foreground transition-colors">
              FAQ
            </Link>
          </nav>
        </div>
        <div className="mt-10 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            {new Date().getFullYear()} vespr<span className="text-accent">.</span> All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            AI systems that run your business.
          </p>
        </div>
      </div>
    </footer>
  )
}
