import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-8 lg:flex-row">
          <span className="text-2xl font-serif font-semibold text-foreground tracking-tight">
            vespr.
          </span>
          <nav className="flex flex-wrap items-center justify-center gap-8">
            <Link href="#problem" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              The Problem
            </Link>
            <Link href="#solution" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              How It Works
            </Link>
            <Link href="#capabilities" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Capabilities
            </Link>
            <Link href="#pricing" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Pricing
            </Link>
            <Link href="#faq" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              FAQ
            </Link>
          </nav>
        </div>
        <div className="mt-10 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            {new Date().getFullYear()} vespr. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            AI systems that run your business.
          </p>
        </div>
      </div>
    </footer>
  )
}
