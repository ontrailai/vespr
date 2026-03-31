"use client"

import { useEffect, useRef } from "react"

export function ElectroOrb() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationId: number
    let time = 0

    const resize = () => {
      const dpr = window.devicePixelRatio || 1
      const rect = canvas.getBoundingClientRect()
      canvas.width = rect.width * dpr
      canvas.height = rect.height * dpr
      ctx.scale(dpr, dpr)
    }

    resize()
    window.addEventListener("resize", resize)

    // Lightning bolt generator
    const createLightning = (
      startX: number,
      startY: number,
      endX: number,
      endY: number,
      displacement: number
    ): Array<{ x: number; y: number }> => {
      const points: Array<{ x: number; y: number }> = []
      points.push({ x: startX, y: startY })

      const generateBolt = (
        x1: number,
        y1: number,
        x2: number,
        y2: number,
        disp: number
      ) => {
        if (disp < 4) {
          points.push({ x: x2, y: y2 })
          return
        }

        const midX = (x1 + x2) / 2
        const midY = (y1 + y2) / 2
        const offsetX = (Math.random() - 0.5) * disp
        const offsetY = (Math.random() - 0.5) * disp

        const newX = midX + offsetX
        const newY = midY + offsetY

        generateBolt(x1, y1, newX, newY, disp / 2)
        generateBolt(newX, newY, x2, y2, disp / 2)
      }

      generateBolt(startX, startY, endX, endY, displacement)
      return points
    }

    // Electric arcs storage
    let arcs: Array<{
      points: Array<{ x: number; y: number }>
      life: number
      maxLife: number
      color: string
    }> = []

    // Particle system for sparks
    const sparks: Array<{
      x: number
      y: number
      vx: number
      vy: number
      life: number
      color: string
    }> = []

    const animate = () => {
      const rect = canvas.getBoundingClientRect()
      const width = rect.width
      const height = rect.height
      const centerX = width / 2
      const centerY = height / 2
      const orbRadius = Math.min(width, height) * 0.28

      time += 0.016

      // Clear with slight trail
      ctx.fillStyle = "rgba(252, 250, 245, 0.15)"
      ctx.fillRect(0, 0, width, height)

      // Outer glow rings
      for (let i = 3; i >= 0; i--) {
        const ringRadius = orbRadius + 30 + i * 25
        const alpha = 0.03 - i * 0.006
        const gradient = ctx.createRadialGradient(
          centerX,
          centerY,
          ringRadius - 20,
          centerX,
          centerY,
          ringRadius + 20
        )
        gradient.addColorStop(0, `rgba(217, 119, 86, ${alpha})`)
        gradient.addColorStop(0.5, `rgba(74, 155, 148, ${alpha * 0.7})`)
        gradient.addColorStop(1, "transparent")

        ctx.beginPath()
        ctx.arc(centerX, centerY, ringRadius, 0, Math.PI * 2)
        ctx.fillStyle = gradient
        ctx.fill()
      }

      // Main orb - glass-like sphere
      const orbGradient = ctx.createRadialGradient(
        centerX - orbRadius * 0.3,
        centerY - orbRadius * 0.3,
        0,
        centerX,
        centerY,
        orbRadius
      )
      orbGradient.addColorStop(0, "rgba(255, 255, 255, 0.12)")
      orbGradient.addColorStop(0.4, "rgba(217, 119, 86, 0.08)")
      orbGradient.addColorStop(0.7, "rgba(74, 155, 148, 0.1)")
      orbGradient.addColorStop(1, "rgba(45, 42, 38, 0.15)")

      ctx.beginPath()
      ctx.arc(centerX, centerY, orbRadius, 0, Math.PI * 2)
      ctx.fillStyle = orbGradient
      ctx.fill()

      // Inner energy core
      const coreRadius = orbRadius * 0.35
      const corePulse = 1 + Math.sin(time * 3) * 0.15
      const coreGradient = ctx.createRadialGradient(
        centerX,
        centerY,
        0,
        centerX,
        centerY,
        coreRadius * corePulse
      )
      coreGradient.addColorStop(0, "rgba(255, 255, 255, 0.9)")
      coreGradient.addColorStop(0.2, "rgba(217, 119, 86, 0.6)")
      coreGradient.addColorStop(0.5, "rgba(74, 155, 148, 0.4)")
      coreGradient.addColorStop(1, "transparent")

      ctx.beginPath()
      ctx.arc(centerX, centerY, coreRadius * corePulse, 0, Math.PI * 2)
      ctx.fillStyle = coreGradient
      ctx.fill()

      // Generate new lightning arcs periodically
      if (Math.random() < 0.08) {
        const angle = Math.random() * Math.PI * 2
        const innerRadius = coreRadius * 0.5
        const outerRadius = orbRadius * 0.9

        const startX = centerX + Math.cos(angle) * innerRadius
        const startY = centerY + Math.sin(angle) * innerRadius
        const endX = centerX + Math.cos(angle + (Math.random() - 0.5) * 0.8) * outerRadius
        const endY = centerY + Math.sin(angle + (Math.random() - 0.5) * 0.8) * outerRadius

        const isWarm = Math.random() > 0.5
        arcs.push({
          points: createLightning(startX, startY, endX, endY, 50),
          life: 1,
          maxLife: 1,
          color: isWarm ? "217, 119, 86" : "74, 155, 148",
        })

        // Add sparks at the end point
        for (let i = 0; i < 5; i++) {
          sparks.push({
            x: endX,
            y: endY,
            vx: (Math.random() - 0.5) * 4,
            vy: (Math.random() - 0.5) * 4,
            life: 1,
            color: isWarm ? "217, 119, 86" : "74, 155, 148",
          })
        }
      }

      // Draw and update arcs
      arcs = arcs.filter((arc) => {
        arc.life -= 0.05

        if (arc.life <= 0) return false

        const alpha = arc.life * 0.8
        ctx.beginPath()
        ctx.moveTo(arc.points[0].x, arc.points[0].y)

        for (let i = 1; i < arc.points.length; i++) {
          ctx.lineTo(arc.points[i].x, arc.points[i].y)
        }

        // Glow effect
        ctx.strokeStyle = `rgba(${arc.color}, ${alpha * 0.3})`
        ctx.lineWidth = 6
        ctx.stroke()

        ctx.strokeStyle = `rgba(${arc.color}, ${alpha * 0.6})`
        ctx.lineWidth = 3
        ctx.stroke()

        ctx.strokeStyle = `rgba(255, 255, 255, ${alpha})`
        ctx.lineWidth = 1.5
        ctx.stroke()

        return true
      })

      // Orbiting energy particles
      const numOrbiters = 12
      for (let i = 0; i < numOrbiters; i++) {
        const orbitAngle = (i / numOrbiters) * Math.PI * 2 + time * (0.5 + i * 0.1)
        const orbitRadius = orbRadius * (0.5 + Math.sin(time + i) * 0.2)
        const orbiterX = centerX + Math.cos(orbitAngle) * orbitRadius
        const orbiterY = centerY + Math.sin(orbitAngle) * orbitRadius
        const orbiterSize = 3 + Math.sin(time * 2 + i) * 1.5

        const isWarm = i % 2 === 0
        const orbiterGradient = ctx.createRadialGradient(
          orbiterX,
          orbiterY,
          0,
          orbiterX,
          orbiterY,
          orbiterSize * 3
        )

        if (isWarm) {
          orbiterGradient.addColorStop(0, "rgba(255, 255, 255, 0.9)")
          orbiterGradient.addColorStop(0.3, "rgba(217, 119, 86, 0.6)")
          orbiterGradient.addColorStop(1, "transparent")
        } else {
          orbiterGradient.addColorStop(0, "rgba(255, 255, 255, 0.9)")
          orbiterGradient.addColorStop(0.3, "rgba(74, 155, 148, 0.6)")
          orbiterGradient.addColorStop(1, "transparent")
        }

        ctx.beginPath()
        ctx.arc(orbiterX, orbiterY, orbiterSize * 3, 0, Math.PI * 2)
        ctx.fillStyle = orbiterGradient
        ctx.fill()
      }

      // Update and draw sparks
      for (let i = sparks.length - 1; i >= 0; i--) {
        const spark = sparks[i]
        spark.x += spark.vx
        spark.y += spark.vy
        spark.vx *= 0.96
        spark.vy *= 0.96
        spark.life -= 0.03

        if (spark.life <= 0) {
          sparks.splice(i, 1)
          continue
        }

        const sparkGradient = ctx.createRadialGradient(
          spark.x,
          spark.y,
          0,
          spark.x,
          spark.y,
          4
        )
        sparkGradient.addColorStop(0, `rgba(255, 255, 255, ${spark.life})`)
        sparkGradient.addColorStop(0.5, `rgba(${spark.color}, ${spark.life * 0.6})`)
        sparkGradient.addColorStop(1, "transparent")

        ctx.beginPath()
        ctx.arc(spark.x, spark.y, 4, 0, Math.PI * 2)
        ctx.fillStyle = sparkGradient
        ctx.fill()
      }

      // Surface crackle effect
      if (Math.random() < 0.15) {
        const crackleAngle = Math.random() * Math.PI * 2
        const crackleRadius = orbRadius * (0.7 + Math.random() * 0.25)
        const crackleX = centerX + Math.cos(crackleAngle) * crackleRadius
        const crackleY = centerY + Math.sin(crackleAngle) * crackleRadius

        const crackleGradient = ctx.createRadialGradient(
          crackleX,
          crackleY,
          0,
          crackleX,
          crackleY,
          8
        )
        crackleGradient.addColorStop(0, "rgba(255, 255, 255, 0.8)")
        crackleGradient.addColorStop(0.5, "rgba(217, 119, 86, 0.4)")
        crackleGradient.addColorStop(1, "transparent")

        ctx.beginPath()
        ctx.arc(crackleX, crackleY, 8, 0, Math.PI * 2)
        ctx.fillStyle = crackleGradient
        ctx.fill()
      }

      // Orb edge highlight
      ctx.beginPath()
      ctx.arc(centerX, centerY, orbRadius, 0, Math.PI * 2)
      ctx.strokeStyle = "rgba(255, 255, 255, 0.1)"
      ctx.lineWidth = 2
      ctx.stroke()

      animationId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resize)
      cancelAnimationFrame(animationId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ opacity: 0.85 }}
    />
  )
}
