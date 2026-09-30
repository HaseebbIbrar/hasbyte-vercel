'use client'

import { useEffect, useRef } from 'react'

type Node = { x: number; y: number; vx: number; vy: number; r: number; hot: boolean }

export function SignalField({ density = 70 }: { density?: number }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const pointer = { x: -9999, y: -9999 }
    let nodes: Node[] = []
    let width = 0
    let height = 0
    let frame = 0
    let visible = true

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      const rect = canvas.getBoundingClientRect()
      width = rect.width
      height = rect.height
      canvas.width = Math.round(width * dpr)
      canvas.height = Math.round(height * dpr)
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      const count = Math.round((density * width) / 1440) + 18
      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height * 0.75,
        vx: (Math.random() - 0.5) * 0.18,
        vy: (Math.random() - 0.5) * 0.12,
        r: Math.random() * 1.4 + 0.4,
        hot: Math.random() < 0.14,
      }))
      if (reduced) draw()
    }

    const draw = () => {
      ctx.clearRect(0, 0, width, height)
      const linkDist = Math.min(150, width / 8)
      for (let i = 0; i < nodes.length; i++) {
        const a = nodes[i]
        for (let j = i + 1; j < nodes.length; j++) {
          const b = nodes[j]
          const dx = a.x - b.x
          const dy = a.y - b.y
          const d = Math.hypot(dx, dy)
          if (d < linkDist) {
            const alpha = (1 - d / linkDist) * 0.22
            ctx.strokeStyle = a.hot && b.hot ? `rgba(224,35,28,${alpha * 2.4})` : `rgba(239,236,230,${alpha})`
            ctx.lineWidth = 0.6
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.stroke()
          }
        }
      }
      for (const n of nodes) {
        const near = Math.hypot(n.x - pointer.x, n.y - pointer.y) < 120
        ctx.fillStyle = n.hot || near ? 'rgba(224,35,28,0.95)' : 'rgba(239,236,230,0.7)'
        ctx.beginPath()
        ctx.arc(n.x, n.y, near ? n.r + 1.2 : n.r, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    const tick = () => {
      for (const n of nodes) {
        const dx = n.x - pointer.x
        const dy = n.y - pointer.y
        const d = Math.hypot(dx, dy)
        if (d < 120 && d > 0) {
          n.vx += (dx / d) * 0.02
          n.vy += (dy / d) * 0.02
        }
        n.vx *= 0.995
        n.vy *= 0.995
        n.x += n.vx
        n.y += n.vy
        if (n.x < 0 || n.x > width) n.vx *= -1
        if (n.y < 0 || n.y > height) n.vy *= -1
      }
      draw()
      if (visible) frame = requestAnimationFrame(tick)
    }

    const onPointer = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect()
      pointer.x = e.clientX - rect.left
      pointer.y = e.clientY - rect.top
    }
    const onLeave = () => {
      pointer.x = -9999
      pointer.y = -9999
    }

    const observer = new IntersectionObserver(([entry]) => {
      const next = entry.isIntersecting && document.visibilityState === 'visible'
      if (next && !visible && !reduced) frame = requestAnimationFrame(tick)
      visible = next
    })
    const onVisibility = () => {
      const next = document.visibilityState === 'visible'
      if (next && !visible && !reduced) frame = requestAnimationFrame(tick)
      visible = next
    }

    resize()
    const ro = new ResizeObserver(resize)
    ro.observe(canvas)
    observer.observe(canvas)
    document.addEventListener('visibilitychange', onVisibility)
    window.addEventListener('pointermove', onPointer, { passive: true })
    document.addEventListener('pointerleave', onLeave)
    if (!reduced) frame = requestAnimationFrame(tick)

    return () => {
      cancelAnimationFrame(frame)
      ro.disconnect()
      observer.disconnect()
      document.removeEventListener('visibilitychange', onVisibility)
      window.removeEventListener('pointermove', onPointer)
      document.removeEventListener('pointerleave', onLeave)
    }
  }, [density])

  return <canvas ref={canvasRef} aria-hidden="true" className="pointer-events-none absolute inset-0 h-full w-full" />
}
