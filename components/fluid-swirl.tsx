"use client"

import { useEffect, useRef } from "react"

export function FluidSwirl() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Make it full-size
    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener("resize", resize)

    let time = 0
    let animationId: number

    // Noise function for organic movement
    const noise = (x: number, y: number, t: number) => {
      return (
        Math.sin(x * 0.01 + t) * Math.cos(y * 0.01 + t * 0.7) +
        Math.sin(x * 0.02 - t * 0.5) * Math.cos(y * 0.015 + t * 0.3) +
        Math.sin((x + y) * 0.008 + t * 0.2)
      ) / 3
    }

    const animate = () => {
      time += 0.008
      const w = canvas.width
      const h = canvas.height
      
      // Clear with slight trail for smoother look
      ctx.fillStyle = "rgba(247, 245, 240, 0.15)"
      ctx.fillRect(0, 0, w, h)

      const centerX = w * 0.55
      const centerY = h * 0.45

      // Draw multiple fluid ribbons
      for (let ribbon = 0; ribbon < 8; ribbon++) {
        ctx.beginPath()
        
        const ribbonPhase = (ribbon * Math.PI * 2) / 8
        const ribbonOffset = ribbon * 15
        
        // Create flowing ribbon path
        const points: { x: number; y: number }[] = []
        
        for (let i = 0; i <= 200; i++) {
          const t = i / 200
          const angle = t * Math.PI * 4 + ribbonPhase + time * 0.5
          
          // Spiral that expands and contracts
          const baseRadius = 80 + t * 280 + ribbonOffset
          const wobble = noise(i * 10, ribbon * 50, time) * 60
          const radius = baseRadius + wobble
          
          // Add vertical displacement for 3D effect
          const yOffset = Math.sin(angle * 2 + time) * 40 * t
          
          const x = centerX + Math.cos(angle) * radius * (0.6 + t * 0.4)
          const y = centerY + Math.sin(angle) * radius * 0.5 + yOffset
          
          points.push({ x, y })
        }

        // Draw as thick ribbon with gradient
        if (points.length > 1) {
          ctx.beginPath()
          ctx.moveTo(points[0].x, points[0].y)
          
          for (let i = 1; i < points.length - 2; i++) {
            const xc = (points[i].x + points[i + 1].x) / 2
            const yc = (points[i].y + points[i + 1].y) / 2
            ctx.quadraticCurveTo(points[i].x, points[i].y, xc, yc)
          }
          
          // Create iridescent color based on position and time
          const hue1 = (ribbon * 30 + time * 20) % 360
          const gradient = ctx.createLinearGradient(
            centerX - 300, centerY - 200,
            centerX + 300, centerY + 200
          )
          
          // Terracotta to teal color palette
          const colors = [
            `rgba(217, 119, 86, ${0.4 - ribbon * 0.03})`,  // Terracotta
            `rgba(224, 139, 108, ${0.35 - ribbon * 0.03})`, // Light terracotta
            `rgba(74, 155, 148, ${0.3 - ribbon * 0.03})`,  // Teal
            `rgba(93, 181, 173, ${0.25 - ribbon * 0.03})`, // Light teal
          ]
          
          gradient.addColorStop(0, colors[ribbon % 4])
          gradient.addColorStop(0.5, colors[(ribbon + 2) % 4])
          gradient.addColorStop(1, colors[(ribbon + 1) % 4])
          
          ctx.strokeStyle = gradient
          ctx.lineWidth = 25 - ribbon * 2
          ctx.lineCap = "round"
          ctx.lineJoin = "round"
          ctx.stroke()
        }
      }

      // Add glowing orbs along the swirl
      for (let i = 0; i < 30; i++) {
        const orbTime = time + i * 0.3
        const orbAngle = orbTime * 0.8 + (i * Math.PI * 2) / 30
        const orbRadius = 150 + Math.sin(orbTime * 2) * 100 + i * 8
        
        const x = centerX + Math.cos(orbAngle) * orbRadius * 0.7
        const y = centerY + Math.sin(orbAngle) * orbRadius * 0.4 + Math.sin(orbTime) * 30
        
        const size = 4 + Math.sin(orbTime * 3) * 2
        
        const orbGradient = ctx.createRadialGradient(x, y, 0, x, y, size * 3)
        const isWarm = i % 2 === 0
        
        if (isWarm) {
          orbGradient.addColorStop(0, "rgba(217, 119, 86, 0.8)")
          orbGradient.addColorStop(0.5, "rgba(217, 119, 86, 0.3)")
          orbGradient.addColorStop(1, "transparent")
        } else {
          orbGradient.addColorStop(0, "rgba(74, 155, 148, 0.8)")
          orbGradient.addColorStop(0.5, "rgba(74, 155, 148, 0.3)")
          orbGradient.addColorStop(1, "transparent")
        }
        
        ctx.beginPath()
        ctx.arc(x, y, size * 3, 0, Math.PI * 2)
        ctx.fillStyle = orbGradient
        ctx.fill()
      }

      // Add central glow
      const centralGlow = ctx.createRadialGradient(
        centerX, centerY, 0,
        centerX, centerY, 350
      )
      centralGlow.addColorStop(0, "rgba(217, 119, 86, 0.15)")
      centralGlow.addColorStop(0.3, "rgba(74, 155, 148, 0.08)")
      centralGlow.addColorStop(0.6, "rgba(217, 119, 86, 0.04)")
      centralGlow.addColorStop(1, "transparent")
      
      ctx.fillStyle = centralGlow
      ctx.fillRect(0, 0, w, h)

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
        filter: "blur(1px)",
        opacity: 0.9
      }}
    />
  )
}
