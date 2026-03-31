"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"
import Link from "next/link"
import { useEffect, useState, useRef } from "react"

function InteractiveBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const mouseRef = useRef({ x: -1000, y: -1000 })
  const trailRef = useRef<Array<{ x: number; y: number; age: number }>>([])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Grid settings
    const gridSpacing = 50
    const dotBaseSize = 1.5
    const mouseRadius = 150

    // Floating particles
    const particles: Array<{
      x: number
      y: number
      baseX: number
      baseY: number
      size: number
      speedX: number
      speedY: number
      color: string
    }> = []

    const colors = [
      "#D97756",  // Terracotta
      "#4A9B94",  // Teal
      "#8B7E66",  // Warm gray
    ]

    // Create floating particles
    for (let i = 0; i < 30; i++) {
      const x = Math.random() * canvas.width
      const y = Math.random() * canvas.height
      particles.push({
        x,
        y,
        baseX: x,
        baseY: y,
        size: Math.random() * 3 + 2,
        speedX: (Math.random() - 0.5) * 0.3,
        speedY: (Math.random() - 0.5) * 0.3,
        color: colors[Math.floor(Math.random() * colors.length)]
      })
    }

    // Mouse move handler
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      }
      // Add to trail
      trailRef.current.push({
        x: mouseRef.current.x,
        y: mouseRef.current.y,
        age: 0
      })
      // Limit trail length
      if (trailRef.current.length > 30) {
        trailRef.current.shift()
      }
    }

    const handleMouseLeave = () => {
      mouseRef.current = { x: -1000, y: -1000 }
    }

    canvas.addEventListener("mousemove", handleMouseMove)
    canvas.addEventListener("mouseleave", handleMouseLeave)

    let animationId: number

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      const mouse = mouseRef.current

      // Draw subtle grid pattern
      ctx.strokeStyle = "rgba(45, 42, 38, 0.04)"
      ctx.lineWidth = 1
      
      // Vertical lines
      for (let x = 0; x < canvas.width; x += gridSpacing) {
        ctx.beginPath()
        ctx.moveTo(x, 0)
        ctx.lineTo(x, canvas.height)
        ctx.stroke()
      }
      
      // Horizontal lines
      for (let y = 0; y < canvas.height; y += gridSpacing) {
        ctx.beginPath()
        ctx.moveTo(0, y)
        ctx.lineTo(canvas.width, y)
        ctx.stroke()
      }

      // Draw interactive grid dots
      for (let x = 0; x < canvas.width; x += gridSpacing) {
        for (let y = 0; y < canvas.height; y += gridSpacing) {
          const dx = mouse.x - x
          const dy = mouse.y - y
          const distance = Math.sqrt(dx * dx + dy * dy)
          
          let size = dotBaseSize
          let opacity = 0.15
          let color = "45, 42, 38"

          if (distance < mouseRadius) {
            const influence = 1 - distance / mouseRadius
            size = dotBaseSize + influence * 4
            opacity = 0.15 + influence * 0.5
            // Blend to accent color when close
            if (influence > 0.5) {
              color = "217, 119, 86" // Terracotta
            } else if (influence > 0.3) {
              color = "74, 155, 148" // Teal
            }
          }

          ctx.beginPath()
          ctx.arc(x, y, size, 0, Math.PI * 2)
          ctx.fillStyle = `rgba(${color}, ${opacity})`
          ctx.fill()
        }
      }

      // Draw mouse trail
      trailRef.current.forEach((point, index) => {
        point.age++
        const alpha = Math.max(0, 1 - point.age / 40)
        const size = Math.max(0, 4 * (1 - point.age / 40))
        
        if (alpha > 0 && size > 0) {
          ctx.beginPath()
          ctx.arc(point.x, point.y, size, 0, Math.PI * 2)
          const gradient = ctx.createRadialGradient(point.x, point.y, 0, point.x, point.y, size)
          gradient.addColorStop(0, `rgba(217, 119, 86, ${alpha * 0.6})`)
          gradient.addColorStop(1, `rgba(74, 155, 148, ${alpha * 0.2})`)
          ctx.fillStyle = gradient
          ctx.fill()
        }
      })

      // Remove old trail points
      trailRef.current = trailRef.current.filter(p => p.age < 40)

      // Draw and update floating particles
      particles.forEach((particle) => {
        // Drift movement
        particle.x += particle.speedX
        particle.y += particle.speedY

        // Wrap around
        if (particle.x < 0) particle.x = canvas.width
        if (particle.x > canvas.width) particle.x = 0
        if (particle.y < 0) particle.y = canvas.height
        if (particle.y > canvas.height) particle.y = 0

        // Mouse interaction - particles get pushed away slightly
        const dx = particle.x - mouse.x
        const dy = particle.y - mouse.y
        const distance = Math.sqrt(dx * dx + dy * dy)
        
        if (distance < mouseRadius && distance > 0) {
          const force = (mouseRadius - distance) / mouseRadius * 0.5
          particle.x += (dx / distance) * force
          particle.y += (dy / distance) * force
        }

        // Draw particle with glow
        const gradient = ctx.createRadialGradient(
          particle.x, particle.y, 0,
          particle.x, particle.y, particle.size * 2
        )
        gradient.addColorStop(0, particle.color + "40")
        gradient.addColorStop(0.5, particle.color + "20")
        gradient.addColorStop(1, "transparent")
        
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size * 2, 0, Math.PI * 2)
        ctx.fillStyle = gradient
        ctx.fill()

        // Core dot
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size * 0.5, 0, Math.PI * 2)
        ctx.fillStyle = particle.color + "60"
        ctx.fill()
      })

      // Draw connections between nearby particles
      particles.forEach((p1, i) => {
        particles.slice(i + 1).forEach(p2 => {
          const dx = p1.x - p2.x
          const dy = p1.y - p2.y
          const distance = Math.sqrt(dx * dx + dy * dy)
          
          if (distance < 120) {
            const opacity = (1 - distance / 120) * 0.08
            ctx.beginPath()
            ctx.moveTo(p1.x, p1.y)
            ctx.lineTo(p2.x, p2.y)
            ctx.strokeStyle = `rgba(139, 126, 102, ${opacity})`
            ctx.lineWidth = 1
            ctx.stroke()
          }
        })
      })

      animationId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      canvas.removeEventListener("mousemove", handleMouseMove)
      canvas.removeEventListener("mouseleave", handleMouseLeave)
      cancelAnimationFrame(animationId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 cursor-none"
      style={{ opacity: 0.9 }}
    />
  )
}

