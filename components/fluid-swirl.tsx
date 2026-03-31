"use client"

import { useEffect, useRef } from "react"

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  size: number
  color: string
  alpha: number
  pulse: number
}

interface GlowOrb {
  x: number
  y: number
  targetX: number
  targetY: number
  size: number
  color: string
  speed: number
}

export function FluidSwirl() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let w = window.innerWidth
    let h = window.innerHeight

    const resize = () => {
      w = window.innerWidth
      h = window.innerHeight
      canvas.width = w
      canvas.height = h
    }
    resize()
    window.addEventListener("resize", resize)

    // Create floating particles
    const particles: Particle[] = []
    const particleCount = 80
    
    const colors = [
      "217, 119, 86",   // Terracotta
      "74, 155, 148",   // Teal
      "224, 139, 108",  // Light terracotta
      "93, 181, 173",   // Light teal
    ]

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 2 + 1,
        color: colors[Math.floor(Math.random() * colors.length)],
        alpha: Math.random() * 0.4 + 0.1,
        pulse: Math.random() * Math.PI * 2
      })
    }

    // Create large glowing orbs that drift slowly
    const orbs: GlowOrb[] = [
      { x: w * 0.3, y: h * 0.3, targetX: w * 0.3, targetY: h * 0.3, size: 400, color: "217, 119, 86", speed: 0.0008 },
      { x: w * 0.7, y: h * 0.6, targetX: w * 0.7, targetY: h * 0.6, size: 350, color: "74, 155, 148", speed: 0.001 },
      { x: w * 0.5, y: h * 0.2, targetX: w * 0.5, targetY: h * 0.2, size: 300, color: "224, 139, 108", speed: 0.0006 },
      { x: w * 0.2, y: h * 0.7, targetX: w * 0.2, targetY: h * 0.7, size: 280, color: "93, 181, 173", speed: 0.0012 },
    ]

    let time = 0
    let animationId: number

    const animate = () => {
      time += 1
      
      // Clear canvas
      ctx.fillStyle = "#F7F5F0"
      ctx.fillRect(0, 0, w, h)

      // Update and draw large orbs with mesh gradient effect
      orbs.forEach((orb, i) => {
        // Slow drifting movement
        orb.targetX = (w * (0.2 + (i * 0.2))) + Math.sin(time * orb.speed + i) * 100
        orb.targetY = (h * (0.3 + (i * 0.15))) + Math.cos(time * orb.speed * 0.7 + i * 2) * 80
        
        orb.x += (orb.targetX - orb.x) * 0.02
        orb.y += (orb.targetY - orb.y) * 0.02

        // Draw soft gradient orb
        const gradient = ctx.createRadialGradient(
          orb.x, orb.y, 0,
          orb.x, orb.y, orb.size
        )
        gradient.addColorStop(0, `rgba(${orb.color}, 0.12)`)
        gradient.addColorStop(0.4, `rgba(${orb.color}, 0.06)`)
        gradient.addColorStop(0.7, `rgba(${orb.color}, 0.02)`)
        gradient.addColorStop(1, "transparent")
        
        ctx.fillStyle = gradient
        ctx.fillRect(0, 0, w, h)
      })

      // Draw connecting lines between nearby particles
      ctx.strokeStyle = "rgba(45, 42, 38, 0.03)"
      ctx.lineWidth = 1
      
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          
          if (dist < 120) {
            const alpha = (1 - dist / 120) * 0.08
            ctx.strokeStyle = `rgba(45, 42, 38, ${alpha})`
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.stroke()
          }
        }
      }

      // Update and draw particles
      particles.forEach(p => {
        // Update position
        p.x += p.vx
        p.y += p.vy
        p.pulse += 0.02

        // Wrap around edges
        if (p.x < 0) p.x = w
        if (p.x > w) p.x = 0
        if (p.y < 0) p.y = h
        if (p.y > h) p.y = 0

        // Pulsing alpha
        const pulsingAlpha = p.alpha * (0.7 + Math.sin(p.pulse) * 0.3)

        // Draw particle with glow
        const gradient = ctx.createRadialGradient(
          p.x, p.y, 0,
          p.x, p.y, p.size * 4
        )
        gradient.addColorStop(0, `rgba(${p.color}, ${pulsingAlpha})`)
        gradient.addColorStop(0.5, `rgba(${p.color}, ${pulsingAlpha * 0.3})`)
        gradient.addColorStop(1, "transparent")
        
        ctx.fillStyle = gradient
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size * 4, 0, Math.PI * 2)
        ctx.fill()

        // Draw core
        ctx.fillStyle = `rgba(${p.color}, ${pulsingAlpha * 1.5})`
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fill()
      })

      // Add subtle noise texture overlay
      if (time % 3 === 0) {
        for (let i = 0; i < 50; i++) {
          const x = Math.random() * w
          const y = Math.random() * h
          ctx.fillStyle = `rgba(45, 42, 38, ${Math.random() * 0.015})`
          ctx.fillRect(x, y, 1, 1)
        }
      }

      animationId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener("resize", resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ 
        opacity: 0.85
      }}
    />
  )
}
