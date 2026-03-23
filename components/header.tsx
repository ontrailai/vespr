"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, ArrowRight } from "lucide-react"
import { useState, useEffect } from "react"

const navLinks = [
  { href: "#problem", label: "The Problem" },
  { href: "#solution", label: "How It Works" },
  { href: "#capabilities", label: "Capabilities" },
  { href: "#industries", label: "Industries" },
  { href: "#pricing", label: "Pricing" },
  { href: "#faq", label: "FAQ" },
]

export function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? "bg-background/80 backdrop-blur-xl border-b border-border/50 shadow-sm" 
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-18 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8 py-4">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg group-hover:shadow-accent/25">
            <span className="text-base font-bold text-accent-foreground">S</span>
          </div>
          <span className="text-xl font-semibold text-foreground tracking-tight">Scout</span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-4 py-2 text-sm font-medium text-muted-foreground transition-all duration-300 hover:text-foreground rounded-lg hover:bg-secondary/50"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Button 
            size="sm" 
            asChild 
            className="gap-2 bg-accent hover:bg-accent/90 text-accent-foreground rounded-full px-6 h-10 font-medium shadow-lg shadow-accent/20 transition-all hover:shadow-xl hover:shadow-accent/30 hover:-translate-y-0.5"
          >
            <Link href="#pricing">
              Get Started
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </Button>
        </div>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild className="lg:hidden">
            <Button variant="ghost" size="icon" className="text-foreground h-10 w-10">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] bg-background border-border">
            <div className="flex items-center gap-3 mb-8 mt-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent">
                <span className="text-base font-bold text-accent-foreground">S</span>
              </div>
              <span className="text-xl font-semibold text-foreground">Scout</span>
            </div>
            <nav className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-lg font-medium text-foreground transition-colors hover:text-accent py-3 px-4 rounded-xl hover:bg-secondary/50"
                >
                  {link.label}
                </Link>
              ))}
              <div className="mt-6 flex flex-col gap-3 pt-6 border-t border-border">
                <Button asChild className="justify-center bg-accent hover:bg-accent/90 rounded-full h-12">
                  <Link href="#pricing" onClick={() => setOpen(false)}>
                    Get Started
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Link>
                </Button>
              </div>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