export function HeroSection() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section className="relative overflow-hidden pt-28 pb-20 lg:pt-40 lg:pb-32">
      {/* Interactive grid with floating particles */}
      <InteractiveBackground />

      {/* Soft gradient orbs in background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full opacity-15 blur-3xl animate-float"
          style={{ background: "radial-gradient(circle, #D97756 0%, transparent 70%)" }}
        />
        <div 
          className="absolute -bottom-40 -left-40 w-[400px] h-[400px] rounded-full opacity-10 blur-3xl animate-float"
          style={{ background: "radial-gradient(circle, #4A9B94 0%, transparent 70%)", animationDelay: "3s" }}
        />
      </div>

      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Badge */}
          <div 
            className={`inline-flex items-center gap-2 rounded-full border border-border/50 bg-card/80 backdrop-blur-sm px-4 py-2 text-sm text-muted-foreground mb-8 transition-all duration-500 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <Sparkles className="h-4 w-4 text-accent" />
            <span>For businesses ready to run on AI</span>
          </div>

          {/* Headline */}
          <h1 
            className={`font-serif text-5xl font-medium tracking-tight text-foreground sm:text-6xl lg:text-7xl leading-[1.1] transition-all duration-700 delay-100 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            We start where{" "}
            <span className="gradient-text">nobody else</span>
            <br />
            <span className="gradient-text">will.</span>
          </h1>

          {/* Description */}
          <p 
            className={`mt-8 text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed transition-all duration-700 delay-200 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Your data is your most valuable asset. We fix the mess, then implement
            AI systems that <strong className="text-foreground">connect, automate, and operate</strong> your business
            autonomously.
          </p>

          {/* CTAs */}
          <div 
            className={`mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-700 delay-300 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <Button asChild size="lg" className="rounded-full px-8 h-14 text-base">
              <Link href="#solution">
                See How It Works
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full px-8 h-14 text-base">
              <Link href="#contact">
                Book a Call
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
