"use client"

import { useEffect, useRef } from "react"

export function DynamicOrb() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas size
    const size = 400
    canvas.width = size
    canvas.height = size

    let animationId: number
    let time = 0

    // Particle system for internal movements
    const particles: Array<{
      x: number
      y: number
      vx: number
      vy: number
      radius: number
      color: string
      phase: number
    }> = []

    // Create particles
    const colors = ["#D97756", "#E08B6C", "#4A9B94", "#5DB5AD", "#F7F5F0"]
    for (let i = 0; i < 40; i++) {
      const angle = Math.random() * Math.PI * 2
      const dist = Math.random() * 120
      particles.push({
        x: size / 2 + Math.cos(angle) * dist,
        y: size / 2 + Math.sin(angle) * dist,
        vx: (Math.random() - 0.5) * 0.8,
        vy: (Math.random() - 0.5) * 0.8,
        radius: Math.random() * 6 + 2,
        color: colors[Math.floor(Math.random() * colors.length)],
        phase: Math.random() * Math.PI * 2,
      })
    }

    const animate = () => {
      time += 0.008
      ctx.clearRect(0, 0, size, size)

      // Draw the wavy circular boundary with morphing shape
      ctx.save()
      ctx.beginPath()
      
      const centerX = size / 2
      const centerY = size / 2
      const baseRadius = 150

      // Create wavy, morphing boundary
      for (let angle = 0; angle <= Math.PI * 2; angle += 0.02) {
        const wave1 = Math.sin(angle * 3 + time * 2) * 15
        const wave2 = Math.sin(angle * 5 - time * 1.5) * 10
        const wave3 = Math.sin(angle * 7 + time * 0.8) * 5
        const wave4 = Math.cos(angle * 2 + time * 1.2) * 8
        
        const r = baseRadius + wave1 + wave2 + wave3 + wave4
        const x = centerX + Math.cos(angle) * r
        const y = centerY + Math.sin(angle) * r

        if (angle === 0) {
          ctx.moveTo(x, y)
        } else {
          ctx.lineTo(x, y)
        }
      }
      ctx.closePath()

      // Create gradient fill
      const gradient = ctx.createRadialGradient(
        centerX - 30,
        centerY - 30,
        0,
        centerX,
        centerY,
        baseRadius + 40
      )
      gradient.addColorStop(0, "rgba(217, 119, 86, 0.15)")
      gradient.addColorStop(0.4, "rgba(74, 155, 148, 0.1)")
      gradient.addColorStop(0.7, "rgba(217, 119, 86, 0.08)")
      gradient.addColorStop(1, "rgba(247, 245, 240, 0.02)")
      
      ctx.fillStyle = gradient
      ctx.fill()

      // Add subtle border
      ctx.strokeStyle = "rgba(217, 119, 86, 0.3)"
      ctx.lineWidth = 2
      ctx.stroke()
      ctx.restore()

      // Create clipping path for particles
      ctx.save()
      ctx.beginPath()
      for (let angle = 0; angle <= Math.PI * 2; angle += 0.02) {
        const wave1 = Math.sin(angle * 3 + time * 2) * 15
        const wave2 = Math.sin(angle * 5 - time * 1.5) * 10
        const wave3 = Math.sin(angle * 7 + time * 0.8) * 5
        const wave4 = Math.cos(angle * 2 + time * 1.2) * 8
        const r = baseRadius + wave1 + wave2 + wave3 + wave4 - 5
        const x = centerX + Math.cos(angle) * r
        const y = centerY + Math.sin(angle) * r
        if (angle === 0) ctx.moveTo(x, y)
        else ctx.lineTo(x, y)
      }
      ctx.closePath()
      ctx.clip()

      // Draw flowing lines inside
      for (let i = 0; i < 6; i++) {
        ctx.beginPath()
        ctx.strokeStyle = `rgba(217, 119, 86, ${0.1 + i * 0.02})`
        ctx.lineWidth = 1.5
        
        const startAngle = (i * Math.PI) / 3 + time * 0.3
        for (let t = 0; t < 100; t++) {
          const progress = t / 100
          const flowX = centerX + Math.cos(startAngle + progress * Math.PI * 2) * (50 + progress * 80) 
            + Math.sin(time * 2 + progress * 5) * 20
          const flowY = centerY + Math.sin(startAngle + progress * Math.PI * 2) * (50 + progress * 80)
            + Math.cos(time * 1.5 + progress * 4) * 20
          
          if (t === 0) ctx.moveTo(flowX, flowY)
          else ctx.lineTo(flowX, flowY)
        }
        ctx.stroke()
      }

      // Update and draw particles
      particles.forEach((p, i) => {
        // Orbital motion towards center with some chaos
        const dx = centerX - p.x
        const dy = centerY - p.y
        const dist = Math.sqrt(dx * dx + dy * dy)
        
        // Add circular flow
        const tangentX = -dy / dist
        const tangentY = dx / dist
        
        p.vx += tangentX * 0.03 + (Math.random() - 0.5) * 0.1
        p.vy += tangentY * 0.03 + (Math.random() - 0.5) * 0.1
        
        // Gentle pull to center if too far
        if (dist > 120) {
          p.vx += dx * 0.001
          p.vy += dy * 0.001
        }
        
        // Gentle push from center if too close
        if (dist < 30) {
          p.vx -= dx * 0.002
          p.vy -= dy * 0.002
        }

        // Apply velocity with damping
        p.x += p.vx
        p.y += p.vy
        p.vx *= 0.98
        p.vy *= 0.98

        // Pulsing size
        const pulseRadius = p.radius * (1 + Math.sin(time * 3 + p.phase) * 0.3)

        // Draw particle with glow
        const particleGradient = ctx.createRadialGradient(
          p.x, p.y, 0,
          p.x, p.y, pulseRadius * 2
        )
        particleGradient.addColorStop(0, p.color)
        particleGradient.addColorStop(0.5, p.color + "80")
        particleGradient.addColorStop(1, "transparent")
        
        ctx.beginPath()
        ctx.arc(p.x, p.y, pulseRadius * 2, 0, Math.PI * 2)
        ctx.fillStyle = particleGradient
        ctx.fill()

        // Core of particle
        ctx.beginPath()
        ctx.arc(p.x, p.y, pulseRadius, 0, Math.PI * 2)
        ctx.fillStyle = p.color
        ctx.fill()

        // Draw connections between nearby particles
        particles.slice(i + 1).forEach(p2 => {
          const d = Math.sqrt((p.x - p2.x) ** 2 + (p.y - p2.y) ** 2)
          if (d < 50) {
            ctx.beginPath()
            ctx.moveTo(p.x, p.y)
            ctx.lineTo(p2.x, p2.y)
            ctx.strokeStyle = `rgba(217, 119, 86, ${0.15 * (1 - d / 50)})`
            ctx.lineWidth = 1
            ctx.stroke()
          }
        })
      })

      ctx.restore()

      // Add outer glow effect
      ctx.save()
      const outerGlow = ctx.createRadialGradient(
        centerX, centerY, baseRadius - 20,
        centerX, centerY, baseRadius + 60
      )
      outerGlow.addColorStop(0, "transparent")
      outerGlow.addColorStop(0.5, "rgba(217, 119, 86, 0.05)")
      outerGlow.addColorStop(1, "transparent")
      
      ctx.fillStyle = outerGlow
      ctx.fillRect(0, 0, size, size)
      ctx.restore()

      animationId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      cancelAnimationFrame(animationId)
    }
  }, [])

  return (
    <div className="relative w-[400px] h-[400px] animate-float" style={{ animationDuration: "8s" }}>
      <canvas
        ref={canvasRef}
        className="w-full h-full"
        style={{ filter: "blur(0.5px)" }}
      />
      {/* Additional ambient glow layer */}
      <div 
        className="absolute inset-0 rounded-full opacity-30 blur-2xl pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(217, 119, 86, 0.4) 0%, rgba(74, 155, 148, 0.2) 50%, transparent 70%)",
        }}
      />
    </div>
  )
}
