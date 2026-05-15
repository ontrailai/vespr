"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { ArrowRight } from "lucide-react"

export default function SignupPage() {
  const [phone, setPhone] = useState("")
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [smsConsent, setSmsConsent] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!smsConsent) {
      alert("Please agree to receive SMS messages to continue.")
      return
    }
    setIsSubmitting(true)
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000))
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <main className="min-h-screen bg-background flex items-center justify-center px-4">
        <div className="max-w-md w-full text-center">
          <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h1 className="font-serif text-3xl font-medium text-foreground mb-4">
            You&apos;re all set!
          </h1>
          <p className="text-muted-foreground mb-8">
            Thank you for signing up. We&apos;ll be in touch shortly.
          </p>
          <Button asChild className="rounded-full px-8">
            <Link href="/">
              Back to Home
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-background flex items-center justify-center px-4 py-16">
      <div className="max-w-md w-full">
        {/* Logo */}
        <Link href="/" className="flex items-center justify-center gap-2 mb-8">
          <span className="text-2xl font-serif font-semibold text-foreground tracking-tight">
            vespr<span className="text-accent">.</span>
          </span>
        </Link>

        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="font-serif text-3xl font-medium text-foreground mb-3">
            Get Started with Vespr
          </h1>
          <p className="text-muted-foreground">
            Sign up to receive updates and get started with your AI systems.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <div>
              <Label htmlFor="name" className="text-sm font-medium text-foreground">
                Full Name
              </Label>
              <Input
                id="name"
                type="text"
                placeholder="John Smith"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="mt-1.5"
              />
            </div>

            <div>
              <Label htmlFor="email" className="text-sm font-medium text-foreground">
                Email Address
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="john@company.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="mt-1.5"
              />
            </div>

            <div>
              <Label htmlFor="phone" className="text-sm font-medium text-foreground">
                Phone Number
              </Label>
              <Input
                id="phone"
                type="tel"
                placeholder="+1 (555) 123-4567"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
                className="mt-1.5"
              />
            </div>
          </div>

          {/* SMS Consent Checkbox - MUST be unchecked by default */}
          <div className="flex items-start space-x-3">
            <Checkbox
              id="sms-consent"
              checked={smsConsent}
              onCheckedChange={(checked) => setSmsConsent(checked as boolean)}
              className="mt-1"
            />
            <Label htmlFor="sms-consent" className="text-sm text-muted-foreground leading-relaxed cursor-pointer">
              I agree to receive SMS messages from Vespr related to account notifications, verification codes, onboarding updates, and service-related communications. Message frequency may vary. Msg &amp; data rates may apply. Reply STOP to opt out and HELP for help. Consent is not a condition of purchase.
            </Label>
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            disabled={isSubmitting || !smsConsent}
            className="w-full rounded-full h-12 text-base"
          >
            {isSubmitting ? "Submitting..." : "Sign Up"}
            {!isSubmitting && <ArrowRight className="ml-2 h-4 w-4" />}
          </Button>

          {/* Privacy Policy and Terms Links - MUST be directly below form */}
          <p className="text-center text-sm text-muted-foreground">
            By continuing, you agree to our{" "}
            <Link href="/privacy" className="text-accent hover:underline">
              Privacy Policy
            </Link>{" "}
            and{" "}
            <Link href="/terms" className="text-accent hover:underline">
              Terms of Service
            </Link>
            .
          </p>
        </form>

        {/* Back to home */}
        <div className="mt-8 text-center">
          <Link href="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Back to home
          </Link>
        </div>
      </div>
    </main>
  )
}
